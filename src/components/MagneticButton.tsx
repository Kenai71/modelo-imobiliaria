"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function MagneticButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2); // Intensidade magnética
    y.set(middleY * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={reset}
      onClick={onClick}
      style={{ x: smoothX, y: smoothY }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-flex items-center justify-center overflow-hidden transition-colors ${className}`}
    >
      {/* Background fill animation */}
      <div 
        className="absolute inset-0 bg-zinc-950 transition-transform duration-500 ease-out origin-center" 
        style={{ transform: isHovered ? "scale(1.5)" : "scale(0)" }}
      />
      <span className={`relative z-10 font-medium tracking-tight whitespace-nowrap transition-colors duration-300 ${isHovered ? "text-white" : "text-zinc-950"}`}>
        {children}
      </span>
    </motion.button>
  );
}
