/*
 * Design: Structural Clarity — What Sets Us Apart
 * Updated to match the light blue/gray/white color scheme of the rest of the site.
 * Ice-blue background, slate text, steel-blue accents, fire-red as accent only.
 */

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { BrainCircuit, FileCheck2, GitBranch, ShieldCheck } from "lucide-react";

const differentiators = [
  {
    icon: BrainCircuit,
    tag: "AI Infrastructure",
    title: "Proprietary GPT System",
    description:
      "We built a custom AI copilot trained on NFPA 13, our full SOP library, and years of project data. Every designer on our team works alongside it — catching errors before they reach the field, not after.",
  },
  {
    icon: FileCheck2,
    tag: "Operational Systems",
    title: "Documented. Repeatable. Scalable.",
    description:
      "Most design firms run on tribal knowledge. We run on systems. Every phase of our workflow is documented in SOPs, checklists, and project guides — so quality doesn't depend on who's in the seat.",
  },
  {
    icon: GitBranch,
    tag: "9-Phase Workflow",
    title: "Gated QA at Every Stage",
    description:
      "Our 9-phase project workflow includes mandatory QA gates at 30% design and final issue. No drawing leaves our office without a senior review. That's not a policy — it's how we're built.",
  },
  {
    icon: ShieldCheck,
    tag: "Training Infrastructure",
    title: "A Firm That Teaches Itself",
    description:
      "We've built internal training tools, video libraries, and onboarding systems so that every new hire ramps up faster and every designer works to the same standard. Knowledge doesn't walk out the door.",
  },
];

export default function SavingsSection() {
  return (
    <section className="py-24 lg:py-32 bg-ice-blue overflow-hidden relative">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,60,114,1) 1px, transparent 1px), linear-gradient(90deg, rgba(30,60,114,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative">
        {/* Header */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-fire-red font-500">
                What Sets Us Apart
              </span>
              <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-800 text-slate leading-tight">
                Most firms hand you
                <br />
                drawings. We hand
                <br />
                <span className="text-steel-blue">you a system.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-xl">
                Shore Fire has spent years building the operational
                infrastructure that most design firms never prioritize —
                proprietary AI tools, custom GPTs, documented SOPs, and
                repeatable QA processes that perform consistently at volume.
                It's what makes us different. And it's what makes us{" "}
                <span className="text-slate font-500">the most dependable design partner on your roster.</span>
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Differentiator cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {differentiators.map((item, i) => (
            <AnimatedSection key={item.tag} delay={i * 0.1}>
              <motion.div
                className="group bg-white p-8 lg:p-10 hover:bg-ice-blue transition-colors duration-500 relative overflow-hidden"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {/* Animated left border on hover */}
                <motion.div
                  className="absolute left-0 top-0 w-[3px] bg-fire-red origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                  style={{ height: "100%" }}
                />

                {/* Icon + tag */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 flex items-center justify-center bg-steel-blue/10 text-steel-blue">
                    <item.icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-fire-red/80">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-700 text-slate mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-body text-[0.95rem] text-muted-foreground leading-relaxed group-hover:text-slate transition-colors duration-300">
                  {item.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom statement */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 pt-12 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-slate-light max-w-lg leading-relaxed">
              From first intake to final issue — our process is documented,
              repeatable, and built to perform at volume. Every time.
            </p>
            <a
              href="#technology"
              className="shrink-0 inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.18em] uppercase text-steel-blue hover:text-slate transition-colors"
            >
              Explore our technology
              <span className="text-fire-red">→</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
