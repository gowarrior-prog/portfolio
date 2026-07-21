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

        {/* Contact Info (Plain Text - No Links) */}
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

        {/* Social Media Links (Pure SVG - No import errors) */}
        <div className="flex items-center justify-center gap-6 pt-2">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/subhan_web_developer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/profile.php?id=61592115773159"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
