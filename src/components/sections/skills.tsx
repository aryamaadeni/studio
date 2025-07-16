import { RESUME_DATA } from "@/lib/data";
import { Check } from "lucide-react";

export function SkillsSection() {
  // Flatten all skills from all categories into a single array
  const allSkills = Object.values(RESUME_DATA.skills).flat();

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight">
              Technical Expertise
            </h2>
          </div>
          <div className="md:col-span-2">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
              {allSkills.map((skill, index) => (
                <li key={`${skill}-${index}`} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-lg">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
