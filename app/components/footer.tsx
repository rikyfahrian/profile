/** @format */

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const reminders = [
  "Create the things you wish existed.",
  "Are you alive or just existing?",
  "Late start, is a start.",
  "Slow motion is still motion.",
  "Do it tired, do it sad, do it scared, do it anyway.",
  "Winners fail more than losers.",
  "You vs you.",
  "Nothing changes if nothing changes.",
];

export default function Footer() {
  const [quote, setQuote] = useState(reminders[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(reminders[Math.floor(Math.random() * reminders.length)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="items-center flex flex-col gap-2 py-5 bg-green-600 w-[98%] mx-auto rounded-t-2xl text-white">
      <p className="text-sm text-white/70">Reminder words:</p>

      <motion.h3
        key={quote}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="text-lg font-semibold"
      >
        {quote}
      </motion.h3>

      <p className="text-sm text-white/70">© {new Date().getFullYear()}</p>
    </div>
  );
}
