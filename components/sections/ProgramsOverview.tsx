"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { fadeUp, staggerContainer } from "@/lib/animations";

const programs = [
  {
    title: "Kids Art (6-10)",
    description: "Foundation art skills through playful exploration",
    benefits: [
      "Build confidence through creative expression",
      "Learn drawing, painting, and mixed media basics",
      "Small class sizes for personalized attention",
    ],
    href: "/programs#kids",
  },
  {
    title: "Teen Studio (11-17)",
    description: "Advanced techniques for aspiring young artists",
    benefits: [
      "Portfolio development for high school applications",
      "Master advanced drawing and painting techniques",
      "Explore personal artistic style",
    ],
    href: "/programs#teens",
  },
  {
    title: "Digital Art & Animation",
    description: "Modern digital skills for the creative future",
    benefits: [
      "Learn industry-standard digital tools",
      "Create animations and digital illustrations",
      "Build skills for creative careers",
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
            Programs for Every Young Artist
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Whether your child is just starting or ready to take their art to
            the next level, we have the perfect program.
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
