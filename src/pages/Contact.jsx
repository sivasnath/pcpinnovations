import { useSearchParams } from 'react-router-dom'
import ContactForm from '../components/ContactForm.jsx'
import { site } from '../data/site.js'
import { getIndustry } from '../data/industries.js'
import useTitle from '../useTitle.js'

export default function Contact() {
  useTitle('Contact')
  const [params] = useSearchParams()
  const ind = getIndustry(params.get('industry'))
  return (
    <section className="wrap page-head contact">
      <div>
        <h1>Contact PCP Innovations</h1>
        <p className="lede">Share a few lines and the industry you work in. We will come back with how we can help.</p>
        <ul className="plain">
          <li><strong>Email</strong><br /><a href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><strong>Phone</strong><br /><a href={site.phoneHref}>{site.phone}</a></li>
          <li><strong>WhatsApp</strong><br /><a href={site.whatsapp}>Chat with us</a></li>
          <li><strong>Office</strong><br />{site.address}</li>
        </ul>
      </div>
      <ContactForm defaultIndustry={ind ? ind.name : ''} />
    </section>
  )
}
