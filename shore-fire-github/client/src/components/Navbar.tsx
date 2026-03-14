/*
 * Design: Structural Clarity — Light premium palette
 * Navbar: Sticky, minimal, hides on scroll down, reappears on scroll up.
 * Steel blue accents, clean white background.
 */

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsAtTop(currentScrollY < 20);

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
      setMobileOpen(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isAtTop
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
        }`}
      >
        <div className="container flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="flex gap-[3px]">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-[3px] bg-fire-red transition-all duration-300 group-hover:scale-y-110 ${
                    i === 0 ? "h-5" : i === 1 ? "h-7" : i === 2 ? "h-6" : "h-4"
                  }`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              ))}
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-heading text-lg font-800 tracking-tight transition-colors ${
                  isAtTop ? "text-white" : "text-slate"
                }`}
              >
                SHORE FIRE
              </span>
              <span
                className={`font-mono text-[0.6rem] tracking-[0.2em] uppercase transition-colors ${
                  isAtTop ? "text-white/70" : "text-slate-light"
                }`}
              >
                Consulting
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-body text-sm font-500 tracking-wide transition-colors hover:text-steel-blue ${
                  isAtTop ? "text-white/90 hover:text-white" : "text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-2 px-5 py-2.5 bg-fire-red text-white text-sm font-600 tracking-wide hover:bg-fire-red-light transition-colors"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isAtTop ? "text-white" : "text-foreground"
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-20"
          >
            <nav className="container flex flex-col gap-1 py-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-4 font-heading text-2xl font-700 text-slate hover:text-steel-blue transition-colors border-b border-border"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-6 px-6 py-4 bg-fire-red text-white text-lg font-heading font-700 text-center"
              >
                Get a Quote
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
