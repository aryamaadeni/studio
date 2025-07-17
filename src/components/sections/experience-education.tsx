import { RESUME_DATA } from "@/lib/data";

const TimelineItem = ({ title, subtitle, details }: { title: string; subtitle: string; details: string[] }) => (
  <div className="relative pl-8 pb-8 last:pb-0">
    <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-primary border-2 border-background"></div>
    <div className="absolute left-[5px] top-[18px] h-full w-px bg-border"></div>
    <h4 className="text-lg font-medium text-card-foreground">{title}</h4>
    <p className="text-primary">{subtitle}</p>
    <ul className="mt-2 list-disc list-inside space-y-1 text-muted-foreground">
      {details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

export function ExperienceEducationSection() {
  return (
    <section id="experience" className="py-24">
      <h2 className="section-heading text-center mx-auto">
        Experience & Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-card-foreground mb-6">Experience</h3>
          <div className="relative">
            {RESUME_DATA.experience.map((exp, index) => (
               <div key={index} className="relative pl-8 pb-8 last:pb-0">
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-primary border-2 border-background z-10"></div>
                {index < RESUME_DATA.experience.length - 1 && <div className="absolute left-[5px] top-[18px] h-full w-px bg-border"></div>}
                 <h4 className="text-lg font-medium text-card-foreground">{exp.role}</h4>
                 <p className="text-primary">{exp.company} | {exp.dates}</p>
                 <ul className="mt-2 list-disc list-inside space-y-1 text-foreground/80">
                   {exp.description.map((item, i) => (
                     <li key={i}>{item}</li>
                   ))}
                 </ul>
               </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-card-foreground mb-6">Education</h3>
          <div className="relative">
            {RESUME_DATA.education.map((edu, index) => (
              <div key={index} className="relative pl-8 pb-8 last:pb-0">
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-primary border-2 border-background z-10"></div>
                {index < RESUME_DATA.education.length - 1 && <div className="absolute left-[5px] top-[18px] h-full w-px bg-border"></div>}
                <h4 className="text-lg font-medium text-card-foreground">{edu.degree}</h4>
                <p className="text-primary">{edu.institution} | {edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
