'use client';

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full min-h-[70vh] py-24 px-6 max-w-4xl mx-auto flex flex-col justify-center items-center text-center relative bg-white">
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none -z-10">
        <div className="h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        {/* Header Text */}
        <div className="space-y-3">
          <h2 className="text-[3.5rem] md:text-[4.5rem] font-bold tracking-tight text-[#2d3748]">
            Let's Craft Something{' '}
            <span className="text-blue-600">
              Great Together
            </span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
            Chahe aapko koi full-stack application banwani ho, backend scaling karni ho, ya koi discussion karna ho—feel free to reach out.
          </p>
        </div>

        {/* Contact Info (Plain Text - No Links) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-6">
          {/* Email Text */}
          <motion.div 
            whileHover={{ y: -2 }}
            className="flex items-center gap-3 text-lg font-bold text-[#2d3748] select-text px-6 py-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-blue-200 transition-colors"
          >
            <Mail size={22} className="text-blue-600" /> 
            <span>subhandeveloperofficial@gmail.com</span>
          </motion.div>

          {/* Phone Text */}
          <motion.div 
            whileHover={{ y: -2 }}
            className="flex items-center gap-3 text-lg font-bold text-[#2d3748] select-text px-6 py-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-blue-200 transition-colors"
          >
            <Phone size={22} className="text-blue-600" /> 
            <span>03456228250</span>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-6 pt-6">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/subhandeveloper/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="p-4 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 shadow-sm"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/profile.php?id=61592115773159"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="p-4 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 shadow-sm"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
