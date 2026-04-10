"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ChevronRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function ConnectSection() {
  const contactLinks = [
    {
      label: "Email",
      value: "pandukolli666@gmail.com",
      href: "mailto:pandukolli666@gmail.com",
      icon: Mail,
      desc: "Direct inbox access"
    },
    {
      label: "LinkedIn",
      value: "leela-prasad-kolli",
      href: "https://www.linkedin.com/in/leela-prasad-kolli-722824327/",
      icon: FaLinkedin,
      desc: "Professional network"
    },
    {
      label: "GitHub",
      value: "Pandukolli",
      href: "https://github.com/Pandukolli",
      icon: FaGithub,
      desc: "Technical archive"
    },
    {
      label: "Phone",
      value: "+91 9059522766",
      href: "tel:+919059522766",
      icon: Phone,
      desc: "Immediate discussion"
    }
  ];

  return (
    <div className="relative flex items-center justify-center container mx-auto px-6 md:px-12 lg:px-24">
      <div className="w-full flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 bg-brand-primary/5 border border-brand-primary/10 rounded-full mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Direct Contact</span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-foreground mb-4 tracking-tighter">Let's start a conversation</h2>
          <p className="text-[15px] md:text-[17px] text-brand-accent font-normal max-w-xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities and collaborations. Reach out through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-base hover:card-hover p-6 flex items-center justify-between group"
              >
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-brand-primary/5 rounded-xl group-hover:bg-brand-primary transition-all duration-300">
                    <Icon className="w-5 h-5 text-brand-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-brand-muted tracking-[0.2em] mb-1">{link.label}</p>
                    <p className="text-[15px] font-semibold text-foreground leading-none">{link.value}</p>
                    <p className="text-[11px] text-brand-muted mt-1 font-medium">{link.desc}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-brand-muted group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 border-t border-brand-border pt-10 w-full text-center"
        >
          <p className="text-brand-muted font-bold text-[10px] uppercase tracking-[0.4em]">Architected &amp; Built by Leela Prasad Kolli</p>
        </motion.div>
      </div>
    </div>
  );
}
