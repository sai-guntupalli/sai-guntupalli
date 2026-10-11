import Link from "next/link";
import { site } from "@/lib/content";

export function Header() {
  return (
    <header className="contain flex items-center justify-between py-5">
      <Link href="/" className="wordmark" aria-label="Sai Guntupalli, home">
        Sai Guntupalli
      </Link>

      <div className="flex items-center gap-5 sm:gap-7">
        <nav
          className="hidden items-center gap-6 text-sm sm:flex"
          aria-label="Primary"
        >
          <Link href="/#experience" className="nav-link">
            Experience
          </Link>
          <Link href="/#projects" className="nav-link">
            Projects
          </Link>
          <Link href="/#blog" className="nav-link">
            Blog
          </Link>
        </nav>

        <a
          href={`mailto:${site.email}`}
          className="btn btn-primary px-4 py-2 text-sm"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}