export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "{ }",
    skills: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks",
    icon: "⚡",
    skills: ["Spring Boot", "React", "Node.js", "Django", "Flask"],
  },
  {
    category: "Technologies",
    icon: "⚙️",
    skills: ["Docker", "Kubernetes", "RabbitMQ", "Jenkins", "ArgoCD"],
  },
  {
    category: "Databases",
    icon: "🗄",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "AI Tools",
    icon: "✦",
    skills: ["Claude Code", "OpenCode", "GitHub Copilot"],
  },
];
