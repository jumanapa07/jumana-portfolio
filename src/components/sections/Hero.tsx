import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center py-20">
      <p className="mb-3 text-sm font-medium text-muted-foreground">
        {siteConfig.location}
      </p>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        {siteConfig.name}
      </h1>

      <p className="mt-3 text-xl font-medium text-muted-foreground sm:text-2xl">
        {siteConfig.role}
      </p>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {siteConfig.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          GitHub
        </Link>
        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
        >
          LinkedIn
        </Link>
        <Link
          href={`mailto:${siteConfig.email}`}
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
        >
          Email
        </Link>
      </div>
    </section>
  );
}