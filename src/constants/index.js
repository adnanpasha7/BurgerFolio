import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const socialLinks = [
  { icon: faPhone, href: "tel:+919108811142", label: "Call" },
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
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
];

export const cgExp = [
  "Enhanced in-flight entertainment & connectivity apps for airlines ✈️ (React UI, REST APIs).",
  "Developed OTA (Over-the-Air) installation features - allowing airline engineers to monitor LSP package installs.",
  "Worked on RabbitMQ messaging (OTA updates, AHAI messages).",
  "Managed software releases end-to-end, including peer reviews, testing, and QE support.",
  "Debugged Legacy (LAOS) bugs and fixed issues from logs, servers, and maintenance reports.",
  "Implemented CI/CD pipelines and automation scripts.",
  "Protected user sessions during no-satellite-link scenarios.",
  "Collaborated with senior engineers, trained interns, and followed SAFe Agile practices.",
];
