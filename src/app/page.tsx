"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import PropertyGrid from "../components/PropertyGrid";
import MagneticButton from "../components/MagneticButton";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main className="bg-zinc-50 min-h-screen">
      <Navbar />

      {/* ================= HERO SECTION (Asymmetric Split) ================= */}
      <section 
        ref={heroRef}
        id="inicio" 
        className="relative min-h-[100dvh] flex flex-col md:flex-row overflow-hidden max-w-[1600px] mx-auto bg-zinc-50"
      >
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 pt-32 pb-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-xs font-mono tracking-widest uppercase text-zinc-500 mb-8">
              A Nova Perspectiva de Morar
            </span>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-light tracking-tighter leading-[0.9] text-zinc-950 mb-10">
              O Padrão <br />
              <span className="italic font-normal text-zinc-400">Absoluto.</span>
            </h1>
            <p className="text-zinc-600 font-light text-lg md:text-xl leading-relaxed max-w-md mb-12">
              Não vendemos espaços. Criamos coleções de arquitetura viva, reservadas para os que exigem a excelência.
            </p>

            <MagneticButton className="px-10 py-5 bg-zinc-950 text-white rounded-full text-sm font-medium hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3">
                <span className="text-white">Explorar Propriedades</span>
                <ArrowRight size={16} className="text-white" />
              </div>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: Immersive Media */}
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full overflow-hidden p-4 md:p-8">
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="w-full h-full relative rounded-[2rem] md:rounded-[3rem] overflow-hidden"
          >
           <Image
              src="/img/image1.png"
              alt="Nordelia Arquitetura"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover scale-105"
            />
            {/* Liquid Glass Edge Refraction */}
            <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] border border-white/20 rounded-[2rem] md:rounded-[3rem] pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* ================= IMÓVEIS (Property Grid Bento) ================= */}
      <section id="imoveis" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-zinc-950 mb-4">
              Coleção Privada
            </h2>
            <p className="text-zinc-500 font-light max-w-sm">
              Propriedades rigorosamente auditadas, disponíveis por tempo limitado para clientes seletos.
            </p>
          </div>
        </motion.div>

        {/* Componente que Gerencia o Grid e o Layout Modal Expandido */}
        <PropertyGrid />
      </section>

      {/* ================= SOBRE A NORDELIA (Asymmetric Spacing) ================= */}
      <section id="sobre" className="border-t border-zinc-200/50 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 lg:py-48 grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6 block">
              Manifesto Nordelia
            </span>
            <h3 className="text-4xl md:text-6xl font-light tracking-tighter leading-[1.1] text-zinc-950 mb-10">
              Menos ruído. <br/> Maior <span className="italic text-zinc-400">precisão.</span>
            </h3>
            <div className="space-y-6 text-zinc-600 font-light leading-relaxed max-w-[50ch]">
              <p>
                O mercado tradicional foca no volume. Nós focamos na singularidade. Cada projeto adicionado ao nosso portfólio passa por uma rigorosa análise arquitetônica, de vizinhança e valoração.
              </p>
              <p>
                Não agimos apenas como corretores, mas como curadores de estilo de vida, mapeando a junção exata entre a vida contemporânea e o luxo intrínseco.
              </p>
            </div>
            
            <div className="mt-12 flex gap-12">
              <div>
                <p className="text-4xl font-light text-zinc-950">14</p>
                <p className="text-xs font-mono text-zinc-400 mt-2 uppercase tracking-wide">Anos de Mercado</p>
              </div>
              <div>
                 <p className="text-4xl font-light text-zinc-950">1B+</p>
                 <p className="text-xs font-mono text-zinc-400 mt-2 uppercase tracking-wide">Valor Transacionado</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[4/5] relative bg-zinc-100 rounded-[2.5rem] overflow-hidden"
          >
            <Image 
              src="/img/image1.png" 
              alt="Sobre a Nordelia" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover filter grayscale hover:grayscale-0 transition-all duration-1000" 
            />
          </motion.div>
        </div>
      </section>

      {/* ================= CONTATO (Minimalist Focus Form) ================= */}
      <section id="contato" className="bg-zinc-950 text-white py-32 rounded-t-[3rem] -mt-10 relative z-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20">
          
          {/* Informação */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-light tracking-tighter mb-6">Iniciar Diálogo</h2>
              <p className="text-zinc-400 font-light max-w-sm mb-16 text-lg">
                Se você busca uma experiência excepcional, nossa equipe está pronta para um atendimento reservado.
              </p>
            </div>

            <div className="space-y-8 font-light text-zinc-300">
              <div className="flex gap-4 items-center">
                <MapPin className="text-zinc-500" strokeWidth={1.2} />
                <p>Av. das Nações Unidas, 1500 — São Paulo, SP</p>
              </div>
              <div className="flex gap-4 items-center">
                 <Phone className="text-zinc-500" strokeWidth={1.2} />
                 <p>+55 (11) 4000-0000</p>
              </div>
              <div className="flex gap-4 items-center">
                 <Mail className="text-zinc-500" strokeWidth={1.2} />
                 <p>concierge@nordelia.com.br</p>
              </div>
            </div>
          </div>

          {/* Corretores */}
          <div className="flex flex-col space-y-10">
            <h3 className="text-2xl font-light tracking-tight text-white mb-2 border-b border-zinc-800 pb-4">
              Atendimento Exclusivo
            </h3>
            
            <div className="flex flex-col space-y-4">
              {/* Corretor 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                <div>
                  <p className="text-xl font-light text-white mb-1">Helena Vanz</p>
                  <p className="text-sm text-zinc-500 font-mono tracking-wide uppercase">Diretora de Luxo</p>
                </div>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 rounded-full text-sm font-medium hover:bg-white hover:scale-105 transition-all w-full sm:w-auto"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>

              {/* Corretor 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                <div>
                  <p className="text-xl font-light text-white mb-1">Arthur De Lazzari</p>
                  <p className="text-sm text-zinc-500 font-mono tracking-wide uppercase">Head Corporate</p>
                </div>
                <a 
                  href="https://wa.me/5511999999998" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 rounded-full text-sm font-medium hover:bg-white hover:scale-105 transition-all w-full sm:w-auto"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>

              {/* Corretor 3 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                <div>
                  <p className="text-xl font-light text-white mb-1">Valentina Rossi</p>
                  <p className="text-sm text-zinc-500 font-mono tracking-wide uppercase">Curadora de Acervo</p>
                </div>
                <a 
                  href="https://wa.me/5511999999997" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 rounded-full text-sm font-medium hover:bg-white hover:scale-105 transition-all w-full sm:w-auto"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* FOOTER INTEGRAD0 */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-32 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-xs font-mono tracking-widest text-zinc-500 uppercase">
           <p>&copy; {new Date().getFullYear()} Nordelia. Todos os direitos reservados.</p>
           <p className="mt-4 md:mt-0">Desenvolvido com excelência</p>
        </div>
      </section>
    </main>
  );
}