import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { services } from '../data/services.js'
import useTitle from '../useTitle.js'

const list = [
  'Projects Preparation and Implementation',
  'Agri-sector Development and FPO Management',
  'Business Legal Framework',
  'Tax Management and Planning',
  'Business Deal Facilitation',
  'Analysis and Support for Business Resources',
  'Startup Businesses',
]

export default function About() {
  useTitle('About')
  return (
    <>
      <section className="wrap page-head">
        <p className="eyebrow">About us</p>
        <h1>A professional platform for developing ventures that society needs.</h1>
        <p className="lede">
          A professional platform registered under Indian Trust Act 1882 (Registration No: 161/2015), for developing establishments and ventures depending on the need of the existing society.
        </p>
      </section>
      <section className="wrap two">
        <div className="prose">
          <p>Based on the project, we develop the infrastructure and assets that are required to achieve our goals. We also conduct corporate events and business solutions to support industries and people, by giving awareness and opportunities for implementing each one’s ideas and dreams.</p>
          <p>Our operations are focused in South India with offices in Kaloor, Kochi, Kerala. We have dedicated professionals and experts for the accomplishment of each project with the latest technology in cost-effective and timely manner.</p>
          <p><Link className="btn" to="/contact">Talk to us</Link></p>
        </div>
        <div>
          <h2 className="h3">Our services</h2>
          <ul className="ticks">{list.map((l) => <li key={l}>{l}</li>)}</ul>
          <p className="muted">{site.registration}</p>
          <p className="muted">In depth: {services.map((s, i) => (
            <span key={s.slug}>{i ? ', ' : ''}<Link to={`/services/${s.slug}`}>{s.name}</Link></span>
          ))}</p>
        </div>
      </section>
    </>
  )
}
