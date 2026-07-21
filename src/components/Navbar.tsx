'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';

export default function Navbar() {
  const { activeSection, setActiveSection } = useStore();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },   // Added Experience
    { id: 'contact', label: 'Contact' },
  ];

  // Auto detect active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,        // 50% section visible hone par active
        rootMargin: '-80px 0px -20% 0px'
      }
    );

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  const handleScroll = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height ke hisab se
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-950/80 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          onClick={() => handleScroll('home')}
          className="text-xl font-bold tracking-wider cursor-pointer bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent"
        >
          PORTFOLIO.
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`relative py-1 text-sm font-medium transition-all duration-200 cursor-pointer hover:text-emerald-500 dark:hover:text-emerald-400
                ${activeSection === item.id 
                  ? 'text-emerald-500 dark:text-emerald-400' 
                  : 'text-slate-600 dark:text-slate-400'
                }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTarget"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-emerald-500 rounded"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}