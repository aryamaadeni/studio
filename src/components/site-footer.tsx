import { RESUME_DATA } from "@/lib/data";
import { Button } from "./ui/button";

export function SiteFooter() {
    return (
        <footer className="bg-card py-8 text-center text-muted-foreground text-sm border-t">
            <div className="container">
                <div className="flex justify-center space-x-4 mb-4">
                    {RESUME_DATA.social.map((social) => (
                        <Button asChild key={social.name} variant="ghost" size="icon">
                            <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <social.icon className="h-5 w-5" />
                            </a>
                        </Button>
                    ))}
                </div>
                <p>&copy; {new Date().getFullYear()} {RESUME_DATA.name}. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
