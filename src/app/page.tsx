import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}