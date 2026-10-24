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
    icon: '⚙️',
    title: 'Ingénieure freelance',
    place: 'ARSINE Engineering',
    date: 'En cours',
    desc: 'Études mécaniques, modélisation et dossiers de plans pour bureaux d’étude et clients francophones.',
  },
  {
    icon: '🎓',
    title: 'Licence',
    place: 'École Supérieure Polytechnique d’Antsiranana',
    date: '2024',
    desc: 'Projet de licence : machine à granulés pour volailles.',
  },
  {
    icon: '📘',
    title: 'Baccalauréat',
    place: 'Lycée Public Mananara Nord',
    date: '2019',
    desc: '',
  },
]

function Parcours() {
  return (
    <section id="parcours">
      <div className="section">
        <p className="label">// parcours</p>
        <h2 className="title">
          Formation &amp;
          <br />
          expérience
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