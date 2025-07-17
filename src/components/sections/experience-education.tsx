import { RESUME_DATA } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

const Clickable = ({ href, children }: { href: string; children: React.ReactNode }) => {
    if (href === "#") {
        return <>{children}</>;
    }
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            {children}
        </a>
    );
}

export function ExperienceEducationSection() {
  return (
    <section id="experience" className="py-24">
      <h2 className="section-heading text-center mx-auto">
        Career & Education
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border/50"></div>
          
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-card p-2 rounded-full border-2 border-primary z-10">
                    <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground">Experience</h3>
            </div>
            <div className="space-y-8">
              {RESUME_DATA.experience.map((exp, index) => (
                <div key={index} className="relative pl-12">
                   <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full bg-primary border-2 border-background z-10"></div>
                   <h4 className="text-lg font-medium text-card-foreground">{exp.role}</h4>
                   <p className="font-semibold">
                     <Clickable href={exp.companyUrl}>{exp.company}</Clickable>
                     <span className="text-muted-foreground font-normal"> | {exp.dates}</span>
                   </p>
                   <ul className="mt-2 list-disc list-inside space-y-1.5 text-foreground/80 text-sm">
                     {exp.description.map((item, i) => (
                       <li key={i}>{item}</li>
                     ))}
                   </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
             <div className="flex items-center gap-4 mb-6">
                <div className="bg-card p-2 rounded-full border-2 border-primary z-10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground">Education</h3>
            </div>
             <div className="space-y-8">
                {RESUME_DATA.education.map((edu, index) => (
                  <div key={index} className="relative pl-12">
                     <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full bg-primary border-2 border-background z-10"></div>
                     <h4 className="text-lg font-medium text-card-foreground">{edu.degree}</h4>
                      <p>
                        <Clickable href={edu.institutionUrl}>{edu.institution}</Clickable>
                        <span className="text-muted-foreground"> | {edu.year}</span>
                      </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
