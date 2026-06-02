import { site } from "@/lib/site";
import { ArrowRightIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Your fractional operations team
        </span>

        <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-6xl">
          We run your operations
          <br className="hidden sm:block" />{" "}
          so you can <span className="accent-text">run your business</span>.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Adminity Solutions is an operations consultancy for US founders who have
          outgrown doing everything themselves. We build the systems, manage the
          people, and keep the day to day running.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
          >
            Book a Discovery Call
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-3 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
          >
            See what we do
          </a>
        </div>
      </div>
    </section>
  );
}
