"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-24 flex items-center justify-center relative px-4 md:px-12 lg:px-24 container mx-auto">
      <div className="w-full flex flex-col xl:flex-row gap-12 xl:gap-24 items-start">
        
        {/* Left Side: Elegant Text Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          <div className="flex flex-col mb-10">
            <h2 className="text-[28px] md:text-[32px] font-semibold text-foreground mb-4 tracking-tight">About Me</h2>
            <div className="w-12 h-[2px] bg-brand-primary"></div>
          </div>
          
          <div className="space-y-6 max-w-2xl">
            <p className="text-[14px] md:text-[16px] text-foreground/80 leading-relaxed font-normal">
              I am a <strong className="text-foreground font-semibold">results-driven software engineer</strong> and Data Science student with an obsessive focus on creating highly optimized, seamless, and scalable digital experiences.
            </p>
            <p className="text-[14px] md:text-[16px] text-foreground/75 leading-relaxed font-normal">
              I specialize in bridging the gap between back-end data complexity and front-end user experience, translating demanding requirements into exceptionally clean architectures.
            </p>
            <p className="text-[14px] md:text-[16px] text-brand-muted leading-relaxed border-l-2 border-brand-primary/30 pl-5 italic">
              My core objective is to execute impactful real-world applications within a dynamic team, continuously evolving alongside bleeding-edge industry advancements.
            </p>
          </div>
          
        </motion.div>

        {/* Right Side: Structured Highlights */}
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group p-8 border border-foreground/5 bg-brand-secondary/30 rounded-xl col-span-1 md:col-span-2 shadow-sm"
          >
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-brand-primary font-bold mb-4">Education</h3>
            <h4 className="text-[18px] md:text-[22px] font-medium text-foreground mb-1">Data Science Engineering</h4>
            <p className="text-brand-muted text-xs font-semibold">Aditya Engineering College &nbsp;·&nbsp; 2022 – 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group p-8 border border-foreground/5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-brand-muted font-bold mb-4">Core Strengths</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-foreground/80 text-[13px] font-medium"><ChevronRight className="w-3.5 h-3.5 text-brand-primary shrink-0" /> Algorithm Optimization</li>
              <li className="flex items-center gap-3 text-foreground/80 text-[13px] font-medium"><ChevronRight className="w-3.5 h-3.5 text-brand-primary shrink-0" /> System Architecture</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group p-8 border border-foreground/5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-brand-muted font-bold mb-4">Focus Areas</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-foreground/80 text-[13px] font-medium"><ChevronRight className="w-3.5 h-3.5 text-brand-primary shrink-0" /> Front-end Engineering</li>
              <li className="flex items-center gap-3 text-foreground/80 text-[13px] font-medium"><ChevronRight className="w-3.5 h-3.5 text-brand-primary shrink-0" /> Machine Learning</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

