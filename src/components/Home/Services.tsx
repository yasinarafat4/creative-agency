import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Layout,
  Lightbulb,
  ShoppingCart,
} from "lucide-react";
import React from "react";

// Mock data for your services
const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "We craft intuitive, accessible, and visually stunning user interfaces that keep your audience engaged and drive conversions.",
    icon: <Layout size={32} />,
    link: "#",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Lightning-fast, highly scalable web applications built with modern frameworks like React, Next.js, and Tailwind CSS.",
    icon: <Code2 size={32} />,
    link: "#",
  },
  {
    id: 3,
    title: "E-Commerce Solutions",
    description:
      "High-converting online stores built on Shopify and custom headless architectures to maximize your digital revenue.",
    icon: <ShoppingCart size={32} />,
    link: "#",
  },
  {
    id: 4,
    title: "Digital Strategy",
    description:
      "Data-driven roadmaps, SEO optimization, and brand positioning to ensure your digital presence outpaces the competition.",
    icon: <Lightbulb size={32} />,
    link: "#",
  },
];

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="section relative w-full max-w-7xl mx-auto px-6 md:px-8"
    >
      <div>
        {/* Section Header */}
        <div className="w-full mx-auto px-6 gap-6 flex flex-col items-center text-center relative z-10">
          <motion.span
            className="w-full text-brand-green font-mono text-sm font-bold tracking-widest uppercase mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            // What We Do
          </motion.span>
          {/* Heading */}
          <motion.h2
            className="w-full max-w-[900px] font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Core <span className="text-gradient-neon">Services</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="w-full max-w-[700px] text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            We provide end-to-end digital solutions equipped with premium
            technologies to elevate your brand and drive measurable results.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group card flex flex-col items-start p-8 md:p-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Animated Icon Wrapper */}
              <div className="p-4 rounded-xl bg-brand-green/10 text-brand-green mb-8 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-primary-black transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-brand-green transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-neutral-300 mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href={service.link}
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-green transition-colors duration-300 mt-auto"
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="transform transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
