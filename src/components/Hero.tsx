'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Slide up animation for child elements
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1] as const  // Using cubic-bezier array instead of string
      },
    },
  };

  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Ambient Premium Glow */}
      <div className="absolute top-0 -z-10 h-full w-full bg-transparent">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[100px] dark:bg-emerald-500/5 animate-pulse" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl space-y-6 z-10"
      >
        {/* Intro Badge */}
        <motion.span 
          variants={itemVariants}
          className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full border border-emerald-500/20"
        >
          AVAILABLE FOR FREELANCE & FULL-TIME ROLES
        </motion.span>

        {/* Main Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Building Digital Experiences With{' '}
          <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
            Precision & Elegance
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Hi, I'm a Full Stack Developer. I craft clean interfaces, scalable backends, and seamless animations to bring ideas to life.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="pt-6 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-medium bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-medium bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer text-sm"
          >
            Let's Talk
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}