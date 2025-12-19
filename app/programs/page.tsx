import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Programs - ZWEArt",
  description:
    "Explore our art programs for kids and teens ages 6-17. From traditional art to digital animation, find the perfect fit for your child.",
};

const programs = [
  {
    id: "kids",
    title: "Kids Art (Ages 6-10)",
    description:
      "A playful introduction to the world of art. Our Kids Art program builds foundational skills while nurturing creativity and self-expression.",
    whoFor:
      "Children ages 6-10 who are curious about art and ready to explore various mediums and techniques.",
    whatLearn: [
      "Drawing fundamentals: shapes, lines, and proportions",
      "Color theory and mixing techniques",
      "Introduction to different mediums: pencil, watercolor, acrylic",
      "Creative expression through guided and free projects",
      "Art history basics through fun, age-appropriate lessons",
    ],
    format: "Available in-studio and online via our OMO method",
    schedule: "Weekly 1.5-hour classes, Saturday or Sunday sessions",
    pricing: "Contact us for current rates and package options",
  },
  {
    id: "teens",
    title: "Teen Studio (Ages 11-17)",
    description:
      "For serious young artists ready to develop advanced skills. Our Teen Studio program focuses on technique, style development, and portfolio building.",
    whoFor:
      "Teens ages 11-17 who want to deepen their artistic skills, explore their personal style, or prepare for art school applications.",
    whatLearn: [
      "Advanced drawing techniques: perspective, shading, anatomy",
      "Painting mastery in acrylic, oil, and watercolor",
      "Portfolio development and presentation",
      "Exploring personal artistic voice and style",
      "Art critique and constructive feedback skills",
    ],
    format: "Available in-studio and online via our OMO method",
    schedule: "Weekly 2-hour classes, weekday evenings or weekends",
    pricing: "Contact us for current rates and package options",
  },
  {
    id: "digital",
    title: "Digital Art & Animation",
    description:
      "Step into the digital realm with courses in illustration, character design, and animation. Perfect for tech-savvy creative minds.",
    whoFor:
      "Kids and teens ages 8-17 interested in digital illustration, character design, game art, or animation.",
    whatLearn: [
      "Digital illustration fundamentals using Procreate or similar tools",
      "Character design and development",
      "Basic 2D animation principles",
      "Digital coloring and shading techniques",
      "Creating animated GIFs and short clips",
    ],
    format: "Available in-studio and online via our OMO method",
    schedule: "Weekly 1.5-hour classes, flexible scheduling",
    pricing: "Contact us for current rates and package options",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold">
              Our Programs
            </h1>
            <p className="mt-6 text-lg text-muted">
              Every young artist is unique. That&apos;s why we offer specialized
              programs designed to meet students exactly where they are and help
              them grow.
            </p>
            <div className="mt-8">
              <Button href="/contact">Book a trial class</Button>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Programs */}
      {programs.map((program, index) => (
        <SectionWrapper
          key={program.id}
          id={program.id}
          className={index % 2 === 0 ? "" : "bg-slate-50"}
        >
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-display font-bold">
                {program.title}
              </h2>
              <p className="mt-4 text-lg text-muted">{program.description}</p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Who it's for */}
                <div className="bg-white border border-border rounded-[24px] p-6">
                  <h3 className="text-lg font-display font-semibold mb-3">
                    Who It&apos;s For
                  </h3>
                  <p className="text-muted">{program.whoFor}</p>
                </div>

                {/* Format & Schedule */}
                <div className="bg-white border border-border rounded-[24px] p-6">
                  <h3 className="text-lg font-display font-semibold mb-3">
                    Class Format
                  </h3>
                  <p className="text-muted">{program.format}</p>
                  <p className="text-muted mt-2">{program.schedule}</p>
                  <p className="text-accent font-semibold mt-2">
                    {program.pricing}
                  </p>
                </div>
              </div>

              {/* What they'll learn */}
              <div className="mt-8 bg-white border border-border rounded-[24px] p-6">
                <h3 className="text-lg font-display font-semibold mb-4">
                  What Students Will Learn
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {program.whatLearn.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted">
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button href="/contact">Book a trial for {program.title}</Button>
              </div>
            </div>
          </Container>
        </SectionWrapper>
      ))}

      {/* How to Choose */}
      <SectionWrapper className="bg-accent">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Not Sure Which Program to Choose?
            </h2>
            <p className="mt-6 text-lg text-white/90">
              That&apos;s okay! Here are some quick guidelines:
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 rounded-[16px] p-6">
                <h3 className="font-display font-semibold">Kids Art</h3>
                <p className="mt-2 text-sm text-white/80">
                  Choose if your child is new to art, loves hands-on activities,
                  and is between 6-10 years old.
                </p>
              </div>
              <div className="bg-white/10 rounded-[16px] p-6">
                <h3 className="font-display font-semibold">Teen Studio</h3>
                <p className="mt-2 text-sm text-white/80">
                  Choose if your teen wants to develop serious skills, build a
                  portfolio, or explore art careers.
                </p>
              </div>
              <div className="bg-white/10 rounded-[16px] p-6">
                <h3 className="font-display font-semibold">Digital Art</h3>
                <p className="mt-2 text-sm text-white/80">
                  Choose if your child loves technology, wants to create digital
                  illustrations, or is interested in animation.
                </p>
              </div>
            </div>
            <p className="mt-8 text-white/90">
              Still unsure? Book a trial class and we&apos;ll help you find the
              perfect fit.
            </p>
            <div className="mt-6">
              <Button
                href="/contact"
                className="!bg-white !text-accent hover:!bg-white/90"
              >
                Book a trial class
              </Button>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
