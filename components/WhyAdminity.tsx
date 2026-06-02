import type { ComponentType, SVGProps } from "react";
import { BoltIcon, CompassIcon, GlobeIcon, ScaleIcon } from "./icons";

type Value = {
  title: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const values: Value[] = [
  {
    title: "AI-native operations",
    description:
      "We use AI tools every day, not as a buzzword but as core infrastructure. That means faster turnarounds and lower costs than a traditional ops team.",
    Icon: BoltIcon,
  },
  {
    title: "US-quality, Pakistan-based",
    description:
      "Our CEO is an NYU graduate with years inside American businesses. Our team is in Lahore. You get top tier operations at a fraction of US costs.",
    Icon: GlobeIcon,
  },
  {
    title: "We think like owners",
    description:
      "We do not just follow instructions. We spot the problems, build the systems, and take ownership of the outcome.",
    Icon: CompassIcon,
  },
  {
    title: "Built for scale",
    description:
      "Our systems are designed to grow with you. What works for 10 clients works for 100, without rebuilding from scratch.",
    Icon: ScaleIcon,
  },
];

export function WhyAdminity() {
  return (
    <section id="why" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-medium tracking-wide text-accent">Why Adminity</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Operations partners who act like part of the team
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              You are not hiring a vendor that waits for tickets. You are getting a
              team that owns the work and makes your business run better.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border-soft bg-surface/60 p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg text-accent">
                  <value.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-fg">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
