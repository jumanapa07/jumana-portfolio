import { projects } from "@/config/projects";

export function Projects() {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
        Projects
      </h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border border-border p-6"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}