import { Github, Linkedin, Mail } from "lucide-react";

export const RESUME_DATA = {
  name: "Aryama",
  title: "Innovative Full Stack Developer",
  profilePicture: "https://placehold.co/400x400.png",
  social: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:aryama@example.com",
      icon: Mail,
    }
  ],
  about: "A forward-thinking Full Stack Developer with a passion for building elegant, functional, and scalable web applications. I thrive on solving complex problems and turning ideas into high-quality code. My expertise spans across the entire development lifecycle, from conceptualization to deployment and beyond.",
  projects: [
    {
      title: "Project Alpha",
      description: "A cutting-edge e-commerce platform built with Next.js, featuring a serverless architecture and real-time inventory updates.",
      image: "https://placehold.co/600x400.png",
      tags: ["Next.js", "React", "TypeScript", "Vercel"],
      links: {
        github: "https://github.com",
        live: "https://vercel.com",
      },
      hint: "ecommerce platform"
    },
    {
      title: "Project Beta",
      description: "A collaborative data visualization tool that allows teams to create and share interactive dashboards in real-time.",
      image: "https://placehold.co/600x400.png",
      tags: ["React", "D3.js", "Firebase", "Node.js"],
      links: {
        github: "https://github.com",
        live: "#",
      },
      hint: "data dashboard"
    },
    {
      title: "Project Gamma",
      description: "An open-source content management system designed for developers, focused on speed, security, and extensibility.",
      image: "https://placehold.co/600x400.png",
      tags: ["Node.js", "GraphQL", "PostgreSQL", "Docker"],
      links: {
        github: "https://github.com",
        live: "#",
      },
      hint: "cms dashboard"
    },
  ],
  skills: {
    "Frontend": [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5 & CSS3", level: 98 },
    ],
    "Backend": [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / Django", level: 75 },
      { name: "GraphQL", level: 80 },
      { name: "REST APIs", level: 95 },
    ],
    "Databases & DevOps": [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 78 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 80 },
    ],
  },
  resumeText: `Aryama | Full Stack Developer

Summary:
A forward-thinking Full Stack Developer with a passion for building elegant, functional, and scalable web applications. Expertise in JavaScript, React, Next.js, Node.js, and modern web technologies. Proven ability to lead projects, solve complex problems, and deliver high-quality software solutions.

Experience:
Senior Software Engineer, TechCorp (2020-Present)
- Led the development of Project Alpha, a high-traffic e-commerce platform, resulting in a 30% increase in performance.
- Architected and implemented a new microservices-based backend using Node.js and GraphQL.
- Mentored junior developers and conducted code reviews to maintain high code quality standards.

Software Developer, Innovate LLC (2018-2020)
- Developed and maintained full-stack features for a suite of SaaS products using React and Python/Django.
- Collaborated with cross-functional teams to define, design, and ship new features.

Skills:
- Frontend: React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
- Backend: Node.js, Express, Python, Django, GraphQL, REST APIs
- Databases: PostgreSQL, MongoDB, Redis
- DevOps: Docker, Kubernetes, CI/CD, AWS

Education:
B.S. in Computer Science, University of Technology (2014-2018)`
};

export type SkillCategory = keyof typeof RESUME_DATA.skills;
