"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

const quickTestimonials = [
  {
    quote: "My daughter finally connects with her cultural roots through art.",
    author: "Sarah M.",
  },
  {
    quote: "The ethical approach to teaching is exactly what we wanted.",
    author: "David L.",
  },
  {
    quote: "OMO flexibility means we never miss a class across provinces.",
    author: "Michelle K.",
  },
];

const metrics = [
  { value: 500, suffix: "+", display: "500+", label: "Students taught" },
  { value: 5, suffix: "", display: "5", label: "Years of experience" },
  { value: 4.9, suffix: "", display: "4.9", label: "Star rating" },
];

function AnimatedCounter({
  value,
  suffix,
  display,
}: {
  value: number;
  suffix: string;
  display: string;
}) {
  const [count, setCount] = useState(value); // SSR-safe: render final value
  const [showOverlay, setShowOverlay] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !animationComplete) {
      setCount(0); // Animate from 0 on client
      setShowOverlay(false);

      let overlayShown = false;
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        const nextValue = current >= value ? value : current;

        if (!overlayShown && nextValue > 0) {
          overlayShown = true;
          setShowOverlay(true); // Show animated layer only after first tick to avoid 0 flash
        }

        setCount(nextValue);

        if (nextValue === value) {
          setAnimationComplete(true);
          setShowOverlay(false); // Let static layer take over
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value, animationComplete]);

  // Format the animated count
  const animatedDisplay = Number.isInteger(value)
    ? Math.round(count)
    : count.toFixed(1);

  return (
    <span ref={ref} className="relative inline-block">
      {/* Static layer: always accessible; hidden visually during animation to prevent overlap */}
      <span className={showOverlay ? "opacity-0" : "opacity-100"}>{display}</span>
      {/* Animated layer: visual-only */}
      {showOverlay && (
        <span
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          {animatedDisplay}
          {suffix}
        </span>
      )}
    </span>
  );
}

export function ProofStrip() {
  return (
    <motion.section
      className="py-12 bg-surface border-y border-border relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Testimonials */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {quickTestimonials.map((item, index) => (
              <motion.div
                key={index}
                className="flex-1"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <p className="text-sm text-muted italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-2 text-sm font-semibold">{item.author}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Metrics with animated counters */}
          <motion.div
            className="flex justify-center lg:justify-end gap-8 sm:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.3 },
              },
            }}
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                aria-label={`${metric.display} ${metric.label}`}
              >
                <p className="text-2xl sm:text-3xl font-display font-bold text-accent">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                    display={metric.display}
                  />
                </p>
                <p className="text-sm text-muted">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
