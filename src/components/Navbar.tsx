"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#C0C0C0]/30"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="#inicio" className="text-2xl font-playfair font-bold text-[#002F6C] tracking-wide">
          NORDELIA<span className="text-[#C0C0C0] font-light"> Imóveis</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 font-medium text-sm text-[#002F6C] tracking-widest uppercase">
          <Link href="#inicio" className="hover:text-[#C0C0C0] transition-colors">Início</Link>
          <Link href="#imoveis" className="hover:text-[#C0C0C0] transition-colors">Imóveis</Link>
          <Link href="#sobre" className="hover:text-[#C0C0C0] transition-colors">Sobre</Link>
          <Link href="#contato" className="hover:text-[#C0C0C0] transition-colors">Contato</Link>
        </nav>
      </div>
    </motion.header>
  );
}