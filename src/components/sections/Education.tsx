import { education, certifications } from "@/config/education";

export function Education() {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
        Education
      </h2>

      <div className="space-y-6">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-4"
          >
            <div>
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
            </div>
            {edu.grade && (
              <span className="text-sm text-muted-foreground">{edu.grade}</span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Certifications
        </h3>
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}