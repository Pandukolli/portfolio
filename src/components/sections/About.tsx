"use client";

import { motion } from "framer-motion";
import { SearchSlash, Terminal, Layout, Cpu, ChevronRight } from "lucide-react";

export function AboutSection() {
  return (
    <div className="relative flex items-center justify-center container mx-auto px-6 md:px-10 lg:px-16 w-full">
      <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-start max-w-7xl">
        
        {/* Left Side: Professional Narrative (60% Weight) */}
        <div className="flex-[1.2]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-[32px] md:text-[40px] font-bold text-foreground mb-4 tracking-tight">
              Expertise & Narrative.
            </h2>
            <div className="w-12 h-[1.5px] bg-brand-primary"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-[15px] md:text-[17px] text-brand-accent leading-relaxed max-w-2xl"
          >
            <p>
              I am a specialized Software Engineer focusing on the intersection of front-end architecture and data science. My philosophy revolves around building digital systems that remain performant while being deeply intuitive.
            </p>
            <p>
              Currently, I architect complex platforms using modern frameworks and AI-driven insights. My approach combines technical precision with a senior UI/UX perspective, ensuring that every line of code serves a clear strategic purpose.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Core Competencies (40% Weight) */}
        <div className="flex-1 w-full grid grid-cols-1 gap-3">
          <h3 className="text-[10px] font-bold text-brand-muted uppercase tracking-[0.3em] mb-4">Core Competencies</h3>
          {[
            { 
              label: "Scalable Architectures", 
              icon: SearchSlash,
              desc: "Enterprise-grade resilient systems."
            },
            { 
              label: "AI-Driven UX", 
              icon: Terminal,
              desc: "Seamless AI model integration."
            },
            { 
              label: "Strategic Design", 
              icon: Layout,
              desc: "Data-driven UI decision making."
            },
            { 
              label: "Performance Optimization", 
              icon: Cpu,
              desc: "High-level data visualization."
            }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-base hover:card-hover p-5 flex items-center gap-5"
              >
                <div className="p-2.5 bg-brand-primary/5 rounded-lg">
                  <IconComponent className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-foreground leading-tight mb-1">{item.label}</h4>
                  <p className="text-[11px] text-brand-muted font-medium">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

