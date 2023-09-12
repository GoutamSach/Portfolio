import React from "react";
import { motion } from "framer-motion";

function Animatedtext({ text }) {
  const quote = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, staggerChildren: 0.08 },
    },
  };

  return (
    <motion.h1
      className=" font-bold text-5xl  xl:text-6xl text-right  text-dark "
      variants={quote}
      initial="initial"
      animate="animate"
    >
      {text}
    </motion.h1>
  );
}

export default Animatedtext;
