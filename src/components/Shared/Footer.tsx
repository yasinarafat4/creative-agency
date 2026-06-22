import { motion } from "framer-motion";
import React from "react";
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface FooterProps {
  logoText?: string;
}

export const Footer: React.FC<FooterProps> = ({
  logoText = "Creative Agency",
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05070c] pt-20 pb-10 border-t border-neutral-800 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div>
        {/* Top CTA Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Have an idea? <br />
            Let's <span className="text-gradient-neon">build it.</span>
          </motion.h2>

          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center  px-10 py-4 text-base font-bold text-black rounded-md bg-brand-green hover:bg-brand-green/90 hover:shadow-xl hover:shadow-brand-green/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            Start a Project
          </motion.a>
        </div>
        <hr className="border-neutral-800/60 mb-16" />

        {/* Main Footer Content */}
        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="flex items-center gap-2 font-display font-bold text-xl text-white mb-6 hover:opacity-80 transition-opacity w-max"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-brand-green rounded-md text-black">
                {logoText.charAt(0)}
              </div>
              <span>{logoText}</span>
            </a>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              We design and build digital experiences that help modern brands
              grow, scale, and succeed in the digital era.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { Icon: FaFacebook, url: "https://www.facebook.com/" },
                { Icon: FaLinkedin, url: "https://www.linkedin.com/" },
                { Icon: FaXTwitter, url: "https://x.com/" },
                { Icon: FaGithub, url: "https://github.com/" },
                { Icon: FaInstagram, url: "https://www.instagram.com/" },
                { Icon: FaDribbble, url: "https://dribbble.com/" },
              ].map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-primary-light border border-neutral-800 text-neutral-400 hover:text-brand-green hover:border-brand-green hover:bg-brand-green/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="flex flex-col gap-4 ml-0">
              {["About", "Services", "Work", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-neutral-400 hover:text-brand-green transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="flex flex-col gap-4 ml-0">
              <li className="text-neutral-400">
                <span className="block text-white mb-1">Email</span>
                <a
                  href="mailto:hello@creativeagency.com"
                  className="hover:text-brand-green transition-colors duration-300"
                >
                  hello@creativeagency.com
                </a>
              </li>
              <li className="text-neutral-400">
                <span className="block text-white mb-1">Location</span>
                123 Innovation Drive,
                <br />
                Tech District, NY 10001
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto my-8 h-px w-full bg-neutral-400/60" />
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row mx-auto px-6 md:px-8 max-w-7xl items-center justify-between text-sm text-neutral-400 gap-4">
          <p>
            © {currentYear} {logoText}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-neutral-400 hover:text-brand-green transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-brand-green transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
