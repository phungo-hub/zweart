type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}
