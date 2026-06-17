"use client";

import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 py-16 overflow-hidden">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 relative z-10">
        
        {/* Left Column */}
        <div className="md:col-span-6 space-y-6">
          <button 
            onClick={scrollToTop} 
            className="flex items-center cursor-pointer text-left focus:outline-none" 
            aria-label="FJR Teleprompter Home"
          >
            {/* Logo in text format since we are moving away from old assets or standardizing */}
            <span className="font-display font-black text-3xl tracking-tighter text-white">
              FJ<span className="text-brand">R</span>
            </span>
          </button>
          <p className="font-sans font-light text-xs text-gray-400 max-w-sm leading-relaxed">
            Facilitando e agilizando gravações de lives, comerciais, shows e eventos. Atendimento ágil com qualidade premium e montagem rápida no set.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-bg-dark/50 backdrop-blur-sm border border-white/10 hover:border-brand text-gray-400 hover:text-brand transition-all duration-200 rounded-full" 
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-6 md:space-y-0 text-left md:text-right">
          <div className="flex flex-col items-start md:items-end">
            <span className="font-mono text-[10px] text-brand uppercase tracking-widest block mb-4">Contato Direto</span>
            <a 
              href="https://wa.me/5511998855701" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-semibold text-lg text-white hover:text-brand transition-colors duration-200 cursor-pointer block"
            >
              WhatsApp: (11) 99885-5701
            </a>
            <a 
              href="mailto:contato@fjrteleprompter.com" 
              className="font-sans text-xs text-gray-400 mt-2 hover:text-white transition-colors"
            >
              Email: contato@fjrteleprompter.com
            </a>
            <p className="font-sans text-xs text-brand/80 mt-1 uppercase tracking-widest font-mono">
              Atendimento 24h para emergências
            </p>
          </div>
          <div className="text-xs text-gray-600 font-mono pt-6 md:pt-0">
            &copy; 2026 FJR Teleprompter. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
