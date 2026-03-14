/*
 * Design: Structural Clarity — Light premium palette
 * About: Editorial layout telling Shore Fire's real story.
 * Founder-led, technology-forward, boutique high-output firm.
 * Accurate memberships, no certifications, no four pillars framing.
 */

import AnimatedSection from "./AnimatedSection";
import { BrainCircuit, Users, MapPin, BookOpen } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Small team. Serious output.",
    description:
      "Shore Fire is a 10-person firm that punches well above its weight. Every designer on our team is hands-on, every project gets senior attention, and nothing leaves our office without passing through a documented QA process. We don't scale through headcount — we scale through systems.",
  },
  {
    icon: MapPin,
    title: "Built for the most complex work.",
    description:
      "We've designed fire suppression systems for warehouses over a million square feet, hyperscale data centers, high-rise towers, pharmaceutical facilities, healthcare campuses, stadiums, and everything in between. We work regularly with insurance carriers including Factory Mutual (FM Global), designing to their loss prevention standards on projects where it's required. Complex scope is where we're most comfortable.",
  },
  {
    icon: BrainCircuit,
    title: "Technology is part of how we work.",
    description:
      "We build our own tools. A custom GPT trained on NFPA standards and our SOP library. Documented workflows for every phase of a project. Internal training systems that keep every designer working to the same standard. Most firms don't invest in this — we think it's the job.",
  },
  {
    icon: BookOpen,
    title: "We stay current. Always.",
    description:
      "Codes change. Standards evolve. New systems emerge. We hold active memberships with NFPA, ICC, AFSA, and NFSA, and we continuously invest in education through webinars, training courses, and industry events. When a new edition drops, we're already reading it.",
  },
];

const memberships = [
  "NFPA Member",
  "ICC Member",
  "AFSA Member",
  "NFSA Member",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container">

        {/* Header */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
            <div className="lg:col-span-5">
              <span className="section-label">About Shore Fire</span>
              <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-800 text-slate leading-tight">
                A different kind
                <br />
                of design firm.
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-xl">
                Shore Fire Consulting is a specialized fire sprinkler design
                firm built on three things: deep technical experience across
                every major building type, a technology infrastructure most
                firms never bother to build, and a team that treats every
                project — regardless of size — with the same documented
                process and senior oversight.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Four identity pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {pillars.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="relative pl-8 border-l-2 border-border hover:border-steel-blue transition-colors duration-500 group">
                <div className="flex items-center gap-3 mb-3">
                  <item.icon
                    size={18}
                    className="text-steel-blue"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-heading text-xl font-700 text-slate group-hover:text-steel-blue transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-[0.95rem] text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Memberships */}
        <AnimatedSection delay={0.2}>
          <div className="mt-24 pt-12 border-t border-border">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-slate-light">
              Industry Memberships
            </span>
            <div className="mt-6 flex flex-wrap gap-3">
              {memberships.map((m) => (
                <span
                  key={m}
                  className="px-4 py-2 border border-border font-mono text-xs tracking-wide text-slate hover:border-steel-blue/30 hover:bg-steel-blue/5 transition-colors"
                >
                  {m}
                </span>
              ))}
            </div>
            <p className="mt-6 font-body text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Staying current is part of the work. Our team continuously
              invests in education through industry webinars, code update
              training, and ongoing coursework — so our designs always reflect
              the latest standards and best practices.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
