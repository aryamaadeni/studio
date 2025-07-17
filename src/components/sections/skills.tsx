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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h2 className="section-heading">Technical Skills</h2>
        </div>
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {skillsToDisplay.map((category) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-card-foreground mb-4 border-b-2 border-primary pb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {RESUME_DATA.skills[category].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary/50 border-transparent text-primary text-sm transition-all hover:bg-primary/20 cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
