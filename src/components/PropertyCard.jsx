import { icons } from '../data'

function PropertyCard({ property }) {
  const p = property

  // Rentals show "per month" after the price
  const price = '#' + p.price.toLocaleString() + (p.mode === 'Rent' ? ' / month' : '')

  const details = []
  if (p.beds > 0) details.push(p.beds + ' bed')
  if (p.baths > 0) details.push(p.baths + ' toilets')
  details.push(p.size)

  return (
    <div className="card">
      <div className="card-image">
        <span className="card-icon">{icons[p.type]}</span>
        <span className="badge">For {p.mode === 'Buy' ? 'sale' : 'rent'}</span>
      </div>
      <div className="card-body">
        <p className="card-meta">{p.type} in {p.area}</p>
        <h3>{p.title}</h3>
        <p className="card-meta">{details.join(', ')}. {p.note}.</p>
        <div className="card-footer">
          <strong>{price}</strong>
          <a href="#contact">Book a viewing</a>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
