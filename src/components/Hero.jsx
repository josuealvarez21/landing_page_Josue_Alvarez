import { ArrowRight, Github, Mail, MapPin, Terminal } from 'lucide-react'
import { profile, stats } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="glow pointer-events-none absolute -top-48 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Texto */}
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-accent-400/20 bg-accent-400/[0.06] px-3.5 py-1.5">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              <span className="font-mono text-xs text-accent-300">{profile.availability}</span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Josué Daniel
              <br />
              <span className="bg-gradient-to-r from-accent-200 via-accent-400 to-accent-600 bg-clip-text text-transparent">
                Álvarez Alba
              </span>
            </h1>

            <p className="mt-5 font-display text-xl font-semibold text-zinc-100 sm:text-2xl">
              {profile.role}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-zinc-400">
              <span className="text-accent-400/90">{profile.focus}</span>
            </div>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
              {profile.headline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#proyectos"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent-400 px-5 py-3 text-sm font-semibold text-ink-950 shadow-[0_10px_30px_-12px_rgba(52,211,153,0.65)] transition hover:bg-accent-300"
              >
                Ver proyectos
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-accent-400/30 hover:bg-white/[0.06]"
              >
                <Mail size={16} aria-hidden="true" />
                Contactarme
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-2 py-3 text-sm text-zinc-400 transition hover:text-accent-300"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
              <MapPin size={15} className="text-accent-400/70" aria-hidden="true" />
              {profile.location}
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/[0.06] pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-bold text-zinc-50">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-zinc-500">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Foto */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div
              className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-tr from-accent-500/20 via-transparent to-accent-300/10 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-accent-400/20 bg-ink-900 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={profile.photo}
                  alt={`Retrato de ${profile.name}`}
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-display text-lg font-bold text-white">{profile.shortName}</p>
                  <p className="mt-0.5 font-mono text-xs text-accent-300">{profile.role}</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-5 hidden rounded-xl border border-accent-400/25 bg-ink-900/95 px-3.5 py-2.5 shadow-xl backdrop-blur sm:block">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-400">
                Enfoque
              </p>
              <p className="mt-0.5 text-sm font-semibold text-zinc-100">Backend & Datos</p>
            </div>

            <div className="animate-float absolute -bottom-6 -right-2 hidden w-56 rounded-xl border border-white/10 bg-ink-900/95 p-3.5 shadow-2xl backdrop-blur sm:block lg:-right-6">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                <span className="h-2 w-2 rounded-full bg-accent-400/80" />
                <Terminal size={12} className="ml-auto text-zinc-600" aria-hidden="true" />
              </div>
              <pre className="font-mono text-[11px] leading-relaxed text-zinc-400">
                <span className="text-accent-400">const</span> perfil = {'{'}
                {'\n'}  stack: <span className="text-accent-300">'full stack'</span>,
                {'\n'}  fuerte: <span className="text-accent-300">'backend'</span>,
                {'\n'}  estado: <span className="text-accent-300">'disponible'</span>
                {'\n'}
                {'}'}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
