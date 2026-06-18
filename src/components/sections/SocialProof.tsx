"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Mocked logos. In production, these should be replaced by actual SVGs or Next/Image
const clients = [
  { id: '1', src: '/artes/clientes/clientes-1.webp', alt: 'SBT' },
  { id: '2', src: '/artes/clientes/clientes-2.webp', alt: 'RedeTV' },
  { id: '3', src: '/artes/clientes/clientes-3.webp', alt: 'KAGB' },
  { id: '4', src: '/artes/clientes/clientes-4.webp', alt: 'Casa de Vídeo' },
  { id: '5', src: '/artes/clientes/clientes-5.webp', alt: 'Mutala' },
  { id: '6', src: '/artes/clientes/clientes-6.webp', alt: 'R3 Eventos' },
  { id: '7', src: '/artes/clientes/clientes-7.webp', alt: 'XP' },
  { id: '8', src: '/artes/clientes/clientes-8.webp', alt: 'Sem Fronteiras' },
  { id: '9', src: '/artes/clientes/clientes-9.webp', alt: 'HelpCine' },
  { id: '10', src: '/artes/clientes/clientes-10.webp', alt: 'Belluna Filmes' },
  { id: '11', src: '/artes/clientes/clientes-11.webp', alt: 'Lineup' },
  { id: '12', src: '/artes/clientes/clientes-12.webp', alt: 'Malabar' },
  { id: '13', src: '/artes/clientes/clientes-13.webp', alt: 'Bolha Films' },
  { id: '14', src: '/artes/clientes/clientes-14.webp', alt: 'Albuquerque Content' },
];

const SocialProof = () => {
  return (
    <section className="relative w-full bg-bg-dark border-t border-b border-white/5 py-12 overflow-hidden">
      {/* Top Flare Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-70"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[8px] bg-brand blur-md opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-white blur-xl opacity-20"></div>

      {/* Bottom Flare Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center font-sans font-medium text-gray-300 text-sm md:text-base uppercase tracking-widest mb-10">
          NOSSA QUALIDADE REPRESENTADA EM NOSSOS CLIENTES
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {clients.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 5) * 0.1, duration: 0.5 }}
              className="flex items-center justify-center transition-all duration-300 cursor-pointer h-24 w-40 md:h-32 md:w-48 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-brand/50 shadow-sm hover:-translate-y-1"
            >
              <img 
                src={client.src}
                alt={client.alt}
                className="max-h-full max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
