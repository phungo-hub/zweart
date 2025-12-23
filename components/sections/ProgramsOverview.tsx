"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { fadeUp, staggerContainer } from "@/lib/animations";

const programs = [
  {
    title: "Kids Art (6-10)",
    description: "Subcultural art foundations with proper credit to heritage",
    benefits: [
      "Learn traditional techniques from verified cultural artists",
      "Build confidence through creative expression",
      "Small classes via OMO—in-studio or online across Canada",
    ],
    href: "/programs#kids",
  },
  {
    title: "Teen Studio (11-17)",
    description: "Advanced subcultural techniques with ethical practice",
    benefits: [
      "Portfolio development with culturally credited work",
      "Master techniques while respecting artistic heritage",
      "Exhibit work in virtual galleries",
    ],
    href: "/programs#teens",
  },
  {
    title: "Digital Art & Animation",
    description: "Digital tools for subcultural art expression",
    benefits: [
      "Learn industry-standard tools (Procreate, etc.)",
      "Create animations honoring cultural traditions",
      "Showcase work through virtual exhibitions",
    ],
    href: "/programs#digital",
  },
];

export function ProgramsOverview() {
  return (
    <MotionSection stagger>
      <Container>
        <motion.div className="text-center mb-12" variants={fadeUp}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Subcultural Art Programs
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Ethical art education with proper credit to cultural sources.
            Available across Canada via our Online-Merge-Offline (OMO) method.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              className="bg-surface border border-border rounded-[24px] p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all"
              variants={fadeUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-display font-semibold">
                {program.title}
              </h3>
              <p className="mt-2 text-muted">{program.description}</p>
              <ul className="mt-4 space-y-2">
                {program.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                href={program.href}
                className="mt-6 inline-flex items-center text-accent font-semibold hover:underline"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </MotionSection>
  );
}
