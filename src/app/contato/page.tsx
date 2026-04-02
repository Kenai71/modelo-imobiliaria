"use client";
import { motion } from "framer-motion";

export default function Contato() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg bg-white p-10 rounded-sm shadow-xl shadow-nordelia-blue/5"
      >
        <h1 className="text-3xl font-light mb-2">Fale <span className="font-bold">Conosco</span></h1>
        <p className="text-gray-500 mb-8 text-sm">Nossa equipe de especialistas está pronta para atendê-lo.</p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
            <input type="text" className="w-full border border-gray-200 p-3 outline-none focus:border-nordelia-blue transition-colors bg-gray-50" placeholder="Seu nome" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input type="email" className="w-full border border-gray-200 p-3 outline-none focus:border-nordelia-blue transition-colors bg-gray-50" placeholder="Seu e-mail" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
            <textarea rows={4} className="w-full border border-gray-200 p-3 outline-none focus:border-nordelia-blue transition-colors bg-gray-50 flex-resize-none" placeholder="Como podemos ajudar?"></textarea>
          </div>
          <button className="w-full bg-nordelia-blue text-nordelia-white py-4 font-medium hover:bg-nordelia-blue/90 transition-colors uppercase tracking-widest text-sm">
            Enviar Mensagem
          </button>
        </form>
      </motion.div>
    </div>
  );
}