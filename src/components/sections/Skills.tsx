import { skillGroups } from "@/config/skills";

export function Skills() {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
        Skills
      </h2>

      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border px-3 py-1 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}