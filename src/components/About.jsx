import { Code2, Database, GraduationCap, Sparkles } from 'lucide-react'
import { aboutCards, profile, softSkills } from '../data/portfolio'
import Reveal from './Reveal'

const icons = {
  database: Database,
  cap: GraduationCap,
  sparkles: Sparkles,
  code: Code2,
}

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 md:py-28">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">01 — Sobre mí</span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Más que código: criterio para resolver.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal delay={80}>
            <p className="text-pretty text-base leading-relaxed text-zinc-300 md:text-lg">
              {profile.summary}
            </p>
            <p className="mt-5 text-pretty text-base leading-relaxed text-zinc-400">
              {profile.summarySecondary}
            </p>

            <div className="mt-9">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Cómo trabajo
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="space-y-4">
            {aboutCards.map((card, index) => {
              const Icon = icons[card.icon] ?? Code2
              return (
                <Reveal key={card.title} delay={120 + index * 80}>
                  <article className="card card-hover flex gap-4 p-5">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent-400/20 bg-accent-400/10 text-accent-300">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-sm font-semibold text-zinc-100">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{card.text}</p>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
