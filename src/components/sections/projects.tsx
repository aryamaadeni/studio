import Image from "next/image";
import Link from "next/link";
import { RESUME_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight">
            My Projects
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            A selection of projects that I'm proud of.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {RESUME_DATA.projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl">
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
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <CardDescription className="pt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                {project.links.github && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.links.live && (
                  <Button asChild variant="default" size="sm">
                     <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                       <ExternalLink className="mr-2 h-4 w-4" />
                       Live Demo
                     </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
