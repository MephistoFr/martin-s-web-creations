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
    num: "01",
    kind: "concept",
    title: "Maison Barbier",
    desc: "Une identité en ligne pour un barbier qui aime les gestes précis, les belles matières et les lieux qui ont du caractère.",
    tags: ["Direction artistique", "Site vitrine"],
    img: projectVolt,
  },
  {
    num: "02",
    kind: "expérimentation",
    title: "Kuro Notes",
    desc: "Une prise de notes minimaliste, pensée pour écrire vite et garder ses idées pour soi.",
    tags: ["Interface", "React"],
    img: projectKuro,
  },
  {
    num: "03",
    kind: "outil",
    title: "Flow Engine",
    desc: "Un petit moteur d'animation fait pour comprendre comment les transitions web deviennent fluides.",
    tags: ["TypeScript", "Motion"],
    img: projectFlow,
  },
];

const stack = ["React / Vite", "TypeScript", "Tailwind CSS", "Framer Motion"];

const steps = [
  {
    num: "01",
    title: "On papote",
    desc: "Tu me racontes ton idée, même si elle tient sur un coin de note. Je pose les bonnes questions.",
  },
  {
    num: "02",
    title: "On esquisse",
    desc: "Je transforme les mots en structure, en couleurs et en premières pistes que l'on peut vraiment regarder.",
  },
  {
    num: "03",
    title: "On construit",
    desc: "Je code, je teste, je te montre. Les retours font partie du chemin, pas d'une case à cocher à la fin.",
  },
  {
    num: "04",
    title: "On met en ligne",
    desc: "Le site est prêt à être partagé. Et je t'explique comment le garder vivant sans te noyer.",
  },
];


function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-brand selection:text-background">
      <nav className="fixed top-6 left-1/2 z-50 flex w-[92%] max-w-5xl -translate-x-1/2 items-center justify-between border border-hairline bg-card/80 px-6 py-4 backdrop-blur-md">
        <span className="text-xl font-bold tracking-tighter">M.</span>
        <div className="hidden gap-8 text-sm font-medium tracking-tight uppercase md:flex">
          <a href="#projets" className="transition-colors hover:text-brand">
            Projets
          </a>
          <a href="#expertise" className="transition-colors hover:text-brand">
            Expertise
          </a>
          <a href="#tarifs" className="transition-colors hover:text-brand">
            Tarifs
          </a>
        </div>
        <a
          href="mailto:hello@martin.dev"
          className="bg-foreground px-5 py-2 text-xs font-bold tracking-widest text-background uppercase transition-colors hover:bg-brand"
        >
          Contact
        </a>
      </nav>

      <main className="mx-auto max-w-7xl px-6 pt-40 pb-20">
        <section className="relative mb-32 md:mb-40">
          <div className="pointer-events-none absolute -top-16 -left-6 font-serif text-[160px] leading-none text-foreground/5 italic select-none md:-top-24 md:text-[280px]">
            16&nbsp;ans
          </div>
          <h1 className="animate-rise relative mb-8 font-serif text-6xl leading-[0.85] tracking-tight md:text-[10rem]">
            Martin <br />
            <span className="ml-8 text-brand italic md:ml-20">Développeur</span>
          </h1>
          <div className="animate-rise flex flex-col items-start justify-between gap-10 [animation-delay:120ms] md:flex-row">
            <p className="max-w-md text-lg leading-relaxed text-pretty md:text-xl">
              16 ans, un an de code en autodidacte. Je construis des sites modernes, rapides et
              soignés — sans le tarif d'une agence.
            </p>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <div className="h-0.5 w-24 bg-foreground" />
              <span className="font-mono text-xs tracking-tighter uppercase">
                France / Freelance / Disponible
              </span>
            </div>
          </div>
        </section>

        <section id="projets" className="mb-32 grid grid-cols-12 gap-6 md:mb-40">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className={`col-span-12 ${p.span} ${p.offset}`}>
              <article className="group">
                <div className={`${p.ratio} mb-4 overflow-hidden bg-muted`}>
                  <img
                    src={p.img}
                    alt={`Aperçu du projet ${p.title}`}
                    loading="lazy"
                    className="size-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                  />
                </div>
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <span className="border border-foreground px-2 py-0.5 font-mono text-[10px] uppercase">
                      {p.tech}
                    </span>
                    <h3 className="mt-2 font-serif text-3xl md:text-4xl">{p.title}</h3>
                    <p className="mt-1 max-w-sm text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                  <span className="text-4xl transition-transform group-hover:translate-x-2">→</span>
                </div>
              </article>
            </Reveal>
          ))}
        </section>

        <section
          id="expertise"
          className="mb-32 flex flex-col gap-16 border-t border-foreground pt-16 md:mb-40 md:flex-row md:gap-20 md:pt-20"
        >
          <Reveal className="flex-1">
            <h2 className="mb-10 text-xs font-bold tracking-[0.2em] uppercase">Stack technique</h2>
            <ul className="space-y-3">
              {stack.map((s, i) => (
                <li
                  key={s}
                  className={`cursor-default font-serif text-4xl transition-all hover:pl-6 hover:italic md:text-6xl ${
                    i === 2 ? "text-brand" : ""
                  }`}
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="flex flex-1 flex-col justify-end" delay={120}>
            <div className="bg-foreground p-8 text-background">
              <h3 className="mb-4 font-bold">Pourquoi moi ?</h3>
              <p className="font-mono text-sm leading-relaxed opacity-80">
                À 16 ans, je ne traîne pas de vieilles habitudes. J'apprends vite, je réponds vite,
                et j'utilise les outils les plus récents pour livrer des sites qui se chargent en un
                éclair — à un tarif de débutant assumé.
              </p>
            </div>
          </Reveal>
        </section>

        <section id="tarifs" className="mb-32">
          <Reveal className="mb-10">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase">Tarifs junior</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline md:grid-cols-3">
            {offers.map((o) => (
              <div key={o.name} className="group relative overflow-hidden bg-background p-10">
                {o.featured && (
                  <div className="absolute inset-0 translate-y-full bg-brand transition-transform duration-500 group-hover:translate-y-0" />
                )}
                <div
                  className={`relative z-10 ${o.featured ? "transition-colors group-hover:text-background" : ""}`}
                >
                  <h3 className="mb-8 text-xs font-bold uppercase">{o.name}</h3>
                  <p className="mb-4 font-serif text-5xl">
                    {o.price}
                    <span className="ml-1 text-sm">{o.unit}</span>
                  </p>
                  <p className="mb-8 font-mono text-sm opacity-60">{o.desc}</p>
                  <a
                    href="mailto:hello@martin.dev"
                    className={`block w-full py-4 text-center text-xs font-bold tracking-widest uppercase transition-colors ${
                      o.featured
                        ? "bg-brand text-background group-hover:bg-background group-hover:text-foreground"
                        : "border border-foreground hover:bg-foreground hover:text-background"
                    }`}
                  >
                    Choisir
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-foreground pt-16">
          <Reveal>
            <h2 className="mb-8 font-serif text-5xl leading-[0.9] md:text-8xl">
              On construit <span className="text-brand italic">quelque chose</span> ?
            </h2>
            <a
              href="mailto:hello@martin.dev"
              className="inline-flex items-center gap-3 font-mono text-lg tracking-tight text-brand underline underline-offset-8 transition-opacity hover:opacity-70 md:text-2xl"
            >
              hello@martin.dev →
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-between gap-4 border-t border-hairline p-6 font-mono text-[10px] tracking-widest uppercase opacity-50 md:flex-row">
        <span>Martin © 2026 — France</span>
        <span>Github / Twitter / Read.cv</span>
      </footer>
    </div>
  );
}
