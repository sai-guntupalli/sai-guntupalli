import { experience } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Experience() {
  const [current, ...earlier] = experience;

  return (
    <section className="scroll-mt-20 pb-16 sm:pb-24" id="experience">
      <div className="contain">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Experience
          </h2>
          <p className="mt-3 max-w-[55ch] text-muted">
            Ten years across media and finance, currently building agentic
            systems for Disney marketing data.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <article className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {current.role}
                </h3>
                <p className="mt-1.5 text-muted">
                  {current.company}, for {current.client}
                </p>
              </div>
              <p className="shrink-0 text-sm text-soft sm:text-right">
                <span className="block">
                  {current.start} - {current.end}
                </span>
                <span className="block">{current.location}</span>
              </p>
            </div>

            {current.highlights ? (
              <ul className="highlight-list mt-6 space-y-3">
                {current.highlights.map((item) => (
                  <li key={item.slice(0, 40)}>{item}</li>
                ))}
              </ul>
            ) : null}
          </article>
        </Reveal>

        <Reveal className="mt-14">
          <h3 className="font-display text-xl font-semibold tracking-tight">
            Earlier
          </h3>
          <ol className="mt-3">
            {earlier.map((job) => (
              <li
                key={`${job.company}-${job.role}-${job.start}`}
                className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <p>
                  <span className="font-medium">{job.role}</span>
                  <span className="text-muted">, {job.company}</span>
                </p>
                <p className="shrink-0 text-sm text-soft sm:text-right">
                  {job.start} - {job.end}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}