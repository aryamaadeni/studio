import { RESUME_DATA } from "@/lib/data";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight">
            Work Experience
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            My professional journey and accomplishments.
          </p>
        </div>
        <div className="relative flex flex-col gap-12">
           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
           {RESUME_DATA.experience.map((exp, index) => (
            <div key={exp.company} className="relative flex items-start md:w-1/2 md:odd:self-end md:odd:text-right md:even:text-left">
                <div className="hidden md:block absolute left-1/2 top-2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                        <CardDescription className="text-base">
                            <span className="font-semibold">{exp.company}</span> | {exp.location}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground">{exp.dates}</p>
                    </CardHeader>
                    <CardContent>
                        <ul className={`list-disc space-y-2 ${index % 2 === 0 ? 'pl-5' : 'pl-5 md:pl-0 md:pr-5'}`}>
                            {exp.description.map((item, i) => (
                                <li key={i} className={`${index % 2 === 0 ? '' : 'md:text-right'}`}>{item}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
           ))}
        </div>
      </div>
    </section>
  );
}
