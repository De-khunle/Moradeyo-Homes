import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Properties from './components/Properties'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // The search box (Hero) and the property list (Properties) share these filters.
  const [mode, setMode] = useState('Buy')
  const [area, setArea] = useState('All')
  const [type, setType] = useState('All')

  const filters = { mode, area, type, setMode, setArea, setType }

  return (
    <div>
      <Navbar />
      <Hero filters={filters} />
      <Services />
      <Properties filters={filters} />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
