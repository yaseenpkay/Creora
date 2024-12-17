import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion for animation
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [state, setState] = useState("Sign In");
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (state === "Sign In") {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          setUser(response.data.user);
          localStorage.setItem("token", response.data.token);
          setShowLogin(false);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          setUser(response.data.user);
          localStorage.setItem("token", response.data.token);
          setShowLogin(false);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="fixed left-0 right-0 bottom-0 top-0 z-10 backdrop-blur-sm bg-black/40 flex justify-center items-center">
      <motion.form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-xl p-10 text-gray-600"
        variants={modalVariants} // Apply variants
        initial="hidden" // Start animation hidden
        animate="visible" // Animate to visible
        exit="exit" // Animate exit
        transition={{ duration: 0.4, ease: "easeOut" }} // Smooth animation
      >
        <h1 className="text-center text-2xl text-black font-medium mb-1">
          {state}
        </h1>
        <p className="text-sm text-center">Please sign in to continue</p>
        {state !== "Sign In" && (
          <div className="border border-gray-400 px-6 py-2 flex items-center gap-2 rounded-full mt-3">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="outline-none text-sm "
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
        )}
        <div className="border px-6 py-2 border-gray-400 flex items-center gap-2 rounded-full mt-3">
          <input
            type="email"
            placeholder="Email ID"
            required
            className="outline-none text-sm "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="border px-6 py-2 border-gray-400 flex items-center gap-2 rounded-full mt-3">
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none text-sm "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <p className="text-sm text-green-600 my-4 cursor-pointer ">
          Forgot password?
        </p>

        <button
          type="submit"
          className="bg-green-300 text-green-900 w-full py-2 rounded-full"
        >
          {state === "Sign In" ? "Sign In" : "Sign Up"}
        </button>

        {state === "Sign In" ? (
          <p className="text-sm my-4 text-center">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-green-600 cursor-pointer hover:underline hover:text-green-800"
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="text-sm my-4 text-center">
            Already have an account?{" "}
            <span
              onClick={() => setState("Sign In")}
              className="text-green-600 cursor-pointer hover:underline hover:text-green-800"
            >
              Sign In
            </span>
          </p>
        )}

        <p
          onClick={() => setShowLogin(false)}
          className="px-2 py-0.5 absolute top-5 right-5 font-extrabold bg-slate-200 rounded-full cursor-pointer"
        >
          x
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
