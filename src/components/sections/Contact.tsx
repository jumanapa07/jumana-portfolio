import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section className="py-12 border-t border-gray-100 dark:border-gray-900">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
        Get in Touch
      </h2>
      
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-6 max-w-lg">
        I'm currently open to opportunities in backend engineering and agentic AI. 
        Feel free to reach out via email or connect with me on LinkedIn.
      </p>

      <div className="flex gap-6">
        <Link
          href={`mailto:${siteConfig.email}`}
          className="text-sm font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-gray-900 dark:text-gray-100 dark:decoration-gray-600 dark:hover:decoration-gray-100"
        >
          Email
        </Link>
        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          className="text-sm font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-gray-900 dark:text-gray-100 dark:decoration-gray-600 dark:hover:decoration-gray-100"
        >
          LinkedIn
        </Link>
      </div>

      <p className="mt-16 text-xs text-gray-500 dark:text-gray-600">
        © 2026 {siteConfig.name}. Built with Next.js & Tailwind CSS.
      </p>
    </section>
  );
}