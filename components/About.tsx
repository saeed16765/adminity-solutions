const credentials = [
  "NYU Economics, Class of 2021",
  "Former Director of Product, US fitness coaching company",
  "Built AI-powered operations systems",
  "Years managing remote teams",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-border-soft bg-surface/60">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="flex flex-col items-start">
              <div className="relative grid h-28 w-28 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 text-3xl font-bold text-bg">
                MAS
              </div>
              <p className="mt-5 text-lg font-semibold text-fg">Muhammad Ahmad Saeed</p>
              <p className="text-sm text-muted">Founder and CEO</p>
            </div>

            <div>
              <p className="text-sm font-medium tracking-wide text-accent">About</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                Run by someone who has actually run operations
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Adminity was founded by Muhammad Ahmad Saeed, an NYU economics
                graduate who spent years inside US online businesses. As a former
                Director of Product at an American fitness coaching company, he
                built the AI-powered systems and managed the remote teams that kept
                operations scaling. Adminity brings that same playbook to your
                business.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {credentials.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-bg px-3.5 py-1.5 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
