import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="contain flex flex-col gap-3 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-soft">
          © {year} {site.name}
        </p>
        <div className="flex items-center gap-5">
          <a href={`mailto:${site.email}`} className="nav-link">
            Email
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}