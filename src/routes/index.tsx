import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hemanth Bethi — Video Editor & Motion Designer, Hyderabad" },
      {
        name: "description",
        content:
          "Portfolio of Hemanth Bethi, a Hyderabad-based video editor and motion designer crafting edits, motion graphics, color grading and sound design.",
      },
      { property: "og:title", content: "Hemanth Bethi — Video Editor & Motion Designer" },
      {
        property: "og:description",
        content:
          "Video editing, motion design, color grading and sound design portfolio 2026. Based in Hyderabad, working worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const works = [
  { img: work1, title: "Night Shift", tag: "Short Film · Edit + Grade", year: "2026" },
  { img: work2, title: "Pour Over", tag: "Product Commercial", year: "2025" },
  { img: work3, title: "City Pulse", tag: "Travel Reel", year: "2025" },
  { img: work4, title: "Liquid Gold", tag: "Motion Graphics", year: "2025" },
  { img: work5, title: "Golden Hour", tag: "Documentary", year: "2024" },
  { img: work6, title: "Amplify", tag: "Music Video", year: "2024" },
];

const skills = [
  {
    n: "01",
    title: "Video Editing",
    body: "Narrative pacing, rhythm and structure — from raw rushes to a final cut that holds attention.",
  },
  {
    n: "02",
    title: "Motion Design",
    body: "Titles, lower thirds, kinetic typography and animated brand systems built to move.",
  },
  {
    n: "03",
    title: "Color Grading",
    body: "Cinematic looks, shot matching and mood-driven grades that give every frame a signature.",
  },
  {
    n: "06",
    title: "Storytelling",
    body: "Scripting, storyboarding and shaping a message into something people actually finish watching.",
  },
];

const tools = [
  "Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Photoshop",
  "CapCut",
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="display text-xl tracking-wide">
            HB<span className="text-primary">.</span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-primary">
              Work
            </a>
            <a href="#skills" className="transition-colors hover:text-primary">
              Skills
            </a>
            <a href="#about" className="transition-colors hover:text-primary">
              About
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-primary px-4 py-1.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Let's talk
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="grain relative flex min-h-screen items-end overflow-hidden">
        <img
          src={heroBg}
          alt="Cinematic light trails"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-36">
          <p className="rise mb-6 text-sm uppercase tracking-[0.35em] text-primary">
            Portfolio · 2026
          </p>
          <h1 className="display rise text-[clamp(3rem,13vw,11rem)]">
            Hemanth
            <br />
            Bethi<span className="text-primary">.</span>
          </h1>
          <div className="rise mt-8 flex flex-col gap-6 border-t border-border pt-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-lg text-muted-foreground">
              Video editor & motion designer based in Hyderabad, India — cutting stories that
              feel cinematic, sharp and alive.
            </p>
            <div className="flex gap-10 text-sm uppercase tracking-widest text-muted-foreground">
              <div>
                <span className="display block text-3xl text-foreground">4+</span>
                Years editing
              </div>
              <div>
                <span className="display block text-3xl text-foreground">120+</span>
                Projects cut
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-secondary py-4">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <span key={k} className="display flex shrink-0 text-3xl md:text-5xl">
              {["Video Editing", "Motion Design", "Color Grading", "Sound Design", "VFX"].map(
                (t) => (
                  <span key={t} className="mx-6 flex items-center gap-6">
                    {t}
                    <span className="text-primary">✦</span>
                  </span>
                ),
              )}
            </span>
          ))}
        </div>
      </div>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <h2 className="display text-[clamp(2.5rem,7vw,6rem)]">Selected Work</h2>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            2024 — 2026
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {works.map((w, i) => (
            <article
              key={w.title}
              className={`group relative overflow-hidden rounded-sm border border-border bg-card ${
                i % 3 === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    ▶
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-between p-5">
                <div>
                  <h3 className="display text-2xl md:text-3xl">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.tag}</p>
                </div>
                <span className="text-sm text-primary">{w.year}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="display mb-12 text-[clamp(2.5rem,7vw,6rem)]">What I Do</h2>
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div
                key={s.n}
                className="group bg-background p-8 transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <span className="text-sm text-primary transition-colors group-hover:text-primary-foreground">
                  {s.n}
                </span>
                <h3 className="display mt-4 text-3xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Tools
            </p>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-5 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <h2 className="display text-[clamp(2.5rem,7vw,6rem)]">About</h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm <span className="text-foreground">Hemanth Bethi</span>, a video editor and
              motion designer working out of Hyderabad. I spend my days in the timeline —
              shaping raw footage into edits with rhythm, mood and a point of view.
            </p>
            <p>
              My work spans short films, brand commercials, social reels, music videos and
              documentary pieces. Whether it's a 15-second hook or a ten-minute story, the goal
              stays the same: keep people watching until the last frame.
            </p>
            <p className="text-foreground">
              Open to freelance projects, retainers and long-term collaborations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="grain border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-primary">
            Got a project?
          </p>
          <h2 className="display text-[clamp(2.5rem,10vw,8rem)]">Let's make it move</h2>
          <a
            href="mailto:hello@hemanthbethi.com"
            className="mt-10 inline-block border-b-2 border-primary pb-2 text-xl text-foreground transition-colors hover:text-primary md:text-3xl"
          >
            hello@hemanthbethi.com
          </a>
          <div className="mt-12 flex justify-center gap-8 text-sm uppercase tracking-widest text-muted-foreground">
            <a href="#" className="transition-colors hover:text-primary">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              YouTube
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs uppercase tracking-widest text-muted-foreground">
        Hemanth Bethi · Hyderabad, India · © 2026
      </footer>
    </main>
  );
}
