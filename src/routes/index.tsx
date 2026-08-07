import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import projectVolt from "@/assets/project-volt.jpg";
import projectKuro from "@/assets/project-kuro.jpg";
import projectFlow from "@/assets/project-flow.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Martin — Développeur web freelance de 16 ans" },
      {
        name: "description",
        content:
          "Martin, développeur web et vibe coder français de 16 ans. Un an de code en autodidacte, sites modernes et rapides à des tarifs accessibles.",
      },
      { property: "og:title", content: "Martin — Développeur web freelance de 16 ans" },
      {
        property: "og:description",
        content:
          "Portfolio de Martin : interfaces React modernes, rapides et abordables. Disponible pour vos projets.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "Volt Dashboard",
    tech: "Next.js",
    desc: "Interface de monitoring en temps réel pour actifs numériques.",
    img: projectVolt,
  },
  {
    title: "Kuro Notes",
    tech: "Tailwind",
    desc: "Application de prise de notes minimaliste axée sur la confidentialité.",
    img: projectKuro,
  },
  {
    title: "Flow Engine",
    tech: "TypeScript",
    desc: "Moteur d'animation léger pour des transitions web fluides.",
    img: projectFlow,
  },
];

const stack = [
  { code: "TS", name: "TypeScript" },
  { code: "RT", name: "React / Next" },
  { code: "TW", name: "Tailwind CSS" },
  { code: "GS", name: "Framer / GSAP" },
];

function Check() {
  return (
    <svg
      className="mr-3 size-4 shrink-0 text-brand"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-brand/30 selection:text-brand">
      <nav className="fixed top-0 z-50 w-full px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-card/80 px-4 py-2 ring-1 ring-border backdrop-blur-md">
          <div className="flex items-center gap-2 pl-2">
            <div className="size-2 rounded-full bg-brand glow-brand" />
            <span className="font-mono text-xs tracking-tighter text-card-foreground">
              martin.dev
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#propos" className="transition-colors hover:text-brand">
              À propos
            </a>
            <a href="#projets" className="transition-colors hover:text-brand">
              Projets
            </a>
            <a href="#services" className="transition-colors hover:text-brand">
              Services
            </a>
          </div>
          <a
            href="mailto:hello@martin.dev"
            className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground ring-1 ring-secondary transition-colors hover:bg-brand hover:ring-brand"
          >
            Contact
          </a>
        </div>
      </nav>

      <main>
        <section id="propos" className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="animate-rise mb-8 inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 font-mono text-xs text-brand ring-1 ring-brand/20">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              Disponible pour de nouveaux projets
            </div>

            <h1 className="animate-rise mb-8 max-w-[20ch] text-4xl leading-tight font-semibold text-balance text-card-foreground md:text-7xl [animation-delay:80ms]">
              Développeur créatif de 16 ans, passionné par le{" "}
              <span className="text-brand text-glow">code</span> pur.
            </h1>

            <p className="animate-rise mb-10 max-w-[48ch] text-lg text-pretty text-muted-foreground md:text-xl [animation-delay:160ms]">
              Un an d'expérience en autodidacte. Je construis des interfaces rapides, modernes et
              accessibles à des tarifs adaptés pour les créateurs indépendants.
            </p>

            <div className="animate-rise flex items-center gap-4 [animation-delay:240ms]">
              <a
                href="mailto:hello@martin.dev"
                className="flex items-center rounded-lg bg-brand py-2 pr-4 pl-3 text-sm font-semibold text-primary-foreground ring-1 ring-brand transition-transform hover:scale-[1.02]"
              >
                <svg
                  className="mr-2 size-4 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                </svg>
                Démarrer un projet
              </a>
              <div className="font-mono text-xs text-muted-foreground">
                $&gt; cd portfolio &amp;&amp; ls{" "}
                <span className="animate-blink text-brand">_</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projets" className="bg-card/30 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 max-w-[48ch]">
              <h2 className="mb-4 text-2xl font-semibold text-card-foreground">Mes Travaux</h2>
              <p className="text-pretty text-muted-foreground">
                Une sélection de projets où j'ai pu expérimenter avec les dernières technologies du
                web.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <article className="group relative flex h-full flex-col rounded-[20px] bg-card p-2 ring-1 ring-border transition-all hover:ring-brand/30">
                    <img
                      src={p.img}
                      alt={`Aperçu du projet ${p.title}`}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="aspect-square w-full rounded-[12px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <div className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-medium text-card-foreground">{p.title}</h3>
                        <span className="font-mono text-[10px] text-muted-foreground">
                          {p.tech}
                        </span>
                      </div>
                      <p className="text-sm leading-normal text-muted-foreground">{p.desc}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row">
            <Reveal className="flex-1">
              <h2 className="mb-8 text-2xl font-semibold text-card-foreground">Mon Setup</h2>
              <div className="grid grid-cols-2 gap-4">
                {stack.map((s) => (
                  <div
                    key={s.code}
                    className="flex items-center gap-3 rounded-xl bg-card p-4 ring-1 ring-border transition-colors hover:ring-brand/30"
                  >
                    <div className="grid size-8 place-items-center rounded bg-background">
                      <span className="font-mono text-[10px] text-brand">{s.code}</span>
                    </div>
                    <span className="text-sm font-medium">{s.name}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="flex-1" delay={120}>
              <h2 className="mb-8 text-2xl font-semibold text-card-foreground">Tarifs Junior</h2>
              <div className="relative overflow-hidden rounded-[24px] bg-brand/5 p-8 ring-1 ring-brand/20">
                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] tracking-widest text-brand/40 uppercase">
                  Offre Lancement
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-semibold text-card-foreground">150€</span>
                  <span className="ml-2 text-muted-foreground">/ jour</span>
                </div>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center text-sm">
                    <Check />
                    Landing pages ultra-performantes
                  </li>
                  <li className="flex items-center text-sm">
                    <Check />
                    Intégration de designs complexes
                  </li>
                  <li className="flex items-center text-sm">
                    <Check />
                    Support &amp; Maintenance 1 mois
                  </li>
                </ul>
                <a
                  href="mailto:hello@martin.dev"
                  className="block w-full rounded-xl bg-secondary py-3 text-center font-semibold text-secondary-foreground transition-colors hover:bg-brand"
                >
                  Réserver mon créneau
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-border px-6 py-32">
          <Reveal className="mx-auto max-w-6xl text-center">
            <h2 className="mb-6 text-3xl font-semibold text-card-foreground md:text-5xl">
              On construit quelque chose ?
            </h2>
            <p className="mx-auto mb-10 max-w-[56ch] text-pretty text-muted-foreground">
              Je suis toujours à la recherche de défis stimulants. Que vous ayez une idée précise ou
              juste un concept flou, discutons-en.
            </p>
            <a
              href="mailto:hello@martin.dev"
              className="inline-flex items-center gap-3 text-2xl font-medium text-brand underline underline-offset-8 transition-colors hover:opacity-80"
            >
              hello@martin.dev
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="font-mono text-xs text-muted-foreground">© 2026 — MARTIN, FRANCE</div>
          <div className="flex gap-6 font-mono text-xs">
            <a href="#" className="transition-colors hover:text-brand">
              GITHUB
            </a>
            <a href="#" className="transition-colors hover:text-brand">
              TWITTER
            </a>
            <a href="#" className="transition-colors hover:text-brand">
              READ.CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
