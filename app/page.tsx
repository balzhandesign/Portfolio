import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import About from "@/components/About";
import { cases } from "@/data/cases";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="work" className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-2">Проекты</h2>
              <p className="text-sm text-muted">{cases.length} кейсов</p>
            </div>
          </div>

          <div>
            {cases.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <About />
      <Skills />
    </>
  );
}
