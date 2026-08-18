'use client';

import { motion, type Variants } from 'framer-motion';

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-white pt-20"
    >
      {/* Background Glow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
      >
        <div className="h-[600px] w-[800px] rounded-full bg-blue-500/10 blur-[120px]" />
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl space-y-4 z-10"
      >
        <motion.h1 variants={item} className="text-[3.5rem] leading-tight font-bold text-[#2d3748]">
          Hi, I'm
        </motion.h1>
        <motion.h1 variants={item} className="text-[4rem] md:text-[5rem] leading-tight font-bold text-blue-600 mb-2">
          Muhammad Subhan
        </motion.h1>
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-medium text-[#2d3748] mt-2 mb-6">
          Full Stack Developer,
        </motion.h2>
        
        <motion.p variants={item} className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-6 mb-10">
          I build scalable web applications and exceptional digital experiences
          <br className="hidden md:block" />
          with modern technologies and clean code.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={item} className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded border border-[#2d3748] text-[#2d3748] font-medium hover:bg-gray-50 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}