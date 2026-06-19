import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import React from "react";

// Mock data for your portfolio projects
const projects = [
  {
    id: 1,
    title: "Fintech Dashboard UI",
    category: "Web App Design",
    description:
      "A complete overhaul of a financial analytics platform, focusing on data visualization and user experience.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Eco-Brand E-Commerce",
    category: "Web Development",
    description:
      "A high-performance headless Shopify storefront built for a sustainable modern lifestyle brand.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "AI Mobile Assistant",
    category: "Product Design",
    description:
      "Sleek and intuitive mobile interface for a next-generation AI productivity application.",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "Creative Agency Site",
    category: "Web Design & Dev",
    description:
      "An award-winning immersive portfolio website featuring WebGL and advanced GSAP animations.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
];

export const Work: React.FC = () => {
  return (
    <section
      id="work"
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
            // Our Portfolio
          </motion.span>
          {/* Heading */}
          <motion.h2
            className="w-full max-w-[900px] font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Featured <span className="text-gradient-neon">Projects</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="w-full max-w-[700px] text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            A curated selection of our recent work, showcasing our expertise in
            design, development, and digital strategy.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group card overflow-hidden flex flex-col p-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Project Image Wrapper */}
              <a
                href={project.link}
                className="relative h-64 sm:h-80 w-full overflow-hidden block"
              >
                <div className="absolute inset-0 bg-[#05070c]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-20 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div className="bg-primary-black/80 backdrop-blur-sm p-3 rounded-full text-white hover:text-brand-green border border-neutral-800">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </a>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="badge badge-accent mb-4">
                    {project.category}
                  </span>
                  <a
                    href={project.link}
                    className="block group-hover:text-brand-green transition-colors duration-300"
                  >
                    <h3 className="text-2xl md:text-3xl mb-3">
                      {project.title}
                    </h3>
                  </a>
                  <p className="text-neutral-400">{project.description}</p>
                </div>

                {/* Read More Link */}
                <div className="mt-auto pt-4 border-t border-neutral-800/50">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-brand-green transition-colors duration-300"
                  >
                    View Case Study
                    <ArrowRight
                      size={16}
                      className="transform transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#work"
            className="btn btn-secondary inline-flex items-center gap-2 px-8 py-4 text-base"
          >
            View All Work
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
