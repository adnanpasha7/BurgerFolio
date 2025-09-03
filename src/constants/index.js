import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import bia from "../assets/projects/bia.png";

export const socialLinks = [
  { icon: faPhone, href: "tel:+919108811142", label: "Phone" },
  {
    icon: faEnvelope,
    href: "mailto:adnanbasha786@gmail.com",
    label: "Email",
  },
  {
    icon: faInstagram,
    href: "https://instagram.com/humblekidpasha",
    label: "Instagram",
  },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/adnanpasha7/",
    label: "LinkedIn",
  },
  {
    icon: faXTwitter,
    href: "https://x.com/adnanpasha_",
    label: "X (Twitter)",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "/wip" },
  { name: "Contact", href: "#contact" },
  { name: "Random", href: "/random"},
];

export const experiences = [
  {
    company: "Capgemini Engineering",
    role: "Full Stack Developer",
    duration: "Jun 2021 – Present",
    points: [
      "Enhanced in-flight entertainment & connectivity (IFEC) applications ✈️ using React, Node.js, and REST APIs, enabling passenger internet access through Intelsat’s satellite broadband network.",
      "Built backend APIs with resilience features to maintain session continuity during satellite link dropouts, ensuring uninterrupted connectivity for passengers and crew.",
      "Developed OTA (Over-the-Air) installation workflows by integrating satellite-based package distribution with real-time monitoring on the Maintenance portal, reducing installation errors by 25%.",
      "Implemented RabbitMQ-based messaging for reliable delivery of OTA updates and satellite communication events across distributed aircraft and ground systems.",
      "Analyzed satellite communication logs and telemetry data to troubleshoot link issues, improving reliability and reducing downtime.",
      "Containerized applications with Docker and implemented CI/CD pipelines in GitLab, accelerating release cycles for mission-critical satellite connectivity systems.",
      "Worked on protecting user sessions in no-satellite-link scenarios to ensure service continuity.",
      "Collaborated with global Intelsat teams, mentored interns, and followed SAFe Agile practices to deliver software aligned with satellite network capabilities."
    ]
  },
];

export const skills = [
  {
    title: "Frontend (The Cheese & Veggies)",
    desc: "React, Redux, Tailwind CSS, Next.js, Three.js, React Three Fiber (3D UI magic ✨)",
  },
  {
    title: "Backend (The Juicy Patty)",
    desc: "Java, Python, Go, PHP, Node.js, REST APIs, RabbitMQ (for those extra crunchy messages).",
  },
  {
    title: "DevOps (The Sauce)",
    desc: "Docker, CI/CD pipelines, Jenkins, GitLab automation.",
  },
  {
    title: "Other Toppings:",
    desc: "Manual + automation testing, SAFe Agile practices, peer code reviews.",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Branditars",
    tech: "React • Tailwind • Framer Motion • GSAP • CloudFlare for assests",
    description: "Website for Dubai's Marketing agency",
    image: bia,
    link: "https://branditars.ae",
  },
  {
    id: 2,
    title: "KitchenOps Dashboard",
    tech: "React • Node",
    description: "Real-time ops & analytics",
    image: "/placeholder2.png",
    link: "/wip",
  },
  {
    id: 3,
    title: "Delivery Flow",
    tech: "Next.js • Stripe",
    description: "Checkout + subscriptions",
    image: "/placeholder3.png",
    link: "/wip",
  },
];
