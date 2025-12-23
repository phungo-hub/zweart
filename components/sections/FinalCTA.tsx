"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function FinalCTA() {
  return (
    <MotionSection>
      <Container>
        <motion.div
          className="bg-accent rounded-[24px] p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-4 left-4 w-16 h-16 rounded-full bg-white/10"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/4 right-8 w-8 h-8 rounded-full bg-white/10"
            animate={{
              y: [0, 15, 0],
              x: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute bottom-8 left-1/4 w-12 h-12 rounded-full bg-white/10"
            animate={{
              y: [0, -20, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-4 right-1/4 w-6 h-6 rounded-full bg-white/15"
            animate={{
              y: [0, 10, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />

          {/* Star decorations */}
          <motion.svg
            className="absolute top-8 right-1/3 w-6 h-6 text-white/20"
            viewBox="0 0 24 24"
            fill="currentColor"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </motion.svg>
          <motion.svg
            className="absolute bottom-12 left-12 w-4 h-4 text-white/15"
            viewBox="0 0 24 24"
            fill="currentColor"
            animate={{
              rotate: [0, -180, -360],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </motion.svg>

          {/* Content */}
          <motion.h2
            className="text-3xl sm:text-4xl font-display font-bold relative z-10"
            variants={fadeUp}
          >
            Ready to Explore Subcultural Arts?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-white/90 max-w-2xl mx-auto relative z-10"
            variants={fadeUp}
          >
            Join families across Canada who value ethical art education with
            proper credit to cultural sources. Book a trial class today.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            variants={fadeUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                href="/contact"
                className="!bg-white !text-accent hover:!bg-white/90 relative"
              >
                <motion.span
                  className="absolute inset-0 rounded-full bg-white"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(255,255,255,0.4)",
                      "0 0 0 10px rgba(255,255,255,0)",
                      "0 0 0 0 rgba(255,255,255,0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                <span className="relative z-10">Book a trial class</span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-white/90 hover:text-white font-semibold h-full px-4"
              >
                Have questions? Contact us
                <motion.svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </MotionSection>
  );
}
