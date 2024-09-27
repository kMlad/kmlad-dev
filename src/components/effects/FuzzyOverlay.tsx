"use client";

import React from "react";
import { motion } from "framer-motion";
import blackNoise from "@/assets/black-noise.png";


// NOTE: An overflow of hidden will be required on a wrapping
// element to see expected results
//<div className="relative overflow-hidden"><FuzzyOverlay /></div>
const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: `url(${blackNoise.src})`,
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[6%]"
    />
  );
};

export default FuzzyOverlay;
