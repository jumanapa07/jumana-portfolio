import Link from "next/link";

export function Writing() {
  return (
    <section id="writing" className="py-24 border-t border-gray-100 dark:border-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Technical Writing</h2>
        <p className="text-lg text-gray-500 dark:text-gray-400">Engineering insights and architectural deep-dives.</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          
          <div className="flex flex-wrap items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-medium text-blue-600 dark:text-blue-400">Medium</span>
            <span>•</span>
            <span>Agentic AI</span>
            <span>•</span>
            <span>Risk Intelligence</span>
            <span>•</span>
            <span>System Design</span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 leading-snug">
            Why we built a Risk Analysis Agent instead of another spreadsheet
          </h3>
          
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
            An in-depth look at the limitations of manual risk evaluation, the architectural decisions behind building an agentic risk analysis system, and how we leveraged LLMs and configurable data adapters to deliver explainable, automated assessments.
          </p>

          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
            <Link
              href="https://medium.com/imaginist/why-we-built-a-risk-analysis-agent-instead-of-another-spreadsheet-13ccb4130a21"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors"
            >
              Read Article
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}