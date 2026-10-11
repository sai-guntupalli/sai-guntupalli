import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { assetPath, certifications } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Certifications() {
  return (
    <section className="scroll-mt-20 pb-16 sm:pb-24" id="certifications">
      <div className="contain">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-3 max-w-[55ch] text-muted">
            Current professional certifications across cloud data engineering
            and generative AI.
          </p>
        </Reveal>

        <Reveal className="mt-8">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="project-card flex flex-row items-center gap-4 px-5 py-4"
              >
                {/* Plain <img>: tiny brand SVGs, next/image's optimizer would refuse them */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetPath(cert.badge)}
                  alt={`${cert.issuer} logo`}
                  width={40}
                  height={40}
                  className="h-9 w-9 shrink-0"
                />
                <div className="min-w-0">
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title-link inline-flex items-center gap-1 font-medium"
                  >
                    <span className="block truncate">{cert.name}</span>
                    <ArrowUpRight size={15} aria-hidden />
                  </a>
                  <p className="text-sm text-soft">{cert.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}