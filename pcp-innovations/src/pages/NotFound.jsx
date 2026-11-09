import { Link } from 'react-router-dom'
import useTitle from '../useTitle.js'

export default function NotFound() {
  useTitle('Page not found')
  return (
    <section className="wrap page-head">
      <p className="eyebrow">404</p>
      <h1>That page isn’t here.</h1>
      <p><Link className="btn" to="/">Back to home</Link></p>
    </section>
  )
}
