export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend Development",
    items: [
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "REST APIs",
      "WebSockets",
      "Celery",
      "Asynchronous Programming",
    ],
  },
  {
    category: "AI & Agentic Engineering",
    items: [
      "LLM Integration",
      "Microsoft Agentic Framework",
      "AI Agents",
      "Agentic Workflows",
      "RAG",
      "Prompt Engineering",
    ],
  },
  {
    category: "Document Intelligence & Data Processing",
    items: [
      "Google Cloud Document AI",
      "Microsoft Presidio",
      "OCR & Data Extraction",
      "CodeBERT / NLP",
    ],
  },
  {
    category: "Databases & Search",
    items: [
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "MySQL",
      "SQL",
    ],
  },
  {
    category: "Tools & Infrastructure",
    items: [
      "Docker",
      "Git / GitHub",
      "Linux",
      "CI/CD",
      "AWS (basic practical exposure)",
      "GCP (practical exposure)",
    ],
  },
  {
    category: "Other Technologies",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Java",
      "C",
      "PHP",
    ],
  },
];