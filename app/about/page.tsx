import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "About - ZWEArt",
  description:
    "ZWEArt is Canada's OMO platform for subcultural art education. We connect students and artists through ethical teaching, virtual exhibitions, and a culturally aware community.",
};

const team = [
  {
    name: "NGUYEN, THI KHANH NGUYEN",
    role: "Project Manager",
    image: "/about/team/khanh-nguyen.png",
  },
  {
    name: "PHAM, DUC DUY",
    role: "Creativity Director",
    image: "/about/team/duc-duy.png",
  },
  {
    name: "LE, THANH TAM",
    role: "Chief financial officer",
    image: "/about/team/thanh-tam.png",
  },
  {
    name: "NGUYEN, THANH HAI",
    role: "Business development manager",
    image: "/about/team/thanh-hai.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "NGUYEN, VAN THIEU",
    role: "Chief technology officer",
    image: "/about/team/van-thieu.png",
  },
  {
    name: "TRAN, THI HOAI HUONG",
    role: "Marketing manager",
    image: "/about/team/hoai-huong.png",
    linkedin: "https://linkedin.com",
  },
];

const timeline = [
  {
    date: "February",
    year: "2022",
    title: "Team formation",
    description:
      "A group of art enthusiasts and educators came together to address the gap in accessible, ethical subcultural art education across Canada.",
    position: "right",
  },
  {
    date: "August",
    year: "2023",
    title: "Platform development",
    description:
      "Began building the OMO platform while partnering with artists to establish ethical teaching practices and proper credit frameworks.",
    position: "right",
  },
  {
    date: "December",
    year: "2023",
    title: "MTA graduation and launch",
    description:
      "Completed the 18-month MTA accelerator program and launched our platform to connect students and artists across Canada.",
    position: "left",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-accent">
              About ZWEArt
            </h1>
            <p className="mt-6 text-lg text-muted">
              Canada&apos;s Online-Merge-Offline (OMO) platform for subcultural art
              education. We connect students and artists through hybrid classes,
              virtual exhibitions, and a culturally aware community—with proper
              credit and protected heritage at the core.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Our Story Section */}
      <SectionWrapper className="bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-accent text-center">
              The Challenge We Solve
            </h2>
            <p className="mt-6 text-center text-muted">
              Families across Canada face real barriers to subcultural art education:
            </p>
            <ul className="mt-4 max-w-xl mx-auto space-y-2 text-muted list-none">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Students dispersed across geography with limited local expertise</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Risk of cultural appropriation without proper credit to sources</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Artists lacking sustainable income and exposure for their craft</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Low awareness of subcultural arts outside traditional communities</span>
              </li>
            </ul>
            <p className="mt-6 text-center text-muted">
              In a survey of 559 respondents, 43.5% agreed there should be more
              art activities outside of school. ZWEArt exists to fill that gap—ethically.
            </p>
            {/* Image placeholder for carousel */}
            <div className="mt-10 relative aspect-[16/9] rounded-[24px] overflow-hidden bg-slate-200">
              <Image
                src="/about/carousel-1.png"
                alt="Children showcasing their artwork"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Why We Created Section */}
      <SectionWrapper>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-accent text-center">
              Our Solution
            </h2>
            <p className="mt-6 text-center text-muted">
              ZWEArt is an integrated Online-Merge-Offline (OMO) platform that addresses
              these challenges directly:
            </p>
            <ul className="mt-4 max-w-xl mx-auto space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span><strong>Ethical teaching:</strong> Proper credit to cultural sources, IP protection for artists</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span><strong>Hybrid access:</strong> In-studio, online, or both—regardless of location</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span><strong>Virtual exhibitions:</strong> Showcase student and artist work to a wider audience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span><strong>Community:</strong> Mentorship, peer support, and cultural knowledge exchange</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span><strong>Artist sustainability:</strong> Paid teaching opportunities and exposure for artists</span>
              </li>
            </ul>
            {/* Artwork image */}
            <div className="mt-10 flex justify-center">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-[24px] overflow-hidden bg-slate-200">
                <Image
                  src="/about/artwork-1.png"
                  alt="Children's artwork"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* What We Do Section */}
      <SectionWrapper className="bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-accent text-center">
              Who We Serve
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-[16px] border border-slate-200">
                <h3 className="font-display font-bold text-lg">For Students &amp; Families</h3>
                <ul className="mt-3 space-y-2 text-muted text-sm">
                  <li>• Immigrant children seeking connection to cultural heritage</li>
                  <li>• Second-generation children exploring their roots through art</li>
                  <li>• Arts-curious children wanting to learn beyond school</li>
                  <li>• Families who value ethical, credited art education</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-[16px] border border-slate-200">
                <h3 className="font-display font-bold text-lg">For Artists</h3>
                <ul className="mt-3 space-y-2 text-muted text-sm">
                  <li>• Subcultural artists seeking paid teaching opportunities</li>
                  <li>• Artists wanting exposure through virtual exhibitions</li>
                  <li>• Creators who value IP protection and proper credit</li>
                  <li>• Mentors passionate about cultural knowledge exchange</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Quote Section */}
      <SectionWrapper>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold leading-relaxed">
              &quot;Subcultural arts deserve to be taught with proper credit,
              protected heritage, and sustainable practice.&quot;
            </blockquote>
            <cite className="mt-6 block text-muted not-italic">— ZWEArt Mission</cite>
          </div>
        </Container>
      </SectionWrapper>

      {/* Timeline Section */}
      <SectionWrapper className="bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-accent text-center mb-12">
              Timeline
            </h2>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-300" />

              {/* Timeline items */}
              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Date circle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-24 h-24 rounded-full border-2 border-slate-300 bg-white flex flex-col items-center justify-center">
                        <span className="text-sm font-medium">{item.date}</span>
                        <span className="text-xl font-bold">{item.year}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                      }`}
                    >
                      <h3 className="text-lg font-display font-bold">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-muted text-sm">
                        {item.description}
                      </p>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="w-5/12" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper>
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-accent text-center">
              Our Team
            </h2>
            <p className="mt-4 text-center text-muted">
              A team committed to ethical subcultural art education across Canada.
            </p>

            {/* Team grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  {/* Photo */}
                  <div className="relative aspect-square rounded-[16px] overflow-hidden bg-slate-200 mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Name and role */}
                  <h3 className="font-display font-semibold text-sm">
                    {member.name}
                  </h3>
                  <p className="text-muted text-sm">{member.role}</p>
                  {/* LinkedIn */}
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-muted hover:text-accent transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
