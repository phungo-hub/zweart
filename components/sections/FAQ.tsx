"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { fadeUp, staggerContainer } from "@/lib/animations";

const faqs = [
  {
    question: "What ages do you teach?",
    answer:
      "We offer programs for kids ages 6-10 and teens ages 11-17. Each program is designed specifically for the developmental stage and interests of that age group.",
  },
  {
    question: "Do students need any prior art experience?",
    answer:
      "Not at all! We welcome students of all skill levels, from complete beginners to those with some experience. Our instructors adapt their teaching to meet each student where they are.",
  },
  {
    question: "What's included in a trial class?",
    answer:
      "A trial class is a full regular session where your child will participate in that day's lesson. All materials are provided, and you'll get to see firsthand how our classes work and how your child responds.",
  },
  {
    question: "What is the OMO (Online-Merged-Offline) method?",
    answer:
      "OMO is our flexible learning approach that combines in-studio and online instruction. Students can attend classes in person or virtually, with access to recorded lessons and resources for practice at home.",
  },
  {
    question: "What materials do students need?",
    answer:
      "For in-studio classes, we provide all materials. For online classes, we'll give you a supply list of basic art materials. Digital art students will need a tablet with a stylus (we can recommend options).",
  },
  {
    question: "What's your class size?",
    answer:
      "We keep our classes small, typically 6-8 students maximum, to ensure each child receives personalized attention and feedback from our instructors.",
  },
  {
    question: "Can I switch between online and in-person classes?",
    answer:
      "Yes! Our OMO method allows for flexibility. You can switch between formats based on your schedule. Just let us know in advance so we can prepare accordingly.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "We offer a full refund if you cancel within 48 hours of your first paid class. After that, unused classes can be credited toward future sessions.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <MotionSection id="faq" className="bg-surface">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. If you don&apos;t see what
            you&apos;re looking for, feel free to contact us.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border border-border rounded-[16px] overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.08,
                    duration: 0.4,
                  },
                },
              }}
              whileHover={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                whileHover={{ backgroundColor: "rgba(232, 90, 48, 0.03)" }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-semibold">{faq.question}</span>
                <motion.svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="px-6 pb-4"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-muted">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </MotionSection>
  );
}
