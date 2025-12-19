import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function FinalCTA() {
  return (
    <SectionWrapper>
      <Container>
        <div className="bg-accent rounded-[24px] p-8 sm:p-12 lg:p-16 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Ready to Start Your Child&apos;s Art Journey?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Join hundreds of Toronto families who&apos;ve discovered the joy of
            creative learning at ZWEArt. Book a free trial class today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              className="!bg-white !text-accent hover:!bg-white/90"
            >
              Book a trial class
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-white/90 hover:text-white font-semibold"
            >
              Have questions? Contact us
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
