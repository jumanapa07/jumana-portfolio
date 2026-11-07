export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "SQL", "Java", "C", "PHP"],
  },
  {
    category: "Backend",
    items: [
      "FastAPI",
      "Django",
      "Flask",
      "Laravel",
      "REST APIs",
      "WebSockets",
      "Celery",
      "Asynchronous Programming",
    ],
  },
  {
    category: "AI & Agentic",
    items: [
      "Microsoft Agentic Framework",
      "Autogen",
      "LLM Integration",
      "AI Agents",
      "Agentic Workflows",
      "Prompt Engineering",
      "RAG",
    ],
  },
  {
    category: "Document Intelligence",
    items: [
      "Google Cloud Document AI",
      "OCR",
      "Data Extraction",
      "Microsoft Presidio",
      "PII Anonymization",
    ],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Databases & Search",
    items: ["PostgreSQL", "MySQL", "Redis", "Elasticsearch"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Git", "GitHub", "CI/CD", "Linux", "AWS (basic)", "GCP (basic)", "Kubernetes (basic)"],
  },
];