import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "About - ZWEArt",
  description:
    "Learn about ZWEArt, a unique online-merged-offline platform crafted for art enthusiasts to come together, share their creativity, and enrich their artistic journeys.",
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
    title: "Our story begins",
    description:
      "Our art enthusiast group gathers regularly to brainstorm ideas for Omo art, also known as Zwearts. Together, we fuel creativity and collaborate to bring our unique visions to life.",
    position: "right",
  },
  {
    date: "August",
    year: "2023",
    title: "Website development",
    description:
      "We are actively in the process of developing our website, concurrently engaging with the artists' community for marketing activities. This strategic approach aims to introduce our platforms to art enthusiasts and foster a vibrant creative exchange.",
    position: "right",
  },
  {
    date: "December",
    year: "2023",
    title: "Graduation certificate with MTA and website launch",
    description:
      "Marking the culmination of our 18-month journey with MTA, we proudly present our graduation certificate alongside the launch of our website. Armed with comprehensive knowledge and skills acquired during this enriching experience, we are well-prepared to enter the market with confidence.",
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
              About Zweart
            </h1>
            <p className="mt-6 text-lg text-muted">
              ZweartArt is a unique online-merged-offline platform crafted for
              art enthusiasts to come together, share their creativity, and
              enrich their artistic journeys.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Our Story Section */}
      <SectionWrapper className="bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-accent text-center">
              This is our story.
            </h2>
            <p className="mt-6 text-center text-muted">
              At Zweart, we cater to the young and creative minds who never
              settle, always thrive on progress, and are on a continuous quest
              for fresh ideas and delightful experiences in their artistic
              endeavors. In an era of unprecedented connectivity, the world of
              young artists deserves an educational partner that shares their
              enthusiasm for innovation. Our platform is designed to adapt to
              children&apos;s learning needs, empowering them with creative
              control and guiding them into enchanting new artistic realms,
              where imagination knows no bounds.
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
              Why we created Zweart
            </h2>
            <p className="mt-6 text-center text-muted">
              At our core, we provide a hybrid art learning platform that
              seamlessly combines online and offline experiences, catering to
              the diverse needs of both art enthusiasts and children. With a
              special emphasis on cultural specialization, our platform offers a
              unique opportunity to explore and celebrate the rich tapestry of
              global artistry, fostering an environment where passion can
              thrive, and creativity can flourish. Whether you&apos;re an adult
              eager to dive deeper into the art world or a young artist
              discovering your talents, we are here to help you not only share
              your love for art but also nurture your growth in this exciting
              journey of artistic expression.
            </p>
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
              What we do
            </h2>
            <p className="mt-6 text-center text-muted">
              At our core, we provide a hybrid art learning platform that
              seamlessly combines online and offline experiences, catering to
              the diverse needs of both art enthusiasts and children. With a
              special emphasis on cultural specialization, our platform offers a
              unique opportunity to explore and celebrate the rich tapestry of
              global artistry, fostering an environment where passion can
              thrive, and creativity can flourish. Whether you&apos;re an adult
              eager to dive deeper into the art world or a young artist
              discovering your talents, we are here to help you not only share
              your love for art but also nurture your growth in this exciting
              journey of artistic expression.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Quote Section */}
      <SectionWrapper>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold leading-relaxed">
              &quot;Art is the universal language that speaks to the heart,
              transcending boundaries and inspiring limitless creativity&quot;
            </blockquote>
            <cite className="mt-6 block text-muted not-italic">--Zweart--</cite>
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
              Meet the passionate individuals behind our artistic journey, the
              heart and soul of our creative community.
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
