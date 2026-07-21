'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Multi-Agent Hub',
      description: 'A powerful full-stack multi-agent automation application powered by FastAPI, managing intelligent sequences and parallel execution queues.',
      tech: ['FastAPI', 'Python', 'Zustand', 'TypeScript'],
      github: '#',
      live: 'https://my-ai-suite.vercel.app/',
    },
    {
      title: 'MugiSub',
      description: 'A modern, high-performance user management control panel and streaming dashboard featuring comprehensive administrative views. Currently working on it with the team.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Prisma'],
      github: '#',
      live: 'https://mugi-sub.vercel.app',
    },
    {
      title: 'E-Commerce Ecosystem',
      description: 'A full-stack e-commerce platform integrated with Supabase authentication and automated Prisma schema migrations. This is a client website that we added to the portfolio with the client\'s permission.',
      tech: ['Next.js', 'Supabase', 'Prisma', 'Tailwind CSS'],
      github: '#',
      live: 'https://sparkroot.vercel.app/',
    },
    {
      title: 'FinAI - Expense Tracker',
      description: 'Smart AI-powered expense tracker with budget management, category analytics, personalized saving suggestions, and real-time insights. Built with modern UI/UX and financial intelligence features.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI Integration'],
      github: '#',
      live: 'https://smart-virid-gamma.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="w-full min-h-screen py-24 px-6 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Featured{' '}
          <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-md">
          A curated selection of full-stack applications, interactive interfaces, and backend systems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/50 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 group"
          >
            <div className="space-y-4">
              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/40 dark:border-slate-700/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800/60 mt-6">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors duration-200 ml-auto"
              >
                Live Demo <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}