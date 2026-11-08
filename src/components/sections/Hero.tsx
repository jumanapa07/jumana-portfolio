import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pt-32 pb-16 text-center">
      {/* Profile Picture / Initials */}
      {/* <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border-4 border-gray-100 bg-gray-50 text-3xl font-bold text-gray-400 dark:border-gray-800 dark:bg-gray-900 shadow-xl">
        JPA
      </div> */}

      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-3">
        {siteConfig.name}
      </h1>
      
      <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300 sm:text-2xl mb-3">
        Software Engineer | Backend & Agentic AI
      </h2>

      <p className="max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400 mb-8">
        Specializing in building scalable Python backends and integrating practical AI 
        and agentic workflows to automate complex business processes.
      </p>

      {/* Buttons & Social Links */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        <Link
          href={`mailto:${siteConfig.email}`}
          className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg dark:bg-white dark:text-black"
        >
          Contact Me
        </Link>
        <Link
          href="/resume.pdf"
          target="_blank"
          className="rounded-full border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
        >
          View Resume
        </Link>

        {/* Social Icons */}
        <div className="flex items-center gap-3 ml-2">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-all hover:-translate-y-1 hover:bg-gray-50 hover:text-black hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
            </svg>
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-all hover:-translate-y-1 hover:bg-gray-50 hover:text-black hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Professional Highlight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl text-left">
        
        <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="mb-3 text-gray-700 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V6.75a3 3 0 013-3h13.5a3 3 0 013 3v4.5a3 3 0 01-3 3m-13.5 0v2.25a3 3 0 003 3h13.5a3 3 0 003-3v-2.25" />
            </svg>
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">Backend</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-snug">
            Python, FastAPI, Django, REST APIs and backend services.
          </p>
        </div>

        <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="mb-3 text-gray-700 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">Agentic AI</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-snug">
            LLM integration, AI agents and intelligent workflows.
          </p>
        </div>

        <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="mb-3 text-gray-700 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">Document Intelligence</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-snug">
            Document parsing, OCR and automated data extraction.
          </p>
        </div>

      </div>
    </section>
  );
}