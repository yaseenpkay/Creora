import express from "express";
import {
  registerUser,
  loginUser,
  userCredits,
  verifyToken,
  paymentRazorpay,
  verifyRazorPay,
} from "../controllers/userController.js";
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", userAuth, userCredits);
userRouter.post("/verify-token", verifyToken);
userRouter.post("/pay-razor", userAuth, paymentRazorpay);
userRouter.post("/verify-razor", userAuth, verifyRazorPay);
export default userRouter;
