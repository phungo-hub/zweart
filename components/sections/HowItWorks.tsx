import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const steps = [
  {
    number: "1",
    title: "Book a Trial",
    description:
      "Sign up for a free trial class to experience our teaching style and meet our instructors.",
  },
  {
    number: "2",
    title: "Choose Your Program",
    description:
      "Select the program that best fits your child's age, interests, and skill level.",
  },
  {
    number: "3",
    title: "Start Creating",
    description:
      "Join regular classes and watch your child's artistic abilities flourish week by week.",
  },
  {
    number: "4",
    title: "Showcase & Celebrate",
    description:
      "Display artwork in our gallery exhibitions and celebrate creative achievements.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Getting started is easy. Here&apos;s how to begin your child&apos;s
            creative journey with ZWEArt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-border" />
              )}
              <div className="relative bg-white">
                <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center font-display text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-display font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
