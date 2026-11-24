import { services } from '../data'

function Services() {
  return (
    <section id="services" className="section section-white">
      <div className="container">
        <h2>What we do</h2>
        <p className="section-intro">
          Use one service or all of them together, from your first home to a
          full property portfolio.
        </p>

        <div className="grid">
          {services.map((s) => (
            <div key={s.title} className="service">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
