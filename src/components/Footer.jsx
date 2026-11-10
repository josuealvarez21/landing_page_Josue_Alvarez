import { ArrowUp, Github, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-400/25 bg-accent-400/10 font-display text-xs font-bold text-accent-300">
            JA
          </span>
          <div>
            <p className="text-xs font-medium text-zinc-300">{profile.shortName}</p>
            <p className="font-mono text-[10px] text-zinc-600">
              © {new Date().getFullYear()} · Hecho con React, Vite y Tailwind
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-accent-400/30 hover:text-accent-300"
            aria-label="GitHub de Josué Álvarez"
          >
            <Github size={15} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-accent-400/30 hover:text-accent-300"
            aria-label="Enviar correo a Josué Álvarez"
          >
            <Mail size={15} />
          </a>
          <a
            href="#inicio"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-accent-400/30 hover:text-accent-300"
            aria-label="Volver al inicio"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
