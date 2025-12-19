"use client";

import { motion } from "framer-motion";

export function KidsArtBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Paint splatter - Orange (top right, hidden on mobile) */}
      <motion.svg
        className="absolute top-10 right-[5%] w-24 h-24 sm:w-32 sm:h-32 text-accent/20 hidden sm:block"
        viewBox="0 0 100 100"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "backOut" }}
      >
        <path
          fill="currentColor"
          d="M50 10c-5 15-20 20-30 15 5 10 0 25-10 30 15 0 25 15 25 30 10-10 25-10 35 0-5-15 5-30 20-30-10-10-10-25 0-35-15 5-30-5-30-20-5 10-10 10-10 10z"
        />
      </motion.svg>

      {/* Paint splatter - Teal (bottom left, smaller on mobile) */}
      <motion.svg
        className="absolute -bottom-5 -left-5 sm:bottom-20 sm:left-[5%] w-24 h-24 sm:w-40 sm:h-40 text-secondary/15"
        viewBox="0 0 100 100"
        initial={{ scale: 0, rotate: 20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "backOut" }}
      >
        <path
          fill="currentColor"
          d="M50 5c-8 12-25 15-35 8 8 12 5 28-8 38 15 2 28 18 28 35 12-12 30-12 42 0-2-18 12-35 28-38-15-8-18-25-8-38-15 8-30 2-38-12-3 5-6 7-9 7z"
        />
      </motion.svg>

      {/* Crayon star - Yellow (repositioned for mobile) */}
      <motion.svg
        className="absolute top-[5%] left-[3%] sm:top-[30%] sm:left-[8%] w-10 h-10 sm:w-16 sm:h-16"
        viewBox="0 0 50 50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.7, duration: 0.5, ease: "backOut" }}
      >
        <path
          fill="#F7C948"
          opacity="0.6"
          d="M25 2l6 14h15l-12 10 5 15-14-10-14 10 5-15L4 16h15z"
          strokeWidth="2"
          stroke="#F7C948"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Wobbly circle - Pink (hidden on mobile) */}
      <motion.svg
        className="absolute top-[15%] left-[25%] w-20 h-20 hidden sm:block"
        viewBox="0 0 50 50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "backOut" }}
      >
        <path
          fill="#F472B6"
          opacity="0.25"
          d="M25 5c8 0 12 3 15 8s5 12 3 17-8 10-15 12-14-1-18-6-5-12-3-18 10-13 18-13z"
        />
      </motion.svg>

      {/* Scribble line - Purple (bottom, visible on all) */}
      <motion.svg
        className="absolute bottom-[10%] right-[5%] sm:bottom-[25%] sm:right-[15%] w-16 h-8 sm:w-24 sm:h-12"
        viewBox="0 0 100 40"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
      >
        <motion.path
          d="M5 20c10-15 20 15 30 0s20 15 30 0 20 15 30 0"
          fill="none"
          stroke="#A78BFA"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.4"
        />
      </motion.svg>

      {/* Little heart - Red (repositioned) */}
      <motion.svg
        className="absolute top-[20%] right-[3%] sm:top-[45%] sm:right-[8%] w-6 h-6 sm:w-10 sm:h-10"
        viewBox="0 0 50 50"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <path
          fill="#EF4444"
          opacity="0.35"
          d="M25 45L5 25c-5-5-5-15 5-18s15 3 15 10c0-7 5-13 15-10s10 13 5 18L25 45z"
        />
      </motion.svg>

      {/* Zigzag line - Green (hidden on mobile) */}
      <motion.svg
        className="absolute top-[60%] left-[15%] w-20 h-8 hidden sm:block"
        viewBox="0 0 80 30"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
      >
        <motion.path
          d="M5 15l15-10 15 20 15-20 15 20 10-10"
          fill="none"
          stroke="#34D399"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.4"
        />
      </motion.svg>

      {/* Sun doodle - Yellow/Orange (top center, smaller on mobile) */}
      <motion.svg
        className="absolute top-[2%] right-[20%] sm:top-[8%] sm:left-[45%] w-8 h-8 sm:w-14 sm:h-14"
        viewBox="0 0 50 50"
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: "backOut" }}
      >
        <circle cx="25" cy="25" r="10" fill="#FBBF24" opacity="0.5" />
        <g stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" opacity="0.5">
          <line x1="25" y1="5" x2="25" y2="12" />
          <line x1="25" y1="38" x2="25" y2="45" />
          <line x1="5" y1="25" x2="12" y2="25" />
          <line x1="38" y1="25" x2="45" y2="25" />
          <line x1="11" y1="11" x2="16" y2="16" />
          <line x1="34" y1="34" x2="39" y2="39" />
          <line x1="11" y1="39" x2="16" y2="34" />
          <line x1="34" y1="16" x2="39" y2="11" />
        </g>
      </motion.svg>

      {/* Floating brush stroke - Teal (hidden on mobile) */}
      <motion.div
        className="absolute bottom-[40%] right-[25%] w-16 h-4 bg-secondary/20 rounded-full hidden sm:block"
        style={{ transform: "rotate(-15deg)" }}
        animate={{
          y: [0, -8, 0],
          rotate: [-15, -10, -15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small dots scattered (fewer on mobile) */}
      <motion.div
        className="absolute top-[35%] right-[30%] w-3 h-3 bg-accent/30 rounded-full hidden sm:block"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[10%] sm:top-[55%] sm:left-[30%] w-2 h-2 bg-secondary/30 rounded-full"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[40%] w-4 h-4 bg-[#F472B6]/25 rounded-full hidden sm:block"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
      />
    </div>
  );
}
