"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 font-display font-semibold text-base rounded-[16px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover",
    secondary:
      "bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-white",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02, y: -1 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: "easeOut" as const },
  };

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link href={href} className={styles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={styles}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
