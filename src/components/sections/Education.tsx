import { education, certifications } from "@/config/education";

export function Education() {
  return (
    <section id="education" className="py-16 border-t border-gray-100 dark:border-gray-900 mb-8">
      
      {/* Education Section */}
      <div className="mb-10">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
          Education
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu) => (
            <div 
              key={edu.degree} 
              className="flex flex-col justify-between rounded-xl border border-gray-200 bg-gray-50/50 p-5 dark:border-gray-800 dark:bg-gray-900/50"
            >
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {edu.institution}
                </p>
              </div>
              
              <div className="flex justify-between items-center mt-4 text-sm">
                <span className="text-gray-500 dark:text-gray-500">
                  {edu.year}
                </span>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
          Certifications
        </h2>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          {certifications.map((c) => (
            <li key={c} className="flex gap-2.5">
              <span className="text-gray-300 dark:text-gray-700">/</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}