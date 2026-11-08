import Link from "next/link";
import { projects } from "@/config/projects";

export function Projects() {
  const professionalWork = projects.filter((p) => p.category === "Professional Work");
  const personalProjects = projects.filter((p) => p.category === "Personal Projects");

  return (
    <section id="projects" className="py-24 border-t border-gray-100 dark:border-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Projects</h2>
        <p className="text-lg text-gray-500 dark:text-gray-400">Showcasing impactful projects and technical achievements.</p>
      </div>

      {/* PROFESSIONAL WORK */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 border-b border-gray-200 pb-2 dark:border-gray-800">
          Professional Work
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professionalWork.map((project) => (
            <div key={project.title} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h4>
              
              {/* {project.role && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 italic">
                  <strong className="text-gray-900 dark:text-gray-200 not-italic">Type: </strong>
                  {project.role}
                </p>
              )}
               */}
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              {project.highlights && (
                <ul className="space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                
                {project.article && (
                  <Link
                    href={project.article}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    Read Technical Article
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PERSONAL PROJECTS */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 border-b border-gray-200 pb-2 dark:border-gray-800">
          Personal & Academic Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((project) => (
            <div key={project.title} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h4>
              
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              
              {project.highlights && (
                <ul className="space-y-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* REMOVED flex-grow from here and mt-auto so items flow naturally */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-900 dark:text-gray-400 border border-gray-100 dark:border-gray-800">
                    {t}
                  </span>
                ))}
              </div>
              
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors mt-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                  </svg>
                  View Repository
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}