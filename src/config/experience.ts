export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
  url: string;
  image: string;
}

export const experiences: Experience[] = [
  {
    company: "Imaginist.ai Techno Solutions Pvt Ltd",
    role: "Software Engineer",
    period: "Jan 2025 – Sep 2026",
    description: [
      "Developed backend services, REST APIs and core application components using Python, FastAPI and PostgreSQL.",
      "Contributed to agentic AI platform development, including agent framework migration, workflow orchestration, dataset modules and LLM integrations.",
      "Developed AI-powered document processing and extraction workflows, risk analysis capabilities and integrations for enterprise applications.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "RAG",
      "Microsoft Agentic Framework",
      "LLMs",
      "PostgreSQL",
      "Elasticsearch",
    ],
    url: "https://www.imaginist.ai/",
    image: "/imaginist.png", 
  },
  {
    company: "Apto Innovations",
    role: "Software Development Intern",
    period: "Oct 2024 – Dec 2024",
    description: [
      "Contributed to an Event Management Portal using Laravel and MySQL, implementing role-based access for Admin, Organizer and User.",
      "Developed event management features including event creation, pricing, banner management and seat booking functionality.",
    ],
    tech: ["Laravel", "PHP", "MySQL"],
    url: "https://www.apto.co.in/",
    image: "/apto.svg", 
  },
];