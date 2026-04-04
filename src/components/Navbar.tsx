"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 100 && latest > previous) {
      setHidden(true); // scroll down
    } else {
      setHidden(false); // scroll up
    }
    
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // spring-like soft ease
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        isScrolled 
          ? "bg-zinc-50/60 backdrop-blur-2xl border-b border-zinc-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.02)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="#inicio" className="text-xl font-medium tracking-tight text-zinc-950 flex items-center gap-1">
          NORDELIA<span className="text-zinc-400 font-light">•</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {["Início", "Imóveis", "Sobre", "Contato"].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace("í", "i")}`} 
              className="px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100/50 rounded-full transition-all"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}