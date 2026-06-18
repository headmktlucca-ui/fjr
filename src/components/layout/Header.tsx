"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-bg-dark/60 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 group">
            <img 
              src="/artes/logo.webp" 
              alt="FJR Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            {['QUEM SOMOS', 'EQUIPAMENTOS', 'PORTFÓLIO', 'CONTATO'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-brand/10 border border-brand text-gray-100 px-6 py-2.5 text-sm font-bold tracking-wider hover:bg-brand hover:text-bg-dark transition-all duration-300 rounded shadow-[0_0_15px_rgba(229,197,88,0.2)] hover:shadow-[0_0_25px_rgba(229,197,88,0.5)] uppercase">
              SOLICITAR ORÇAMENTO
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-brand transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
        }}
        className="fixed inset-0 z-[60] bg-bg-dark/95 backdrop-blur-xl flex flex-col justify-center items-center space-y-8"
      >
        <button 
          className="absolute top-6 right-6 text-white hover:text-brand"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        {['QUEM SOMOS', 'EQUIPAMENTOS', 'PORTFÓLIO', 'CONTATO'].map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isMobileMenuOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className="text-2xl font-display font-bold text-gray-300 hover:text-brand tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item}
          </motion.a>
        ))}

        <motion.button 
          initial={{ y: 20, opacity: 0 }}
          animate={isMobileMenuOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-brand/10 border border-brand text-gray-100 px-8 py-3.5 font-bold tracking-wider text-sm rounded shadow-[0_0_15px_rgba(229,197,88,0.2)] uppercase"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          SOLICITAR ORÇAMENTO
        </motion.button>
      </motion.div>
    </>
  );
};

export default Header;
