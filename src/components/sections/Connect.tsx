"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function ConnectSection() {
  return (
    <section id="connect" className="min-h-screen py-24 flex items-center justify-center relative px-4 md:px-12 lg:px-24 container mx-auto">
      
      <div className="w-full flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-foreground mb-4 tracking-tight">Let's build together.</h2>
          <p className="text-[14px] md:text-[16px] text-brand-muted font-normal max-w-xl mx-auto leading-relaxed">
            My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-4"
        >
          
          <a 
            href="mailto:pandukolli666@gmail.com"
            className="group px-10 py-4 bg-foreground text-background font-bold text-xs tracking-widest uppercase transition-all hover:bg-brand-primary border border-foreground hover:border-brand-primary flex items-center gap-3 w-64 justify-center"
          >
            <Mail className="w-4 h-4" />
            <span>Say Hello</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/leela-prasad-kolli-722824327/"
            target="_blank"
            rel="noreferrer"
            className="group px-10 py-4 bg-transparent text-foreground hover:text-brand-primary font-bold text-xs tracking-widest uppercase transition-all border border-foreground/10 hover:border-brand-primary flex items-center gap-3 w-64 justify-center"
          >
            <FaLinkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a 
            href="https://github.com/Pandukolli"
            target="_blank"
            rel="noreferrer"
            className="group px-10 py-4 bg-transparent text-foreground hover:text-brand-primary font-bold text-xs tracking-widest uppercase transition-all border border-foreground/10 hover:border-brand-primary flex items-center gap-3 w-64 justify-center"
          >
            <FaGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 border-t border-foreground/5 pt-8 w-full text-center"
        >
          <p className="text-brand-muted font-bold text-[10px] uppercase tracking-[0.2em]">Designed &amp; Built by Leela Prasad Kolli</p>
        </motion.div>
      </div>
    </section>
  );
}
