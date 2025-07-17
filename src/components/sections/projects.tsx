import Image from "next/image";
import { RESUME_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const languageColors: Record<string, string> = {
  "Swift": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Objective-C": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Dart": "bg-teal-500/20 text-teal-400 border-teal-500/30",
};

const getBadgeClass = (tag: string) => {
  return languageColors[tag] || "bg-secondary/50 border-transparent text-primary";
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <h2 className="section-heading text-center mx-auto">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RESUME_DATA.projects.map((project) => (
          <div key={project.title} className="rounded-lg bg-card border border-border overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 flex flex-col">
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
            <div className="p-4 bg-card text-card-foreground flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 shrink-0 ml-2">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
              <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className={`transition-all hover:scale-105 cursor-default ${getBadgeClass(tag)}`}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
