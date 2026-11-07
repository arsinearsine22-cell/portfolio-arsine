import './Parcours.css'

const steps = [
  {
    icon: '🎓',
    title: 'Master 2 Mécatronique',
    place: 'École Supérieure Polytechnique d’Antsiranana',
    date: 'En cours',
    desc: 'Mécanique, mécatronique, mécanique industrielle et science des matériaux.',
  },
  {
    icon: '🎓',
    title: 'Licence',
    place: 'École Supérieure Polytechnique d’Antsiranana',
    date: '2024',
        desc: 'Dimensionnement, conception et réalisation d’une machine.',
  },
]

function Parcours() {
  return (
    <section id="parcours" className="parcours-bg">
      <div className="section">
       <p className="label about-label">Parcours</p>
        <h2 className="title">
          Formation 
        </h2>

        <div className="timeline">
          {steps.map((s) => (
            <div className="step" key={s.title + s.date}>
              <div className="card step-card">
                <div>
                  <h3>
                    {s.icon} {s.title}
                  </h3>
                  <p className="place">{s.place}</p>
                  {s.desc && <p className="desc">{s.desc}</p>}
                </div>
                <div className="date">{s.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Parcours