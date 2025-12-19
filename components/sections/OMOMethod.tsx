import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const benefits = [
  "Flexible learning that fits your schedule—attend in-studio or join online",
  "Seamless transitions between formats without missing a beat",
  "Access recorded lessons and resources anytime for extra practice",
];

const steps = [
  {
    number: "01",
    title: "Learn",
    description: "Join live classes in-studio or online with expert instructors",
  },
  {
    number: "02",
    title: "Practice",
    description: "Access resources and recordings to reinforce skills at home",
  },
  {
    number: "03",
    title: "Create",
    description: "Complete projects with feedback and showcase your work",
  },
];

export function OMOMethod() {
  return (
    <SectionWrapper id="method" className="bg-slate-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              The OMO Method
            </h2>
            <p className="mt-4 text-lg text-muted">
              Our Online-Merged-Offline approach gives you the best of both
              worlds—flexibility and hands-on learning combined.
            </p>
            <ul className="mt-6 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-muted">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Steps Visual */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-border rounded-[24px] p-6 text-center"
              >
                <span className="text-3xl font-display font-bold text-accent">
                  {step.number}
                </span>
                <h3 className="mt-2 text-lg font-display font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
