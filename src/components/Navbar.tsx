"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Home, User, Lightbulb, Briefcase, FolderCode, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Profile", to: "profile", icon: Home },
  { name: "About Me", to: "about", icon: User },
  { name: "Skills", to: "skills", icon: Lightbulb },
  { name: "Experience", to: "experience", icon: Briefcase },
  { name: "Projects", to: "projects", icon: FolderCode },
  { name: "Connect", to: "connect", icon: Mail },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("profile");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const sections = navItems.map((item) => document.getElementById(item.to));
      
      let currentSection = "profile";
      sections.forEach((section) => {
        if (section && section.offsetTop <= scrollPos + 300) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:bottom-auto md:top-8 bg-white/70 backdrop-blur-md rounded-full px-5 py-2.5 border border-foreground/5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
      <ul className="flex items-center gap-2 sm:gap-6">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.to;
          return (
            <li 
              key={item.name} 
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                className={`group flex items-center justify-center p-3 rounded-full cursor-pointer transition-all duration-300 relative z-10 ${
                  isActive ? "text-brand-primary" : "text-brand-muted hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5 transition-transform" />
                
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-brand-primary/5 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </ScrollLink>

              {/* Enhanced Tooltip */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 5, x: "-50%" }}
                    className="absolute -top-12 left-1/2 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg pointer-events-none whitespace-nowrap shadow-xl hidden md:block"
                  >
                    {item.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
