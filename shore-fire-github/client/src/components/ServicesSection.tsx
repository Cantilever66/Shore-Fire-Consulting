/*
 * Design: Structural Clarity — Light premium palette
 * Services: Clean grid with technical annotations.
 * Ice-blue background, slate text, steel-blue accents.
 * Updated: full vertical breadth, stronger header copy, vertical tags strip.
 */

import AnimatedSection from "./AnimatedSection";
import {
  Droplets,
  Building2,
  Flame,
  Layers,
  Shield,
  Wrench,
  FlaskConical,
  HeartPulse,
  Warehouse,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Wet, Dry & Pre-Action Systems",
    annotation: "NFPA 13 / 13R / 13D",
    description:
      "Complete hydraulic design for wet, dry, pre-action, and deluge systems across every occupancy type. Every calculation verified, every layout optimized for constructability and code compliance.",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Industrial",
    annotation: "ESFR / IN-RACK / FM GLOBAL",
    description:
      "High-pile storage, ESFR systems, in-rack protection, and foam-water suppression for distribution centers, manufacturing facilities, and industrial occupancies of any scale.",
  },
  {
    icon: Layers,
    title: "BIM Coordination",
    annotation: "LOD 200–400",
    description:
      "Full 3D coordination in Revit and Navisworks. We integrate with mechanical, electrical, and structural trades to eliminate clashes before they reach the field — every time.",
  },
  {
    icon: Building2,
    title: "High-Rise & Commercial",
    annotation: "IBC / STANDPIPE / PUMP",
    description:
      "Specialized design for high-rise towers, mixed-use developments, and large commercial buildings — including standpipe integration, fire pump sizing, and complex zoning.",
  },
  {
    icon: FlaskConical,
    title: "Pharmaceutical & Data Centers",
    annotation: "SPECIAL HAZARDS / CLEAN AGENT",
    description:
      "Precision suppression design for pharmaceutical facilities, cleanrooms, and data centers where standard systems aren't sufficient and downtime is not an option.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Institutional",
    annotation: "NFPA 101 / HTM",
    description:
      "Fire suppression design for hospitals, medical office buildings, universities, and other institutional occupancies with complex occupancy classifications and life-safety requirements.",
  },
  {
    icon: Flame,
    title: "Special Hazards",
    annotation: "FM GLOBAL / UL LISTED",
    description:
      "Engineered suppression solutions for chemical storage, server rooms, stadiums, entertainment venues, and any occupancy requiring non-standard suppression approaches.",
  },
  {
    icon: Shield,
    title: "Code Consulting & AHJ Liaison",
    annotation: "PLAN REVIEW / VARIANCE",
    description:
      "We navigate complex code requirements, support plan review submissions, and coordinate directly with Authorities Having Jurisdiction to keep your project moving.",
  },
  {
    icon: Wrench,
    title: "Retrofit & Renovation",
    annotation: "EXISTING BUILDINGS",
    description:
      "Adaptive design for occupied and existing structures where every inch matters. We survey, model, and design systems that work within the real constraints of your building.",
  },
];

const verticals = [
  "Warehouses",
  "Data Centers",
  "Healthcare",
  "Pharmaceutical",
  "High-Rise",
  "Industrial",
  "Stadiums & Entertainment",
  "Universities",
  "Residential",
  "Commercial TI",
  "Manufacturing",
  "Mixed-Use",
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-ice-blue">
      {/* Diagonal cut at top */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-white"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)",
        }}
      />

      <div className="container">
        {/* Section header */}
        <AnimatedSection>
          <span className="section-label">What We Do</span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-800 text-slate max-w-3xl">
            Every system type.
            <br />
            Every building type.
          </h2>
          <p className="mt-6 font-body text-lg text-muted-foreground max-w-2xl leading-relaxed">
            From standard wet systems to complex special hazard suppression,
            from high-rises to pharmaceutical facilities — Shore Fire brings
            the same documented process and QA rigor to every project,
            regardless of scope or complexity.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.07}>
              <div className="group">
                {/* Icon + Annotation row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-steel-blue/10 text-steel-blue group-hover:bg-steel-blue group-hover:text-white transition-colors duration-300">
                    <service.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="annotation">{service.annotation}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-700 text-slate group-hover:text-steel-blue transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 font-body text-[0.95rem] text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom line */}
                <div className="mt-5 h-[2px] w-8 bg-border group-hover:w-16 group-hover:bg-steel-blue transition-all duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Verticals strip */}
        <AnimatedSection delay={0.2}>
          <div className="mt-20 pt-12 border-t border-border">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-slate-light mb-6 block">
              Markets We Serve
            </span>
            <div className="flex flex-wrap gap-3">
              {verticals.map((v) => (
                <span
                  key={v}
                  className="px-4 py-2 border border-border bg-white font-mono text-xs tracking-wide text-slate-light hover:border-steel-blue/40 hover:text-steel-blue hover:bg-steel-blue/5 transition-colors"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
