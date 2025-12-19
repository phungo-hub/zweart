import { Container } from "@/components/ui/Container";

const quickTestimonials = [
  {
    quote: "My daughter's confidence has grown so much!",
    author: "Sarah M.",
  },
  {
    quote: "The best art classes in Toronto, hands down.",
    author: "David L.",
  },
  {
    quote: "My son can't wait for his weekly class.",
    author: "Michelle K.",
  },
];

const metrics = [
  { value: "500+", label: "Students taught" },
  { value: "5", label: "Years of experience" },
  { value: "4.9", label: "Star rating" },
];

export function ProofStrip() {
  return (
    <section className="py-12 bg-slate-50 border-y border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Testimonials */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            {quickTestimonials.map((item, index) => (
              <div key={index} className="flex-1">
                <p className="text-sm text-muted italic">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-2 text-sm font-semibold">{item.author}</p>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div className="flex justify-center lg:justify-end gap-8 sm:gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl sm:text-3xl font-display font-bold text-accent">
                  {metric.value}
                </p>
                <p className="text-sm text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
