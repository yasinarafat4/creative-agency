import { motion } from "framer-motion";
import React from "react";

interface HeroProps {
  backgroundImage?: string;
  heading?: React.ReactNode;
  subheading?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const Hero: React.FC<HeroProps> = ({
  backgroundImage = "/src/assets/hero-bg.webp",
  heading = (
    <>
      Transform Your <br className="hidden md:block" />
      <span className="text-gradient-neon">Online Presence</span> Today!
    </>
  ),
  subheading = "We build slick, high-performance, and elegant digital experiences equipped with premium effects to help your business scale effortlessly.",
  buttonText = "Get Started",
  buttonHref = "#contact",
}) => {
  return (
    // -mt-20 pulls the background up under the header.
    // pt-20 pushes the flex-center calculation back down so text isn't cut off.
    <section className="relative w-full h-[900px] flex flex-col items-center justify-center overflow-hidden -mt-20 pt-20">
      {/* 1. Background Image */}
      <div className="absolute inset-0 w-full h-full -z-20">
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Dark Overlay - Ensures text is always readable over any image */}
      <div className="absolute inset-0 bg-[#05070c]/80 -z-10 backdrop-blur-[2px]" />

      {/* 3. Center Content */}
      <div className="w-full mx-auto px-6 gap-6 flex flex-col items-center text-center relative z-10">
        {/* Heading 
            Added w-full and max-w-[900px] to force the text to spread out! 
        */}
        <motion.h1
          className="w-full max-w-[900px] font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {heading}
        </motion.h1>

        {/* Subheading 
            Added w-full and max-w-[700px] to force the text to spread out!
        */}
        <motion.p
          className="w-full max-w-[700px] text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {subheading}
        </motion.p>

        {/* Call to Action Button */}
        <motion.a
          href={buttonHref}
          className="px-10 py-4 text-base font-bold text-white rounded-md bg-gradient-to-br from-brand-green to-[#059669] hover:opacity-90 hover:shadow-lg hover:shadow-brand-green/30 duration-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          {buttonText}
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
