import Image from "next/image";
import { RESUME_DATA } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <h2 className="section-heading text-center mx-auto">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RESUME_DATA.projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
            <CardContent className="p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={project.hint}
              />
            </CardContent>
            <CardHeader>
              <CardTitle className="font-headline text-xl text-card-foreground">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
               <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter>
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View Project
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
