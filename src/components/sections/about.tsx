import Image from "next/image";
import { RESUME_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Code, GitMerge, Laptop, Smartphone, Terminal } from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
    Swift: <Code className="w-4 h-4" />,
    "Objective-C": <Code className="w-4 h-4" />,
    Flutter: <Smartphone className="w-4 h-4" />,
    "React Native": <Code className="w-4 h-4" />,
    Dart: <Code className="w-4 h-4" />,
    SwiftUI: <Code className="w-4 h-4" />,
    Xcode: <Laptop className="w-4 h-4" />,
    Git: <GitMerge className="w-4 h-4" />,
    "Visual Studio Code": <Laptop className="w-4 h-4" />,
};

export function AboutSection() {
  const mainSkills = [
    "Swift", "Objective-C", "Flutter", "React Native", "Dart", "SwiftUI", "Xcode", "Visual Studio Code"
  ];

  return (
    <section id="about" className="py-24">
       <h2 className="section-heading text-center mx-auto">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <Image
            src={RESUME_DATA.profilePicture}
            alt="Arya M's profile picture"
            width={400}
            height={400}
            className="rounded-full w-64 h-64 mx-auto object-cover border-4 border-primary shadow-lg"
            data-ai-hint="profile picture"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            Hello! I'm Aryama, a dedicated Mobile Application Developer with 7 years of experience based in Kozhikode, Kerala. My journey in mobile development began with a fascination for how digital experiences are crafted, leading me to master both native iOS (Swift, Objective-C, SwiftUI) and cross-platform (Flutter, React Native) technologies.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            I specialize in creating robust, scalable, and user-friendly applications. I'm always eager to learn new technologies and solve complex problems.
          </p>
          <h3 className="text-xl font-semibold text-card-foreground mb-4">Skills & Tools:</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {mainSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-3 py-1.5 flex items-center gap-2 bg-secondary/50 border-primary/50 text-primary transition-all hover:bg-primary/20 cursor-default">
                    {iconMap[skill]}
                    {skill}
                </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
