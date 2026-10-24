import './About.css'

const offers = [
  { icon: '🧮', title: 'Calcul & dimensionnement', desc: 'Résistance des matériaux, choix des matériaux, normes de conception' },
  { icon: '📐', title: 'Conception 3D', desc: 'Modélisation de pièces et d’assemblages sur SolidWorks' },
  { icon: '🔬', title: 'Simulation', desc: 'Analyse par éléments finis pour valider les pièces' },
  { icon: '📄', title: 'Mise en plan', desc: 'Plans de définition cotés, tolérancement et nomenclature' },
]

const infos = [
  { label: 'Localisation', value: 'Madagascar' },
  { label: 'Statut', value: 'Master 2 Mécatronique' },
  { label: 'Mode', value: 'Freelance · Stage' },
  { label: 'Langue', value: 'Français' },
]

function About() {
  return (
    <section id="about" className="about-bg">
      <div className="section about">
        <div>
          <p className="label">// à propos</p>
          <h2>
            Ingénieure passionnée
            <br />
            par la <span className="glow">conception</span>
          </h2>
          <p className="text">
            Étudiante en Master 2 Mécatronique à l’École Supérieure Polytechnique
            d’Antsiranana, je travaille en parallèle comme ingénieure freelance.
            Mes dossiers couvrent le dimensionnement, la modélisation, la
            simulation par éléments finis et les plans de définition.
          </p>
          <p className="text">
            Je collabore en français, à distance, avec des bureaux d’étude et des
            porteurs de projets.
          </p>

          <div className="infos">
            {infos.map((i) => (
              <div key={i.label}>
                <div className="info-label">{i.label}</div>
                <div className="info-value">{i.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="offers">
          {offers.map((o) => (
            <div className="card" key={o.title}>
              <div className="icon">{o.icon}</div>
              <h3>{o.title}</h3>
              <p>{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About