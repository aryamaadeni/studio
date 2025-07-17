"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { RESUME_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "Mobile Application Developer",
        "iOS Developer",
        "Flutter Developer",
        "React Native Enthusiast",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      startDelay: 500,
      backDelay: 1500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 text-center">
        <div className="mb-8">
            <Image
                src={RESUME_DATA.profilePicture}
                alt="Arya M's profile picture"
                width={128}
                height={128}
                className="rounded-full mx-auto object-cover border-4 border-primary shadow-lg"
                data-ai-hint="profile picture"
                priority
            />
        </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-card-foreground leading-tight mb-4">
        Hi, I&apos;m <span className="text-primary">{RESUME_DATA.name}</span>
      </h1>
      <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
        A passionate <span ref={typedEl} className="font-semibold text-primary"></span>
      </p>
       <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            {RESUME_DATA.about}
        </p>
      <div className="flex gap-4 justify-center">
        <Button asChild size="lg">
          <a href="#contact">Get in Touch</a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href="#projects">View My Work</a>
        </Button>
      </div>
    </section>
  );
}
