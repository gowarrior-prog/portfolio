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
    <section id="about" className="w-full py-24 px-6 max-w-6xl mx-auto bg-white">
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Column: Bio */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1 space-y-6"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
              Get to know me
            </span>
            <h2 className="text-[2.5rem] leading-tight font-bold text-[#2d3748] mt-1">
              About{' '}
              <span className="text-blue-600">
                Me
              </span>
            </h2>
          </div>

          <p className="text-gray-600 text-[15px] leading-relaxed">
            I am a Full Stack Developer specializing in crafting high-performance, responsive web applications and scalable backend systems.
          </p>

          <p className="text-gray-600 text-[15px] leading-relaxed">
            My passion lies in writing clean, maintainable architecture, managing seamless database workflows, and deploying intelligent multi-agent automations that solve real-world problems.
          </p>

          {/* Quick Highlight Stats */}
          <div className="pt-4 grid grid-cols-2 gap-4 border-t border-gray-100">
            <div>
              <span className="block text-xl font-bold text-[#2d3748]">Full Stack</span>
              <span className="text-xs font-medium text-gray-500">Next.js & Python</span>
            </div>
            <div>
              <span className="block text-xl font-bold text-[#2d3748]">AI Driven</span>
              <span className="text-xs font-medium text-gray-500">Autonomous Agents</span>
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
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-6 rounded-2xl bg-white border border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:border-blue-200 ${
                index === 0 ? 'sm:col-span-2' : ''
              }`}
            >
              <h3 className="text-sm font-bold tracking-wider uppercase text-blue-600 mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="text-[13px] font-semibold px-3 py-1.5 rounded-md bg-[#1e293b] text-white cursor-default shadow-sm transition-colors hover:bg-blue-600"
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
