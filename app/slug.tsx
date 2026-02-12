/** @format */

"use client";

import { motion } from "framer-motion";

export default function AnimatedHeroText({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <p className="text-5xl sm:text-7xl leading-tight flex flex-wrap gap-x-3">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: i * 0.05,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
