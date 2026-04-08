export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: "tinexta-cyber",
    role: "Software Engineer",
    company: "Tinexta Cyber",
    location: "Trieste, Italy",
    period: "Oct 2022 – Present",
    current: true,
    bullets: [
      "Maintained frontend & backend of a telecom inventory system tracking 10k+ devices",
      "Built a Python data sync pipeline bringing daily reconciliation accuracy to 99.9%",
      "Developed a Kotlin microservice for real-time IPAM sync across distributed systems",
      "Created a network visualization tool to map device connections from structured data",
      "Integrated Monaco editor in-browser, removing external IDE dependency from the workflow",
      "Built CCAMM-based compliance modules for enterprise cybersecurity risk assessment",
    ],
    tags: ["Java", "Spring Boot", "React", "Python", "Kotlin", "TypeScript", "Docker"],
  },
];
