import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Stack from './components/Stack'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
