# MEDSWIFT EXPRESS — Website

Professional bilingual (English/Spanish) website for MEDSWIFT EXPRESS, a medical courier service in Atlanta, GA.

## Tech Stack

- **Framework:** Next.js 14 (static export)
- **Styling:** Tailwind CSS
- **Forms:** Formspree (free tier)
- **Hosting:** Cloudflare Pages (or Vercel)
- **Language Toggle:** EN/ES via React Context + localStorage

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
```

Output goes to `/out` — this is the static site ready for upload.

## ⚠️ Before Going Live: Set Up Formspree

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — copy the **Form ID** (looks like `xpwzabcd`)
3. Open these two files and replace `YOUR_FORMSPREE_FORM_ID`:
   - `src/app/quote/page.tsx` (line 7)
   - `src/app/contact/page.tsx` (line 7)
4. Rebuild: `npm run build`

## Pages

| Route | File |
|---|---|
| `/` | `src/app/page.tsx` |
| `/about/` | `src/app/about/page.tsx` |
| `/services/` | `src/app/services/page.tsx` |
| `/how-it-works/` | `src/app/how-it-works/page.tsx` |
| `/quote/` | `src/app/quote/page.tsx` |
| `/contact/` | `src/app/contact/page.tsx` |

## Editing Content

All website text (English + Spanish) lives in one file:

```
src/translations/index.ts
```

Edit the `en` object for English, `es` object for Spanish. The site updates automatically.

## Business Info

- **Business:** MEDSWIFT EXPRESS
- **Owner:** Natasha Mutakura
- **Phone:** (757) 940-8468
- **Email:** beatricenatasha99@gmail.com
- **Location:** Atlanta, GA Metro Area
