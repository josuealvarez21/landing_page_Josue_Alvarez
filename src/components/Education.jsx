import { Award, Calendar, GraduationCap } from 'lucide-react'
import { certifications, education } from '../data/portfolio'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="formacion" className="relative py-24 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/20 to-transparent" />

      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">04 — Formación</span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Aprender haciendo, con base formal.
          </h2>
          <p className="mt-4 max-w-xl text-zinc-400">
            Formación técnica en el SENA y certificaciones enfocadas en las habilidades que uso
            todos los días.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <ol className="relative space-y-8 border-l border-white/10 pl-7">
              {education.map((item, index) => (
                <Reveal key={item.title} delay={index * 90} as="li">
                  <div className="relative">
                    <span
                      className={`absolute -left-[35px] top-1 grid h-5 w-5 place-items-center rounded-full border ${
                        item.current
                          ? 'border-accent-400/50 bg-accent-400/20 text-accent-300'
                          : 'border-white/15 bg-ink-900 text-zinc-500'
                      }`}
                    >
                      <GraduationCap size={11} aria-hidden="true" />
                    </span>

                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-base font-semibold text-zinc-100">
                        {item.title}
                      </h3>
                      {item.current && (
                        <span className="rounded-full border border-accent-400/30 bg-accent-400/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent-300">
                          En curso
                        </span>
                      )}
                    </div>

                    <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-400">
                      <span className="text-accent-300/90">{item.org}</span>
                      <span className="text-zinc-700">·</span>
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-zinc-500">
                        <Calendar size={11} aria-hidden="true" />
                        {item.period}
                      </span>
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              Certificaciones
            </p>
            <div className="mt-4 space-y-3">
              {certifications.map((cert, index) => (
                <Reveal key={cert.title} delay={100 + index * 80}>
                  <article className="card card-hover flex items-center gap-4 p-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent-400/20 bg-accent-400/10 text-accent-300">
                      <Award size={15} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-medium text-zinc-200">{cert.title}</h3>
                      <p className="mt-0.5 font-mono text-[11px] text-zinc-500">{cert.org}</p>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-600">{cert.year}</span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
