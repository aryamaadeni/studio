import { RESUME_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <h2 className="section-heading text-center mx-auto">
        Get in Touch
      </h2>
      <Card className="max-w-xl mx-auto p-2">
        <CardHeader className="text-center">
            <CardDescription>
                I&apos;m currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" required />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." required />
                </div>
                <div className="text-center pt-4">
                    <Button type="submit" size="lg">Send Message</Button>
                </div>
            </form>
        </CardContent>
      </Card>
    </section>
  );
}
