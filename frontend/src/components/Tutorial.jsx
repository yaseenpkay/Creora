import React from "react";
import { steps } from "../assets/assets";
import { motion } from "motion/react";

const Tutorial = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-32 "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 ">How it works</h1>
      <p className="text-lg text-gray-600 mb-8 ">
        Bring words to life with Creora{" "}
      </p>
      <div className="space-y-4 w-full max-w-3xl text-sm">
        {steps.map((item, index) => (
          <div
            className="flex rounded-lg items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.01] transition-all duration-300"
            key={index}
          >
            <img src={item.icon} alt="item" className="w-5 mr-3" />
            <div>
              <h2 className="text-lg sm:text-xl font-medium ">{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Tutorial;
