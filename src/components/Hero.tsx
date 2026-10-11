import Image from "next/image";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section>
      <div className="contain grid grid-cols-1 items-center gap-12 pt-10 pb-16 sm:pt-14 sm:pb-24 lg:grid-cols-12 lg:gap-10">
        <div className="hero-copy lg:col-span-7">
          <h1 className="font-display text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl">
            Sai Guntupalli
          </h1>

          <p className="mt-4 text-lg font-medium text-accent-deep">
            {site.role}
          </p>

          <p className="mt-3 max-w-[52ch] leading-relaxed text-muted">
            {site.shortBio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="btn btn-primary px-6 py-3"
            >
              Get in touch
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost px-5 py-3"
            >
              <GithubLogo size={18} aria-hidden />
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-portrait relative mx-auto aspect-[4/5] w-full max-w-xs sm:max-w-sm lg:col-span-5 lg:max-w-none">
          <div className="portrait-backdrop absolute inset-x-0 bottom-0 h-[86%] rounded-2xl" />
          <Image
            src="/sai-portrait.png"
            alt="Portrait of Sai Guntupalli"
            fill
            priority
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 24rem, 30rem"
            className="z-10 object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}