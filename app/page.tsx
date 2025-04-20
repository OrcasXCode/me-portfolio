import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Activities from "@/components/activities"
import Education from "@/components/education"
import Contact from "@/components/contact"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Om Sureja | Portfolio",
  description: "Full Stack Developer specializing in Next.js, React, and TypeScript",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Activities />
      <Education />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
