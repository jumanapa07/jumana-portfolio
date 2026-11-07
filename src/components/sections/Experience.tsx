import { experiences } from "@/config/experience";

export function Experience() {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
        Experience
      </h2>

      <div className="space-y-10">
        {experiences.map((exp) => (
          <div key={exp.company} className="border-l-2 border-border pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <span className="text-sm text-muted-foreground">
                {exp.period}
              </span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              {exp.company}
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {exp.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tech.map((t) => (
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