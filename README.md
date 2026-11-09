# PCP Innovations website

Vite + React site: home, about, ten industry pages, four service pages, contact.

    npm install
    npm run dev       # local preview
    npm run build     # production build in dist/

## Where things live
- `src/data/industries.js` – the ten industry pages
- `src/data/services.js` – the four service pages
- `src/data/site.js` – contact details and registration line
- `src/styles/global.css` – all styling
- `public/` – logo, fonts (Poppins), favicon, `_redirects`

## Deploy (Netlify)
Build command `npm run build`, publish directory `dist`. The contact form uses Netlify Forms
(the hidden form in `index.html` registers it). `public/_redirects` makes page URLs work on refresh.
