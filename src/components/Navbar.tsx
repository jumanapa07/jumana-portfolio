import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center pt-6 px-4">
      <nav className="flex items-center gap-6 rounded-full border border-gray-200 bg-white/80 px-6 py-3 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-black/80">
        <Link href="/" className="font-bold tracking-tight text-lg mr-4">
          {siteConfig.name}
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
        </div>
      </nav>
    </div>
  );
}