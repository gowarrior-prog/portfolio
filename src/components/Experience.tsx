'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="w-full py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          Experience
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          1.5+ Years of Full Stack Development
        </p>
      </div>

      <div className="space-y-10">
        {/* Experience 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-l-4 border-emerald-500 pl-6 py-2"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Full Stack Developer
              </h3>
              <p className="text-emerald-600 dark:text-emerald-400 text-lg">Freelance & Personal Projects</p>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Calendar size={18} />
              2024 - Present • 1.5 Years
            </div>
          </div>
          
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            Building modern web applications using React, Next.js, TypeScript, Python, Node.js and Tailwind CSS.
            Worked on multiple full-stack projects including AI-powered tools and client websites.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Python', 'Node.js', 'Tailwind CSS', 'FastAPI'].map((tech) => (
              <span key={tech} className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Experience 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="border-l-4 border-slate-300 dark:border-slate-700 pl-6 py-2 opacity-75"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Junior Web Developer
              </h3>
              <p className="text-slate-600 dark:text-slate-400">Client Projects / Internship</p>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Calendar size={18} />
              2023 - 2024
            </div>
          </div>
          
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            Started my journey in web development. Worked on various client projects and learned modern development practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
}