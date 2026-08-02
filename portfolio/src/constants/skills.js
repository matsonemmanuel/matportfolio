import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaRobot,
  FaCode,
  FaServer,
  FaLinux,
} from "react-icons/fa";

export const skills = [
  {
    title: "Frontend Development",
    technologies: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: FaCode },
    ],
  },

  {
    title: "Backend Development",
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "Flask", icon: FaServer },
      { name: "FastAPI", icon: FaServer },
    ],
  },

  {
    title: "Databases",
    technologies: [
      { name: "MongoDB", icon: FaDatabase },
      { name: "SQLite", icon: FaDatabase },
      { name: "MySQL", icon: FaDatabase },
      { name: "Database Design", icon: FaDatabase },
    ],
  },

  {
    title: "Cybersecurity",
    technologies: [
      { name: "Linux", icon: FaLinux },
      { name: "Wireshark", icon: FaCode },
      { name: "Kali Linux", icon: FaLinux },
      { name: "Git", icon: FaGitAlt },
    ],
  },

  {
    title: "AI & Development Tools",
    technologies: [
      { name: "OpenAI API", icon: FaRobot },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaCode },
      { name: "Odoo", icon: FaCode },
    ],
  },
];