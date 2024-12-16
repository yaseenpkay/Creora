import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion for animation
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = useState("Sign In");
  const { setShowLogin } = useContext(AppContext);

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
            />
          </div>
        )}
        <div className="border px-6 py-2 border-gray-400 flex items-center gap-2 rounded-full mt-3">
          <input
            type="email"
            placeholder="Email ID"
            required
            className="outline-none text-sm "
          />
        </div>
        <div className="border px-6 py-2 border-gray-400 flex items-center gap-2 rounded-full mt-3">
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none text-sm "
          />
        </div>
        <p className="text-sm text-green-600 my-4 cursor-pointer ">
          Forgot password?
        </p>

        <button className="bg-green-300 text-green-900 w-full py-2 rounded-full">
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
