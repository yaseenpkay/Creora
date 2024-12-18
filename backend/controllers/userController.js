import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import razorpay from "razorpay";
import transactionModel from "../models/transactionModel.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing required details" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ success: true, token, user: { name: user.name } });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User Not Found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      res.json({ success: true, token, user: { name: user.name } });
    } else {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const verifyToken = async (req, res) => {
  try {
    const { token } = req.body;

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user
    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // Return user info
    res.json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
        creditBalance: user.creditBalance,
      },
    });
  } catch (error) {
    res.json({ success: false, message: "Invalid token" });
  }
};

const userCredits = async (req, res) => {
  try {
    const { userID } = req.body;

    const user = await userModel.findById(userID);
    res.json({
      success: true,
      credits: user.creditBalance,
      user: { name: user.name },
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const paymentRazorpay = async (req, res) => {
  try {
    const { userID, planID } = req.body;

    const userData = await userModel.findById(userID);

    if (!userID || !planID) {
      return res.json({ success: false, message: "Missing details" });
    }
    let credits, plan, amount, date;

    switch (planID) {
      case "Starter Plan":
        plan = "Starter Plan";
        credits = 100;
        amount = 9;
        break;

      case "Pro Plan":
        plan = "Pro Plan";
        credits = 500;
        amount = 49;
        break;

      case "Enterprise Plan":
        plan = "Enterprise Plan";
        credits = 1000;
        amount = 99;
        break;

      default:
        return res.json({
          success: false,
          message: "Plan not found",
        });
    }
    date = Date.now();
    const transactiondata = {
      userID,
      plan,
      amount,
      credits,
      date,
    };

    const newTransaction = await transactionModel.create(transactiondata);

    const options = {
      amount: amount * 100,
      currency: process.env.CURRENCY,
      receipt: newTransaction._id,
    };

    await razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.json({ success: false, message: error });
      }
      res.json({ success: true, order });
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const verifyRazorPay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;

    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

    if (orderInfo.status === "paid") {
      const transactionData = await transactionModel.findById(
        orderInfo.receipt
      );
      if (transactionData.payment) {
        return res.json({ succes: false, message: "Payment Failed" });
      }
      const userData = await userModel.findById(transactionData.userID);

      const creditBalance =
        (userData.creditBalance || 0) + transactionData.credits;
      await userModel.findByIdAndUpdate(userData._id, {
        creditBalance: creditBalance,
      });
      await transactionModel.findByIdAndUpdate(transactionData._id, {
        payment: true,
      });

      res.json({ succes: true, message: "Credits added" });
    } else {
      res.json({ succes: false, message: "Payment failed" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export {
  registerUser,
  loginUser,
  userCredits,
  verifyToken,
  paymentRazorpay,
  verifyRazorPay,
};
