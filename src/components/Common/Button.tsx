import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  className = "",
}) => {
  const baseStyles =
    "px-8 py-3 rounded-md font-medium transition-all border-2 border-transparent cursor-pointer duration-150 text-sm";

  const variants = {
    primary:
      "bg-primary-black text-white hover:border-2 hover:border-accent-pink",
    secondary:
      "border-2 border-primary-black text-primary-black hover:bg-off-white",
    accent: "bg-accent-pink text-white hover:shadow-lg uppercase tracking-wide",
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
