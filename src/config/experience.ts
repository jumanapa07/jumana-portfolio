export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "Imaginist.ai Techno Solutions Pvt Ltd",
    role: "Software Engineer",
    period: "Jan 2025 – Present",
    description: [
      "Developed and maintained backend services and REST APIs using Python, FastAPI, and Django.",
      "Built agentic AI applications and multi-agent workflows using the Microsoft Agentic Framework and LLMs.",
      "Developed document intelligence and data-extraction pipelines processing unstructured documents into structured data.",
      "Integrated Google Cloud Document AI and OCR components for parsing, field extraction, and validation.",
      "Implemented PII detection and anonymization with Microsoft Presidio.",
      "Worked with PostgreSQL, Elasticsearch, Redis, Celery, and WebSockets for async processing and search.",
      "Contributed to frontend (HTML/CSS/JS/React) and CI/CD, code reviews, and debugging.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Django",
      "Microsoft Agentic Framework",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "Celery",
      "Google Cloud Document AI",
      "Microsoft Presidio",
      "React",
    ],
  },
  {
    company: "Apto Innovations",
    role: "Software Development Intern",
    period: "Oct 2024 – Dec 2024",
    description: [
      "Contributed to the development of an Event Management Portal using Laravel and MySQL.",
      "Implemented backend logic, database operations, and application components.",
    ],
    tech: ["Laravel", "MySQL", "PHP"],
  },
];