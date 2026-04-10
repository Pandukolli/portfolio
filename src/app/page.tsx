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
      {/* Soft Ambient Background Blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-brand-secondary/40 rounded-full blur-[150px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] bg-brand-secondary/30 rounded-full blur-[140px]" />
      </div>

      <Navbar />
      
      <div className="relative z-10 flex flex-col pt-10 md:pt-0 pb-16 md:pb-0">
        <ProfileSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ConnectSection />
      </div>
    </main>
  );
}
