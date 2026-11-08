export interface Project {
  title: string;
  category: "Professional Work" | "Personal Projects";
  problem?: string;
  role?: string;
  description: string;
  highlights?: string[];
  tech: string[];
  github?: string;
  article?: string;
}

export const projects: Project[] = [
  // --- PROFESSIONAL WORK ---
  {
    title: "Risk Analysis Agent – Insurance Risk Intelligence",
    category: "Professional Work",
    role: "Independently handled end-to-end development.",
    description: "Designed and developed an agentic risk analysis solution for evaluating insurance submissions. Implemented risk analysis and scoring capabilities, configurable evaluation workflows and supporting integrations to generate structured and explainable risk assessments.",
    highlights: [
      "Risk analysis and scoring engine.",
      "Configurable risk factors and evaluation workflows.",
      "Data integrations and processing.",
      "Explainable risk assessments.",
      "Agentic workflow implementation.",
    ],
    tech: ["Python", "Agentic AI", "LLMs", "Risk Scoring", "Data Processing"],
    article: "https://medium.com/imaginist/why-we-built-a-risk-analysis-agent-instead-of-another-spreadsheet-13ccb4130a21",
  },
  {
    title: "Agentic AI Platform & Workflow Orchestration",
    category: "Professional Work",
    role: "Collaborative professional contribution.",
    description: "Contributed to developing an enterprise agentic AI platform, focusing on core agent architecture, workflow orchestration and integration of reusable AI and document-processing components.",
    highlights: [
      
      "Developed core agent components, pipelines and workflow orchestration capabilities.",
      "Integrated libraries such as Haystack and LangExtract into the platform as reusable workflow components.",
      "Implemented reusable document-processing components, including embedding generation and tokenization.",
      "Worked on human-in-the-loop workflow architecture and LLM guardrails.",
      "Contributed to Agent Builder frontend development for workflow configuration.",
      "Contributed to migrating the agent architecture from the deprecated AutoGen framework."
    ],
    tech: ["Python", "AutoGen", "Microsoft Agentic Framework", "Haystack", "LangExtract", "LLMs", "Embedders", "Tokenizers"],
  },
  {
    title: "Document Intelligence & Extraction Platform",
    category: "Professional Work",
    role: "Collaborative professional contribution.",
    description: "Contributed to building document intelligence capabilities for processing unstructured business documents, extracting structured information and supporting document-intensive workflows such as insurance underwriting.",
    highlights: [
      "Developed document preprocessing capabilities for downstream extraction and processing.",
      "Implemented automated data extraction from insurance documents.",
      "Developed data extraction visualization, allowing users to view extracted field mappings and information alongside the original PDF.",
      "Implemented document review capabilities to inspect extracted answers and make corrections.",
      "Contributed to confidence scoring and document field mapping capabilities.",
      "Worked on document processing workflows to transform unstructured information into structured data.",
    ],
    tech: ["Python", "Google Cloud Document AI", "OCR", "Haystack", "LangExtract", "Embedders", "Tokenizers", "Elasticsearch"],
  },

  // --- PERSONAL / ACADEMIC PROJECTS ---
  {
    title: "CodeClarify – AI-Powered Code Understanding Platform",
    category: "Personal Projects",
    description: "Developed an academic platform for source-code analysis, summarization and explanation using Microsoft CodeBERT and Natural Language Processing.",
    highlights: [
      "Fine-tuned the pretrained CodeBERT model using code and natural language datasets.",
      "Developed automated code explanation functionality.",
      "Built backend functionality for processing code submissions.",
      "Developed a Docker-based compiler service supporting Python, C++ and Java with automated test-case evaluation.",
      "Implemented coding challenges and code execution functionality.",
    ],
    tech: ["Python", "Django", "CodeBERT", "NLP", "Docker", "FastAPI", "MySQL"],
    github: "https://github.com/jumanapa07/CodeClarify", 
  },
  {
    title: "Calorie Calculator",
    category: "Personal Projects",
    description: "Developed a calorie tracking application for monitoring daily food intake, exercise and weight management.",
    highlights: [
      "Food intake and workout tracking.",
      "Calorie consumption and expenditure visualization.",
      "Macronutrient and micronutrient tracking.",
      "Personalized weight-loss and weight-gain plans.",
    ],
    tech: ["Python", "Django", "MySQL", "APIs", "Chart.js"],
    github: "https://github.com/jumanapa07/Calorie-Calculator",
  },
  {
    title: "Disaster Management System",
    category: "Personal Projects",
    description: "Developed a disaster reporting and management platform to help users report incidents and support relief activities.",
    highlights: [
      "Disaster reporting functionality.",
      "Real-time reporting to authorities.",
      "Financial aid and donation tracking.",
      "Administrative portal for managing reports and allocating resources.",
    ],
    tech: ["Python", "Django", "MySQL", "Flutter"],
  },
];