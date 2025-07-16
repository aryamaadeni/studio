import Image from "next/image";
import { RESUME_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="about" className="container grid grid-cols-1 gap-12 py-24 sm:grid-cols-12 sm:py-32">
      <div className="sm:col-span-8 place-self-center text-center sm:text-left justify-self-start">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Hi, I'm {RESUME_DATA.name}
        </h1>
        <p className="text-xl text-muted-foreground lg:text-2xl mb-6">
          {RESUME_DATA.title}
        </p>
        <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            {RESUME_DATA.about}
        </p>
        <div className="flex justify-center sm:justify-start space-x-2">
          {RESUME_DATA.social.map((social) => (
            <Button asChild variant="outline" size="icon" key={social.name}>
              <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <social.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
      <div className="sm:col-span-4 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-2 shadow-xl w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]">
          <Image
            src={RESUME_DATA.profilePicture}
            alt="Arya M's profile picture"
            width={300}
            height={300}
            className="rounded-full object-cover"
            data-ai-hint="profile picture"
            priority
          />
        </div>
      </div>
    </section>
  );
}
