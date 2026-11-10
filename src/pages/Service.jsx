import { Link, useParams } from 'react-router-dom'
import { getService, services } from '../data/services.js'
import { industries } from '../data/industries.js'
import Gallery from '../components/Gallery.jsx'
import { servicePhotos } from '../data/photos.js'
import NotFound from './NotFound.jsx'
import useTitle from '../useTitle.js'

export default function Service() {
  const { slug } = useParams()
  const s = getService(slug)
  useTitle(s ? s.name : 'Not found')
  if (!s) return <NotFound />
  const pics = servicePhotos[slug] || { strip: [], sections: {} }
  const rel = industries.filter((i) => i.services.includes(s.slug))
  return (
    <>
      <section className="hero hero--sm">
        <div className="wrap">
          <h1>{s.name}</h1>
          <p className="hero__sub">{s.tagline}</p>
        </div>
      </section>
      {pics.strip.length > 0 && (
        <section className="wrap strip-sec">
          <Gallery ids={pics.strip} variant="strip" captions={false} />
        </section>
      )}
      <section className="wrap narrow">
        <p className="lede">{s.intro}</p>
        {s.sections.map((sec) => (
          <article key={sec.h} className="block">
            <h2 className="h3">{sec.h}</h2>
            {sec.p.map((p, i) => <p key={i}>{p}</p>)}
            {sec.list && <ul className="ticks">{sec.list.map((l) => <li key={l}>{l}</li>)}</ul>}
            {sec.defs && (
              <dl className="defs">
                {sec.defs.map(([t, d]) => (<div key={t}><dt>{t}</dt><dd>{d}</dd></div>))}
              </dl>
            )}
            {pics.sections[sec.h] && <Gallery ids={pics.sections[sec.h]} variant="pair" />}
          </article>
        ))}
      </section>
      <section className="band">
        <div className="wrap">
          <h2 className="h3">Industries we apply this in</h2>
          <div className="chips">
            {rel.map((i) => <Link key={i.slug} to={`/industries/${i.slug}`}>{i.name}</Link>)}
          </div>
          <p className="band__more">Other services: {services.filter((x) => x.slug !== s.slug).map((x, i) => (
            <span key={x.slug}>{i ? ' · ' : ''}<Link to={`/services/${x.slug}`}>{x.name}</Link></span>
          ))}</p>
          <p><Link className="btn btn--light" to="/contact">Ask about this service</Link></p>
        </div>
      </section>
    </>
  )
}
