"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Sobre = () => {
  return (
    <section id="sobre" className="relative py-24 bg-surface-dark border-t border-b border-white/5 overflow-hidden">
      {/* Subtle background spotlight glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_50%,var(--color-brand),transparent_60%)] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-6"
        >
          <span className="font-mono text-xs text-brand uppercase tracking-widest">Nossa História</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-tight">
            MAIS DE 14 ANOS DE EXPERIÊNCIA NOS BASTIDORES
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand to-transparent"></div>
          
          <p className="font-sans font-light text-gray-300 leading-relaxed text-sm sm:text-base">
            Fundada oficialmente em 2019 pelo ator e radialista <strong>Flávio Almeida</strong>, a FJR Teleprompter nasceu da necessidade real de simplificar, agilizar e dar naturalidade para apresentações no set. 
          </p>
          <p className="font-sans font-light text-gray-400 leading-relaxed text-sm">
            Nossa equipe não aluga apenas equipamentos; nós fornecemos <strong>operadores especializados</strong> que acompanham todo o fluxo de gravação, editando o texto em tempo real de forma sincronizada com o ritmo do apresentador ou orador. 
          </p>
          
          <div className="grid grid-cols-3 gap-6 pt-6">
            <div className="flex flex-col justify-start">
              <span className="font-display font-extrabold text-3xl text-white">14+</span>
              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wide mt-1">ANOS DE EXPERIÊNCIA</span>
            </div>
            <div className="flex flex-col justify-start">
              <span className="font-display font-extrabold text-3xl text-white">2019</span>
              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wide mt-1">FUNDAÇÃO FJR</span>
            </div>
            <div className="flex flex-col justify-start">
              <span className="font-display font-extrabold text-3xl text-white">100%</span>
              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wide mt-1">SP & REGIÃO</span>
            </div>
          </div>
        </motion.div>
        
        {/* Video Player/Art Asymmetrical Showcase */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 relative border border-white/10 aspect-video overflow-hidden rounded-2xl bg-bg-dark/50"
        >
          {/* Glassmorphism Frame Effect */}
          <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl ring-1 ring-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"></div>
          
          <video className="w-full h-full object-cover opacity-90 mix-blend-screen" controls preload="metadata" poster="/artes/img02.jpeg">
            <source src="/artes/video02.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute top-4 left-4 z-20 bg-bg-dark/80 backdrop-blur-sm px-3 py-1 text-[9px] font-mono text-brand uppercase tracking-widest border border-white/5 rounded-sm">
            Operação em Ação
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Sobre;
