import { site } from "@/lib/site";
import { LinkedInIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-accent to-accent-2 text-[13px] font-bold text-bg">
              A
            </span>
            <span className="text-sm font-semibold tracking-tight text-fg">
              {site.legalName}
            </span>
          </div>
          <p className="mt-3 text-sm text-faint">{site.location}</p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <div className="flex items-center gap-5 text-sm text-muted">
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-fg">
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adminity Solutions on LinkedIn"
              className="text-faint transition-colors hover:text-fg"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-faint">
            Copyright {year} {site.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
