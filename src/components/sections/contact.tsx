"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { RESUME_DATA } from "@/lib/data";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Portfolio Contact - ${name}`;
    const mailtoLink = `mailto:${RESUME_DATA.social.find(s => s.name === 'Email')?.url.replace('mailto:','')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + `\n\nFrom: ${name} (${email})`)}`;
    window.location.href = mailtoLink;
  };

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
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." required value={message} onChange={(e) => setMessage(e.target.value)} />
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
