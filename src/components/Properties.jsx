import { areas, types, properties } from '../data'
import PropertyCard from './PropertyCard'

function Properties({ filters }) {
  // Keep only the properties that match the chosen filters
  const shown = properties.filter((p) => {
    const modeMatch = p.mode === filters.mode
    const areaMatch = filters.area === 'All' || p.area === filters.area
    const typeMatch = filters.type === 'All' || p.type === filters.type
    return modeMatch && areaMatch && typeMatch
  })

  function clearFilters() {
    filters.setArea('All')
    filters.setType('All')
  }

  return (
    <section id="properties" className="section">
      <div className="container">
        <h2>Properties available now</h2>
        <p className="section-intro">
          Showing properties {filters.mode === 'Buy' ? 'for sale' : 'to rent'}.
          Use the buttons to change the area or type.
        </p>

        <div className="pills">
          <button
            className={filters.area === 'All' ? 'pill active' : 'pill'}
            onClick={() => filters.setArea('All')}
          >
            All locations
          </button>
          {areas.map((a) => (
            <button
              key={a}
              className={filters.area === a ? 'pill active' : 'pill'}
              onClick={() => filters.setArea(a)}
            >
              {a}
            </button>
          ))}
        </div>

        <div className="pills">
          <button
            className={filters.type === 'All' ? 'pill active' : 'pill'}
            onClick={() => filters.setType('All')}
          >
            All types
          </button>
          {types.map((t) => (
            <button
              key={t}
              className={filters.type === t ? 'pill active' : 'pill'}
              onClick={() => filters.setType(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <button
          className="link-button"
          onClick={() => filters.setMode(filters.mode === 'Buy' ? 'Rent' : 'Buy')}
        >
          Switch to {filters.mode === 'Buy' ? 'rentals' : 'sales'}
        </button>

        {shown.length > 0 ? (
          <div className="grid">
            {shown.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h3>No properties match these filters</h3>
            <p>Try another location or type.</p>
            <button className="button" onClick={clearFilters}>Clear filters</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Properties
