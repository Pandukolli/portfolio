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
      </div>

      <Navbar />

      <div className="relative z-10 flex flex-col">
        <section id="profile" className="min-h-[75vh] flex items-center justify-center pt-24 pb-12"><ProfileSection /></section>
        <section id="about" className="min-h-[70vh] flex items-center justify-center py-16 md:py-20"><AboutSection /></section>
        <section id="skills" className="min-h-[70vh] flex items-center justify-center py-16 md:py-20"><SkillsSection /></section>
        <section id="experience" className="min-h-[70vh] flex items-center justify-center py-16 md:py-20"><ExperienceSection /></section>
        <section id="projects" className="min-h-[70vh] flex items-center justify-center py-16 md:py-20"><ProjectsSection /></section>
        <section id="connect" className="min-h-[70vh] flex items-center justify-center py-16 md:py-20 !pb-24"><ConnectSection /></section>
      </div>
    </main>
  );
}
