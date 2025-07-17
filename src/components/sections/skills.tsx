import { RESUME_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-card border-y">
       <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
                <h2 className="section-heading !mb-0">Technical Expertise</h2>
            </div>
            <div className="md:col-span-2 flex flex-wrap gap-4">
                {Object.values(RESUME_DATA.skills).flat().map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-base px-4 py-2 bg-background border-primary text-primary transition-all hover:bg-primary hover:text-primary-foreground cursor-default">
                        {skill}
                    </Badge>
                ))}
            </div>
        </div>
       </div>
    </section>
  );
}
