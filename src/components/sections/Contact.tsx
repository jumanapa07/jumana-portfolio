import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section className="border-t border-border py-16">
      <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
        Get in Touch
      </h2>
      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
        I'm open to opportunities in backend engineering and agentic AI. Reach
        out via email or connect on LinkedIn.
      </p>

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link
          href={`mailto:${siteConfig.email}`}
          className="underline underline-offset-4 hover:text-foreground"
        >
          {siteConfig.email}
        </Link>
        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground"
        >
          LinkedIn
        </Link>
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground"
        >
          GitHub
        </Link>
      </div>

      <p className="mt-12 text-xs text-muted-foreground">
        © 2026 {siteConfig.name}. Built with Next.js & Tailwind CSS.
      </p>
    </section>
  );
}