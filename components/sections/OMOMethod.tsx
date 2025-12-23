"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { fadeUp, staggerContainer } from "@/lib/animations";

const benefits = [
  "Learn subcultural arts from artist mentors who ensure proper credit to cultural sources",
  "Access classes from anywhere in Canada—in-studio, online, or hybrid",
  "Showcase your work in virtual exhibitions to a wider audience",
  "Join a culturally aware community with mentorship and peer support",
];

const steps = [
  {
    number: "01",
    title: "Learn",
    description: "Study subcultural arts with artists who honor cultural heritage",
    color: "bg-accent",
  },
  {
    number: "02",
    title: "Connect",
    description: "Join a community for mentorship, peer support, and knowledge exchange",
    color: "bg-secondary",
  },
  {
    number: "03",
    title: "Showcase",
    description: "Display your work in virtual exhibitions and reach a wider audience",
    color: "bg-[#F7C948]",
  },
];

export function OMOMethod() {
  return (
    <MotionSection id="method" className="bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-display font-bold"
              variants={fadeUp}
            >
              The Online-Merge-Offline (OMO) Method
            </motion.h2>
            <motion.p className="mt-4 text-lg text-muted" variants={fadeUp}>
              Making subcultural arts accessible, sustainable, and ethically
              taught—regardless of geography.
            </motion.p>
            <motion.ul className="mt-6 space-y-4" variants={staggerContainer}>
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  variants={fadeUp}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.svg
                    className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                  <span className="text-muted">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Steps Visual */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.2 },
              },
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="bg-white border border-border rounded-[24px] p-6 text-center relative overflow-hidden group"
                variants={{
                  hidden: { opacity: 0, y: 30, rotateX: -15 },
                  visible: { opacity: 1, y: 0, rotateX: 0 },
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative corner */}
                <motion.div
                  className={`absolute -top-10 -right-10 w-20 h-20 ${step.color} rounded-full opacity-20`}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="text-3xl font-display font-bold text-accent relative z-10">
                  {step.number}
                </span>
                <h3 className="mt-2 text-lg font-display font-semibold relative z-10">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted relative z-10">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </MotionSection>
  );
}
