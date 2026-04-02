"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const imoveis = [
  { id: 1, nome: "Residencial Horizonte", local: "Cobertura, Centro", img: "/img/image2.jpg" },
  { id: 2, nome: "Villa das Águas", local: "Casa de Luxo, Zona Sul", img: "/img/image3.jpg" },
  { id: 3, nome: "Edifício Prime", local: "Apartamento, Bairro Nobre", img: "/img/image4.jpg" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <Image src="/img/image1.jpg" alt="Nordelia Imóveis" fill className="object-cover brightness-50" priority />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center text-nordelia-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight">O seu novo estilo de vida.</h1>
          <p className="text-lg md:text-xl font-light text-nordelia-silver max-w-2xl mx-auto">
            Imóveis cuidadosamente selecionados com elegância, transparência e atendimento personalizado.
          </p>
        </motion.div>
      </section>

      {/* Destaques Section */}
      <section className="w-full max-w-7xl mx-auto py-24 px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-light text-center mb-16"
        >
          Imóveis em <span className="font-bold">Destaque</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {imoveis.map((imovel, index) => (
            <motion.div 
              key={imovel.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative w-full h-80 overflow-hidden rounded-sm mb-4">
                <Image 
                  src={imovel.img} 
                  alt={imovel.nome} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                />
              </div>
              <h3 className="text-xl font-medium">{imovel.nome}</h3>
              <p className="text-gray-500 text-sm">{imovel.local}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}