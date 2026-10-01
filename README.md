# CEMS LTD website

Next.js (App Router) + TypeScript + Tailwind CSS. No database. All text lives in `/content`.

## Run it on your computer
1. Install Node.js 20 or newer from https://nodejs.org
2. In this folder run:
   ```
   npm install
   cp .env.example .env.local
   npm run dev
   ```
3. Open http://localhost:3000

## Where to edit things
| What | File |
|---|---|
| Phone, email, address, social links | `content/site.ts` |
| Services text | `content/services.ts` |
| Projects | `content/projects.ts` |
| Mission and values | `content/about.ts` |
| Team (About page shows it only if filled) | `content/team.ts` |
| Colors | top of `app/globals.css` |

## Photos and logo
Site photos live in `public/images/` as `site-*.jpg` (copied from the CEMS photos folder). The logo is `public/images/cems-logo.jpg`; its path is set in `content/site.ts`. For sharper results, use photos at least 1600px wide (under 2 MB each), keeping the same file names or updating the paths in `content/` and the page files.

## Add a project
Open `content/projects.ts`, copy one entry, change `slug` (unique, lowercase, dashes), `title`, `category` (Buildings, Roads, Infrastructure or Water & Wastewater), `image` (optional), `summary`, `description`, and optionally `location` and `year`. Remove `sample: true` so the "Placeholder" badge disappears and the page is indexed by search engines. **Replace all placeholder projects before launch.**

## Contact form emails (Resend)
1. Create an account at https://resend.com and make an API key.
2. Verify your domain in Resend (Domains > Add domain, then add the DNS records it shows).
3. In `.env.local` (and later on Vercel) set:
   - `RESEND_API_KEY`: your key
   - `CONTACT_TO_EMAIL`: where messages arrive (can be Gmail)
   - `RESEND_FROM_EMAIL`: an address on your verified domain (not Gmail), e.g. `website@yourdomain.rw`
Until these are set the form shows a friendly "not set up yet" message.

## Google Analytics (optional)
Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` (looks like `G-XXXXXXXXXX`). Leave empty to disable.

## Deploy to Vercel
1. Put the project on GitHub or GitLab.
2. On https://vercel.com choose Add New > Project and import it.
3. Add the environment variables from `.env.example` (including `NEXT_PUBLIC_SITE_URL` set to your real address).
4. Deploy, then add your domain under Settings > Domains and follow the DNS steps.

## Before launch checklist
- Replace sample projects and placeholder photos
- Set the contact form variables and send a test message
- Review the Privacy Policy text
- Add your social links in `content/site.ts`
- Run `npm run lint` and `npm run build`
