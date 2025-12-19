import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const galleryImages = [
  { id: 1, src: "/gallery/art-1.png", alt: "Student artwork 1" },
  { id: 2, src: "/gallery/art-2.png", alt: "Student artwork 2" },
  { id: 3, src: "/gallery/art-3.png", alt: "Student artwork 3" },
  { id: 4, src: "/gallery/art-4.png", alt: "Student artwork 4" },
  { id: 5, src: "/gallery/art-5.png", alt: "Student artwork 5" },
  { id: 6, src: "/gallery/art-6.png", alt: "Student artwork 6" },
  { id: 7, src: "/gallery/art-7.png", alt: "Student artwork 7" },
  { id: 8, src: "/gallery/art-8.png", alt: "Student artwork 8" },
  { id: 9, src: "/gallery/art-9.png", alt: "Student artwork 9" },
];

export function Gallery() {
  return (
    <SectionWrapper id="gallery" className="bg-slate-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Student Gallery
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Explore the amazing creations from our talented students. Every
            piece tells a unique story.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square bg-white border border-border rounded-[16px] overflow-hidden relative hover:shadow-lg transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
