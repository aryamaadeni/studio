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
        <div 
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          }}
        >
          <div className="flex w-max animate-scroll-slow hover:pause">
            {[...allSkills, ...allSkills].map((skill, index) => (
              <Badge 
                key={`${skill}-${index}`} 
                variant="secondary" 
                className="mx-2 shrink-0 px-4 py-2 text-base"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}