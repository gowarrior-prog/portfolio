'use client';

import { motion } from 'framer-motion';

export default function About() {
  // Skills data structured by categories
  const skillCategories = [
    {
      title: 'Frontend Architecture',
      skills: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5 / CSS3'],
    },
    {
      title: 'Backend & Automation',
      skills: ['Python', 'FastAPI', 'Multi-Agent Systems', 'REST APIs'],
    },
    {
      title: 'Database & DevOps',
      skills: ['Supabase', 'Prisma', 'Git & GitHub', 'PostgreSQL'],
    },
  ];

  return (
    <section id="about" className="w-full min-h-screen py-24 px-6 max-w-6xl mx-auto relative flex flex-col justify-center">
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/5" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Column: Refined English Bio */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1 space-y-6"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              Get to know me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
              About{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            I am a Full Stack Developer specializing in crafting high-performance, responsive web applications and scalable backend systems.
          </p>

          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            My passion lies in writing clean, maintainable architecture, managing seamless database workflows, and deploying intelligent multi-agent automations that solve real-world problems.
          </p>

          {/* Quick Highlight Stats */}
          <div className="pt-2 grid grid-cols-2 gap-4 border-t border-slate-200 dark:border-slate-800/80">
            <div>
              <span className="block text-2xl font-bold text-slate-900 dark:text-white">Full Stack</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Next.js & Python</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-slate-900 dark:text-white">AI Driven</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Autonomous Agents</span>
            </div>
          </div>
        </motion.div>

        {/* Right Columns: Skills Matrix */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/50 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/20 ${
                index === 0 ? 'sm:col-span-2' : ''
              }`}
            >
              <h3 className="text-sm font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="text-sm font-medium px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-800/80 shadow-sm cursor-default transition-colors hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
