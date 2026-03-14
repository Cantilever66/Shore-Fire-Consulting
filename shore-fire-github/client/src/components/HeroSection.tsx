/*
 * Design: Structural Clarity — Light premium palette
 * Hero: Split layout — text left, image right. White/ice-blue background.
 * Matches the rest of the site's light color scheme.
 * AI supporting line removed per user request.
 */

import { motion } from "framer-motion";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663430345327/XwMCaMrprBQXxKd9ndrNEE/hero-construction_7dbb03fe.jpg";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "20+", label: "States Nationwide" },
  { value: "10", label: "Person Expert Team" },
  { value: "BIM", label: "Coordinated Design" },
];

const verticals = [
  "Warehouses", "Data Centers", "Healthcare", "Pharmaceutical",
  "High-Rise", "Industrial", "Stadiums", "Universities",
  "Entertainment", "Residential", "Commercial",
];

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex flex-col">
      {/* Top red accent line */}
      <div className="absolute left-0 top-0 w-[3px] h-full bg-fire-red z-10" />

      {/* Main content — split layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">

        {/* Left — text */}
        <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 pt-32 pb-12 lg:pt-36 lg:pb-16 bg-white">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-fire-red flex items-center gap-3">
              <span className="w-6 h-px bg-fire-red inline-block" />
              Fire Sprinkler Design
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-900 text-slate leading-[1.05]"
          >
            Fire Sprinkler Design.
            <br />
            <span className="text-steel-blue">Engineered for Scale.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-6 font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Shore Fire delivers <strong className="text-slate font-600">BIM-coordinated sprinkler design across every
            major building type</strong> — from high-rises and stadiums to universities,
            healthcare, pharmaceutical, and industrial facilities. We stay ahead
            of the fastest-growing sectors, including warehouses and data centers,
            where demand is highest and complexity is unmatched.
          </motion.p>

          {/* Vertical tags */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {verticals.map((v, i) => (
              <span
                key={v}
                className={`font-mono text-[0.6rem] tracking-[0.12em] uppercase px-3 py-1 border ${
                  i < 2
                    ? "border-fire-red/40 text-fire-red/80 bg-fire-red/5"
                    : "border-border text-slate-light bg-ice-blue"
                }`}
              >
                {v}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-fire-red text-white font-heading font-700 text-sm tracking-wide hover:bg-fire-red-light transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-steel-blue text-steel-blue font-heading font-600 text-sm tracking-wide hover:bg-steel-blue hover:text-white transition-colors"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
          className="relative overflow-hidden min-h-[400px] lg:min-h-full"
        >
          <img
            src={HERO_IMAGE}
            alt="High-rise construction — Shore Fire Consulting project"
            className="w-full h-full object-cover"
          />
          {/* Subtle left fade to blend with white text panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Stat strip — full width at bottom */}
      <div className="border-t border-border bg-ice-blue grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + i * 0.1, duration: 0.5 }}
            className={`py-5 px-6 ${i < stats.length - 1 ? "border-r border-border" : ""}`}
          >
            <div className="font-heading text-2xl font-900 text-steel-blue">
              {stat.value}
            </div>
            <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-slate-light mt-1">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
