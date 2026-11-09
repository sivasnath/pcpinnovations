import { Link } from 'react-router-dom'
import { industries } from '../data/industries.js'
import { services } from '../data/services.js'
import { site } from '../data/site.js'
import useTitle from '../useTitle.js'

export default function Home() {
  useTitle('')
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow eyebrow--light">Kochi, Kerala · South India</p>
          <h1>We take ventures from idea to approval.</h1>
          <p className="hero__sub">
            Project reports, FPO management, startup support and government scheme assistance, organised by industry so you can go straight to what is relevant to you.
          </p>
          <div className="hero__cta">
            <a className="btn btn--light" href="#industries">Find your industry</a>
            <Link className="btn btn--ghost" to="/contact">Contact us</Link>
          </div>
        </div>
      </section>

      <section id="industries" className="wrap">
        <p className="eyebrow">Industries</p>
        <h2>Choose the sector you work in.</h2>
        <div className="grid">
          {industries.map((i) => (
            <Link key={i.slug} to={`/industries/${i.slug}`} className="tile" style={{ '--h': i.hue }}>
              <span className="tile__no">{i.case}</span>
              <h3>{i.name}</h3>
              <p>{i.tagline}</p>
              <span className="tile__go">View work →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="band band--soft">
        <div className="wrap">
          <p className="eyebrow">What we do</p>
          <h2>Four services, applied to every industry.</h2>
          <div className="cards">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="card card--link">
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="tile__go">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap two">
        <div>
          <p className="eyebrow">About</p>
          <h2>A professional platform for developing ventures.</h2>
        </div>
        <div className="prose">
          <p>{site.registration}. We help establishments and ventures grow in line with the needs of society, with dedicated professionals and the latest technology, in a cost-effective and timely manner.</p>
          <p><Link to="/about">Read more about us →</Link></p>
        </div>
      </section>
    </>
  )
}
