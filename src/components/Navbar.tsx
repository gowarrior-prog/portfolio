'use client';

import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { activeSection, setActiveSection } = useStore();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleScroll = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-slate-950/70 transition-colors duration-300"
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
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="relative py-1 text-sm font-medium transition-colors duration-200 cursor-pointer text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400"
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTarget"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-500"
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