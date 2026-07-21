'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const 
      },
    },
  };

  return (
    <section 
      id="home" 
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 -z-10 h-full w-full bg-transparent">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[100px] dark:bg-emerald-500/5 animate-pulse" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl space-y-6 z-10"
      >

        {/* Main Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
            Muhammad Subhan
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p 
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-medium text-slate-700 dark:text-slate-300"
        >
          Full Stack Developer
        </motion.p>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          I craft clean interfaces, scalable backends, and seamless user experiences using modern technologies.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-2xl font-medium bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all duration-200 text-base"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-2xl font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 text-base"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}