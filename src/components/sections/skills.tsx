import { RESUME_DATA, type SkillCategory } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const allSkills = (Object.keys(RESUME_DATA.skills) as SkillCategory[]).flatMap(
    (category) => RESUME_DATA.skills[category]
  );

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight">
            Technical Expertise
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
            {allSkills.map((skill, index) => (
              <Badge 
                key={`${skill}-${index}`} 
                variant="secondary" 
                className="px-4 py-2 text-base"
              >
                {skill}
              </Badge>
            ))}
        </div>
      </div>
    </section>
  );
}
