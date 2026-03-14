/*
 * Design: Structural Clarity — Light premium palette
 * Footer: Slate background, steel-blue accents, clean minimal layout.
 * Updated: real contact info, corrected tagline, updated services list.
 */

import { toast } from "sonner";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & tagline */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-[3px]">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-[3px] bg-fire-red ${
                      i === 0
                        ? "h-5"
                        : i === 1
                        ? "h-7"
                        : i === 2
                        ? "h-6"
                        : "h-4"
                    }`}
                  />
                ))}
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-lg font-800 tracking-tight text-white">
                  SHORE FIRE
                </span>
                <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white/40">
                  Consulting
                </span>
              </div>
            </div>
            <p className="mt-6 font-body text-sm text-white/40 leading-relaxed max-w-xs">
              Specialized fire sprinkler design for every major building type —
              backed by proprietary AI systems, documented SOPs, and a team
              that treats every project with senior oversight.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-steel-blue-light">
              Services
            </span>
            <ul className="mt-4 space-y-2.5">
              {[
                "Wet, Dry & Pre-Action",
                "Warehouse & Industrial",
                "BIM Coordination",
                "High-Rise & Commercial",
                "Pharmaceutical & Data Centers",
                "Healthcare & Institutional",
                "Special Hazards",
                "Code Consulting",
                "Retrofit & Renovation",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="font-body text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-steel-blue-light">
              Company
            </span>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Technology", href: "#technology" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-body text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-steel-blue-light">
              Get in Touch
            </span>
            <div className="mt-4 space-y-2.5">
              <a
                href="mailto:info@shorefireconsulting.com"
                className="block font-body text-sm text-white/50 hover:text-white transition-colors"
              >
                info@shorefireconsulting.com
              </a>
              <a
                href="tel:+17325800343"
                className="block font-body text-sm text-white/50 hover:text-white transition-colors"
              >
                (732) 580-0343
              </a>
              <p className="font-body text-sm text-white/30">
                Serving projects nationwide
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white/30">
            &copy; {currentYear} Shore Fire Consulting. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white/30 hover:text-white/60 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                toast("Feature coming soon");
              }}
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white/30 hover:text-white/60 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                toast("Feature coming soon");
              }}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
