"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { fadeUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "ZWEArt helped my daughter connect with her Vietnamese heritage through art. The instructors teach with proper credit to cultural sources—something we couldn't find elsewhere. She's now confident in both her skills and her identity.",
    author: "Jennifer Thompson",
    role: "Parent of Emma, age 9",
    program: "Kids Art Program",
  },
  {
    quote:
      "My son was hesitant about art classes, but ZWEArt's ethical approach won him over. He's building a portfolio with culturally credited work for art school applications. The mentorship from real artists has been invaluable.",
    author: "Michael Rodriguez",
    role: "Parent of Carlos, age 15",
    program: "Teen Studio Program",
  },
  {
    quote:
      "Living in rural Alberta, we thought quality subcultural art education was out of reach. The OMO method changed that—my kids learn from verified artists and showcase work in virtual exhibitions. Geography is no longer a barrier.",
    author: "Amanda Chen",
    role: "Parent of twins, ages 12",
    program: "Digital Art & Animation",
  },
];

export function Testimonials() {
  return (
    <MotionSection id="testimonials">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            What Families Say
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Families across Canada choosing ethical subcultural art education
            with proper credit and protected heritage.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white border border-border rounded-[24px] p-6 sm:p-8 shadow-sm relative overflow-hidden group"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.15,
                    duration: 0.5,
                  },
                },
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Stars with stagger */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15 + i * 0.05,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              <p className="text-muted italic relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 pt-6 border-t border-border relative z-10">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
                <motion.p
                  className="text-sm text-accent mt-1 font-medium"
                  whileHover={{ x: 5 }}
                >
                  {testimonial.program}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </MotionSection>
  );
}
