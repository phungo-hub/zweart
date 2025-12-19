import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const testimonials = [
  {
    quote:
      "ZWEArt has been transformative for my daughter. She started as a shy kid who was afraid to draw, and now she confidently creates beautiful artwork and has even won a local art competition. The instructors are patient, encouraging, and truly talented.",
    author: "Jennifer Thompson",
    role: "Parent of Emma, age 9",
    program: "Kids Art Program",
  },
  {
    quote:
      "As a teenager, my son was hesitant about 'art classes,' but ZWEArt's teen program changed his mind completely. He's now building a portfolio for art school applications and has developed skills I never knew he had. Worth every penny.",
    author: "Michael Rodriguez",
    role: "Parent of Carlos, age 15",
    program: "Teen Studio Program",
  },
  {
    quote:
      "The digital art program is incredible. My kids learned Procreate and basic animation in just a few months. The OMO method is perfect for our busy schedule—we can switch between online and in-person classes seamlessly.",
    author: "Amanda Chen",
    role: "Parent of twins, ages 12",
    program: "Digital Art & Animation",
  },
];

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            What Parents Say
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Don&apos;t just take our word for it—hear from families who&apos;ve
            experienced the ZWEArt difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-[24px] p-6 sm:p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
                <p className="text-sm text-accent mt-1">{testimonial.program}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
