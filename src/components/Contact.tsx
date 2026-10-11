import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section className="pb-16 sm:pb-24" aria-label="Contact">
      <div className="contain">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Get in touch
          </h2>
          <p className="mt-4 max-w-[50ch] leading-relaxed text-muted">
            The fastest way to reach me is email. Happy to talk data platforms,
            agentic systems, or anything in between.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="email-link mt-8 inline-block"
          >
            {site.email}
          </a>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost px-5 py-2.5"
            >
              <GithubLogo size={18} aria-hidden />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost px-5 py-2.5"
            >
              <LinkedinLogo size={18} aria-hidden />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}