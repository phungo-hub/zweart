"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { fadeUp, staggerContainer } from "@/lib/animations";

const galleryImages = [
  { id: 1, src: "/gallery/art-1.png", alt: "Student artwork 1" },
  { id: 2, src: "/gallery/art-2.png", alt: "Student artwork 2" },
  { id: 3, src: "/gallery/art-3.png", alt: "Student artwork 3" },
  { id: 4, src: "/gallery/art-4.png", alt: "Student artwork 4" },
  { id: 5, src: "/gallery/art-5.png", alt: "Student artwork 5" },
  { id: 6, src: "/gallery/art-6.png", alt: "Student artwork 6" },
  { id: 7, src: "/gallery/art-7.png", alt: "Student artwork 7" },
  { id: 8, src: "/gallery/art-8.png", alt: "Student artwork 8" },
  { id: 9, src: "/gallery/art-9.png", alt: "Student artwork 9" },
];

export function Gallery() {
  return (
    <MotionSection id="gallery" className="bg-surface">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Student Gallery
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Explore the amazing creations from our talented students. Every
            piece tells a unique story.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="aspect-square bg-white border border-border rounded-[16px] overflow-hidden relative group cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: index * 0.05,
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
              whileHover={{
                scale: 1.03,
                zIndex: 10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Image with zoom on hover */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <span className="text-white text-sm font-medium">
                  View artwork
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </MotionSection>
  );
}
