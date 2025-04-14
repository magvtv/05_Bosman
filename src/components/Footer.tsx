import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Social links
  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Behance", url: "https://behance.net" },
  ];

  // Scroll to section handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-architect-charcoal text-architect-off-white py-16">
      <div className="architect-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo/Branding */}
          <div className="md:col-span-4">
            <div className="mb-4">
              <svg
                viewBox="0 0 60 20"
                className="w-40 text-architect-off-white"
                fill="currentColor"
              >
                <path d="M1,19 L5,1 L10,1 L6,19 L1,19 Z" />
                <path d="M12,1 L16,1 L15,5 L19,5 L20,1 L24,1 L20,19 L16,19 L18,10 L14,10 L12,19 L8,19 L12,1 Z" />
                <path d="M25,19 L29,1 L41,1 L40,5 L32,5 L31,8 L38,8 L37,12 L30,12 L29,15 L37,15 L36,19 L25,19 Z" />
              </svg>
            </div>
            <p className="text-architect-off-white/70 mb-4">
              Architecture that respects context, embraces function, and
              transcends time.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-architect-off-white/60 hover:text-architect-off-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Site Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="text-lg font-montreal mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Button
                  variant="link"
                  className="p-0 text-architect-off-white/70 hover:text-architect-off-white"
                  onClick={() => scrollToSection("projects")}
                >
                  Projects
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="p-0 text-architect-off-white/70 hover:text-architect-off-white"
                  onClick={() =>
                    window.open("mailto:jonathan@example.com", "_blank")
                  }
                >
                  Contact
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="p-0 text-architect-off-white/70 hover:text-architect-off-white"
                  onClick={() => window.open("/portfolio.pdf", "_blank")}
                >
                  Request Portfolio PDF
                </Button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3 md:col-start-10">
            <h3 className="text-lg font-montreal mb-4">Contact</h3>
            <ul className="space-y-2 text-architect-off-white/70">
              <li>Nairobi, Kenya</li>
              <li>
                <a
                  href="mailto:jonathan@example.com"
                  className="hover:text-architect-off-white transition-colors"
                >
                  jonathan@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+254700000000"
                  className="hover:text-architect-off-white transition-colors"
                >
                  +254 700 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-architect-off-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-architect-off-white/50">
          <div>
            &copy; {currentYear} Jonathan Bosire Ndemo. All rights reserved.
          </div>
          <div className="mt-2 md:mt-0">
            Designed with intention. Built with precision.
          </div>
        </div>
      </div>
    </footer>
  );
}
