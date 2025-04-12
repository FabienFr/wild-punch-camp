"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

export default function AnimatedText({ text, className, once = false, delay = 0 }: AnimatedTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * 0.1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div className={className} variants={container} initial="hidden" whileInView="visible" viewport={{ once }}>
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
