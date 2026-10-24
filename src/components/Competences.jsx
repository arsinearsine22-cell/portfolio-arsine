import './Competences.css'

const categories = [
  {
    title: 'Conception & CAO',
    color: '#00d4ff',
    items: ['SolidWorks', 'CATIA', 'Fusion 360', 'AutoCAD'],
  },
  {
    title: 'Simulation',
    color: '#a78bfa',
    items: ['ANSYS', 'COMSOL', 'SolidWorks Simulation'],
  },
  {
    title: 'Calcul & automatique',
    color: '#34d399',
    items: ['MATLAB/Simulink', 'LabVIEW', 'Python'],
  },
  {
    title: 'Mécatronique',
    color: '#fb923c',
    items: ['Arduino', 'Cinématique', 'Dimensionnement'],
  },
]

function Competences() {
  return (
    <section id="skills" className="skills-bg">
      <div className="section">
        <p className="label">// compétences</p>
        <h2 className="title">
          Stack
          <br />
          technique
        </h2>

        <div className="skills-grid">
          {categories.map((c) => (
            <div className="card skill" key={c.title} style={{ '--c': c.color }}>
              <h3>{c.title}</h3>
              <div className="tags">
                {c.items.map((i) => (
                  <span className="tag" key={i}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Competences