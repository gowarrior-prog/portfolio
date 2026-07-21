'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements?: string[];
  tech?: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: 'Full Stack Developer',
      company: 'Freelance / Personal Projects',
      duration: '2024 - Present',
      location: 'Remote, Pakistan',
      description: 'Building modern full-stack web applications with focus on performance, user experience, and AI integration.',
      achievements: [
        'Developed FinAI - AI Powered Expense Tracker',
        'Working with team on MugiSub anime dashboard',
        'Built Multi-Agent Hub Backend system',
        'Delivered client E-commerce platform (Sparkroot)',
      ],
      tech: ['Next.js', 'TypeScript', 'FastAPI', 'Supabase', 'Prisma', 'Tailwind CSS'],
    },
    {
      role: 'Junior Web Developer',
      company: 'Client Projects / Internship',
      duration: '2023 - 2024',
      location: 'Pakistan',
      description: 'Worked on various client websites and learned modern development practices with Next.js ecosystem.',
      achievements: [
        'Successfully delivered multiple client projects',
        'Gained expertise in full-stack development',
      ],
      tech: ['React', 'Next.js', 'Tailwind CSS'],
    },
  ];

  return (
    <section id="experience" className="w-full py-24 px-6 max-w-6xl mx-auto bg-slate-50 dark:bg-slate-950">
      <div className="space-y-4 mb-16 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Work{' '}
          <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto md:mx-0">
          My professional journey and key contributions.
        </p>
      </div>

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 border-l-2 border-emerald-500/30 hover:border-emerald-500 transition-colors group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-emerald-500" />

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-emerald-500" size={22} />
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                      {experience.role}
                    </h3>
                  </div>
                  <p className="text-xl text-emerald-600 dark:text-emerald-400 mt-1">{experience.company}</p>
                </div>

                <div className="flex flex-col items-start md:items-end text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {experience.description}
              </p>

              {experience.achievements && (
                <div className="mb-6">
                  <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                        <span className="text-emerald-500 mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {experience.tech && (
                <div>
                  <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}