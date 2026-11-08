import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Writing } from "@/components/sections/Writing"; 
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-blue-200 dark:bg-black dark:text-white dark:selection:bg-blue-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 md:px-12">
        <Hero />
        <Experience />
        <Projects />
        <Writing />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}