import { RESUME_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <footer id="contact" className="py-24 text-center">
      <div className="container">
        <h2 className="font-headline text-4xl font-extrabold tracking-tight">
          Let's Connect
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <a href={RESUME_DATA.social.find(s => s.name === "Email")?.url}>
              Get in Touch
            </a>
          </Button>
        </div>
        <div className="mt-12 flex justify-center space-x-4">
          {RESUME_DATA.social.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <social.icon className="h-6 w-6" />
              <span className="sr-only">{social.name}</span>
            </a>
          ))}
        </div>
        <p className="mt-12 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {RESUME_DATA.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
