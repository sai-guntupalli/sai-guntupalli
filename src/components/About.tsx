import { FileText } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/content";
import { Reveal } from "./Reveal";

export function About() {
  const tools = site.tools;
  const stackSentence = `Day to day that means ${tools
    .slice(0, -1)
    .join(", ")}, and ${tools[tools.length - 1]}.`;

  return (
    <section className="pb-16 sm:pb-24" aria-label="About">
      <div className="contain">
        <Reveal>
          <p className="max-w-[64ch] text-lg leading-relaxed text-muted">
            {site.bio}
          </p>
          <p className="mt-5 max-w-[64ch] leading-relaxed text-muted">
            {stackSentence}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost px-4 py-2"
            >
              <FileText size={16} aria-hidden />
              Resume
            </a>
            <p className="text-soft">{site.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}