'use client';

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full min-h-[70vh] py-24 px-6 max-w-4xl mx-auto flex flex-col justify-center items-center text-center relative">
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <div className="h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Header Text */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's Craft Something{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-md mx-auto">
            Chahe aapko koi full-stack application banwani ho, backend scaling karni ho, ya koi discussion karna ho—feel free to reach out.
          </p>
        </div>

        {/* Clean & Simple Text Info (No Links) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-4">
          {/* Email Text */}
          <div className="flex items-center gap-3 text-base font-medium text-slate-700 dark:text-slate-300 select-text">
            <Mail size={20} className="text-emerald-500" /> 
            <span>subhandeveloper74@gmail.com</span>
          </div>

          {/* Phone Text */}
          <div className="flex items-center gap-3 text-base font-medium text-slate-700 dark:text-slate-300 select-text">
            <Phone size={20} className="text-emerald-500" /> 
            <span>03456228250</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}