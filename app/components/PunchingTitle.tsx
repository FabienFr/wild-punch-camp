"use client";

import { motion } from "framer-motion";
import React from "react";

interface PunchingTitleProps {
  text: string;
  className?: string;
}

export default function PunchingTitle({ text, className }: PunchingTitleProps) {
  // Séparer le texte en mots
  const words = text.split(" ");

  return (
    <h1 className={className} style={{ whiteSpace: "normal", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {words.map((word, wordIndex) => (
        <div key={wordIndex} style={{ margin: "0 0.2em", display: "inline-flex" }}>
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              initial={{ opacity: 0, y: 50, rotate: Math.random() > 0.5 ? 10 : -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 10,
                delay: 0.6 + (wordIndex * 0.1 + letterIndex * 0.05),
              }}
              style={{
                display: "inline-block",
                transformOrigin: "center",
                letterSpacing: "0.02em",
                marginRight: "0.01em",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      ))}
    </h1>
  );
}
