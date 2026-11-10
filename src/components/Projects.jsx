import {
  ArrowUpRight,
  BarChart3,
  Database,
  ExternalLink,
  Github,
  LayoutTemplate,
  Lock,
  Search,
  Server,
  Sparkles,
  TrendingUp,
  Wallet,
} from 'lucide-react'
import { projects } from '../data/portfolio'
import Reveal from './Reveal'

const icons = {
  server: Server,
  database: Database,
  layout: LayoutTemplate,
  search: Search,
  chart: BarChart3,
  wallet: Wallet,
}

const secondaryIcons = {
  'carga-documentos': Search,
  'bot-ventas': BarChart3,
  'invest-holdings': LayoutTemplate,
}

function CapiMockup() {
  const bars = [42, 68, 35, 82, 56, 94, 61]

  return (
    <div className="relative">
      <div
        className="absolute -inset-6 rounded-3xl bg-accent-500/10 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-2xl border border-accent-400/20 bg-ink-950/90 shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-amber-400/70" />
          <span className="h-2 w-2 rounded-full bg-accent-400/80" />
          <span className="ml-3 truncate rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-zinc-500">
            capi-front-ten.vercel.app
          </span>
        </div>

        <div className="space-y-4 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                Balance total
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-zinc-50">$ 4.850.000</p>
              <p className="mt-0.5 inline-flex items-center gap-1 font-mono text-[10px] text-accent-400">
                <TrendingUp size={11} aria-hidden="true" /> +12.4% este mes
              </p>
            </div>
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent-400/25 bg-accent-400/10 text-accent-300">
              <Wallet size={15} aria-hidden="true" />
            </span>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium text-zinc-400">Gastos por categoría</p>
              <p className="font-mono text-[10px] text-zinc-600">Últimos 7 días</p>
            </div>
            <div className="mt-3 flex h-20 items-end gap-2" aria-hidden="true">
              {bars.map((height, index) => (
                <div key={index} className="flex-1">
                  <div
                    className={`w-full rounded-t-md ${
                      index === 5
                        ? 'bg-gradient-to-t from-accent-600 to-accent-300'
                        : 'bg-gradient-to-t from-accent-600/40 to-accent-400/50'
                    }`}
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {[
              { name: 'Mercado', value: '− $ 86.400', tag: 'Gasto' },
              { name: 'Salario', value: '+ $ 1.950.000', tag: 'Ingreso' },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-400/70" />
                  <span className="text-[11px] text-zinc-300">{item.name}</span>
                  <span className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono text-[9px] text-zinc-500">
                    {item.tag}
                  </span>
                </div>
                <span
                  className={`font-mono text-[11px] ${
                    item.value.startsWith('+') ? 'text-accent-400' : 'text-zinc-400'
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -right-2 flex items-center gap-2 rounded-xl border border-accent-400/25 bg-ink-900/95 px-3 py-2 shadow-xl backdrop-blur">
        <Sparkles size={13} className="text-accent-300" aria-hidden="true" />
        <span className="font-mono text-[10px] text-zinc-300">CapiBot · Gemini</span>
      </div>
    </div>
  )
}

export default function Projects() {
  const featured = projects.find((project) => project.featured)
  const secondary = projects.filter((project) => !project.featured)

  return (
    <section id="proyectos" className="relative py-24 md:py-28">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">03 — Proyectos</span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Trabajo real, desplegado y en equipo.
          </h2>
          <p className="mt-4 max-w-xl text-zinc-400">
            Una selección de lo más representativo: un producto completo, automatización con Python
            y experiencia construyendo interfaces.
          </p>
        </Reveal>

        {/* Proyecto destacado */}
        <Reveal delay={100} className="mt-12">
          <article className="card overflow-hidden border-accent-400/25">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-400/30 bg-accent-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-300">
                    <Sparkles size={11} aria-hidden="true" /> Proyecto destacado
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">{featured.year}</span>
                  <span className="font-mono text-[10px] text-zinc-600">·</span>
                  <span className="font-mono text-[10px] text-zinc-500">{featured.role}</span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold text-zinc-50 md:text-3xl">
                  {featured.name}
                </h3>
                <p className="mt-1.5 font-display text-sm text-accent-300">{featured.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">{featured.description}</p>

                <div className="mt-6 space-y-3">
                  {featured.modules.map((module) => {
                    const Icon = icons[module.icon] ?? Server
                    return (
                      <div key={module.name} className="flex gap-3">
                        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-accent-400/20 bg-accent-400/10 text-accent-300">
                          <Icon size={13} aria-hidden="true" />
                        </span>
                        <div>
                          <p className="font-mono text-xs font-medium text-zinc-200">
                            {module.name}
                          </p>
                          <p className="mt-0.5 text-[13px] leading-relaxed text-zinc-500">
                            {module.text}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {featured.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={featured.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl bg-accent-400 px-4 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-accent-300"
                  >
                    Ver demo en vivo
                    <ExternalLink
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                  {featured.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs font-medium text-zinc-300 transition hover:border-accent-400/30 hover:text-white"
                    >
                      <Github size={14} aria-hidden="true" />
                      {link.label}
                    </a>
                  ))}
                </div>

                <p className="mt-5 text-xs leading-relaxed text-zinc-600">{featured.note}</p>
              </div>

              <div className="flex items-center border-t border-white/[0.06] bg-ink-950/40 p-5 md:p-7 lg:border-l lg:border-t-0">
                <div className="w-full">
                  <CapiMockup />
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Proyectos secundarios */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {secondary.map((project, index) => {
            const Icon = secondaryIcons[project.slug] ?? LayoutTemplate
            return (
              <Reveal key={project.slug} delay={index * 90}>
                <article className="card card-hover flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-300">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[10px] text-zinc-600">{project.year}</span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-semibold text-zinc-50">
                    {project.name}
                  </h3>
                  <p className="mt-1 font-display text-xs text-accent-300/90">{project.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-5">
                    {project.links.length > 0 ? (
                      project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 transition hover:text-accent-300"
                        >
                          <Github size={14} aria-hidden="true" />
                          {link.label}
                          <ArrowUpRight
                            size={13}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </a>
                      ))
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5 text-[11px] text-zinc-500">
                        <Lock size={12} aria-hidden="true" />
                        {project.badge}
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 flex items-start gap-2 text-xs leading-relaxed text-zinc-600">
            <Lock size={13} className="mt-0.5 shrink-0" aria-hidden="true" />
            Algunos repositorios son privados por tratarse de proyectos personales o
            colaboraciones. Puedo mostrar el código y explicar las decisiones técnicas en una
            entrevista.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
