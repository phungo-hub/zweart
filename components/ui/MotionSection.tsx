"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { scrollReveal, staggerContainer } from "@/lib/animations";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  stagger?: boolean;
};

export function MotionSection({
  children,
  className = "",
  id,
  stagger = false,
}: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={`py-16 sm:py-24 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger ? staggerContainer : scrollReveal}
    >
      {children}
    </motion.section>
  );
}
