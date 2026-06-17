"use client";

import React from 'react';
import { motion } from 'framer-motion';

const InfiniteMarquee = () => {
  const text = "• FJR - PERFORMANCE E TECNOLOGIA EM TELEPROMPTER - SÃO PAULO - BRASIL ";
  
  // We duplicate the text multiple times to ensure smooth looping
  const duplicatedText = Array(4).fill(text).join(" ");

  return (
    <div className="w-full bg-surface-dark border-y border-white/5 py-4 overflow-hidden relative flex">
      {/* 
        To achieve a seamless infinite marquee, we animate from 0% to -50%.
        The content needs to be duplicated exactly so that the end of the first half
        perfectly matches the start of the second half.
      */}
      <motion.div
        className="whitespace-nowrap flex items-center opacity-70"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 30 
        }}
      >
        <span className="text-gray-400 text-sm md:text-base font-mono tracking-widest px-4">
          {duplicatedText}
        </span>
        <span className="text-gray-400 text-sm md:text-base font-mono tracking-widest px-4">
          {duplicatedText}
        </span>
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;
