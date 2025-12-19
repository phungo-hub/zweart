import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block bg-white rounded-lg p-2">
              <Image
                src="/logo.png"
                alt="ZWEArt by OMO ART INC"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-white/70 max-w-sm">
              Toronto-based art school nurturing creative minds for kids and
              teens ages 6-17.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <a
              href="mailto:hello@zweart.com"
              className="text-white/70 hover:text-white transition-colors"
            >
              hello@zweart.com
            </a>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} ZWEArt. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
