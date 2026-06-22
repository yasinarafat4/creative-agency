import { motion } from "framer-motion";
import { Lightbulb, Target, Users } from "lucide-react";
import React from "react";

const values = [
  {
    id: 1,
    title: "User-Centric",
    description:
      "Every decision we make is driven by the end-user's needs and behaviors.",
    icon: <Users size={24} className="text-brand-green" />,
  },
  {
    id: 2,
    title: "Pixel Perfect",
    description:
      "We obsess over the fine details to ensure a flawless execution.",
    icon: <Target size={24} className="text-brand-green" />,
  },
  {
    id: 3,
    title: "Innovative",
    description:
      "Always exploring emerging tech to keep your brand ahead of the curve.",
    icon: <Lightbulb size={24} className="text-brand-green" />,
  },
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section relative w-full max-w-7xl mx-auto px-6 md:px-8 py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        {/* Left Content: Text & Narrative */}
        <div className="flex flex-col relative z-10">
          <motion.span
            className="w-full text-brand-green font-mono text-sm font-bold tracking-widest uppercase mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            // WHO WE ARE
          </motion.span>

          <motion.h2
            className="w-full font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Behind the <span className="text-gradient-neon">Creative</span>
          </motion.h2>

          <motion.div
            className="text-lg text-neutral-300 leading-relaxed space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <p>
              We are a collective of forward-thinking designers, developers, and
              digital strategists. Born from a passion for blending art with
              technology, we partner with brands to craft memorable digital
              experiences.
            </p>
            <p>
              Our approach is highly collaborative. We don't just build for you;
              we build with you. By merging data-driven insights with bold
              creative vision, we engineer solutions that not only look stunning
              but deliver measurable impact.
            </p>
          </motion.div>
        </div>

        {/* Right Content: Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              className={`card flex flex-col p-8 border border-neutral-800/50 bg-[#05070c]/50 rounded-2xl hover:border-brand-green/30 transition-colors duration-300 ${index === 2 ? "sm:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
