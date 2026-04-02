"use client";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center space-y-8"
      >
        <h1 className="text-4xl font-light">Sobre a <span className="font-bold">Nordelia</span></h1>
        <div className="w-16 h-1 bg-nordelia-silver mx-auto"></div>
        <p className="text-lg leading-relaxed text-gray-700">
          A Nordelia Imóveis nasce com a missão de transformar a experiência de quem busca um novo lar ou um ambiente de trabalho. Com mais de dez anos no mercado, unimos tradição e inovação, oferecendo imóveis cuidadosamente selecionados, em localizações privilegiadas.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Na Nordelia, cada projeto é pensado para refletir o seu estilo de vida, com elegância, transparência e um atendimento personalizado, do primeiro contato até a entrega das chaves.
        </p>
      </motion.div>
    </div>
  );
}