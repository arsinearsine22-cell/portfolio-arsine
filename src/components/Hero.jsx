import { useState, useEffect } from 'react'
import './Hero.css'

const roles = [
  'Ingénieure en génie mécanique',
  'Spécialiste mécatronique',
  'Conception 3D & mise en plan',
  'Simulation par éléments finis',
]

function useTypewriter(words, speed = 80, pause = 1800) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let timer
    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      timer = setTimeout(() => {
        setDeleting(false)
        setIndex((i) => i + 1)
      }, 200)
    } else {
      const next = deleting
        ? word.slice(0, text.length - 1)
        : word.slice(0, text.length + 1)
      timer = setTimeout(() => setText(next), deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timer)
  }, [text, deleting, index, words, speed, pause])

  return text
}

function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="badge">
          <span className="dot"></span>
          DISPONIBLE — FREELANCE · CDI · CDD
        </div>

        <img
          className="photo"
          src="/photo.jpg"
          alt="Arsine"
          onError={(e) => (e.target.style.display = 'none')}
        />

        <h1>
          Arsine
          <br />
          <span className="glow">Ingénierie mécanique</span>
        </h1>
          <a className="hero-mail" href="mailto:arsinearsine22@gmail.com">
          arsinearsine22@gmail.com
          </a>
        <div className="typing">
          <b>›</b> <span>{typed}</span>
          <span className="cursor"></span>
        </div>

        <p className="lead">
          Ingénieure en génie mécanique, spécialisée en mécatronique. Calcul et
          dimensionnement, conception 3D, simulation et mise en plan, du cahier
          des charges au dossier de fabrication.
        </p>

        <div className="actions">
          <a className="btn primary" href="#projets">Voir mes projets →</a>
          <a className="btn" href="#contact">Me contacter</a>
                    <a className="btn" href="/cv-arsine.pdf" download="CV-Arsine.pdf">
            Télécharger mon CV ↓
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero