import { useState } from 'react'
import './Contact.css'

const EMAIL = 'arsinearsine22@gmail.com'

function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' })

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const envoyer = (e) => {
    e.preventDefault()
    const sujet = encodeURIComponent('Contact depuis le portfolio — ' + form.nom)
    const corps = encodeURIComponent(
      'Nom : ' + form.nom + '\nEmail : ' + form.email + '\n\n' + form.message
    )
    window.location.href = 'mailto:' + EMAIL + '?subject=' + sujet + '&body=' + corps
  }

  return (
    <section id="contact" className="contact-bg">
      <div className="section">
        <p className="label">// contact</p>
        <h2 className="title">
          Travaillons
          <br />
          ensemble
        </h2>

        <div className="contact-grid">
          <div>
            <p className="contact-text">
              Vous avez un besoin en calcul, conception 3D, simulation ou mise en
              plan ? Décrivez votre projet, je vous réponds rapidement.
            </p>
            <a className="card mail" href={'mailto:' + EMAIL}>
              <span className="mail-label">Email</span>
              <span className="mail-value">{EMAIL}</span>
            </a>
          </div>

          <form className="card form" onSubmit={envoyer}>
            <h3>Envoyer un message</h3>
            <input
              name="nom"
              required
              placeholder="Votre nom"
              value={form.nom}
              onChange={change}
            />
            <input
              name="email"
              type="email"
              required
              placeholder="votre@email.com"
              value={form.email}
              onChange={change}
            />
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Décrivez votre projet…"
              value={form.message}
              onChange={change}
            />
            <button type="submit" className="btn primary">
              Envoyer
            </button>
          </form>
        </div>
      </div>

      <footer className="footer">
        © 2026 Arsine · ARSINE Engineering · Ingénierie mécanique
      </footer>
    </section>
  )
}

export default Contact