import { skillGroups } from "@/config/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-gray-100 dark:border-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Technical Skills</h2>
        <p className="text-lg text-gray-500 dark:text-gray-400">Technologies I have hands-on experience with.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {skillGroups.map((group) => (
          <div key={group.category} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
            
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 sm:w-48 shrink-0">
              {group.category}
            </h3>
            
            {/* Skills List */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              {group.items.map((item, index) => (
                <span key={item} className="flex items-center gap-2">
                  <span>{item}</span>
                  {index < group.items.length - 1 && (
                    <span className="text-gray-300 dark:text-gray-700 text-xs">•</span>
                  )}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}