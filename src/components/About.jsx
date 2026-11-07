import './About.css'

const offers = [
  {
    img: '/images/propos/calcul-dimensionnement.jpg',
    title: 'Calcul & dimensionnement',
    desc: 'Résistance des matériaux, choix des matériaux, normes de conception',
  },
  {
    img: '/images/propos/conception-3d.jpg',
    title: 'Conception 3D',
    desc: 'Modélisation de pièces et d’assemblages sur SolidWorks',
  },
  {
    img: '/images/propos/simulation.jpg',
    title: 'Simulation',
    desc: 'Analyse par éléments finis pour valider les pièces',
  },
  {
    img: '/images/propos/mise-en-plan.jpg',
    title: 'Mise en plan',
    desc: 'Plans de définition cotés, tolérancement et nomenclature',
  },
]

function About() {
  return (
    <section id="about" className="about-bg">
      <div className="section">
        <p className="label about-label">À propos</p>
        <h2 className="about-title">
          Ingénieure passionnée
          <br />
          par la <span className="glow">conception</span>
        </h2>

        <p className="about-lead">
          Étudiante en Master 2 Mécatronique à l’École Supérieure Polytechnique
          d’Antsiranana, je travaille en parallèle comme ingénieure freelance.
          Mes dossiers couvrent le dimensionnement, la modélisation, la
          simulation par éléments finis et les plans de définition.
        </p>
        <p className="about-lead">
          Je collabore en français, à distance, avec des bureaux d’étude et des
          porteurs de projets.
        </p>

        <div className="offers">
          {offers.map((o) => (
            <div className="card offer" key={o.title}>
              <img src={o.img} alt={o.title} />
              <div className="offer-body">
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About