/** @format */

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const reminders = [
  "Create the things you wish existed.",
  "Are you alive or just existing?",
  "Create more than consume.",
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
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto flex w-[98%] flex-col items-center gap-2 rounded-t-2xl bg-green-600 py-5 text-white selection:bg-white selection:text-green-500">
      <p className="text-sm text-white/70">[ Reminder words ]</p>

      <motion.h3
        key={quote}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center text-lg font-semibold"
      >
        {quote}
      </motion.h3>

      <p className="text-sm text-white/70">© {new Date().getFullYear()}</p>
    </div>
  );
}
