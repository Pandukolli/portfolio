"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ProfileSection() {
  return (
    <section id="profile" className="min-h-screen flex items-center justify-center relative px-4 md:px-12 lg:px-24 bg-background">
      
      {/* Subtle Background Accent */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-brand-secondary rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl gap-12 lg:gap-8 pt-24 md:pt-32">
        
        {/* Left Side: Solid Typography Block */}
        <div className="flex-1 flex flex-col items-start text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[1.5px] bg-brand-primary"></div>
            <span className="uppercase tracking-[0.3em] text-brand-muted text-[11px] font-bold">Leela Prasad Kolli</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[42px] leading-[1.1] md:text-[56px] md:leading-[1.15] font-bold text-foreground mb-6 tracking-tight"
          >
            Building Scalable <br />
            <span className="text-brand-primary">Digital Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] md:text-[18px] text-brand-accent font-medium leading-relaxed max-w-xl mb-10"
          >
            Software Engineer & Data Science Specialist focused on architecting high-performance, accessible, and user-centric web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="/Kolli_Leela_Prasad_Resume.pdf" 
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <button 
                className="group w-full sm:w-auto px-10 py-4 bg-foreground text-background font-bold text-sm tracking-widest uppercase transition-all hover:bg-brand-primary border border-foreground hover:border-brand-primary flex items-center justify-center gap-2"
              >
                <span>Download CV</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            
            <ScrollLink to="projects" smooth={true} duration={800} className="w-full sm:w-auto">
              <button 
                className="w-full px-10 py-4 bg-transparent text-foreground font-bold text-sm tracking-widest uppercase transition-all border border-foreground/10 hover:border-foreground hover:bg-brand-secondary"
              >
                View Projects
              </button>
            </ScrollLink>
          </motion.div>

        </div>

        {/* Right Side: Clean Visual Focus */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 w-full max-w-[320px] md:max-w-md lg:max-w-lg mb-8 lg:mb-0"
        >
          <div className="relative aspect-[4/5] w-full">
            {/* Minimal Background Plate - Straightened for cleaner grid feel */}
            <div className="absolute inset-0 rounded-2xl bg-brand-secondary/50 shadow-sm"></div>
            
            {/* The Image Container */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-foreground/5 bg-white shadow-2xl">
              <Image 
                src="/profile.png" 
                alt="Leela Prasad Kolli" 
                fill 
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Accent Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-primary/10 rounded-full blur-2xl"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
