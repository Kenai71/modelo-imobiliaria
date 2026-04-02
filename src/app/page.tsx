"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion"; // <-- ADICIONAMOS O 'Variants' AQUI
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar"; 

// Agora dizemos explicitamente ao TypeScript que isso é um ": Variants"
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  return (
    <main className="relative bg-[#FFFFFF]">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/img/image1.png"
          alt="Imóvel de Luxo Nordelia"
          fill
          quality={100}
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-[#002F6C]/60" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center max-w-4xl px-6 pt-20"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 drop-shadow-md">
            Elevando o seu <br/> Estilo de Vida
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-[#C0C0C0] font-light mb-10 max-w-2xl mx-auto">
            Imóveis exclusivos em localizações privilegiadas. Encontre a sofisticação e o conforto que você merece.
          </motion.p>
          <motion.a 
            variants={fadeInUp}
            href="#imoveis" 
            className="inline-flex items-center gap-2 bg-[#FFFFFF] text-[#002F6C] px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[#C0C0C0] hover:text-white transition-all duration-300"
          >
            Explorar Imóveis <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </section>

      {/* ================= IMÓVEIS EM DESTAQUE ================= */}
      <section id="imoveis" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair text-[#002F6C] font-bold mb-4">Seleção Exclusiva</h2>
          <div className="w-20 h-1 bg-[#C0C0C0] mx-auto"></div>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer} 
          className="grid md:grid-cols-3 gap-10"
        >
          {/* Card 1 */}
          <motion.div variants={fadeInUp} className="group cursor-pointer">
            <div className="relative h-80 overflow-hidden mb-6">
              <Image 
                src="/img/image2.jpg" 
                alt="Residencial Blanc" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-playfair text-[#002F6C] mb-2">Residencial Blanc</h3>
            <p className="text-[#C0C0C0] font-medium">Apartamento • Alto Padrão</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeInUp} className="group cursor-pointer">
            <div className="relative h-80 overflow-hidden mb-6">
              <Image 
                src="/img/image3.jpg" 
                alt="Villa Serena" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-playfair text-[#002F6C] mb-2">Villa Serena</h3>
            <p className="text-[#C0C0C0] font-medium">Casa em Condomínio</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeInUp} className="group cursor-pointer">
            <div className="relative h-80 overflow-hidden mb-6">
              <Image 
                src="/img/image4.jpg" 
                alt="Corporate Tower" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-playfair text-[#002F6C] mb-2">Corporate Tower</h3>
            <p className="text-[#C0C0C0] font-medium">Sala Comercial • Premium</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SOBRE A NORDELIA ================= */}
      <section id="sobre" className="bg-[#f9f9f9] py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
          >
            <h2 className="text-sm text-[#C0C0C0] font-bold tracking-[0.2em] uppercase mb-4">Sobre a Nordelia</h2>
            <h3 className="text-4xl md:text-5xl font-playfair text-[#002F6C] font-bold mb-8 leading-tight">
              Tradição e Inovação em cada detalhe.
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-light">
              A Nordelia Imóveis nasce com a missão de transformar a experiência de quem busca um novo lar ou um ambiente de trabalho. Com mais de dez anos no mercado, unimos tradição e inovação, oferecendo imóveis cuidadosamente selecionados, em localizações privilegiadas.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Na Nordelia, cada projeto é pensado para refletir o seu estilo de vida, com elegância, transparência e um atendimento personalizado, do primeiro contato até a entrega das chaves.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="relative h-[600px]"
          >
            <Image 
              src="/img/image1.png" 
              alt="Sobre a Nordelia" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-sm shadow-2xl" 
            />
            <div className="absolute -bottom-8 -left-8 bg-[#002F6C] p-10 text-white shadow-xl hidden md:block">
              <span className="block text-5xl font-playfair font-bold mb-2">10+</span>
              <span className="text-sm tracking-widest uppercase text-[#C0C0C0]">Anos de Excelência</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTATO ESTILIZADO ================= */}
      <section id="contato" className="py-32 bg-[#002F6C] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold mb-4">Inicie sua Jornada</h2>
            <p className="text-[#C0C0C0] font-light max-w-2xl mx-auto text-lg">
              Fale com um de nossos consultores exclusivos e descubra o imóvel perfeito para o seu momento de vida.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12 bg-white/5 backdrop-blur-sm p-8 md:p-12 border border-[#C0C0C0]/20 rounded-sm">
            
            {/* Info de Contato */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={staggerContainer} 
              className="md:col-span-2 space-y-10"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-6">
                <div className="bg-[#C0C0C0] text-[#002F6C] p-4 rounded-full"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold tracking-wider text-sm uppercase mb-1">Visite-nos</h4>
                  <p className="text-[#C0C0C0] font-light">Av. das Nações Unidas, 1500<br/>São Paulo - SP</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-center gap-6">
                <div className="bg-[#C0C0C0] text-[#002F6C] p-4 rounded-full"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold tracking-wider text-sm uppercase mb-1">Ligue</h4>
                  <p className="text-[#C0C0C0] font-light">+55 (11) 4000-0000</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-center gap-6">
                <div className="bg-[#C0C0C0] text-[#002F6C] p-4 rounded-full"><Mail size={24} /></div>
                <div>
                  <h4 className="font-bold tracking-wider text-sm uppercase mb-1">Escreva</h4>
                  <p className="text-[#C0C0C0] font-light">contato@nordelia.com.br</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Formulário */}
            <motion.form 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp} 
              className="md:col-span-3 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Nome Completo" 
                  className="w-full bg-transparent border-b border-[#C0C0C0]/40 py-4 text-white placeholder:text-[#C0C0C0]/60 focus:outline-none focus:border-[#C0C0C0] transition-colors font-light" 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  className="w-full bg-transparent border-b border-[#C0C0C0]/40 py-4 text-white placeholder:text-[#C0C0C0]/60 focus:outline-none focus:border-[#C0C0C0] transition-colors font-light" 
                  required 
                />
              </div>
              <input 
                type="tel" 
                placeholder="Telefone" 
                className="w-full bg-transparent border-b border-[#C0C0C0]/40 py-4 text-white placeholder:text-[#C0C0C0]/60 focus:outline-none focus:border-[#C0C0C0] transition-colors font-light" 
              />
              <textarea 
                rows={4} 
                placeholder="Como podemos ajudar?" 
                className="w-full bg-transparent border-b border-[#C0C0C0]/40 py-4 text-white placeholder:text-[#C0C0C0]/60 focus:outline-none focus:border-[#C0C0C0] transition-colors font-light resize-none" 
                required
              ></textarea>
              
              <button 
                type="submit" 
                className="bg-[#C0C0C0] text-[#002F6C] px-10 py-4 font-bold tracking-widest uppercase text-sm hover:bg-white transition-colors duration-300 w-full md:w-auto"
              >
                Enviar Mensagem
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#001f47] text-[#C0C0C0] py-8 text-center text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Nordelia Imóveis. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}