"use client";

import { motion } from "framer-motion";
import React from "react";
import styles from "../../styles/WildPunchCamp.module.css";
import Button from "./Button";

export default function AnimatedHero() {
  return (
    <div className={`${styles.heroContent} relative z-20`}>
      <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className={styles.year}>
        ÉTÉ 2025
      </motion.h2>

      {/* Reste du contenu animé */}
    </div>
  );
}
