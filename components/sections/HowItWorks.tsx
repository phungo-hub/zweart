"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { fadeUp } from "@/lib/animations";

const steps = [
  {
    number: "1",
    title: "Book a Trial",
    description:
      "Sign up for a trial class to experience our ethical teaching approach and meet our artists.",
  },
  {
    number: "2",
    title: "Choose Your Program",
    description:
      "Select the subcultural art program that fits your child's interests—in-studio or online.",
  },
  {
    number: "3",
    title: "Learn with Credit",
    description:
      "Study with artist mentors who teach proper credit to cultural sources and heritage.",
  },
  {
    number: "4",
    title: "Exhibit Your Work",
    description:
      "Showcase artwork in virtual exhibitions and connect with the wider community.",
  },
];

export function HowItWorks() {
  return (
    <MotionSection>
      <Container>
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Getting started is easy. Here&apos;s how to begin your child&apos;s
            creative journey with ZWEArt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <motion.div
                className="relative bg-white border border-border rounded-[16px] p-6 h-full"
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
              >
                {/* Animated number circle */}
                <motion.div
                  className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center font-display text-xl font-bold mb-4 relative"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(232, 90, 48, 0.4)",
                  }}
                >
                  {step.number}
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-accent"
                    initial={{ opacity: 0.5, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.5 }}
                    transition={{
                      delay: index * 0.15 + 0.5,
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </motion.div>

                <h3 className="text-lg font-display font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted text-sm">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
