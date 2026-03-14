/*
 * Design: Structural Clarity — Light premium palette
 * Process: Horizontal timeline showing the design workflow.
 * Correct order: Scope → Design → BIM (when contracted) → Submittal & Install
 */

import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Scope & Review",
    annotation: "PLANS / SPECS / CODES",
    description:
      "We review architectural drawings, specifications, and applicable codes to define the full scope of fire protection requirements for the project.",
  },
  {
    number: "02",
    title: "Design",
    annotation: "AUTOCAD / REVIT / HYDRACAD",
    description:
      "Our designers produce complete sprinkler layouts using AutoCAD and Revit, with hydraulic calculations performed in HydraCAD to verify water supply, pressure, and flow.",
  },
  {
    number: "03",
    title: "BIM Coordination",
    annotation: "NAVISWORKS / REVIT",
    description:
      "For projects contracted with BIM, we perform full 3D coordination in Navisworks and Revit — resolving multi-trade clashes before they reach the field.",
  },
  {
    number: "04",
    title: "Submittal & Install",
    annotation: "AHJ APPROVAL",
    description:
      "Construction-ready documents are submitted for AHJ approval. We support the installer through final acceptance testing and project closeout.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-cool-gray">
      <div className="container">
        <AnimatedSection>
          <span className="section-label">Our Process</span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-800 text-slate max-w-3xl">
            From plans to protection
            <br />
            in four phases
          </h2>
        </AnimatedSection>

        {/* Process steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="relative group">
                {/* Connecting line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(50%+20px)] right-[-50%] h-[1px] bg-silver" />
                )}

                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-heading text-3xl font-900 text-steel-blue/20 group-hover:text-steel-blue transition-colors duration-500">
                    {step.number}
                  </span>
                  <div className="h-[1px] flex-1 bg-silver md:hidden" />
                </div>

                {/* Annotation */}
                <span className="annotation">{step.annotation}</span>

                {/* Title */}
                <h3 className="mt-2 font-heading text-lg font-700 text-slate">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* BIM note for step 3 */}
                {step.number === "03" && (
                  <span className="mt-3 inline-block font-mono text-[0.6rem] tracking-[0.1em] uppercase text-steel-blue/70 border border-steel-blue/20 px-2 py-1">
                    When contracted
                  </span>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
