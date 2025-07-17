import Image from "next/image";
import { RESUME_DATA } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          <div key={project.title} className="rounded-lg bg-card border border-border overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={project.hint}
              />
            </a>
            <div className="p-4 bg-card text-card-foreground">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-secondary/50 border-transparent text-primary text-sm transition-all hover:bg-primary/20 cursor-default">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}