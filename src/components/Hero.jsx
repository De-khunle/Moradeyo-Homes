import { areas, types } from '../data'

function Hero({ filters }) {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div>
          <h1>Find the right property, and the people to close it properly.</h1>
          <p>
            We help you buy, sell, rent and manage houses, land and commercial
            space in four growing neighbourhoods. Every listing is inspected
            and every title is checked.
          </p>
          <a href="#properties" className="button">Browse properties</a>
          <a href="#services" className="button button-outline">What we do</a>
        </div>

        <div className="search-box">
          <h3>Search properties</h3>

          <div className="toggle">
            <button
              className={filters.mode === 'Buy' ? 'active' : ''}
              onClick={() => filters.setMode('Buy')}
            >
              Buy
            </button>
            <button
              className={filters.mode === 'Rent' ? 'active' : ''}
              onClick={() => filters.setMode('Rent')}
            >
              Rent
            </button>
          </div>

          <label>Location</label>
          <select value={filters.area} onChange={(e) => filters.setArea(e.target.value)}>
            <option value="All">All locations</option>
            {areas.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>

          <label>Property type</label>
          <select value={filters.type} onChange={(e) => filters.setType(e.target.value)}>
            <option value="All">All types</option>
            {types.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <a href="#properties" className="button button-full">Show properties</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
