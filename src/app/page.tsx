import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ResumeCustomizerSection } from "@/components/sections/resume-customizer";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ResumeCustomizerSection />
        <ContactSection />
      </main>
    </div>
  );
}
