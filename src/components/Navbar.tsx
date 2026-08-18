'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Navbar() {
  const { activeSection, setActiveSection } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  // Update underline position when activeSection changes
  useEffect(() => {
    if (!navRef.current) return;

    const activeButton = navRef.current.querySelector(
      `button[data-id="${activeSection}"]`
    ) as HTMLElement;

    if (activeButton) {
      setIndicatorStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [activeSection]);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleNavClick('home')}
          className="flex flex-col items-center justify-center cursor-pointer mt-1 md:mt-2"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-10 md:h-10"
          >
            <polygon points="10,80 10,35 30,25 30,80" fill="#333333" />
            <polygon points="40,100 40,15 60,5 60,100" fill="#333333" />
            <polygon points="70,80 70,30 90,20 90,80" fill="#4361ee" />
          </svg>
          <span className="text-[8px] md:text-[10px] font-black tracking-widest text-[#333333] mt-0.5">
            DEVELOPER
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 relative" ref={navRef}>
          {navItems.map((item) => (
            <button
              key={item.id}
              data-id={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-2 text-base font-medium transition-colors duration-200 cursor-pointer
                ${
                  activeSection === item.id
                    ? 'text-[#2d3748]'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
            >
              {item.label}
            </button>
          ))}

          {/* Single Moving Underline */}
          <motion.div
            className="absolute bottom-0 h-[3px] bg-blue-600 rounded-full"
            animate={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-lg font-medium transition-colors duration-200 py-3 px-2 rounded-lg
                    ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}