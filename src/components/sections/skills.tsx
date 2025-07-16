import { RESUME_DATA, type SkillCategory } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const categories = Object.keys(RESUME_DATA.skills) as SkillCategory[];

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight">
            Technical Expertise
          </h2>
        </div>
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category} className="text-center">
              <h3 className="font-headline text-2xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {RESUME_DATA.skills[category].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-base transition-transform hover:scale-105">
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
