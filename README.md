# Laurin & Diana — Hochzeitseinladung

Static Astro site, three languages:

| Route  | Language |
| ------ | -------- |
| `/`    | Deutsch (default) |
| `/ru/` | Русский |
| `/et/` | Eesti |

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static files in dist/
npm run preview   # serve dist/
```

## Edit the content

All text lives in `src/i18n/de.ts`, `ru.ts` and `et.ts`. The three files have the same structure.
Change a sentence in one language and change it in the other two as well.

- Photos of you two: `public/img/us/` (replace a file with a sharper version under the same name).
- Photos of Estonia: `public/img/estonia/`. Their credits are in `src/data/credits.json` and print in the footer.

## RSVP

The form on the site posts straight to the Google Form "Hochzeit Laurin & Diana"
(`src/data/rsvp.ts`). Questions are shown in the visitor's language, but the site always sends the
form's original German option values, so every answer lands in the same columns of one sheet.

The Google Form marks "Wie lange bleibst du?" as required, so a decline also has to send a value for it
(it sends the first option). To stop that, make the question optional in the Google Form and set
`STAY_REQUIRED_IN_FORM = false` in `src/data/rsvp.ts`.

If you add, remove or rename a question or an option in the Google Form, update `src/data/rsvp.ts`
to match, otherwise answers are lost.

## Deploy

Any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages): build command `npm run build`,
output folder `dist`. Before deploying, set `site` in `astro.config.mjs` to the real domain; it is used
for the language links and the share image. For a GitHub Pages project site, also set
`base: '/<repo-name>'`.
