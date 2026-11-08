import Image from "next/image";
import { experiences } from "@/config/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-gray-100 dark:border-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Experience</h2>
        <p className="text-lg text-gray-500 dark:text-gray-400">Professional journey and career timeline.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950">
            <div>
              {/* Header: Logo and Company Info */}
              <div className="flex items-start gap-4 mb-6">
                
                {/* Logo Image */}
                <div className="shrink-0 mt-1 h-10 w-10 relative overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800 bg-white">
                  <Image 
                    src={exp.image} 
                    alt={`${exp.company} logo`} 
                    fill 
                    className="object-contain p-1" 
                    sizes="40px"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                    {exp.role}
                  </h3>
                  <a 
                    href={exp.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors mt-1"
                  >
                    {exp.company}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 opacity-50 group-hover/link:opacity-100 transition-opacity">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <span className="inline-block rounded-md bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300 mb-6">
                {exp.period}
              </span>

              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-8">
                {exp.description.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gray-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                {exp.tech.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    {t}
                  </span>
                ))}
                {exp.tech.length > 4 && (
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    +{exp.tech.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}