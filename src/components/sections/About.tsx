"use client";

import { motion } from "framer-motion";
import { SearchSlash, Terminal, Layout, Cpu, ChevronRight } from "lucide-react";

export function AboutSection() {
  return (
    <div className="relative flex items-center justify-center container mx-auto px-4 md:px-12 lg:px-24">
      <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Left Side: Story & Context */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-[28px] md:text-[32px] font-semibold text-foreground mb-4 tracking-tight">Personal Narrative</h2>
            <div className="w-12 h-[2px] bg-brand-primary"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-[15px] md:text-[16px] text-brand-accent leading-relaxed max-w-2xl"
          >
            <p>
              I am a specialized Software Engineer with a rigorous focus on the intersection of front-end architecture and data science. My engineering philosophy revolves around building digital systems that are not only performant but also deeply intuitive and accessible to diverse user groups.
            </p>
            <p>
              Currently, I am architecting complex web platforms that leverage modern frameworks and AI-driven insights to deliver high-impact user experiences. My approach combines technical precision with a senior UI/UX perspective, ensuring that every line of code serves a strategic purpose.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Quick Highlights Grid */}
        <div className="lg:w-[480px] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { 
              label: "Focus Area", 
              value: "Enterprise Web Systems", 
              icon: SearchSlash,
              desc: "Scalable frontend structures"
            },
            { 
              label: "Core Stack", 
              value: "Next.js & Supabase", 
              icon: Terminal,
              desc: "Modern full-stack builds"
            },
            { 
              label: "Methodology", 
              value: "UX-Driven Dev", 
              icon: Layout,
              desc: "User-first technical decisions"
            },
            { 
              label: "Specialization", 
              value: "Data Visualisation", 
              icon: Cpu,
              desc: "Complex data simplified"
            }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-base hover:card-hover p-6 flex flex-col items-start gap-4"
              >
                <div className="p-2 bg-brand-primary/5 rounded-lg">
                  <IconComponent className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-brand-muted uppercase tracking-widest mb-1">{item.label}</h3>
                  <p className="text-[15px] font-semibold text-foreground leading-tight mb-2">{item.value}</p>
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

