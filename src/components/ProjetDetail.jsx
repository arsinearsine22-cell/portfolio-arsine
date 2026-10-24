import { useEffect, useState } from 'react'
import './ProjetDetail.css'

function ProjetDetail({ projet, onClose }) {
  const [zoom, setZoom] = useState(null)
  const d = projet.detail

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (zoom) setZoom(null)
        else onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [zoom, onClose])

  return (
    <div className="detail">
      <div className="detail-inner">
        <div className="detail-bar">
          <span className="label">// projet</span>
          <button className="btn" onClick={onClose}>Fermer ✕</button>
        </div>

        <h2 className="detail-title">
          {projet.emoji} {projet.title}
        </h2>
        <p className="detail-text">{d.intro}</p>

        {d.kpis && (
          <div className="kpis">
            {d.kpis.map((k) => (
              <div key={k.label}>
                <b>{k.value}</b>
                <span>{k.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="tags">
          {projet.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>

        {d.sections.map((s) => (
          <div key={s.title}>
            <h3 className="detail-h3">{s.title}</h3>
            {s.text && <p className="detail-text">{s.text}</p>}

            {s.values && (
              <div className="vals">
                {s.values.map((v) => (
                  <div key={v.label}>
                    <b>{v.value}</b>
                    <span>{v.label}</span>
                  </div>
                ))}
              </div>
            )}

            {s.images && (
              <div className="imgs">
                {s.images.map((img) => (
                  <figure key={img.src}>
                    <img src={img.src} alt={img.caption} onClick={() => setZoom(img.src)} />
                    <figcaption>{img.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}

            {s.videos &&
              s.videos.map((v) => (
                <figure className={v.portrait ? 'video portrait' : 'video'} key={v.src}>
                  <video controls preload="metadata" playsInline src={v.src} />
                  <figcaption>{v.caption}</figcaption>
                </figure>
              ))}
          </div>
        ))}

        <div className="detail-cta">
          <p>Besoin d’une machine similaire conçue ?</p>
          <a className="btn primary" href="#contact" onClick={onClose}>
            Me contacter
          </a>
        </div>
      </div>

      {zoom && (
        <div className="zoom" onClick={() => setZoom(null)}>
          <img src={zoom} alt="" />
        </div>
      )}
    </div>
  )
}

export default ProjetDetail