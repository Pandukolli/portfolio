"use client";

import { motion } from "framer-motion";
import { Code2, Globe2, BrainCircuit, Layers, Wrench } from "lucide-react";

const skillsData = [
  {
    category: "Languages & Core",
    icon: Code2,
    skills: ["Java", "C", "JavaScript", "TypeScript", "HTML", "CSS", "Python"],
    colorToken: "from-brand-primary to-transparent"
  },
  {
    category: "Web Engineering",
    icon: Globe2,
    skills: ["React", "Next.js", "Tailwind CSS", "REST Architectures", "DOM Manipulation"],
    colorToken: "from-foreground to-transparent"
  },
  {
    category: "Data Science & ML",
    icon: BrainCircuit,
    skills: ["Supervised Tuning", "Predictive Models", "Feature Engineering"],
    colorToken: "from-brand-accent to-transparent"
  },
  {
    category: "Frameworks & Intel",
    icon: Layers,
    skills: ["TensorFlow", "Scikit-Learn", "Pandas", "NumPy"],
    colorToken: "from-foreground/50 to-transparent"
  },
  {
    category: "Tooling & DevOps",
    icon: Wrench,
    skills: ["Git", "GitHub Actions", "VS Code", "Jupyter", "Node.js"],
    colorToken: "from-brand-primary to-transparent"
  }
];

export function SkillsSection() {
  return (
    <div className="relative flex items-center justify-center container mx-auto px-6 md:px-10 lg:px-16 w-full">
      <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-start max-w-7xl">
        
        {/* Left Side: Technical Narrative (40% Weight) */}
        <div className="flex-1 lg:max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="inline-block px-3 py-1 bg-brand-primary/5 border border-brand-primary/10 rounded-full mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Technical Strategy</span>
            </div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-foreground mb-6 tracking-tight leading-tight">
              Foundational <br />
              <span className="text-brand-primary">Expertise.</span>
            </h2>
            <div className="w-12 h-[1.5px] bg-brand-primary"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] md:text-[17px] text-brand-accent leading-relaxed font-normal"
          >
            My technical stack is built on a foundation of rigorous engineering principles and modern web standards. I prioritize tools that offer both high performance and exceptional developer experience to build resilient digital systems.
          </motion.p>
        </div>

        {/* Right Side: Competency Grid (60% Weight) */}
        <div className="flex-[1.5] w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillsData.map((data, index) => {
            const IconComponent = data.icon;
            return (
              <motion.div
                key={data.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-base hover:card-hover p-6 md:p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 bg-brand-primary/5 rounded-xl">
                    <IconComponent className="w-5 h-5 text-brand-primary" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-bold text-foreground tracking-tight leading-none">
                    {data.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white border border-brand-border rounded-[8px] text-brand-accent font-semibold text-[11px] tracking-wide transition-all hover:border-brand-primary hover:text-brand-primary cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
