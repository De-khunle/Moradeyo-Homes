import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [topic, setTopic] = useState('Buying')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSend() {
    if (name === '' || contact === '') {
      alert('Please enter your name and a phone number or email.')
      return
    }
    // Later: send name, contact, topic and message to your backend here.
    setSent(true)
  }

  return (
    <section id="contact" className="section section-white">
      <div className="container contact-inner">
        <div>
          <h2>Tell us what you are looking for</h2>
          <p>An agent will reply within one working day.</p>
          <p><strong>Phone:</strong> +234 8129860114</p>
          <p><strong>Email:</strong> popoolahabeeb9@gmail.com</p>
          <p><strong>Hours:</strong> Monday to Saturday, 8:00 to 18:00</p>
        </div>

        {sent ? (
          <div className="thanks">
            <h3>Request sent</h3>
            <p>Thanks, {name}. We will contact you soon.</p>
          </div>
        ) : (
          <div className="form">
            <label>Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />

            <label>Phone or email</label>
            <input value={contact} onChange={(e) => setContact(e.target.value)} />

            <label>I am interested in</label>
            <select value={topic} onChange={(e) => setTopic(e.target.value)}>
              <option>Buying</option>
              <option>Selling</option>
              <option>Renting</option>
              <option>Property management</option>
              <option>Land and development</option>
              <option>Valuation</option>
            </select>

            <label>Details (optional)</label>
            <textarea rows="3" value={message} onChange={(e) => setMessage(e.target.value)} />

            <button className="button" onClick={handleSend}>Send request</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
