"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ProfileSection() {
  return (
    <div className="flex items-center justify-center relative px-6 md:px-10 lg:px-16 w-full">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-xl gap-16 lg:gap-24">

        {/* Left Side: Solid Typography Block (60% Weight) */}
        <div className="flex-[1.2] flex flex-col items-start text-left">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-primary/5 border border-brand-primary/10 rounded-full">
              <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Available for Enterprise Projects</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[44px] leading-[1.05] md:text-[72px] md:leading-[1.05] font-bold text-foreground mb-8 tracking-tighter"
          >
            Building Scalable <br />
            <span className="text-brand-primary">Digital Solutions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] md:text-[18px] text-brand-accent font-normal leading-relaxed max-w-xl mb-12"
          >
            Software Engineer & Data Science Specialist specializing in architecting high-performance web systems and AI-driven user experiences.
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
              className="w-full sm:w-auto overflow-hidden group"
            >
              <button className="btn-primary flex items-center justify-center gap-2 w-full hover:bg-[#6c1a27] hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(122,30,44,0.2)] active:translate-y-0 transition-all duration-300">
                <span>View Resume</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            <ScrollLink to="connect" smooth={true} duration={800} className="w-full sm:w-auto">
              <button
                className="w-full px-10 py-4 bg-white text-foreground hover:bg-brand-primary hover:text-white font-bold text-sm tracking-widest uppercase transition-all border border-brand-border hover:border-brand-primary rounded-[12px] shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Get in Touch
              </button>
            </ScrollLink>
          </motion.div>

        </div>

        {/* Right Side: Visual Focus (40% Weight) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 w-full max-w-[340px] md:max-w-md lg:max-w-md xl:max-w-lg mb-8 lg:mb-0"
        >
          <div className="relative aspect-[4/5] w-full">
            {/* Layered Cards for Depth */}
            <div className="absolute inset-0 rounded-[12px] bg-brand-primary/5 translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6 border border-brand-primary/10"></div>

            <div className="relative h-full w-full rounded-[12px] overflow-hidden border border-white/50 bg-white shadow-[0_30px_60px_-15px_rgba(28,28,28,0.15)] group">
              <Image
                src="/profile.png"
                alt="Leela Prasad Kolli"
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
