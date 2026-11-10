import { Link, useParams } from 'react-router-dom'
import { getIndustry, industries } from '../data/industries.js'
import { getService } from '../data/services.js'
import CaseVisual from '../components/CaseVisual.jsx'
import Gallery, { Photo } from '../components/Gallery.jsx'
import { industryPhotos } from '../data/photos.js'
import NotFound from './NotFound.jsx'
import useTitle from '../useTitle.js'

export default function Industry() {
  const { slug } = useParams()
  const ind = getIndustry(slug)
  useTitle(ind ? ind.name : 'Not found')
  if (!ind) return <NotFound />
  const idx = industries.findIndex((i) => i.slug === slug)
  const next = industries[(idx + 1) % industries.length]
  const pics = industryPhotos[slug]
  return (
    <>
      <section className="hero hero--ind" style={{ '--h': ind.hue }}>
        <div className="wrap hero__grid">
          <div>
            <h1>{ind.name}</h1>
            <p className="hero__sub">{ind.tagline}</p>
            <p className="hero__text">{ind.summary}</p>
            <Link className="btn btn--light" to={`/contact?industry=${ind.slug}`}>Discuss your project</Link>
          </div>
          {pics ? (
            <Photo id={pics.hero} className="visual visual--photo" eager />
          ) : (
            <CaseVisual hue={ind.hue} label={`${ind.name} pattern`} />
          )}
        </div>
      </section>

      <section className="wrap two">
        <div>
          <h2 className="h3">How we help</h2>
          <ul className="ticks">{ind.help.map((h) => <li key={h}>{h}</li>)}</ul>
        </div>
        <div>
          <h2 className="h3">Related services</h2>
          <div className="stack">
            {ind.services.map((s) => {
              const sv = getService(s)
              return (
                <Link key={s} className="mini" to={`/services/${s}`}>
                  <strong>{sv.name}</strong>
                  <span>{sv.short}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {ind.featured.length > 0 && (
        <section className="wrap">
          <h2 className="h3">Selected work</h2>
          <div className="cards">
            {ind.featured.map((f, i) => (
              <article key={f.title} className="card">
                <h3>{f.title}</h3>
                <p className="card__client">{f.client}</p>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {pics && pics.gallery.length > 0 && (
        <section className="wrap">
          <h2 className="h3">From our projects</h2>
          <Gallery ids={pics.gallery} />
        </section>
      )}

      <section className="wrap">
        <h2 className="h3">Other engagements in this area</h2>
        <p className="muted">Client names withheld.</p>
        <ul className="ticks cols">{ind.examples.map((e) => <li key={e}>{e}</li>)}</ul>
      </section>

      <section className="band">
        <div className="wrap band__row">
          <p className="band__lead">Next industry: <Link to={`/industries/${next.slug}`}>{next.name}</Link></p>
          <Link className="btn btn--light" to={`/contact?industry=${ind.slug}`}>Contact us about {ind.name}</Link>
        </div>
      </section>
    </>
  )
}
