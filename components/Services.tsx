import type { ComponentType, SVGProps } from "react";
import {
  AiIcon,
  ContentIcon,
  FinanceIcon,
  OnboardingIcon,
  OperationsIcon,
  SopIcon,
  TeamIcon,
} from "./icons";

type Service = {
  title: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  {
    title: "Operational Management",
    description:
      "Day to day operations, inbox, scheduling, project coordination, and team oversight, handled so nothing slips.",
    Icon: OperationsIcon,
  },
  {
    title: "AI-Powered Workflow Design",
    description:
      "Automations built with Claude, ChatGPT, Zapier, and GoHighLevel that cut manual work and lower your costs.",
    Icon: AiIcon,
  },
  {
    title: "SOP Development",
    description:
      "We turn messy, in your head processes into clean, documented workflows your team can actually follow.",
    Icon: SopIcon,
  },
  {
    title: "Team Coordination",
    description:
      "Hiring, training, and managing remote teams and contractors on your behalf, start to finish.",
    Icon: TeamIcon,
  },
  {
    title: "Financial Reporting",
    description:
      "Clear financial reports, invoicing, and expense tracking, kept current so you always know where you stand.",
    Icon: FinanceIcon,
  },
  {
    title: "Client Onboarding Systems",
    description:
      "Intake pipelines, onboarding flows, CRM setups, and follow up sequences that make every new client feel handled.",
    Icon: OnboardingIcon,
  },
  {
    title: "Content & Community Operations",
    description:
      "Skool, Substack, social scheduling, and community engagement, managed so your audience stays warm.",
    Icon: ContentIcon,
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-accent">What we do</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            The operations layer your business is missing
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Plug us in where it hurts most, or hand us the whole operation. Either
            way, you get systems that hold up.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative rounded-2xl border border-border-soft bg-surface/60 p-6 transition-colors hover:border-accent/40 hover:bg-surface-2"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg text-accent transition-colors group-hover:border-accent/50">
                <service.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-fg">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
