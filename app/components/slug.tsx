/** @format */

"use client";

import { motion } from "framer-motion";

export default function AnimatedHeroText({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <p className="text-5xl sm:text-7xl 2xl:text-8xl leading-tight flex flex-wrap gap-x-3">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex">
          {word.split("").map((char, charIndex) => {
            const delay = wordIndex * 0.1 + charIndex * 0.025;
            return (
              <motion.span
                key={charIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0, 1] }}
                transition={{
                  delay,
                  duration: 0.3,
                  times: [0, 0.3, 0.5, 1],
                  ease: "easeInOut",
                }}
                className="inline-block relative"
              >
                <motion.span
                  initial={{ y: 0, x: 0 }}
                  animate={{ y: [8, -2, 0], x: [-2, 1, 0] }}
                  transition={{ delay, duration: 0.35, ease: "easeOut" }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              </motion.span>
            );
          })}
        </span>
      ))}
    </p>
  );
}
