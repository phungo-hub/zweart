"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KidsArtBackground } from "@/components/ui/KidsArtBackground";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Kids art background */}
      <KidsArtBackground />

      <Container>
        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Massive headline */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight leading-[0.95]"
            variants={fadeUp}
          >
            Unlock Your Child&apos;s{" "}
            <span className="text-accent relative">
              Creative
              {/* Underline decoration */}
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              >
                <motion.path
                  d="M2 8C50 2 100 2 150 6C200 10 250 8 298 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </motion.svg>
            </span>{" "}
            Potential
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-8 text-lg sm:text-xl lg:text-2xl text-muted max-w-2xl mx-auto leading-relaxed"
            variants={fadeUp}
          >
            Toronto-based art school offering inspiring classes for kids and
            teens ages 6-17. From traditional drawing to digital animation, we
            nurture every creative journey.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeUp}
          >
            <Button href="/contact" className="glow-accent">
              Book a trial class
            </Button>
            <Button href="/programs" variant="secondary">
              View programs
            </Button>
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20 rounded-full border-2 border-accent/20"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-5 -right-5 w-16 h-16 rounded-lg border-2 border-secondary/20 rotate-12"
            animate={{
              y: [0, 10, 0],
              rotate: [12, 20, 12],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </Container>
    </section>
  );
}
