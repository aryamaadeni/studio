import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const RESUME_DATA = {
  name: "Aryama M",
  title: "Mobile Application Developer",
  location: "Kozhikode, Kerala",
  contacts: ["+91 8129523219", "+91 8848213219"],
  profilePicture: "https://placehold.co/400x400.png",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/aryam-adeni",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/aryamaadeni",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:madeniarya@gmail.com",
      icon: Mail,
    },
  ],
  about: "Skilled Mobile Application Developer with 7 years of experience in designing, developing, and optimizing high-performance native iOS and cross-platform applications. Seeking to contribute advanced mobile development skills to a dynamic team focused on innovative product development.",
  experience: [
    {
        role: "Mobile App Developer",
        company: "Deltasoft",
        dates: "May 2024 – Present",
        location: "Kochi, Kerala",
        description: [
            "Led development initiatives for both cross-platform (Flutter/Dart) and native iOS (Swift/Objective-C) applications.",
            "Architected and developed the Brightbird mobile application using Flutter with HealthKit integration.",
            "Engineered robust native iOS applications, focusing on secure data handling and UI/UX.",
            "Managed the full SDLC for multiple projects, including deployment to App Store and Play Store.",
        ],
    },
    {
        role: "Mobile App Developer",
        company: "Purposecode",
        dates: "Nov 2023 – May 2024",
        location: "Calicut, Kerala",
        description: [
            "Led initiatives to refactor legacy codebases, achieving a 40% reduction in complexity and a 20% boost in performance.",
            "Managed the full SDLC for key mobile projects (Featureme, Purpose Colour) as the sole developer.",
        ],
    },
    {
        role: "iOS Developer",
        company: "Simelabs",
        dates: "Mar 2020 – Nov 2023",
        location: "Kochi, Kerala",
        description: [
            "Developed and deployed high-performance mobile applications across Swift/Objective-C, Flutter, and React Native.",
            "Ensured application quality and performance, implementing automation to accelerate deployment cycles.",
        ],
    },
    {
        role: "iOS Developer",
        company: "Xpertcube",
        dates: "Dec 2017 – Feb 2020",
        location: "Calicut, Kerala",
        description: [
            "Executed technical designs and led the implementation of over 10 complex iOS applications.",
            "Improved product quality through code reviews, unit tests, and collaboration with QA teams.",
        ],
    },
    {
        role: "iOS Trainee",
        company: "Codemac",
        dates: "May 2017 – Dec 2017",
        location: "Calicut, Kerala",
        description: [
            "Designed and built core applications for the iOS platform.",
            "Focused on ensuring excellent performance, quality, and responsiveness of applications.",
        ],
    },
  ],
  education: [
    {
      degree: "B-Tech in Computer Science",
      institution: "College of Engineering, Adoor - CUSAT",
      year: "2013 – 2017"
    },
    {
      degree: "HSC (Science)",
      institution: "G V H S School, Calicut",
      year: "2011 – 2013"
    },
    {
      degree: "HSS (SSLC)",
      institution: "Providence G H S School, Calicut",
      year: "2011"
    }
  ],
  skills: {
    "Languages": ["Swift", "Objective-C", "Dart"],
    "Frameworks/Platforms": ["Flutter", "BLoC", "iOS", "UIKit", "SwiftUI", "React Native"],
    "IDEs & Tools": ["VS Code", "Android Studio", "Xcode", "Jira", "ClickUp", "Asana", "Bitbucket", "GitHub", "Gerrit"],
    "Architectural Patterns": ["MVC", "MVVM"],
    "Notifications": ["Firebase", "APNS", "One Signal", "Azure Push"],
    "Development Expertise": ["SDK Development", "RESTful APIs", "SOAP", "UI/UX", "Source Control", "Certificates", "App Store Connect", "Version Control", "Localization"],
    "Libraries & Technologies": ["Alamofire", "Firebase", "Deep Linking", "Cloud Messaging", "CoreData", "GCD", "Core Bluetooth"],
    "Testing": ["XCTest", "XCUITest", "Flutter Testing"],
    "Methodologies": ["Agile", "Scrum"],
    "Deployment": ["App Store", "Play Store"],
    "Soft Skills": ["Communication", "Collaboration", "Analytical Reasoning", "Problem-Solving"]
  },
  projects: [
    {
      title: "FeatureMe",
      description: "Global music service marketplace connecting musicians to buy and sell custom music services. Managed secure transactions via external payment gateways.",
      image: "https://placehold.co/600x400.png",
      tags: ["Music", "Marketplace", "iOS"],
      links: {
        live: "https://apps.apple.com/in/app/featureme-featuring-you/id6478915698",
      },
      hint: "music marketplace"
    },
    {
      title: "Bright Bird",
      description: "A science-backed app for stress reduction, better sleep, and personal growth, offering interactive programs and personalized goal tracking.",
      image: "https://placehold.co/600x400.png",
      tags: ["Well Being", "HealthKit", "Flutter"],
      links: {
        live: "https://apps.apple.com/in/app/bright-bird-heal-and-grow/id6651851924",
      },
      hint: "wellness app"
    },
    {
        title: "Purpose Color",
        description: "Goal setting and habit tracking app for personal development, featuring daily action tracking and self-help networking.",
        image: "https://placehold.co/600x400.png",
        tags: ["Motivation", "Productivity", "iOS"],
        links: {
          live: "https://apps.apple.com/in/app/purposecolor-goal-setting-app/id1186639523",
        },
        hint: "goal tracking"
    },
    {
      title: "iOsho",
      description: "A comprehensive meditation platform offering Osho talks, radio, tarot games, and audio/video content with complex media playback and subscription models.",
      image: "https://placehold.co/600x400.png",
      tags: ["Meditation", "Streaming", "iOS"],
      links: {
        live: "https://apps.apple.com/in/app/iosho/id1528372736",
      },
      hint: "meditation app"
    },
    {
      title: "Geojit FundsGenie",
      description: "Mutual fund app with smart investing tools, portfolio aggregation, and Morningstar integration for real-time investment insights.",
      image: "https://placehold.co/600x400.png",
      tags: ["Finance", "Fintech", "iOS"],
      links: {
        live: "https://apps.apple.com/in/app/geojit-fundsgenie/id1617766708",
      },
      hint: "finance app"
    },
    {
      title: "Cafe Bazza",
      description: "A food ordering app for a specific restaurant, featuring a secure ordering flow, payment integration, and menu display.",
      image: "https://placehold.co/600x400.png",
      tags: ["Food Ordering", "E-commerce", "iOS"],
      links: {
        live: "https://apps.apple.com/in/app/cafebazza/id1448020837",
      },
      hint: "food app"
    },
  ],
};

export type SkillCategory = keyof typeof RESUME_DATA.skills;
