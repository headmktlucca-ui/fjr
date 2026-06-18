"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const equipmentData = [
  {
    id: 'studio',
    title: '19" STÚDIO',
    name: 'Teleprompter Fixo (19")',
    description: 'Indicado para imagens estáticas com câmeras fixas. Garante máxima visibilidade do texto com o monitor de 19 polegadas de alta taxa de contraste.',
    tags: ['Fixo', 'Estúdio', 'Alta Visibilidade'],
    image: '/artes/equip-fixo.webp',
  },
  {
    id: 'pulpito',
    title: 'PÚLPITO LED',
    name: 'Teleprompter Púlpito (Presidencial)',
    description: 'Espelhos semirrefletores ajustáveis de altíssimo acabamento para discursos em palcos, convenções, campanhas políticas e eventos de diretoria.',
    tags: ['Palestras', 'Presidencial', 'Eventos'],
    image: '/artes/equip-pulpito.jpg',
  },
  {
    id: 'movel',
    title: 'EQUIPAMENTOS',
    name: 'Teleprompter Móvel (19")',
    description: 'Sistema que acompanha movimentos fluidos de pan e tilt das câmeras nos tripés de produção. Alta tecnologia que não engasga no set.',
    tags: ['Com Movimento', 'Tripé', 'Fluidez'],
    image: '/artes/equip-movel.webp',
  },
  {
    id: 'binero',
    title: 'BINERO LED',
    name: 'Teleprompter Show (Dog House)',
    description: 'Monitores robustos de 32 e 42 polegadas acoplados em estruturas blindadas pretas rente ao chão. Ideal para cantores em shows, bandas ou apresentadores.',
    tags: ['Grandes Palcos', 'Shows', 'Blindado'],
    image: '/artes/equip-show.jpg',
  },
];

const Equipamentos = () => {
  const [activeTab, setActiveTab] = useState(equipmentData[2].id); // Start with 'EQUIPAMENTOS' (movel)

  const activeContent = equipmentData.find(e => e.id === activeTab);

  return (
    <section id="equipamentos" className="relative py-24 overflow-hidden">
      {/* Cinematic BG image — parallax */}
      <div className="absolute inset-0" style={{ zIndex: 0, backgroundImage: "url('/artes/hub_fjr.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} />
      {/* Dark overlay 75% */}
      <div className="absolute inset-0" style={{ zIndex: 1, background: 'rgba(5,5,5,0.76)' }} />
      {/* Top fade to black */}
      <div className="absolute top-0 left-0 right-0" style={{ zIndex: 2, height: 120, background: 'linear-gradient(to bottom, #050505 0%, transparent 100%)' }} />
      {/* Bottom fade to black */}
      <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 2, height: 120, background: 'linear-gradient(to top, #050505 0%, transparent 100%)' }} />
      {/* Gold spotlight glow left */}
      <div className="absolute inset-0" style={{ zIndex: 2, background: 'radial-gradient(ellipse at 25% 50%, rgba(229,197,88,0.10) 0%, transparent 60%)', pointerEvents: 'none' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="font-sans font-medium text-gray-300 text-sm md:text-base uppercase tracking-widest">
            EQUIPAMENTOS
          </h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {equipmentData.map((equip) => {
            const isActive = activeTab === equip.id;
            return (
              <button
                key={equip.id}
                onClick={() => setActiveTab(equip.id)}
                className={`relative px-8 py-3.5 rounded-xl text-sm md:text-base font-sans font-medium uppercase tracking-wider transition-all duration-300 border ${
                  isActive 
                    ? 'text-white border-brand shadow-[0_0_15px_rgba(229,197,88,0.5)]' 
                    : 'text-gray-300 border-brand/30 hover:border-brand/60'
                } backdrop-blur-md overflow-hidden`}
              >
                {equip.title}
              </button>
            );
          })}
        </div>

        {/* Active Content Area */}
        <div className="relative min-h-[400px] w-full rounded-2xl overflow-hidden bg-bg-dark border border-white/10 group">
          <AnimatePresence mode="wait">
            {activeContent && (
              <motion.div
                key={activeContent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 h-full"
              >
                {/* Image Side */}
                <div className="relative h-[300px] md:h-full overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"
                    style={{ backgroundImage: `url(${activeContent.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/40 to-transparent"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    {activeContent.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-brand border border-brand/30 bg-bg-dark/50 backdrop-blur-md rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex flex-col justify-center p-8 md:p-16">
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                    {activeContent.name}
                  </h3>
                  <p className="font-sans font-light text-gray-300 leading-relaxed text-lg mb-10">
                    {activeContent.description}
                  </p>
                  
                  <button className="self-start inline-flex items-center space-x-3 text-sm font-bold tracking-wider text-brand hover:text-white transition-colors group/btn">
                    <span>SOLICITAR ORÇAMENTO</span>
                    <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Equipamentos;
