import type { ImageMetadata } from "astro";
import rarityApp      from "../assets/projects/rarity-app.png";
import smooviePreview from "../assets/projects/smoovie_preview.webp";

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  longDescription: string;
  tags: string[];
  images: ImageMetadata[];
  badge?: string;
  links: {
    github?: string;
    live?: string;
  };
}

export const projects: Project[] = [
  {
    id: "rarity",
    title: "Rarity",
    type: "Mobile App",
    description:
      "Cross-platform iOS & Android app to digitize Pokémon card collections with AI-powered real-time card recognition.",
    longDescription:
      "Built a cross-platform iOS and Android app to digitize Pokémon card collections, integrating camera-based auto-detection thanks to a fine-tuned EfficientNet-Lite model for real-time card recognition. Leveraged AI coding agents (Claude Code, OpenCode) to accelerate prototyping and reduce development time.",
    tags: ["React Native", "EfficientNet-Lite", "AI/ML", "iOS", "Android", "Claude Code"],
    images: [rarityApp],
    links: {},
  },
  {
    id: "smoovie",
    title: "Smoovie",
    type: "Android App",
    description:
      "Android app for searching movies and TV shows with real-time data retrieval and smart caching.",
    longDescription:
      "Developed an Android app to search movies and TV shows via a public API, delivering a fast and responsive user experience, with real-time data retrieval and caching to optimize performance.",
    tags: ["Kotlin", "Android", "REST API", "Caching", "Jetpack"],
    images: [smooviePreview],
    badge: "University Project",
    links: {
      github: "https://github.com/sgiannino/smoovie",
    },
  },
];
