import { steps } from '../data'

function Process() {
  return (
    <section id="process" className="section section-dark">
      <div className="container">
        <h2>How buying works with us</h2>

        <div className="grid">
          {steps.map((s, index) => (
            <div key={s.title} className="step">
              <span className="step-number">{index + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
