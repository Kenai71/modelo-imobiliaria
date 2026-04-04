"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BedDouble, Maximize, X, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

interface Property {
  id: string;
  title: string;
  type: string;
  area: number;
  bedrooms: number;
  image: string;
  description: string;
}

const properties: Property[] = [
  {
    id: "p1",
    title: "Residencial Blanc",
    type: "Apartamento • Alto Padrão",
    area: 120,
    bedrooms: 3,
    image: "/img/image2.jpg",
    description: "Um conceito moderno de moradia, o Residencial Blanc oferece planta integrada com varanda gourmet, perfeita para jantares ao ar livre. Acabamentos em mármore travertino e suíte master com hidro."
  },
  {
    id: "p2",
    title: "Villa Serena",
    type: "Casa em Condomínio",
    area: 450,
    bedrooms: 5,
    image: "/img/image3.jpg",
    description: "Casa espetacular com arquitetura orgânica e grandes vãos de vidro. Jardim privativo projetado por paisagistas renomados, área de piscina com borda infinita e sala de estar com pé direito duplo."
  },
  {
    id: "p3",
    title: "Corporate Tower",
    type: "Sala Comercial • Premium",
    area: 85,
    bedrooms: 0,
    image: "/img/image4.jpg",
    description: "Espaço comercial inteligente, preparado para lajes corporativas. O empreendimento conta com heliponto, lobby luxuoso de acesso controlado e 4 vagas demarcadas com valet para o CEO."
  }
];

export default function PropertyGrid() {
  const [activeProperty, setActiveProperty] = useState<Property | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {properties.map((prop) => (
          <motion.div
            key={prop.id}
            layoutId={`card-${prop.id}`}
            onClick={() => setActiveProperty(prop)}
            className="group relative cursor-pointer flex flex-col bg-white border border-zinc-200/50 rounded-[2.5rem] overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-shadow duration-500"
          >
            {/* Image Container */}
            <motion.div layoutId={`image-${prop.id}`} className="relative h-[400px] w-full overflow-hidden">
              <Image
                src={prop.image}
                alt={prop.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Subtle inner overlay for refraction/glass feel */}
              <div className="absolute inset-0 border border-white/10 rounded-t-[2.5rem] pointer-events-none" />
            </motion.div>

            {/* Content Preview */}
            <motion.div layoutId={`content-${prop.id}`} className="p-8 pb-10 flex flex-col items-center text-center bg-white">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
                {prop.type}
              </span>
              <h3 className="text-2xl font-light tracking-tight text-zinc-950 mb-6">
                {prop.title}
              </h3>

              {/* Metrics */}
              <div className="flex gap-8 items-center text-zinc-600">
                <div className="flex items-center gap-2">
                  <Maximize size={16} strokeWidth={1.5} />
                  <span className="font-mono text-sm">{prop.area}m²</span>
                </div>
                {prop.bedrooms > 0 && (
                  <div className="flex items-center gap-2">
                    <BedDouble size={16} strokeWidth={1.5} />
                    <span className="font-mono text-sm">{prop.bedrooms} Quartos</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal Layer */}
      <AnimatePresence>
        {activeProperty && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-zinc-100/80 backdrop-blur-md z-40"
              onClick={() => setActiveProperty(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
              <motion.div
                layoutId={`card-${activeProperty.id}`}
                className="w-full max-w-5xl max-h-[90vh] bg-white border border-zinc-200/50 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-zinc-900/10 pointer-events-auto"
              >
                {/* Left Side: Detail Image */}
                <motion.div layoutId={`image-${activeProperty.id}`} className="relative h-[300px] md:h-auto md:w-1/2 overflow-hidden">
                  <Image
                    src={activeProperty.image}
                    alt={activeProperty.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white border border-white/20 px-4 py-1 rounded-full text-xs font-mono uppercase tracking-widest">
                    Featured
                  </div>
                </motion.div>

                {/* Right Side: Information & Action */}
                <motion.div layoutId={`content-${activeProperty.id}`} className="p-8 md:p-12 md:w-1/2 flex flex-col items-start bg-white overflow-y-auto">
                  <div className="w-full flex justify-end">
                    <button 
                      onClick={() => setActiveProperty(null)}
                      className="p-3 bg-zinc-50 border border-zinc-100 rounded-full text-zinc-500 hover:text-zinc-900 hover:border-zinc-200 transition-all rounded-full flex items-center justify-center"
                    >
                      <X size={18} strokeWidth={1.5} />
                    </button>
                  </div>
                  
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                    {activeProperty.type}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-light tracking-tighter text-zinc-950 mb-8 leading-none">
                    {activeProperty.title}
                  </h3>

                  {/* Enhanced Metrics */}
                  <div className="flex gap-8 items-center text-zinc-600 mb-8 border-t border-b border-zinc-100 py-6 w-full">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-zinc-400 font-mono">Metragem</span>
                      <div className="flex items-center gap-2 text-zinc-950">
                        <Maximize size={18} strokeWidth={1.5} />
                        <span className="font-mono text-lg">{activeProperty.area}m²</span>
                      </div>
                    </div>
                    {activeProperty.bedrooms > 0 && (
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-zinc-400 font-mono">Espaço</span>
                        <div className="flex items-center gap-2 text-zinc-950">
                          <BedDouble size={18} strokeWidth={1.5} />
                          <span className="font-mono text-lg">{activeProperty.bedrooms} Quartos</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-base text-zinc-600 leading-relaxed font-light mb-10 w-full max-w-[65ch]">
                    {activeProperty.description}
                  </p>

                  <div className="mt-auto w-full pt-6">
                    <MagneticButton 
                      onClick={() => alert("Simulacão de Agendamento Aberto!")}
                      className="w-full sm:w-auto px-10 py-5 bg-zinc-50 border border-zinc-200 rounded-full text-sm hover:border-zinc-300"
                    >
                      <div className="flex items-center gap-3">
                        <span>Agendar Visita</span>
                        <ArrowRight size={16} />
                      </div>
                    </MagneticButton>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
