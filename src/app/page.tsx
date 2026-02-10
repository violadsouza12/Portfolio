"use client";

import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, FileText, MapPin, Phone, Download } from 'lucide-react';
import { motion } from 'framer-motion';

// --- YOUR DATA ---
const DATA = {
  name: "Viola D'Souza",
  role: "Full Stack Engineer",
  location: "Udupi, Karnataka",
  email: "violadsouza2003@gmail.com",
  phone: "+91 9108729772",
  resume: "/resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/viola-d-souza-23a14220b",
    github: "https://github.com/violadsouza12",
  },
  description: "I thrive at the intersection of Full Stack Development, AI, and Data Science, driven by a relentless curiosity to understand how things work and how to make them better. I view every challenge as an opportunity to learn and every project as a chance to contribute meaningful knowledge to my team and the world. When I'm not building software, I'm fueling my creativity by travelling to unexplored places, playing basketball, or diving into a new subject. For me, growth is a lifestyle, both online and offline.",
  projects: [
    {
      title: "Carbon Sequestration Est.",
      year: "2025",
      desc: "Python-based image processing tool to analyze tree structures and estimate carbon storage accuracy.",
      tags: ["Python", "Image Processing", "Analytics"],
      image: "/carbon.jpg",
      link: "https://github.com/violadsouza12/Carbon-Sequestration"
    }
  ],
  experience: [
    {
      role: "Data Analytics Simulation",
      company: "Deloitte Australia",
      period: "2026",
      desc: "Completed job simulation involving data analysis and forensic technology.",
      link: "/deloitte-cert.pdf" 
    },
    {
      role: "Salesforce Developer Intern",
      company: "Salesforce (Virtual)",
      period: "2025",
      desc: "Built LWC components and managed Apex triggers for process automation.",
      link: "/smartbridge-cert.pdf"
    },
    {
      role: "Curator",
      company: "TEDxSJEC",
      period: "2024",
      desc: "Curated talks for regional TEDx event.",
      link: "/tedx-cert.pdf"
    }
  ]
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-emerald-400/30">
      
      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-emerald-600/15 rounded-full blur-[120px]" />
      </div>

      {/* FLOATING NAVIGATION */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto">
        <div className="flex items-center gap-6 px-8 py-3 rounded-full border border-white/20 bg-black/60 backdrop-blur-xl shadow-2xl">
          <a href="#work" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Work</a>
          <a href="#about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Contact</a>
          <div className="w-px h-4 bg-white/30"></div>
          <a 
            href={DATA.resume} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
          >
             Resume <ArrowUpRight size={12} />
          </a>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* HERO SECTION */}
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center">
          
          {/* PROFILE IMAGE + STATUS */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
              <img src="/profile.jpg" alt="Viola D'Souza" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-[#0a0a0a] p-1.5 rounded-full">
               <div className="px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-500/20 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                 <span className="text-[10px] font-bold tracking-widest text-emerald-300 uppercase hidden sm:block">Open to work</span>
               </div>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
          >
            Viola D'Souza
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70 max-w-3xl leading-relaxed mb-10"
          >
            {DATA.description}
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="flex gap-4"
          >
            <a href="#work" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform shadow-lg">
              View Projects
            </a>
          </motion.div>
        </section>

        {/* PROJECTS (Bento Grid) */}
        <section id="work" className="py-24">
          <div className="flex items-baseline justify-between mb-12 border-b border-white/15 pb-4">
            <h2 className="text-sm font-bold tracking-widest text-white/60 uppercase">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {DATA.projects.map((project, idx) => {
              const CardContent = (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative h-[400px] flex flex-col justify-between rounded-3xl bg-white/8 border border-white/15 hover:border-white/30 transition-all hover:bg-white/12 overflow-hidden cursor-pointer"
                >
                  {project.image && (
                    <div className="absolute inset-0 z-0 opacity-50 group-hover:opacity-70 transition-opacity">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    </div>
                  )}

                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <ArrowUpRight className="text-white" size={24} />
                  </div>

                  <div className="relative z-10 flex justify-between items-start p-8">
                    <span className="text-xs font-mono text-white/70 border border-white/25 px-2 py-1 rounded bg-black/50 backdrop-blur-md">
                      {project.year}
                    </span>
                  </div>
                  
                  <div className="relative z-10 p-8 pt-0">
                    <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-xl">{project.title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm mb-4 line-clamp-2 drop-shadow-lg font-medium">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-white/90 bg-white/15 px-2 py-1 rounded backdrop-blur-md border border-white/15">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );

              return project.link ? (
                <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  {CardContent}
                </a>
              ) : (
                <div key={idx}>{CardContent}</div>
              );
            })}
          </div>
        </section>

        {/* EXPERIENCE (Clickable Certificates) */}
        <section id="about" className="py-24">
          <h2 className="text-sm font-bold tracking-widest text-white/60 uppercase mb-12 border-b border-white/15 pb-4">Experience</h2>
          <div className="space-y-4">
            {DATA.experience.map((exp, idx) => {
              const ExperienceCard = (
                 <div className="group flex flex-col md:flex-row justify-between items-start p-6 rounded-2xl hover:bg-white/8 transition-colors border border-transparent hover:border-white/15 cursor-pointer relative">
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400">
                      <ArrowUpRight size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                      <p className="text-white/60 text-sm mb-2">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-white/50 text-sm hidden md:block max-w-md">{exp.desc}</p>
                      <div className="text-xs font-mono text-white/40 border border-white/15 px-2 py-1 rounded shrink-0">
                        {exp.period}
                      </div>
                    </div>
                  </div>
              );

              return exp.link ? (
                <a key={idx} href={exp.link} target="_blank" rel="noopener noreferrer" className="block">
                  {ExperienceCard}
                </a>
              ) : (
                <div key={idx}>{ExperienceCard}</div>
              );
            })}
          </div>
        </section>

        {/* CONTACT HERO */}
        <section id="contact" className="py-24">
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-white/15 to-black p-12 md:p-24 text-center border border-white/15 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Let's build something <br/> exceptional.</h2>
              
              <div className="flex flex-col items-center gap-4 text-white/70 mb-10">
                <a href={`mailto:${DATA.email}`} className="text-xl hover:text-white transition-colors flex items-center gap-2 border-b border-white/30 pb-1">
                  {DATA.email}
                </a>
              </div>
              
              <div className="flex justify-center gap-4">
                <a href={DATA.links.linkedin} className="p-4 rounded-full bg-white text-black hover:scale-110 transition-transform shadow-lg">
                  <Linkedin size={24} />
                </a>
                <a href={DATA.links.github} className="p-4 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-xs text-white/30">
          <p>© 2026 {DATA.name}. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
