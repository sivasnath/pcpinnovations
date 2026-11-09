import { useState } from 'react'
import { industries } from '../data/industries.js'

const encode = (data) =>
  Object.keys(data).map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`).join('&')

export default function ContactForm({ defaultIndustry = '' }) {
  const [state, setState] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const f = new FormData(e.target)
    const data = Object.fromEntries(f.entries())
    setState('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...data }),
      })
      if (!res.ok) throw new Error('bad status')
      setState('done')
      e.target.reset()
    } catch {
      setState('error')
    }
  }

  return (
    <form className="form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p hidden><label>Leave blank <input name="bot-field" /></label></p>
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input type="email" name="email" required autoComplete="email" /></label>
      <label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
      <label>Industry
        <select name="industry" defaultValue={defaultIndustry}>
          <option value="">Select (optional)</option>
          {industries.map((i) => <option key={i.slug} value={i.name}>{i.name}</option>)}
        </select>
      </label>
      <label>Message<textarea name="message" rows="5" placeholder="Type your message here..." required /></label>
      <label>Referred by<input name="referred" /></label>
      <button className="btn" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Submit'}</button>
      {state === 'done' && <p className="form__ok" role="status">Thanks for submitting!</p>}
      {state === 'error' && <p className="form__err" role="alert">Could not send. Please email or call us instead.</p>}
    </form>
  )
}
