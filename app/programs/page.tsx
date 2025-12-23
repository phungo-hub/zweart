import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Programs - ZWEArt",
  description:
    "Subcultural art programs for kids and teens ages 6-17, taught ethically with proper credit via our OMO (Online-Merge-Offline) method. Available across Canada.",
};

const programs = [
  {
    id: "kids",
    title: "Kids Art (Ages 6-10)",
    description:
      "Subcultural art foundations taught ethically. Kids learn traditional techniques from artist mentors who ensure proper credit to cultural sources and heritage.",
    whoFor:
      "Children ages 6-10 curious about cultural art traditions—especially those from immigrant or multicultural families wanting to connect with heritage through art.",
    whatLearn: [
      "Cultural context: learn the stories and origins behind each art form",
      "Ethical practice: understand proper credit to cultural sources",
      "Mentorship from subcultural artist instructors",
      "Foundational techniques in drawing, color, and mixed media",
      "Showcase work in virtual exhibitions",
    ],
    format: "Available in-studio and online via our OMO method",
    schedule: "Weekly 1.5-hour classes, Saturday or Sunday sessions",
    pricing: "Contact us for current rates and package options",
  },
  {
    id: "teens",
    title: "Teen Studio (Ages 11-17)",
    description:
      "Advanced subcultural techniques with ethical practice. Teens build portfolios featuring culturally credited work—ideal for art school applications or personal growth.",
    whoFor:
      "Teens ages 11-17 seeking deeper cultural connection through art, portfolio development with proper attribution, or preparation for art school.",
    whatLearn: [
      "Cultural lineage: understand the heritage behind techniques you master",
      "Ethical practice: create work with proper credit to cultural sources",
      "Portfolio development featuring culturally credited pieces",
      "Advanced techniques in drawing, painting, and mixed media",
      "Exhibit work in virtual galleries to a wider audience",
    ],
    format: "Available in-studio and online via our OMO method",
    schedule: "Weekly 2-hour classes, weekday evenings or weekends",
    pricing: "Contact us for current rates and package options",
  },
  {
    id: "digital",
    title: "Digital Art & Animation",
    description:
      "Digital tools for subcultural storytelling. Students create illustrations and animations that honor cultural traditions while learning industry-standard software.",
    whoFor:
      "Kids and teens ages 8-17 who want to tell cultural stories through digital art, animation, or character design.",
    whatLearn: [
      "Cultural storytelling: bring heritage narratives to life digitally",
      "Ethical practice: credit cultural sources in digital work",
      "Industry tools: Procreate, digital illustration, 2D animation",
      "Character design rooted in cultural traditions",
      "Share work through virtual exhibitions",
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
              Subcultural art education for kids and teens ages 6-17. Learn from
              artist mentors who ensure proper credit to cultural sources—available
              in-studio or online across Canada via our OMO method.
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

      {/* What Makes Our Programs Different */}
      <SectionWrapper className="bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-center">
              What Makes Our Programs Different
            </h2>
            <p className="mt-4 text-lg text-muted text-center max-w-2xl mx-auto">
              We&apos;re not a generic art school. Here&apos;s what sets ZWEArt apart.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-border rounded-[16px] p-6">
                <h3 className="font-display font-semibold text-lg">Subcultural Arts Focus</h3>
                <p className="mt-2 text-muted">
                  We teach art traditions rooted in specific cultural communities—often underrepresented in mainstream art education.
                </p>
              </div>
              <div className="bg-white border border-border rounded-[16px] p-6">
                <h3 className="font-display font-semibold text-lg">Ethical Teaching</h3>
                <p className="mt-2 text-muted">
                  Every lesson includes proper credit to cultural sources. We protect artistic heritage and reduce cultural appropriation.
                </p>
              </div>
              <div className="bg-white border border-border rounded-[16px] p-6">
                <h3 className="font-display font-semibold text-lg">Artist Mentors</h3>
                <p className="mt-2 text-muted">
                  Learn from subcultural artists with deep cultural knowledge—not just technical skill, but heritage understanding.
                </p>
              </div>
              <div className="bg-white border border-border rounded-[16px] p-6">
                <h3 className="font-display font-semibold text-lg">Virtual Exhibitions</h3>
                <p className="mt-2 text-muted">
                  Students showcase their work in online galleries, reaching audiences beyond their local community.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

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
                  Ages 6-10. Best for children new to art who want to explore cultural traditions and build foundations with proper credit to heritage.
                </p>
              </div>
              <div className="bg-white/10 rounded-[16px] p-6">
                <h3 className="font-display font-semibold">Teen Studio</h3>
                <p className="mt-2 text-sm text-white/80">
                  Ages 11-17. Best for teens building portfolios with culturally credited work, preparing for art school, or deepening cultural connection.
                </p>
              </div>
              <div className="bg-white/10 rounded-[16px] p-6">
                <h3 className="font-display font-semibold">Digital Art</h3>
                <p className="mt-2 text-sm text-white/80">
                  Ages 8-17. Best for kids who want to tell cultural stories through digital illustration, animation, or character design.
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
