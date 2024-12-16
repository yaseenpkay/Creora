import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, setShowLogin, handleCreateClick } = useContext(AppContext);

  return (
    <motion.div
      className=" flex flex-col justify-center items-center text-center my-10 "
      initial={{ opacity: 0.2, y: -100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-stone-500 inline-flex text-center gap-2 bg-white sm:px-6 px-4 py-1 text-xs sm:text-sm rounded-full border border-neutral-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Text To Image Generator For The Creatives</p>
      </motion.div>
      <motion.h1
        className="  text-4xl max-w-[300px] sm:text-6xl sm:max-w-[590px] mx-auto mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Turn <span className="text-green-600">Words</span> into Masterpieces
        with <span className="text-green-600">Creora.</span>
      </motion.h1>
      <motion.p
        className="text-center max-w-xl mx-auto mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Unleash your imagination and let AI craft breathtaking visuals from your
        words, instantly.
      </motion.p>

      <motion.button
        onClick={handleCreateClick}
        className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2 flex items-center gap-2 rounded-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        Create Magic
      </motion.button>
    </motion.div>
  );
};

export default Header;
