/*
 * Design: Structural Clarity — Technology Section (v2)
 * Two-part section: BIM/CAD tools first, then AI/GPT systems.
 * Steel-blue-dark background throughout for visual continuity.
 * Stats row uses only verifiable, defensible proof points.
 */

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { BrainCircuit, BookOpen, ClipboardList } from "lucide-react";

const BIM_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663430345327/XwMCaMrprBQXxKd9ndrNEE/bim-technology-auYSLbfKmRAuMvYjk4Cw4k.webp";

const TEAM_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663430345327/XwMCaMrprBQXxKd9ndrNEE/team-engineering-LDjSFNZd8qKrHhH2iJZSBr.webp";

const capabilities = [
  {
    label: "AutoCAD",
    detail: "Precision 2D sprinkler layout and design documentation",
  },
  {
    label: "Autodesk Revit",
    detail: "Native 3D sprinkler modeling with families and schedules",
  },
  {
    label: "Navisworks",
    detail: "Clash detection and multi-trade coordination",
  },
  {
    label: "HydraCAD",
    detail: "Hydraulic calculations and system optimization",
  },
  {
    label: "BIM 360 / ACC",
    detail: "Cloud-based collaboration with GCs and trades",
  },
];

const aiCapabilities = [
  {
    icon: BrainCircuit,
    label: "Shore Fire GPT",
    detail:
      "A custom AI copilot trained on NFPA 13, our SOP library, and project history. Designers use it at every stage to verify code compliance, flag issues, and accelerate decisions.",
  },
  {
    icon: BookOpen,
    label: "Internal Training System",
    detail:
      "Video libraries, onboarding guides, and role-specific learning paths built in-house. New hires ramp faster. Senior knowledge stays in the firm.",
  },
  {
    icon: ClipboardList,
    label: "SOP & Checklist Library",
    detail:
      "Every phase of our workflow is documented — from intake to final issue. Phase-specific checklists eliminate guesswork and create a consistent output standard across every project.",
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="relative bg-cool-gray overflow-hidden">

      {/* BIM Visualization — Full bleed */}
      <div className="relative w-full aspect-[16/7] lg:aspect-[16/6]">
        <img
          src={BIM_IMAGE}
          alt="3D BIM model of fire sprinkler system with color-coded MEP systems"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cool-gray" />
        <div className="absolute bottom-8 left-0 container">
          <AnimatedSection>
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-slate/70">
              BIM LOD 200–400 — Full Coordination Model
            </span>
          </AnimatedSection>
        </div>
      </div>

      {/* Part 1 — BIM & Design Tools */}
      <div className="container py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Text */}
          <div>
            <AnimatedSection>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-steel-blue font-500">
                Design Technology
              </span>
              <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-800 text-slate leading-tight">
                Built for coordination.
                <br />
                Designed for the field.
              </h2>
              <p className="mt-6 font-body text-lg text-muted-foreground leading-relaxed">
                When a project calls for BIM, we deliver. Our sprinkler models
                are built natively in Revit and coordinated in Navisworks —
                eliminating field conflicts before a single pipe gets ordered.
                Every model is construction-ready from the start.
              </p>
            </AnimatedSection>

            {/* Capabilities list */}
            <div className="mt-12 space-y-6">
              {capabilities.map((cap, i) => (
                <AnimatedSection key={cap.label} delay={i * 0.1}>
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 w-2 h-2 bg-steel-blue shrink-0" />
                    <div>
                      <h4 className="font-heading text-base font-700 text-slate">
                        {cap.label}
                      </h4>
                      <p className="mt-1 font-body text-sm text-muted-foreground">
                        {cap.detail}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right — Engineering workspace image */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <img
                src={TEAM_IMAGE}
                alt="Modern engineering workspace with BIM models on dual monitors"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white/50">
                  AutoCAD + Revit + HydraCAD + Navisworks
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Divider */}
      <div className="container">
        <div className="border-t border-white/10" />
      </div>

      {/* Part 2 — AI & Proprietary Systems */}
      <div className="container py-20 lg:py-28">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-fire-red font-500">
                Proprietary AI Systems
              </span>
              <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-800 text-slate leading-tight">
                The layer no other
                <br />
                design firm has built.
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Beyond the industry-standard tools, Shore Fire has built a
                proprietary technology layer — custom GPTs, internal training
                systems, and a documented SOP library — that ensures every
                designer on our team operates at the same high standard,
                every time.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* AI capabilities — horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {aiCapabilities.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.12}>
              <div className="bg-white p-8 lg:p-10 group hover:bg-ice-blue transition-colors duration-300 h-full">
                <div className="w-10 h-10 flex items-center justify-center bg-fire-red/10 text-fire-red mb-6">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-700 text-slate mb-3">
                  {item.label}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-20 pt-12 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "9", label: "Phase QA Workflow" },
              { value: "20+", label: "States Nationwide" },
              { value: "3", label: "Proprietary AI Tools" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileInView={{ opacity: [0, 1] }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <div className="font-heading text-3xl lg:text-4xl font-900 text-steel-blue">
                  {stat.value}
                </div>
                <div className="mt-2 font-mono text-[0.65rem] tracking-[0.15em] uppercase text-slate-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>

    </section>
  );
}
