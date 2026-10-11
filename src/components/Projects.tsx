import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/lib/content";
import { ProjectIcon } from "./ProjectIcon";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section className="scroll-mt-20 pb-16 sm:pb-24" id="projects">
      <div className="contain">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-[55ch] text-muted">
            Agentic AI and data platform work, open source where possible.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.name}
              delay={Math.min(i * 0.06, 0.24)}
              className={i === 0 ? "md:col-span-2" : undefined}
            >
              <article
                className={`project-card ${
                  i === 0 ? "project-card--featured" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-soft">{project.category}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                      {project.name}
                    </h3>
                  </div>
                  <ProjectIcon icon={project.icon} />
                </div>

                <p className="mt-3 max-w-[52ch] leading-relaxed text-muted">
                  {project.description}
                </p>

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title-link mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium"
                  >
                    View on GitHub
                    <ArrowUpRight size={16} aria-hidden />
                  </a>
                ) : (
                  <p className="mt-auto pt-5 text-sm text-soft">
                    Built for internal use at Disney
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}