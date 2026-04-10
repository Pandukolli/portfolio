"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Link Vault",
    subtitle: "Personal Knowledge OS",
    description: "A premium full-stack Personal Knowledge Operating System consolidating links, notes, blogs, and cinematic galleries. Built with Next.js 15, TipTap, and Supabase featuring realistic paper animations and AI-powered writing assistance.",
    date: "April 2026 – Present",
    location: "Hyderabad, India",
    tags: ["Next.js 15", "Supabase", "TipTap", "Gemini AI"],
    github: "https://github.com/Pandukolli",
  },
  {
    title: "Loah",
    subtitle: "Psychology & Research",
    description: "An exploration into psychological insights and behavioral patterns. This repository investigates the intersection of human cognition and digital interaction, offering research on how cognitive science shapes modern user experiences.",
    tags: ["Psychology", "UI/UX Research", "Cognitive Science"],
    github: "https://github.com/Pandukolli",
  },
  {
    title: "SciFi Portfolio",
    subtitle: "Zero-Scroll Interface",
    description: "A boundary-pushing, non-scrolling portfolio designed to create a cinematic and immersive user experience. It challenges traditional web navigation principles through visual storytelling and futuristic design.",
    tags: ["Next.js", "Framer Motion", "Experimental"],
    github: "https://github.com/Pandukolli",
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-24 flex flex-col justify-center relative px-4 md:px-12 lg:px-24 container mx-auto">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-[28px] md:text-[32px] font-semibold text-foreground mb-4 tracking-tight">Technical Endeavors</h2>
        <div className="w-12 h-[2px] bg-brand-primary"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col h-full bg-white border border-foreground/[0.06] hover:border-brand-primary/30 hover:shadow-[0_20px_50px_rgba(15,23,42,0.04)] transition-all duration-500 rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Fine Accent Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex flex-col h-full relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="w-11 h-11 flex items-center justify-center bg-brand-secondary/40 rounded-xl border border-foreground/[0.04] group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
                  <FaGithub className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex gap-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 text-brand-muted hover:text-brand-primary transition-colors"
                    title="Source Code"
                  >
                    <ExternalLink className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-[18px] md:text-[21px] font-semibold text-foreground mb-2 tracking-tight group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-brand-muted text-[10px] font-bold uppercase tracking-[0.2em]">
                  {project.subtitle}
                </p>
              </div>
              
              <p className="text-foreground/60 mb-10 flex-grow text-[14px] md:text-[15px] leading-relaxed font-normal">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-6 border-t border-foreground/[0.04]">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-brand-muted group-hover:text-brand-primary transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
