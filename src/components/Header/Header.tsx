import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import headerLogo from "/logo.svg";

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: string;
  logoText?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  variant?: "light" | "dark";
}

export const Header: React.FC<HeaderProps> = ({
  logo = headerLogo,
  logoText = "Creative Agency",
  navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  ctaButtonText = "Get Started",
  ctaButtonHref = "#contact",
  variant = "light",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-white/10 backdrop-blur-md"
            : "bg-transparent backdrop-blur-sm"
        } ${variant === "dark" ? "bg-primary-black/95 text-white" : "text-primary-black"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* LAYOUT WRAPPER */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* LEFT: Logo */}
          <a
            href="/"
            className="flex items-center gap-2 font-display font-bold text-lg md:text-xl relative z-50 hover:opacity-80 transition-opacity hover:text-white"
          >
            {logo ? (
              <img src={logo} alt={logoText} className="h-8 md:h-10 w-auto" />
            ) : (
              <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-accent-pink rounded-md text-white">
                {logoText.charAt(0)}
              </div>
            )}
            <span className="hidden sm:block whitespace-nowrap">
              {logoText}
            </span>
          </a>

          {/* CENTER: Desktop Navigation (Hidden on lg < 1024px) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium relative group transition-colors hover:text-accent-pink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-pink transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT: Actions (CTA Button & Mobile Toggle) */}
          <div className="flex items-center gap-4 relative z-50">
            {/* Desktop CTA (Hidden on lg < 1024px) */}
            <a
              href={ctaButtonHref}
              className="hidden lg:flex items-center justify-center px-6 py-2.5 bg-gradient-to-br from-brand-green to-[#059669] text-white text-sm font-medium rounded-md hover:opacity-90 hover:shadow-lg hover:shadow-brand-green/30 transition-all duration-200 whitespace-nowrap"
            >
              {ctaButtonText}
            </a>

            {/* Mobile/Tablet Menu Button (Visible on lg < 1024px) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white dark:bg-primary-black pt-20 px-6 lg:hidden flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-primary-black dark:text-white border-b border-neutral-100 dark:border-neutral-800 pb-4"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href={ctaButtonHref}
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 w-full md:w-60 py-4 bg-accent-pink text-white text-center rounded-md font-bold text-lg hover:bg-accent-pink-dark transition-colors"
            >
              {ctaButtonText}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
