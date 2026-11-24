function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="logo">Moradeyo Homes</a>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#properties">Properties</a>
          <a href="#process">Process</a>
          <a href="#reviews">Reviews</a>
        </nav>
        <a href="#contact" className="button">Contact us</a>
      </div>
    </header>
  )
}

export default Navbar
