import Image from "next/image";
import { RESUME_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const tagColors: Record<string, string> = {
  // Languages
  "Swift": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Objective-C": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Dart": "bg-teal-500/20 text-teal-400 border-teal-500/30",
  // Categories
  "Music": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Marketplace": "bg-pink-500/20 text-pink-400 border-pink-500/30",
  "iOS": "bg-gray-500/20 text-gray-400 border-gray-500/30",
  "Well Being": "bg-green-500/20 text-green-400 border-green-500/30",
  "HealthKit": "bg-red-500/20 text-red-400 border-red-500/30",
  "Flutter": "bg-sky-500/20 text-sky-400 border-sky-500/30",
  "Motivation": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Productivity": "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  "Streaming": "bg-rose-500/20 text-rose-400 border-rose-500/30",
  "Meditation": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "Finance": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Fintech": "bg-lime-500/20 text-lime-400 border-lime-500/30",
  "Food Ordering": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "E-commerce": "bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30",
  "Car Rental": "bg-violet-500/20 text-violet-400 border-violet-500/30",
  "Business": "bg-stone-500/20 text-stone-400 border-stone-500/30",
  "Food & Drink": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Subscription": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "E-Learning": "bg-teal-500/20 text-teal-400 border-teal-500/30",
  "Education": "bg-green-500/20 text-green-400 border-green-500/30",
  "LMS": "bg-red-500/20 text-red-400 border-red-500/30",
  "School App": "bg-sky-500/20 text-sky-400 border-sky-500/30",
};

const getBadgeClass = (tag: string) => {
  return tagColors[tag] || "bg-secondary/50 border-transparent text-primary";
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
                <h3 className="text-xl font-bold text-card-foreground font-headline">{project.title}</h3>
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 shrink-0 ml-2">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className={`transition-all hover:scale-105 cursor-default text-xs ${getBadgeClass(tag)}`}>
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
