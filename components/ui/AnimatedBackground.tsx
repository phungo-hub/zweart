"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary blob - Orange */}
      <motion.div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(232, 90, 48, 0.4) 0%, rgba(232, 90, 48, 0) 70%)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary blob - Teal */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(42, 157, 143, 0.4) 0%, rgba(42, 157, 143, 0) 70%)",
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent blob - smaller */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(232, 90, 48, 0.3) 0%, rgba(232, 90, 48, 0) 70%)",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
