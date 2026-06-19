/** @format */

"use client";

import { useState, useEffect } from "react";

export function EmailBadge() {
  const [copied, setCopied] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const email = "rikyfhrian@gmail.com";

  useEffect(() => {
    const showTimer = setTimeout(() => setShowHint(true), 2000);
    const hideTimer = setTimeout(() => setShowHint(false), 2000 + 2000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setShowHint(false);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="flex items-center gap-3 text-sm sm:text-lg tracking-tight">
      <p>Available for work →</p>
      <div className="relative inline-block">
        {showHint && (
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 bg-black text-white text-xs px-2.5 py-1 rounded-md whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-300 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-black">
            click to copy
          </span>
        )}
        <button
          onClick={handleCopy}
          className="cursor-pointer border border-black rounded-full px-3 transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-rotate-3 hover:-translate-y-0.5 hover:bg-black/10 active:rotate-2 active:translate-y-0 active:scale-95"
        >
          <p>{copied ? "Copied!" : email}</p>
        </button>
      </div>
    </div>
  );
}
