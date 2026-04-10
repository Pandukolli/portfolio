import { Navbar } from "@/components/Navbar";
import { ProfileSection } from "@/components/sections/Profile";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ExperienceSection } from "@/components/sections/Experience";
import { ProjectsSection } from "@/components/sections/Projects";
import { ConnectSection } from "@/components/sections/Connect";
import { PageBackground } from "@/components/PageBackground";

export default function Home() {
  return (
    <main className="relative bg-background overflow-x-hidden">
      {/* Ultra-Subtle Atmospheric Noise */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-[#D7C9C2]/[0.1] rounded-full blur-[150px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] bg-brand-primary/[0.02] rounded-full blur-[140px]" />
      </div>

      <Navbar />
      
      <div className="relative z-10 flex flex-col">
        <section id="profile" className="min-h-screen flex items-center justify-center"><ProfileSection /></section>
        <section id="about" className="min-h-screen flex items-center justify-center section-padding"><AboutSection /></section>
        <section id="skills" className="min-h-screen flex items-center justify-center section-padding"><SkillsSection /></section>
        <section id="experience" className="min-h-screen flex items-center justify-center section-padding"><ExperienceSection /></section>
        <section id="projects" className="min-h-screen flex items-center justify-center section-padding"><ProjectsSection /></section>
        <section id="connect" className="min-h-screen flex items-center justify-center section-padding !pb-16 md:!pb-24"><ConnectSection /></section>
      </div>
    </main>
  );
}
