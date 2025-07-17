import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceEducationSection } from "@/components/sections/experience-education";
import { ContactSection } from "@/components/sections/contact";
import { SiteFooter } from "@/components/site-footer";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 container py-12">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceEducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
