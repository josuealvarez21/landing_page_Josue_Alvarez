import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Github, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/portfolio'
import Reveal from './Reveal'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Si el navegador bloquea el portapapeles, el mailto sigue disponible.
    }
  }

  return (
    <section id="contacto" className="relative py-24 md:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent-400/20 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-7 md:p-12">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-accent-400/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="eyebrow">05 — Contacto</span>
                <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-white md:text-4xl">
                  ¿Buscas un practicante que también aporte en backend?
                </h2>
                <p className="mt-4 max-w-lg text-pretty leading-relaxed text-zinc-400">
                  Estoy listo para mi etapa productiva. Si tu equipo necesita a alguien con bases
                  sólidas en Python, APIs y bases de datos, hablemos.
                </p>

                <div className="mt-7 flex flex-col gap-2.5 text-sm">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex w-fit items-center gap-2.5 text-zinc-300 transition hover:text-accent-300"
                  >
                    <Mail size={16} className="text-accent-400/80" aria-hidden="true" />
                    {profile.email}
                  </a>
                  <a
                    href={`tel:${profile.phoneHref}`}
                    className="inline-flex w-fit items-center gap-2.5 text-zinc-300 transition hover:text-accent-300"
                  >
                    <Phone size={16} className="text-accent-400/80" aria-hidden="true" />
                    {profile.phone}
                  </a>
                  <span className="inline-flex items-center gap-2.5 text-zinc-500">
                    <MapPin size={16} className="text-accent-400/60" aria-hidden="true" />
                    {profile.location}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${profile.email}?subject=Etapa%20productiva%20SENA%20-%20Contacto`}
                  className="group inline-flex items-center justify-between gap-3 rounded-xl bg-accent-400 px-5 py-4 text-sm font-semibold text-ink-950 shadow-[0_16px_40px_-18px_rgba(52,211,153,0.8)] transition hover:bg-accent-300"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Mail size={17} aria-hidden="true" />
                    Escribirme un correo
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-zinc-200 transition hover:border-accent-400/30 hover:bg-white/[0.06]"
                >
                  <span className="inline-flex items-center gap-2.5">
                    {copied ? (
                      <Check size={17} className="text-accent-400" aria-hidden="true" />
                    ) : (
                      <Copy size={17} aria-hidden="true" />
                    )}
                    {copied ? 'Correo copiado' : 'Copiar correo'}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">Ctrl + C</span>
                </button>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-zinc-200 transition hover:border-accent-400/30 hover:bg-white/[0.06]"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Github size={17} aria-hidden="true" />
                    Ver mi GitHub
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">@{profile.githubUser}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
