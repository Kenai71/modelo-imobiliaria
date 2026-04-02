"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-nordelia-white/90 backdrop-blur-md fixed top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-light text-nordelia-blue tracking-widest">
          NORDELIA <span className="font-bold">IMÓVEIS</span>
        </Link>
        <div className="space-x-8 text-sm font-medium text-gray-600 hidden md:flex">
          <Link href="/" className="hover:text-nordelia-blue transition-colors">Início</Link>
          <Link href="/sobre" className="hover:text-nordelia-blue transition-colors">Sobre</Link>
          <Link href="/contato" className="hover:text-nordelia-blue transition-colors">Contato</Link>
        </div>
      </div>
    </motion.nav>
  );
}