import { RESUME_DATA } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            My academic background and qualifications.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {RESUME_DATA.education.map((edu) => (
            <Card key={edu.degree} className="flex flex-col items-center text-center">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
