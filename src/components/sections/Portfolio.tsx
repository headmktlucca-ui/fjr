"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioImages = [
  '/artes/img01.jpeg',
  '/artes/img02.jpeg',
  '/artes/img03.jpeg',
  '/artes/img04.jpeg',
  '/artes/img06.jpeg',
  '/artes/img07.jpeg',
  '/artes/img08.jpeg',
  '/artes/img09.jpeg',
  '/artes/img10.jpeg',
  '/artes/img11.jpeg',
  '/artes/img12.jpeg',
  '/artes/img13.jpeg',
];

const Portfolio = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % portfolioImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + portfolioImages.length) % portfolioImages.length);
    }
  };

  return (
    <section id="portfolio" className="relative py-24 bg-bg-dark overflow-hidden">
      {/* Subtle background spotlight glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_50%,var(--color-brand),transparent_60%)] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs text-brand uppercase tracking-widest">Nosso Portfólio</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">CURADORIA DE PRODUÇÃO</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans font-light text-gray-400 max-w-sm leading-relaxed text-sm"
          >
            Alguns registros de nossa atuação e operações em comerciais, gravação de lives, eventos corporativos importantes e produções cinematográficas.
          </motion.p>
        </div>

        {/* Curated Media Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative overflow-hidden group aspect-[4/3] border border-white/5 cursor-pointer bg-surface-dark"
              onClick={() => openLightbox(index)}
            >
              <div 
                className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                style={{ backgroundImage: `url(${src})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-mono text-[10px] text-brand uppercase tracking-widest">Ver Registro</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2"
              onClick={closeLightbox}
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            {/* Prev Button */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-4"
              onClick={prevImage}
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            {/* Main Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90%] max-h-[85vh] flex justify-center items-center"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
              {/* Using img tag directly since Next/Image requires width/height and we want natural dimensions bounded by CSS */}
              <img 
                src={portfolioImages[lightboxIndex]} 
                alt="Registro de portfólio" 
                className="max-w-full max-h-[85vh] object-contain border border-white/10 shadow-2xl rounded-sm"
              />
            </motion.div>

            {/* Next Button */}
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-4"
              onClick={nextImage}
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
