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
    <div ref={containerRef} className="relative flex items-center justify-center container mx-auto px-4 md:px-12 lg:px-24">
      <div className="w-full flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Experience Timeline */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-[28px] md:text-[32px] font-semibold text-foreground mb-4 tracking-tight">Professional Trajectory</h2>
            <div className="w-12 h-[2px] bg-brand-primary"></div>
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
                  className="relative pl-10 md:pl-16 group"
                >
                  <div className="absolute w-2.5 h-2.5 bg-brand-primary rounded-full -left-[4.5px] top-1.5 z-20 border-4 border-background" />
                  
                  <div className="flex flex-col mb-4">
                    <span className="text-brand-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-2">{exp.date}</span>
                    <h3 className="text-[18px] md:text-[22px] font-semibold text-foreground tracking-tight transition-colors group-hover:text-brand-primary">{exp.title}</h3>
                    <h4 className="text-brand-accent text-[12px] font-bold uppercase tracking-wide mt-1">{exp.company}</h4>
                  </div>
                  
                  <ul className="space-y-3 max-w-2xl">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-4 text-brand-accent text-[14px] md:text-[15px] leading-relaxed">
                        <span className="mt-2.5 w-1 h-1 rounded-full bg-brand-primary/40 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Sidebar */}
        <div className="lg:w-[360px] w-full pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-[22px] md:text-[26px] font-semibold text-foreground">Accreditations</h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 card-base hover:card-hover flex flex-col gap-2"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-[16px] md:text-[17px] font-semibold text-foreground leading-tight">{cert.title}</h3>
                  <Award className="w-5 h-5 text-brand-primary shrink-0 ml-4" />
                </div>
                <div className="flex items-center justify-between mt-4 pb-1">
                  <p className="text-brand-muted text-[10px] font-bold tracking-widest uppercase">{cert.issuer}</p>
                  <span className="text-brand-primary text-[10px] font-bold bg-brand-primary/5 px-2.5 py-1 rounded-md">{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
