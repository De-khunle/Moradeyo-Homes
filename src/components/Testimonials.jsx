import { reviews } from '../data'

function Testimonials() {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <h2>What our clients say</h2>

        <div className="grid">
          {reviews.map((r) => (
            <div key={r.name} className="review">
              <div className="stars">★★★★★</div>
              <p>“{r.text}”</p>
              <strong>{r.name}</strong>
              <span>{r.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
