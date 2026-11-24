// business properties 

import fourBed from './assets/images/4-bed.jpeg'
import threeBed from './assets/images/3-bed.jpeg'
import twoAcre from './assets/images/2-acre.jpeg'
import plot from './assets/images/serviced-plot.jpeg'
import office from './assets/images/open-office.jpeg'
import waterfront from './assets/images/water-front.jpeg'



export const areas = ['Lagos', 'Abuja', 'Ibadan', 'Ilorin']

export const types = ['House', 'Apartment', 'Land', 'Commercial', 'Office', 'Plot', 'Water']

export const properties = [
  { id: 1, title: 'Four-bedroom detached duplex', area: 'Lagos', type: 'House', mode: 'Buy', price: 180000000, beds: 4, baths: 5, size: '350 sqm', note: 'Boys quarters, generator and borehole' },
  { id: 2, title: 'Waterfront two-bedroom flat', area: 'Lagos', type: 'Water', mode: 'Rent', price: 8000000, beds: 2, baths: 3, size: '110 sqm', note: 'Estate with 24-hour security' },
  { id: 3, title: 'Serviced plot', area: 'Abuja', type: 'Plot', mode: 'Buy', price: 25000000, beds: 0, baths: 0, size: '600 sqm', note: 'C of O and road access' },
  // { id: 4, title: 'Ground-floor shop', area: 'Abuja', type: 'Commercial', mode: 'Rent', price: 8000000, beds: 0, baths: 1, size: '140 sqm', note: 'High foot traffic' },
  { id: 5, title: 'Three-bedroom hillside duplex', area: 'Ibadan', type: 'Apartment', mode: 'Buy', price: 75000000, beds: 3, baths: 4, size: '300 sqm', note: 'Solar power and borehole' },
  // { id: 6, title: 'Self-contained apartment', area: 'Ibadan', type: 'Apartment', mode: 'Rent', price: 800000, beds: 1, baths: 1, size: '35 sqm', note: 'Tiled with prepaid meter' },
  { id: 7, title: 'Two-acre development land', area: 'Ilorin', type: 'Land', mode: 'Buy', price: 40000000, beds: 0, baths: 0, size: '2 acres', note: 'Survey and C of O' },
  { id: 8, title: 'Three-bedroom Duplex', area: 'Ilorin', type: 'House', mode: 'Rent', price: 1800000, beds: 3, baths: 3, size: '165 sqm', note: 'Fenced compound and borehole' },
  { id: 9, title: 'Open-plan office floor', area: 'Lagos', type: 'Office', mode: 'Buy', price: 650000000, beds: 0, baths: 4, size: '410 sqm', note: 'Lift and standby generator' },
]

// export const icons = { House: '🏠', Apartment: '🏢', Land: '🌳', Commercial: '🏬' } 
export const icons = {
  House: fourBed,
  Apartment: threeBed,
  Land: twoAcre,
  Commercial: office,
  Office: office,
  Plot: plot,
  Water: waterfront,

}

export const services = [
  { title: 'Buying', text: 'We shortlist homes that fit your budget, check the ownership papers and help you negotiate.' },
  { title: 'Selling', text: 'Good photos, honest pricing based on recent sales, and viewings handled by our team.' },
  { title: 'Renting', text: 'Trusted tenants for landlords and verified homes for renters, with clear lease terms.' },
  { title: 'Property management', text: 'Rent collection, repairs and monthly reports for owners who live elsewhere.' },
  { title: 'Land and development', text: 'Surveyed plots, title searches and projects with trusted builders.' },
  { title: 'Valuation and advice', text: 'Written valuations for sales, loans and investment decisions.' },
]

export const steps = [
  { title: 'Tell us what you need', text: 'Share your budget, areas and timeline in a short call or form.' },
  { title: 'See matched properties', text: 'We send a shortlist and book viewings that suit your schedule.' },
  { title: 'We check the paperwork', text: 'We verify titles, surveys and permits before you commit.' },
  { title: 'Close and move in', text: 'We coordinate payment, signing and handover.' },
]

export const reviews = [
  { name: 'Amara O.', role: 'Bought a house in Lagos', text: 'They found three homes in our budget and spotted a title problem on the first one we liked. We moved in with no surprises.' },
  { name: 'Daniel K.', role: 'Landlord in Ibadan', text: 'Rent arrives on the same day every month and I get a clear statement. I have not had to chase a tenant in two years.' },
  { name: 'Funmi A.', role: 'Sold a plot in Abuja', text: 'The valuation was fair, the buyer was serious and the sale took five weeks. Everything was explained in plain language.' },
]
 



