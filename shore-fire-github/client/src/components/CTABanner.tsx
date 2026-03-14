/*
 * Design: Structural Clarity — Light premium palette
 * CTA Banner: Bold section with large typography and a single CTA.
 * Steel-blue-dark background for contrast, steel-blue accents.
 */

import AnimatedSection from "./AnimatedSection";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-24 lg:py-32 bg-steel-blue-dark overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-steel-blue-light to-transparent" />

      <div className="container text-center">
        <AnimatedSection>
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-steel-blue-light font-500">
            Ready to Start?
          </span>
          <h2 className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-900 text-white leading-tight max-w-4xl mx-auto">
            Let's talk about
            <br />
            <span className="text-steel-blue-light">your next project</span>
          </h2>
          <p className="mt-6 font-body text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            From a 50-story tower to a million-square-foot warehouse — every
            project gets the same documented process, senior oversight, and
            response within 48 hours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-fire-red text-white font-heading font-700 text-sm tracking-wide hover:bg-fire-red-light transition-colors"
            >
              Start Your Project
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="tel:+17325800343"
              className="inline-flex items-center justify-center px-10 py-4 border border-white/20 text-white font-heading font-600 text-sm tracking-wide hover:bg-white/5 transition-colors"
            >
              Call (732) 580-0343
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
