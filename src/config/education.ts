export interface Education {
  degree: string;
  institution: string;
  period?: string;
  grade?: string;
}

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "APJ Abdul Kalam Technological University, Kerala",
    grade: "CGPA: 8.44",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "University of Calicut, Kerala",
    grade: "CGPA: 8.00",
  },
];

export const certifications: string[] = [
  "Programming, Data Structures Using Python — NPTEL",
  "Cloud Computing — NPTEL",
];