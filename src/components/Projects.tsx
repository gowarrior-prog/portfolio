'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  live: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Multi-Agent Hub',
      description: 'A platform for orchestrating and monitoring multi-agent AI systems with real-time collaboration.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      live: 'https://my-ai-suite.vercel.app',
    },
    {
      title: 'MugiSub',
      description: 'A sleek subtitle editor with AI-powered timing, translation, and smart suggestions.',
      tech: ['React', 'TypeScript', 'Electron', 'SQLite'],
      live: 'https://mugi-sub.vercel.app/',
    },
    {
      title: 'E-Commerce Ecosystem',
      description: 'A full-stack e-commerce platform with admin dashboard, storefront, and microservices backend.',
      tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
      live: 'https://sparkroot.vercel.app/',
    },
    {
      title: 'FinAI - Expense Tracker',
      description: 'AI-driven expense tracker with insights, budgets, and smart financial recommendations.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'OpenAI API'],
      live: 'https://smart-virid-gamma.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="w-full py-24 px-6 max-w-6xl mx-auto bg-white">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="space-y-4 mb-16 text-center"
      >
        <h2 className="text-[3.5rem] md:text-[4.5rem] font-bold tracking-tight text-blue-600">
          Projects
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          A curated selection of full-stack applications, interactive interfaces, and backend systems.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl hover:shadow-blue-500/5 transition-shadow duration-300"
          >
            <div className="space-y-3">
              {/* Title */}
              <h3 className="text-[1.35rem] font-bold text-[#2d3748]">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm leading-relaxed text-[#2d3748]">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-3 pb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#1e293b] text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center pt-5 border-t border-gray-100">
              <a
                href={project.live}
                className="flex items-center gap-1.5 text-[15px] font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                Live Demo <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}