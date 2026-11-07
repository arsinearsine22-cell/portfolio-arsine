import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './ProjetDetail.css'

const MIN = 1
const MAX = 8

function ProjetDetail({ projet, onClose }) {
  const [zoom, setZoom] = useState(null)
  const [nat, setNat] = useState(null)
  const [scale, setScale] = useState(1)
  const [dragging, setDragging] = useState(false)
  const boxRef = useRef(null)
  const anchor = useRef(null)
  const drag = useRef(null)
  const dragMoved = useRef(false)
  const d = projet.detail

  const openZoom = (src) => {
    setNat(null)
    setScale(src.includes('/plan-') ? 1.7 : 1)
    setZoom({ src })
  }

  const closeZoom = () => {
    setZoom(null)
    setNat(null)
  }

  const baseWidth = () => {
    if (!nat) return 0
    const fit = Math.min(
      (window.innerWidth * 0.96) / nat.w,
      (window.innerHeight * 0.92) / nat.h
    )
    return nat.w * fit
  }
  const width = Math.round(baseWidth() * scale)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (zoom) closeZoom()
      else onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [zoom, onClose])

  // Molette : zoom / dézoom
  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    const onWheel = (e) => {
      e.preventDefault()
      const img = box.querySelector('img')
      if (!img) return
      const r = img.getBoundingClientRect()
      anchor.current = {
        rx: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)),
        ry: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)),
        cx: e.clientX,
        cy: e.clientY,
      }
      setScale((s) =>
        Math.min(MAX, Math.max(MIN, s * (e.deltaY < 0 ? 1.15 : 1 / 1.15)))
      )
    }
    box.addEventListener('wheel', onWheel, { passive: false })
    return () => box.removeEventListener('wheel', onWheel)
  }, [zoom])

  // Garde le point visé sous la souris après le zoom
  useLayoutEffect(() => {
    const box = boxRef.current
    const a = anchor.current
    if (!box || !a) return
    const img = box.querySelector('img')
    if (!img) return
    const r = img.getBoundingClientRect()
    box.scrollLeft += r.left + a.rx * r.width - a.cx
    box.scrollTop += r.top + a.ry * r.height - a.cy
    anchor.current = null
  }, [scale])

  // Glisser pour déplacer l'image
  const onDown = (e) => {
    const box = boxRef.current
    drag.current = {
      x: e.clientX,
      y: e.clientY,
      sl: box.scrollLeft,
      st: box.scrollTop,
    }
    dragMoved.current = false
    setDragging(true)
    e.preventDefault()
  }
  const onMove = (e) => {
    const g = drag.current
    if (!g) return
    const dx = e.clientX - g.x
    const dy = e.clientY - g.y
    if (Math.abs(dx) + Math.abs(dy) > 3) dragMoved.current = true
    boxRef.current.scrollLeft = g.sl - dx
    boxRef.current.scrollTop = g.st - dy
  }
  const onUp = () => {
    drag.current = null
    setDragging(false)
  }

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
                    <img src={img.src} alt={img.caption} onClick={() => openZoom(img.src)} />
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
        <div
          ref={boxRef}
          className={dragging ? 'zoom dragging' : 'zoom'}
          onMouseMove={onMove}
          onMouseUp={onUp}
          onMouseLeave={onUp}
          onClick={(e) => {
            if (dragMoved.current) {
              dragMoved.current = false
              return
            }
            if (e.target === e.currentTarget) closeZoom()
          }}
        >
          <img
            src={zoom.src}
            alt=""
            draggable={false}
            style={{ width: width || undefined, opacity: nat ? 1 : 0 }}
            onLoad={(e) =>
              setNat({ w: e.target.naturalWidth, h: e.target.naturalHeight })
            }
            onMouseDown={onDown}
            onDoubleClick={() => setScale(1)}
          />
          <span className="zoom-hint">
            Molette : zoom ({Math.round(scale * 100)} %) · Glisser : déplacer · Double-clic : ajuster · Échap : fermer
          </span>
        </div>
      )}
    </div>
  )
}

export default ProjetDetail