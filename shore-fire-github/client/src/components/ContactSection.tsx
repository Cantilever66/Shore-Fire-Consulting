/*
 * Design: Structural Clarity — Light premium palette
 * Contact: Split layout — form left, info right. Clean, professional.
 * Ice-blue background, slate text, steel-blue accents.
 */

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { toast } from "sonner";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const projectTypes = [
  "High-Rise Commercial",
  "Industrial / Warehouse",
  "Healthcare",
  "Education",
  "Data Center",
  "Mixed-Use / Residential",
  "Retrofit / Renovation",
  "Other",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    squareFootage: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry. Our team will respond within 24 hours.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "",
      squareFootage: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-ice-blue">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left — Form */}
          <div className="lg:col-span-7">
            <AnimatedSection>
              <span className="section-label">Start a Project</span>
              <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-800 text-slate">
                Let's engineer
                <br />
                something exceptional
              </h2>
              <p className="mt-4 font-body text-muted-foreground leading-relaxed max-w-lg">
                Tell us about your project and we'll provide a detailed scope
                and timeline within 48 hours.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="annotation block mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-border font-body text-sm text-slate placeholder:text-slate-light/50 focus:border-steel-blue focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="annotation block mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-border font-body text-sm text-slate placeholder:text-slate-light/50 focus:border-steel-blue focus:outline-none transition-colors"
                      placeholder="ABC Construction"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="annotation block mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-border font-body text-sm text-slate placeholder:text-slate-light/50 focus:border-steel-blue focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="annotation block mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-border font-body text-sm text-slate placeholder:text-slate-light/50 focus:border-steel-blue focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="annotation block mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-border font-body text-sm text-slate focus:border-steel-blue focus:outline-none transition-colors appearance-none"
                    >
                      <option value="">Select type...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="annotation block mb-2">
                      Approx. Square Footage
                    </label>
                    <input
                      type="text"
                      name="squareFootage"
                      value={formData.squareFootage}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-border font-body text-sm text-slate placeholder:text-slate-light/50 focus:border-steel-blue focus:outline-none transition-colors"
                      placeholder="500,000 sq ft"
                    />
                  </div>
                </div>

                <div>
                  <label className="annotation block mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-border font-body text-sm text-slate placeholder:text-slate-light/50 focus:border-steel-blue focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project scope, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-steel-blue text-white font-heading font-700 text-sm tracking-wide hover:bg-steel-blue-light transition-colors"
                >
                  Submit Inquiry
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </AnimatedSection>
          </div>

          {/* Right — Contact info */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.2}>
              <div className="lg:sticky lg:top-28 space-y-10">
                {/* Contact details */}
                <div>
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-slate-light">
                    Direct Contact
                  </span>
                  <div className="mt-4 space-y-4">
                    <a
                      href="mailto:info@shorefireconsulting.com"
                      className="flex items-center gap-3 font-body text-slate hover:text-steel-blue transition-colors"
                    >
                      <Mail size={16} className="text-steel-blue" />
                      info@shorefireconsulting.com
                    </a>
                    <a
                      href="tel:+17325800343"
                      className="flex items-center gap-3 font-body text-slate hover:text-steel-blue transition-colors"
                    >
                      <Phone size={16} className="text-steel-blue" />
                      (732) 580-0343
                    </a>
                    <div className="flex items-start gap-3 font-body text-slate">
                      <MapPin size={16} className="text-steel-blue mt-1 shrink-0" />
                      <span>
                        National Headquarters
                        <br />
                        <span className="text-muted-foreground text-sm">
                          Serving projects across all 50 states
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Response time */}
                <div className="p-6 border border-border bg-white">
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-steel-blue">
                    Response Commitment
                  </span>
                  <h4 className="mt-3 font-heading text-lg font-700 text-slate">
                    48-Hour Proposal Turnaround
                  </h4>
                  <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">
                    Every inquiry receives a detailed scope, timeline, and fee
                    proposal within two business days. For urgent projects, call
                    us directly.
                  </p>
                </div>

                {/* Ideal client */}
                <div className="p-6 border border-border bg-white">
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-steel-blue-dark">
                    Ideal Projects
                  </span>
                  <ul className="mt-4 space-y-2">
                    {[
                      "100,000+ sq ft commercial buildings",
                      "Multi-story and high-rise construction",
                      "Projects requiring BIM coordination",
                      "Complex hazard classifications",
                      "Tight-timeline design-build projects",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-steel-blue mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
