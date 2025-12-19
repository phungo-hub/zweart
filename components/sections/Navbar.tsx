"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 glass"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Image
                src="/logo.png"
                alt="ZWEArt by OMO ART INC"
                width={140}
                height={48}
                className="h-10 sm:h-12 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation & CTA */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.label}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Button href="/contact">Book a trial class</Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            className="lg:hidden p-2 text-muted hover:text-fg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden py-4 border-t border-border"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-muted hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" className="mt-2">
                Book a trial class
              </Button>
            </div>
          </motion.div>
        )}
      </Container>
    </motion.header>
  );
}
