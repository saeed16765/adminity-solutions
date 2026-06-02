import { site } from "@/lib/site";
import { ArrowRightIcon, LinkedInIcon, MailIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-2 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />

          <h2 className="relative text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Ready to stop doing everything yourself?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
            Book a discovery call and we will map out where Adminity can take work
            off your plate, usually within the first conversation.
          </p>

          <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-6 py-3 text-sm font-medium text-fg transition-colors hover:bg-surface"
            >
              <MailIcon className="h-4 w-4" />
              {site.email}
            </a>
          </div>

          <div className="relative mt-8 flex items-center justify-center">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adminity Solutions on LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg text-muted transition-colors hover:border-accent/50 hover:text-fg"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
