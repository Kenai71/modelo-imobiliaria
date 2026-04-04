"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Don't hide navbar if mobile menu is open
    if (!isMobileMenuOpen && latest > 100 && latest > previous) {
      setHidden(true); // scroll down
    } else {
      setHidden(false); // scroll up
    }
    
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: "Início", path: "inicio" },
    { name: "Imóveis", path: "imoveis" },
    { name: "Sobre", path: "sobre" },
    { name: "Contato", path: "contato" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
        className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-zinc-50/70 backdrop-blur-3xl border-b border-zinc-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.02)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
          <Link 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, "inicio")}
            className="text-xl font-medium tracking-tight text-zinc-950 flex items-center gap-1 z-50 relative"
          >
            NORDELIA<span className="text-zinc-400 font-light">•</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((item) => (
              <a 
                key={item.name}
                href={`#${item.path}`} 
                onClick={(e) => handleNavClick(e, item.path)}
                className="px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100/50 rounded-full transition-all"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburguer Icon */}
          <button 
            className="md:hidden z-50 relative p-2 -mr-2 text-zinc-600 hover:text-zinc-950 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-zinc-50/95 backdrop-blur-3xl md:hidden pt-32 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6">
              {links.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                >
                  <a 
                    href={`#${item.path}`} 
                    onClick={(e) => handleNavClick(e, item.path)}
                    className="text-4xl font-light tracking-tighter text-zinc-950 hover:text-zinc-500 transition-colors block"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto pb-12">
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                Exclusividade Absoluta
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}