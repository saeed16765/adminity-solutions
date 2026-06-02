import { site } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Adminity" },
  { href: "#about", label: "About" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft/70 bg-bg/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Adminity Solutions home">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-accent to-accent-2 text-[13px] font-bold text-bg">
            A
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-fg">
            Adminity Solutions
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={site.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent/60 hover:bg-surface-2"
        >
          Book a call
        </a>
      </nav>
    </header>
  );
}
