/*
 * Design: Structural Clarity — Light premium palette
 * Projects: Full-bleed photography alternating with constrained text.
 * Slate text, steel-blue accents, ice-blue content panels.
 * Updated: accurate anonymized projects, verticals grid (no fabricated counts).
 */

import AnimatedSection from "./AnimatedSection";

const WAREHOUSE_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663430345327/XwMCaMrprBQXxKd9ndrNEE/project-warehouse-nbtA7cL8JsMiuEWxijQLux.webp";

const DATACENTER_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663430345327/XwMCaMrprBQXxKd9ndrNEE/datacenter-main_6020f3a7.jpg";

const projects = [
  {
    image: WAREHOUSE_IMAGE,
    title: "Large-Scale Distribution Center",
    location: "United States",
    type: "Industrial / Warehouse",
    annotation: "1M+ SQ FT — ESFR / MHE / BIM",
    metrics: [
      { value: "1M+", label: "Sq Ft Protected" },
      { value: "ESFR", label: "K-25.2 Heads" },
    ],
    description:
      "Full fire sprinkler design for a million-square-foot distribution facility. ESFR K-25.2 pendent heads cover the primary storage areas, with in-rack protection provided in select zones where rack configuration required it. Scope included MHE protection throughout — conveyors, elevated platforms, and package handling areas. Full BIM coordination in Revit and Navisworks with the GC and MEP trades.",
  },
  {
    image: DATACENTER_IMAGE,
    title: "Hyperscale Data Center",
    location: "United States",
    type: "Data Center / Mission Critical",
    annotation: "150K+ SQ FT — PRE-ACTION / SHELL + TI",
    metrics: [
      { value: "150K+", label: "Sq Ft" },
      { value: "Pre-Action", label: "Suppression System" },
    ],
    description:
      "Fire suppression design for a large enterprise data center campus, covering both the shell and tenant improvement phases. Pre-action systems were designed throughout the server halls and support spaces. Design was coordinated with the mechanical and electrical trades and met FM Global data center loss prevention standards.",
  },
];

const verticals = [
  "Warehouses & Distribution",
  "Data Centers",
  "Healthcare",
  "Pharmaceutical",
  "High-Rise Residential",
  "High-Rise Commercial",
  "Industrial & Manufacturing",
  "Stadiums & Entertainment",
  "Universities & Education",
  "Retail & Commercial TI",
  "Mixed-Use Development",
  "Retrofit & Renovation",
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="container">
        <AnimatedSection>
          <span className="section-label">Selected Projects</span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-800 text-slate max-w-3xl">
            Complex projects.
            <br />
            Delivered without surprises.
          </h2>
          <p className="mt-6 font-body text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A sample of the work we do — from million-square-foot warehouses to
            mission-critical data centers. Every project runs through the same
            9-phase QA process, regardless of size or scope.
          </p>
        </AnimatedSection>
      </div>

      {/* Project cards */}
      <div className="mt-16 space-y-0">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div
                className={`relative overflow-hidden aspect-[4/3] lg:aspect-auto ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <span className="inline-block px-3 py-1.5 bg-steel-blue-dark/80 backdrop-blur-sm font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white/90">
                    {project.annotation}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-20 bg-ice-blue ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="max-w-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="annotation">{project.type}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-light" />
                    <span className="annotation">{project.location}</span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-800 text-slate">
                    {project.title}
                  </h3>

                  <p className="mt-4 font-body text-[0.95rem] text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="mt-8 flex gap-8">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-heading text-2xl font-800 text-steel-blue">
                          {m.value}
                        </div>
                        <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-slate-light">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 h-[2px] w-12 bg-steel-blue" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Verticals grid — no fabricated counts */}
      <div className="container mt-20">
        <AnimatedSection>
          <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-slate-light mb-6 block">
            Project Experience Across
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {verticals.map((v) => (
              <div
                key={v}
                className="px-4 py-3 border border-border bg-white hover:border-steel-blue/30 hover:bg-ice-blue transition-colors"
              >
                <div className="font-mono text-xs tracking-wide text-slate-light">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
