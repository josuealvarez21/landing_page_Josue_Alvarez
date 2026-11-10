import { useEffect, useState } from 'react'
import { Github, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-accent-400/10 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-4 md:h-20">
        <a
          href="#inicio"
          className="group flex items-center gap-2.5"
          aria-label="Ir al inicio"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-accent-400/25 bg-accent-400/10 font-display text-sm font-extrabold text-accent-300 transition group-hover:bg-accent-400/20">
            JA
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-zinc-100">
            josué<span className="text-accent-400">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl border border-accent-400/20 bg-accent-400/5 px-3.5 py-2 text-sm font-medium text-accent-300 transition hover:border-accent-400/40 hover:bg-accent-400/10 sm:inline-flex"
          >
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-zinc-300 transition hover:bg-white/5 md:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-accent-400/10 bg-ink-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <nav className="section-shell flex flex-col gap-1 py-4" aria-label="Navegación móvil">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-lg border border-accent-400/20 bg-accent-400/5 px-3 py-2.5 text-sm text-accent-300"
          >
            <Github size={16} aria-hidden="true" /> Ver GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
