import { LayoutTemplate, Server, Wrench } from 'lucide-react'
import { stack } from '../data/portfolio'
import Reveal from './Reveal'

const icons = {
  server: Server,
  layout: LayoutTemplate,
  tools: Wrench,
}

export default function Stack() {
  return (
    <section id="stack" className="relative py-24 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/20 to-transparent" />

      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">02 — Stack técnico</span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Herramientas con las que construyo.
          </h2>
          <p className="mt-4 max-w-xl text-zinc-400">
            Un stack versátil para entregar de extremo a extremo, con el backend y los datos como
            centro de gravedad.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stack.map((group, index) => {
            const Icon = icons[group.icon] ?? Server
            return (
              <Reveal key={group.title} delay={index * 90}>
                <article
                  className={`card card-hover flex h-full flex-col p-6 ${
                    group.highlight
                      ? 'border-accent-400/30 bg-gradient-to-b from-accent-400/[0.08] to-ink-900/80'
                      : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-xl border ${
                        group.highlight
                          ? 'border-accent-400/40 bg-accent-400/15 text-accent-300'
                          : 'border-white/10 bg-white/[0.04] text-zinc-400'
                      }`}
                    >
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    {group.tag && (
                      <span
                        className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
                          group.highlight
                            ? 'border border-accent-400/30 bg-accent-400/10 text-accent-300'
                            : 'border border-white/10 bg-white/[0.03] text-zinc-500'
                        }`}
                      >
                        {group.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold text-zinc-50">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{group.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
