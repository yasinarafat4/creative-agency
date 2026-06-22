import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="section relative w-full max-w-7xl mx-auto px-6 md:px-8 py-24"
    >
      <div className="w-full mx-auto flex flex-col items-center text-center relative z-10 mb-16">
        <motion.span
          className="w-full text-brand-green font-mono text-sm font-bold tracking-widest uppercase mb-4 block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          // GET IN TOUCH
        </motion.span>

        <motion.h2
          className="w-full max-w-[900px] font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Let's Build Something{" "}
          <span className="text-gradient-neon">Great</span>
        </motion.h2>

        <motion.p
          className="w-full max-w-[700px] mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Ready to elevate your digital presence? Drop us a message, and our
          team will get back to you within 24 hours.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Information */}
        <motion.div
          className="flex flex-col space-y-8 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-start gap-6 group">
            <div className="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:text-brand-green group-hover:border-brand-green/50 transition-all duration-300 flex-shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
              <a
                href="mailto:hello@creative.co"
                className="text-neutral-400 hover:text-brand-green transition-colors"
              >
                hello@creative.co
              </a>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:text-brand-green group-hover:border-brand-green/50 transition-all duration-300 flex-shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Call Us</h4>
              <p className="text-neutral-400">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:text-brand-green group-hover:border-brand-green/50 transition-all duration-300 flex-shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Visit Us</h4>
              <p className="text-neutral-400">
                123 Innovation Drive
                <br />
                Tech District, SF 94103
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="card sm:max-w-[450px] lg:max-w-none p-6 lg:p-8 bg-[#05070c] border border-neutral-800/80 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-neutral-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-neutral-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-neutral-400"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                placeholder="How can we help?"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-neutral-400"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="btn btn-secondary w-full py-4 mt-2 bg-brand-green text-black font-bold rounded-lg hover:bg-brand-green/90 transition-colors flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
