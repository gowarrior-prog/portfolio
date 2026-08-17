'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="w-full py-24 px-6 max-w-4xl mx-auto bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-[3.5rem] md:text-[4.5rem] font-bold tracking-tight text-blue-600">
          Experience
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          1.5+ Years of Full Stack Development
        </p>
      </motion.div>

      <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
        {/* Experience 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          {/* Timeline Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-100 group-[.is-active]:bg-blue-600 text-blue-600 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300">
            <Calendar size={18} />
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="text-[1.35rem] font-bold text-[#2d3748]">
                Full Stack Developer
              </h3>
            </div>
            <p className="text-blue-600 font-semibold text-[15px] mb-1">Freelance & Personal Projects</p>
            <div className="text-sm font-medium text-gray-500 mb-4">
              2024 - Present • 1.5 Years
            </div>
            
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Building modern web applications using React, Next.js, TypeScript, Python, Node.js and Tailwind CSS.
              Worked on multiple full-stack projects including AI-powered tools and client websites.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Python', 'Node.js', 'Tailwind CSS', 'FastAPI'].map((tech) => (
                <span key={tech} className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-gray-100 rounded text-gray-600">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          {/* Timeline Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-100 text-gray-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300">
            <Calendar size={18} />
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-200 opacity-80 hover:opacity-100 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-[#2d3748]">
                Junior Web Developer
              </h3>
            </div>
            <p className="text-gray-600 font-semibold text-[15px] mb-1">Client Projects / Internship</p>
            <div className="text-sm font-medium text-gray-500 mb-4">
              2023 - 2024
            </div>
            
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Started my journey in web development. Worked on various client projects and learned modern development practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}