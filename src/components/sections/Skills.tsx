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
    <div className="relative flex items-center justify-center container mx-auto px-4 md:px-12 lg:px-24 py-16">
      <div className="w-full flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-left lg:text-center mb-16"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-foreground mb-4 tracking-tight">Technical Arsenal</h2>
          <div className="w-12 h-[2px] bg-brand-primary lg:mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {skillsData.map((data, index) => {
            const IconComponent = data.icon;
            return (
              <motion.div
                key={data.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-base hover:card-hover p-8 md:p-10"
              >
                <div className="flex items-center gap-5 mb-10">
                  <div className="p-3 bg-brand-primary/5 rounded-xl">
                    <IconComponent className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-foreground tracking-tight">
                    {data.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {data.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 bg-brand-primary/5 border border-brand-primary/10 rounded-lg text-brand-primary font-bold text-[10px] tracking-wide uppercase transition-all"
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
