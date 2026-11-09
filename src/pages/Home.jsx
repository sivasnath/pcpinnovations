import { Link } from 'react-router-dom'
import { industries } from '../data/industries.js'
import { services } from '../data/services.js'
import { site } from '../data/site.js'
import useTitle from '../useTitle.js'
import IndustryIcon from '../components/IndustryIcon.jsx'

// The method is a real sequence, so the stages are numbered.
const stages = [
  { name: 'Study', text: 'Market, location and demand study' },
  { name: 'Plan', text: 'Project report and financial model' },
  { name: 'Fund', text: 'Bank loan, subsidy and scheme applications' },
  { name: 'Implement', text: 'Licences, set-up and follow-through' },
]

export default function Home() {
  useTitle('')
  return (
    <>
      <section className="h-hero">
        <div className="wrap h-hero__grid">
          <div>
            <h1 className="h-hero__title" data-enter>
              Project reports, FPO management and scheme support for South India
            </h1>
            <p className="h-hero__sub" data-enter>
              We take ventures from idea to approval, for companies, farmer producer organisations and institutions in Kochi and across Kerala.
            </p>
            <div className="h-hero__cta">
              <Link className="btn btn--light" to="/contact">Send an enquiry</Link>
              <a className="btn btn--ghost" href="#industries">Find your industry</a>
            </div>
          </div>

          <aside className="file" aria-label="How a project moves with us">
            <p className="file__title">A typical project</p>
            <ol className="file__list">
              {stages.map((s, i) => (
                <li key={s.name} className="file__row" style={{ '--i': i }}>
                  <span className="file__n">{i + 1}</span>
                  <span>
                    <strong>{s.name}</strong>
                    <span className="file__t">{s.text}</span>
                  </span>
                </li>
              ))}
            </ol>
            <span className="file__bar" aria-hidden="true" />
          </aside>
        </div>
      </section>

      <section id="industries" className="wrap h-sec">
        <h2 className="h-sec__title">Industries we work in</h2>
        <ul className="index">
          {industries.map((i) => (
            <li key={i.slug}>
              <Link to={`/industries/${i.slug}`} className="index__row" style={{ '--h': i.hue }}>
                <span className="index__mark" aria-hidden="true">
                  <span className="index__dot" />
                  <IndustryIcon slug={i.slug} />
                </span>
                <span className="index__name">{i.name}</span>
                <span className="index__tag">{i.tagline}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="h-band">
        <div className="wrap h-sec">
          <h2 className="h-sec__title">What we prepare</h2>
          <div className="svc">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="svc__item">
                <h3>{s.name}</h3>
                <p>{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap h-sec two">
        <h2 className="h-sec__title">A trust with a practical brief</h2>
        <div className="prose">
          <p>We help establishments and ventures grow in line with the needs of society, with dedicated professionals and the latest technology, in a cost-effective and timely manner.</p>
          <p className="muted">{site.registration}.</p>
          <p><Link to="/about">Read more about us</Link></p>
        </div>
      </section>
    </>
  )
}
