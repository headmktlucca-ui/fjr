"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Mocked logos. In production, these should be replaced by actual SVGs or Next/Image
const clients = [
  { name: 'SBT', id: 'sbt-1' },
  { name: 'RedeTV', id: 'redetv' },
  { name: 'XP Investimentos', id: 'xp' },
  { name: 'Criemas', id: 'criemas' },
  { name: 'Banco Genial', id: 'genial' },
  { name: 'Trruso', id: 'trruso' },
  { name: 'SBT', id: 'sbt-2' },
];

const SocialProof = () => {
  return (
    <section className="relative w-full bg-bg-dark border-t border-b border-white/5 py-10 overflow-hidden">
      {/* Top Flare Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-70"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[8px] bg-brand blur-md opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-white blur-xl opacity-20"></div>

      {/* Bottom Flare Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              {/* Fallback to text if image isn't available, mimicking logo structure */}
              <div className="font-display font-bold text-xl md:text-2xl tracking-tighter text-white">
                {client.name.toLowerCase() === 'sbt' ? (
                  <span className="border-2 border-current rounded-full px-3 py-1">{client.name}</span>
                ) : client.name.toLowerCase() === 'xp investimentos' ? (
                  <span className="bg-white text-black px-2 py-1 rounded font-black italic">XP</span>
                ) : (
                  client.name
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
