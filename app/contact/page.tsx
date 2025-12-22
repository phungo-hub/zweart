"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

type FormData = {
  name: string;
  email: string;
  childAge: string;
  program: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    childAge: "",
    program: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          childAge: "",
          program: "",
          message: "",
        });
      }
    } catch {
      // Handle error silently for now
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputStyles =
    "w-full px-4 py-3 border border-border rounded-[16px] focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow";
  const labelStyles = "block text-sm font-semibold mb-2";
  const errorStyles = "text-red-500 text-sm mt-1";

  return (
    <>
      <SectionWrapper className="bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-display font-bold">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-muted">
              Ready to start your child&apos;s art journey? Have questions about
              our programs? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-[24px] p-8 text-center">
                <svg
                  className="w-16 h-16 text-green-500 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-2xl font-display font-bold text-green-800">
                  Thank You!
                </h2>
                <p className="mt-2 text-green-700">
                  We&apos;ve received your message and will get back to you
                  within 24 hours.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6"
                  variant="secondary"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-border rounded-[24px] p-6 sm:p-8 shadow-sm"
              >
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={labelStyles}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputStyles}
                      placeholder="Jane Smith"
                    />
                    {errors.name && (
                      <p className={errorStyles}>{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelStyles}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputStyles}
                      placeholder="jane@example.com"
                    />
                    {errors.email && (
                      <p className={errorStyles}>{errors.email}</p>
                    )}
                  </div>

                  {/* Child Age */}
                  <div>
                    <label htmlFor="childAge" className={labelStyles}>
                      Child&apos;s Age (optional)
                    </label>
                    <input
                      type="text"
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      className={inputStyles}
                      placeholder="e.g., 8 years old"
                    />
                  </div>

                  {/* Program Interest */}
                  <div>
                    <label htmlFor="program" className={labelStyles}>
                      Program of Interest
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className={inputStyles}
                    >
                      <option value="">Select a program...</option>
                      <option value="kids">Kids Art (Ages 6-10)</option>
                      <option value="teens">Teen Studio (Ages 11-17)</option>
                      <option value="digital">Digital Art & Animation</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelStyles}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={inputStyles}
                      placeholder="Tell us about your child and what you're looking for..."
                    />
                    {errors.message && (
                      <p className={errorStyles}>{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}

            {/* Contact Info */}
            <div className="mt-12 text-center">
              <p className="text-muted">You can also reach us at:</p>
              <a
                href="mailto:hello@zweart.com"
                className="text-accent font-semibold hover:underline"
              >
                hello@zweart.com
              </a>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
