/*
 * Design: Structural Clarity — Architectural Minimalism with Engineering Soul
 * Home Page: Assembles all sections in the correct editorial flow.
 * Full-bleed photography alternates with constrained text sections.
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SavingsSection from "@/components/SavingsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TechnologySection from "@/components/TechnologySection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SavingsSection />
      <ServicesSection />
      <ProcessSection />
      <TechnologySection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
