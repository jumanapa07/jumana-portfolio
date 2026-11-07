export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: "CodeClarify — AI-Powered Code Understanding Platform",
    description:
      "Academic platform for source-code analysis, summarization, and explanation using Microsoft CodeBERT and NLP.",
    tech: ["Python", "CodeBERT", "NLP", "Docker", "FastAPI"],
    highlights: [
      "Fine-tuned pretrained CodeBERT on code + natural-language datasets for automated code explanations.",
      "Built a Docker-based compiler service that executes Python, C++, and Java with automated test-case evaluation.",
      "Developed backend to process code submissions and return generated explanations.",
      "Handled dataset preprocessing, model fine-tuning, and backend integration.",
    ],
  },
];