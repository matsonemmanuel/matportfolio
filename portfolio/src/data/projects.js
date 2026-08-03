
import cyberwatch from "../assets/images/cyberwatch.png";
import tng from "../assets/images/tng.png";
import shamba from "../assets/images/shamba.png";
import educore from "../assets/images/educore.png";

export const projects = [
  {
    id: 1,
    title: "ShambaSmart",
    description:
      "AI-powered agricultural platform that helps farmers access weather forecasts, market prices, crop recommendations, and intelligent farming insights.",

    technologies: [
      "React",
      "FastAPI",
      "SQLite",
      "OpenAI API",
    ],

    image: shamba,

    github: "#",

    demo: "#",
  },

  {
    id: 2,
    title: "CyberWatch",

    description:
      "Cybersecurity monitoring system that detects suspicious computer activities, records security logs, and provides an administrator dashboard.",

    technologies: [
      "React",
      "Flask",
      "SQLite",
      "Python",
    ],

    image: cyberwatch,

    github: "#",

    demo: "#",
  },

  {
    id: 3,
    title: "The Next Generation",

    description:
      "Community organization website featuring multilingual support, membership registration, and responsive modern design.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Flask",
      "MongoDB",
    ],

    image: tng,

    github: "#",

    demo: "#",
  },

  {
  id: 4,
  title: "EduCore",

  description:
    "A comprehensive education management system developed to streamline student registration, course management, academic records, and administrative operations for educational institutions.",

  technologies: [
    "Java",
    "MySQL",
    "Java Swing",
    "JDBC",
  ],

  image: educore,

  github: "#",

  demo: "#",
}
];