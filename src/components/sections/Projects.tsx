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
    <div className="relative flex flex-col items-center justify-center container mx-auto px-6 md:px-10 lg:px-16 w-full -mt-7">
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center lg:text-left"
        >
          <div className="inline-block px-3 py-1 bg-brand-primary/5 border border-brand-primary/10 rounded-full mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Curated Gallery</span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-foreground mb-4 tracking-tight">Technical Endeavors.</h2>
          <div className="w-12 h-[1.5px] bg-brand-primary mx-auto lg:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-base hover:card-hover flex flex-col h-full p-8 relative overflow-hidden group"
            >
              {/* Fine Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-10 h-10 flex items-center justify-center bg-brand-primary/5 rounded-lg border border-brand-primary/10 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
                    <FaGithub className="w-4 h-4 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-brand-muted hover:text-brand-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="mb-5">
                  <h3 className="text-[18px] md:text-[20px] font-bold text-foreground mb-1 tracking-tight group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-brand-muted text-[10px] font-bold uppercase tracking-[0.2em]">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-brand-accent mb-8 flex-grow text-[13px] md:text-[14px] leading-relaxed font-normal">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-brand-border/50">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-brand-primary/5 text-[9px] font-bold uppercase tracking-widest text-brand-primary rounded-md transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
