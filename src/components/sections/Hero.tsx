"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-12 lg:pb-16 bg-[#050505] overflow-hidden"
    >
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-[url(/artes/hub_fjr.png)] bg-cover bg-center lg:bg-right bg-no-repeat opacity-90"
      ></div>
      {/* Dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent"></div>

      {/* Background Deep Layers (Spotlights & Flares) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Main cinematic blue flare from left */}
        <div className="absolute top-[20%] left-[-15%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)] blur-3xl mix-blend-screen"></div>
        {/* High intensity gold spotlight behind camera */}
        <div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(229,197,88,0.08)_0%,transparent_70%)] blur-3xl mix-blend-screen"></div>
      </div>

      {/* Content Grid Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
        
        {/* Left side: Hero Text (No box, floating) */}
        <div className="lg:col-span-8 flex flex-col items-start justify-center pt-10 md:pt-0">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-sans font-black text-[45px] leading-[1.05] tracking-tight mb-6 text-white drop-shadow-md uppercase"
          >
            DOMINE O SEU DISCURSO <br />
            COM PRECISÃO <br />
            <span className="text-white">CINEMATOGRÁFICA</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg text-gray-300 mb-8 max-w-md font-medium leading-relaxed drop-shadow-md"
          >
            Operação Especializada de Teleprompter para Cinema, TV, Eventos e Shows. Em São Paulo desde 2019.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button className="bg-brand/10 border border-brand text-gray-100 px-10 py-4 text-sm md:text-base font-bold tracking-wider hover:bg-brand hover:text-black transition-all duration-300 rounded shadow-[0_0_15px_rgba(229,197,88,0.2)] hover:shadow-[0_0_30px_rgba(229,197,88,0.5)] uppercase">
              FAZER ORÇAMENTO
            </button>
          </motion.div>
        </div>

      </div>

      {/* Desktop-only Dynamic Scroll Indicator (SÃO PAULO | BRASIL) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute right-6 bottom-24 hidden md:flex flex-col items-center gap-4 z-20"
      >
        <span className="text-gray-400 text-[10px] font-sans font-thin tracking-widest [writing-mode:vertical-rl] rotate-180 opacity-80 uppercase">
          São Paulo | Brasil
        </span>
        <motion.div 
          animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-brand to-transparent"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
          </svg>
        </motion.div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
