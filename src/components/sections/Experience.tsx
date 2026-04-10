"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Award } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    title: "Machine Learning Intern",
    company: "Andhra Pradesh State Skill Development Corporation",
    date: "June 2024 – July 2024",
    points: [
      "Engineered an enterprise-grade predictive model utilizing Random Forest and XGBoost algorithms to accurately identify employee burnout markers.",
      "Architected rigorous data preprocessing pipelines, ensuring optimal normalization and feature extraction for high-dimensional matrices.",
      "Conducted extensive k-fold cross-validation and hyperparameter tuning to secure robust model generalization."
    ]
  },
  {
    title: "Front-end Engineering Intern",
    company: "SkillDezire",
    date: "April 2024 – June 2024",
    points: [
      "Developed a responsive, high-performance task management application utilizing pure DOM APIs and modern JavaScript design patterns.",
      "Implemented comprehensive state management protocols to handle complex asynchronous CRUD operations seamlessly.",
      "Optimized rendering pathways, establishing clean modular code structures for future maintainability."
    ]
  }
];

const certifications = [
  {
    title: "Applied AI & ML Certification",
    issuer: "APSSDC",
    date: "2024"
  },
  {
    title: "Advanced Web Development",
    issuer: "SkillDezire",
    date: "2024"
  }
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
    <div ref={containerRef} className="relative flex items-center justify-center container mx-auto px-6 md:px-10 lg:px-16 w-full">
      <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-start max-w-7xl">
        
        {/* Left Side: Experience Timeline */}
        <div className="flex-[1.2]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block px-3 py-1 bg-brand-primary/5 border border-brand-primary/10 rounded-full mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Career Trajectory</span>
            </div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-foreground mb-4 tracking-tight">Professional History.</h2>
            <div className="w-12 h-[1.5px] bg-brand-primary"></div>
          </motion.div>

          <div className="relative ml-2">
            <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-brand-border" />
            <motion.div 
              style={{ height: pathHeight }}
              className="absolute left-0 top-2 w-[1px] bg-brand-primary origin-top z-10"
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-10 md:pl-12 group"
                >
                  <div className="absolute w-2 h-2 bg-brand-primary rounded-full -left-[3.5px] top-2 z-20 border-2 border-background" />
                  
                  <div className="flex flex-col mb-4">
                    <span className="text-brand-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-1">{exp.date}</span>
                    <h3 className="text-[20px] md:text-[24px] font-bold text-foreground tracking-tight transition-colors group-hover:text-brand-primary">
                      {exp.title}
                    </h3>
                    <h4 className="text-brand-accent text-[12px] font-bold uppercase tracking-widest mt-1 opacity-70 italic">{exp.company}</h4>
                  </div>
                  
                  <ul className="space-y-4 max-w-2xl">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-4 text-brand-accent text-[14px] md:text-[16px] leading-relaxed font-normal">
                        <span className="mt-2.5 w-1 h-1 rounded-full bg-brand-primary/30 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Accreditations Sidebar */}
        <div className="lg:w-[380px] w-full pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h3 className="text-[13px] font-bold text-brand-muted uppercase tracking-[0.3em] mb-4">Accreditations</h3>
            <div className="w-8 h-[1.5px] bg-brand-primary"></div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 card-base hover:card-hover flex flex-col gap-3 group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-[17px] font-bold text-foreground leading-tight mb-1">{cert.title}</h4>
                    <p className="text-[11px] font-bold text-brand-primary uppercase tracking-wider">{cert.issuer}</p>
                  </div>
                  <div className="p-2 bg-brand-primary/5 rounded-lg group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <Award className="w-4 h-4 text-brand-primary group-hover:text-white" />
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-brand-border/50">
                  <span className="text-brand-muted text-[10px] font-bold tracking-widest uppercase">Verified</span>
                  <span className="text-brand-muted text-[10px] font-bold">{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
