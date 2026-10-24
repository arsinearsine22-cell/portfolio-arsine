import { useState } from 'react'
import { projets } from '../data/projets'
import ProjetDetail from './ProjetDetail'
import './Projets.css'

function Projets() {
  const [ouvert, setOuvert] = useState(null)

  return (
    <section id="projets" className="projets-bg">
      <div className="section">
        <p className="label">// projets</p>
        <h2 className="title">
          Ce que
          <br />
          j’ai conçu
        </h2>

        <div className="projets-grid">
          {projets.map((p) => (
            <div
              className={p.detail ? 'card projet clickable' : 'card projet'}
              key={p.id}
              onClick={() => p.detail && setOuvert(p)}
            >
              <div className="projet-emoji">{p.emoji}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {p.detail && <p className="more">Voir le dossier complet →</p>}
            </div>
          ))}
        </div>
      </div>

      {ouvert && <ProjetDetail projet={ouvert} onClose={() => setOuvert(null)} />}
    </section>
  )
}

export default Projets