# PCP Innovations site (Vite + React)

    npm install
    npm run dev      # local
    npm run build    # outputs dist/

Deploy `dist/` to Netlify (forms + SPA redirect already configured via public/_redirects and the hidden form in index.html).
Content lives in src/data: industries.js (10 industry pages), services.js (4 service pages), site.js (contact details).
Visuals are generated SVG; to use real photos, add images to public/ and reference them in the pages.
