# PrimeAxis Solutions website

Marketing website for PrimeAxis Solutions: software, design and IT services for growing businesses.

It has a home page, an about page, a services overview with eight service pages, and a contact page whose enquiry form emails messages through [Resend](https://resend.com).

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) and React 19
- TypeScript
- Tailwind CSS v4 with [shadcn/ui](https://ui.shadcn.com) components (`base-vega` style, built on [Base UI](https://base-ui.com))
- [Resend](https://resend.com) for contact form email, [Zod](https://zod.dev) for form validation
- [Lucide](https://lucide.dev) icons; Montserrat and Inter fonts loaded with `next/font`

## Getting started

You need Node.js 20.9 or later and npm.

```bash
npm install
cp .env.example .env.local   # then fill in the values described below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Check the code with ESLint |

## Environment variables

Set these in `.env.local` for local development, and in your hosting provider's settings for production. Never commit `.env.local`.

| Variable | Used for | Value |
| --- | --- | --- |
| `RESEND_API_KEY` | Contact form | An API key from [resend.com/api-keys](https://resend.com/api-keys) |
| `CONTACT_TO_EMAIL` | Contact form | The inbox that receives enquiries |
| `CONTACT_FROM_EMAIL` | Contact form | A sender on a domain verified in Resend, such as `PrimeAxis Website <website@yourdomain.com>` |
| `SITE_URL` | SEO | The live address, such as `https://www.yourdomain.com` |

What happens when a variable is missing:

- **`RESEND_API_KEY` or `CONTACT_TO_EMAIL`:** the site still runs. The contact form asks visitors to email you instead, and the server log names the missing variables.
- **`CONTACT_FROM_EMAIL`:** Resend's test sender is used. It only delivers to the email address on your Resend account, so it's for testing only.
- **`SITE_URL`:** a placeholder address is used for canonical links, share previews and the sitemap. `robots.txt` blocks crawling, pages are marked `noindex`, and `npm run build` prints a warning. Set it before launch.

## Project structure

```text
app/                   Routes: home, about, services, services/[slug], contact
  contact/actions.ts   Server action that validates and emails enquiries
  sitemap.ts           sitemap.xml
  robots.ts            robots.txt
components/
  home/                Home page sections
  about/               About page sections
  contact/             Contact form
  site/                Shared pieces: header, menus, footer, logo, page header, service cards
  ui/                  shadcn/ui components
lib/
  site.ts              Company name, contact details and main navigation
  services.ts          The eight services and the copy for their pages
  content.ts           Home and about copy: process, reasons, FAQs, core values, team
  metadata.ts          Site address and per-page SEO metadata
public/                Logo, favicons, web manifest and share image (og-image.png)
```

## Editing content

Most copy lives in data files, so content changes rarely touch page layouts.

| To change | Edit |
| --- | --- |
| Phone, email, address, hours, response time | `lib/site.ts` |
| Service titles, descriptions, what's included, benefits | `lib/services.ts` |
| Process steps, reasons, FAQs, core values, team | `lib/content.ts` |
| Team photos | Add portrait images (4:5) to `public/team/`, then set `photo` on each team member in `lib/content.ts` |
| Brand colors | The tokens near the top of `app/globals.css` |
| Share image for link previews | Replace `public/og-image.png` (1200×630) |

Placeholders are written in square brackets, like `[OFFICE ADDRESS]`. To list the ones still in the code:

```bash
git grep -nE '\[[A-Z][A-Z /]+\]' -- lib app components
```

To add another shadcn/ui component, run `npx shadcn add <component>`. It uses the style set in `components.json`.

## Deployment

The site is static pages plus one server action for the contact form, so it runs on any host that supports Next.js, such as [Vercel](https://vercel.com).

1. Import this GitHub repository into your host.
2. Add the four environment variables.
3. In Resend, verify your domain by adding the DNS records it gives you, then set `CONTACT_FROM_EMAIL` to an address on that domain.
4. Point your domain at the deployment, set `SITE_URL` to it, and redeploy.

## Before launch

- [ ] Replace the remaining placeholders, including the team bios
- [ ] Review the draft copy in `lib/services.ts` and `lib/content.ts`
- [ ] Add team names, roles and photos
- [ ] Set `SITE_URL` to the live domain
- [ ] Verify the sending domain in Resend and send a test enquiry through the contact form
