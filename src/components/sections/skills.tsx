import { RESUME_DATA, SkillCategory } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const skillsToDisplay: SkillCategory[] = [
    "Languages",
    "Frameworks/Platforms",
    "IDEs & Tools",
    "Architectural Patterns",
    "Notifications",
    "Development Expertise",
    "Libraries & Technologies",
    "Testing",
    "Methodologies",
    "Deployment",
    "Soft Skills",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <h2 className="section-heading">Technical Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {skillsToDisplay.map((category) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-card-foreground mb-4 pb-2 font-headline border-b border-border/30">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills[category].map((skill) => (
                  <Badge key={skill} variant="secondary" className="border-transparent bg-secondary/50 text-sm text-primary transition-all hover:bg-primary/20 cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
