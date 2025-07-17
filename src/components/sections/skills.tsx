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
      <h2 className="section-heading text-center mx-auto">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {skillsToDisplay.map((category) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-card-foreground mb-4 border-b-2 border-primary pb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills[category].map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm">
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
