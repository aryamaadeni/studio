import { RESUME_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Code, GitMerge, Laptop, Smartphone } from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
    Swift: <Code className="w-4 h-4" />,
    "Objective-C": <Code className="w-4 h-4" />,
    Flutter: <Smartphone className="w-4 h-4" />,
    "React Native": <Code className="w-4 h-4" />,
    Dart: <Code className="w-4 h-4" />,
    SwiftUI: <Code className="w-4 h-4" />,
    Xcode: <Laptop className="w-4 h-4" />,
    "Visual Studio Code": <Laptop className="w-4 h-4" />,
    Git: <GitMerge className="w-4 h-4" />,
};

export function AboutSection() {
  const mainSkills = [
    "Swift", "Objective-C", "Flutter", "React Native", "Dart", "SwiftUI", "Xcode", "Visual Studio Code", "Git"
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-heading">About Me</h2>
        <p className="text-lg text-foreground/80 leading-relaxed mb-8">
          {RESUME_DATA.about}
        </p>
        <h3 className="text-xl font-semibold text-card-foreground mb-4">Core Skills & Tools:</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {mainSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1.5 flex items-center gap-2 bg-secondary/50 border-primary/50 text-primary transition-all hover:bg-primary/20 cursor-default">
                  {iconMap[skill]}
                  {skill}
              </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
