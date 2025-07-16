import { RESUME_DATA, type SkillCategory } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SkillsSection() {
  const categories = Object.keys(RESUME_DATA.skills) as SkillCategory[];

  return (
    <section id="skills" className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight">
            Technical Expertise
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            A comprehensive overview of my technical capabilities.
          </p>
        </div>
        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 h-auto flex-wrap">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
                <div className="p-6 bg-card rounded-lg mt-4">
                    <div className="flex flex-wrap gap-3">
                    {RESUME_DATA.skills[category].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-base px-4 py-2">
                        {skill}
                        </Badge>
                    ))}
                    </div>
                </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
