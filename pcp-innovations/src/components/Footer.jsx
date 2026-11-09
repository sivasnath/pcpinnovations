import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { industries } from '../data/industries.js'
import { services } from '../data/services.js'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <div className="brand brand--foot"><Logo /><span>PCP INNOVATIONS</span></div>
          <p className="footer__reg">{site.registration}</p>
          <p>{site.address}</p>
          <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
          <p><a href={site.phoneHref}>{site.phone}</a></p>
        </div>
        <div>
          <h3>Industries</h3>
          <ul>
            {industries.map((i) => (
              <li key={i.slug}><Link to={`/industries/${i.slug}`}>{i.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
          <h3 className="mt">Company</h3>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer__base">© {new Date().getFullYear()} PCP Innovations. All rights reserved.</div>
    </footer>
  )
}
