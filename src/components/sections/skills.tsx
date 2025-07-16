import { RESUME_DATA, SkillCategory } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight">
            Technical Expertise
          </h2>
        </div>
        <div className="grid gap-8">
          {Object.keys(RESUME_DATA.skills).map((category) => (
            <div key={category}>
              <h3 className="font-headline text-2xl font-semibold mb-4 text-center md:text-left">{category}</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {(RESUME_DATA.skills[category as SkillCategory]).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-lg px-4 py-2">
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
