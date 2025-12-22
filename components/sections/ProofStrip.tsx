"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

const quickTestimonials = [
  {
    quote: "My daughter's confidence has grown so much!",
    author: "Sarah M.",
  },
  {
    quote: "The best art classes in Toronto, hands down.",
    author: "David L.",
  },
  {
    quote: "My son can't wait for his weekly class.",
    author: "Michelle K.",
  },
];

const metrics = [
  { value: 500, suffix: "+", label: "Students taught" },
  { value: 5, suffix: "", label: "Years of experience" },
  { value: 4.9, suffix: "", label: "Star rating" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current * 10) / 10);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
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
              >
                <p className="text-2xl sm:text-3xl font-display font-bold text-accent">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
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
