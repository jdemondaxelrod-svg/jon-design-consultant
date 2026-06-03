# Deploy to www.jondemondaxelrodstudio.com

This site is a Next.js app ready for [Vercel](https://vercel.com) (recommended) or any Node host that supports Next.js 16.

## 1. Push to GitHub

Ensure the project is in a GitHub repository Vercel can access.

## 2. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import this repository.
2. Framework preset: **Next.js** (auto-detected).
3. Add environment variable (optional but recommended):

   | Name | Value |
   |------|--------|
   | `NEXT_PUBLIC_SITE_URL` | `https://www.jondemondaxelrodstudio.com` |

4. Deploy. Vercel assigns a `*.vercel.app` URL for preview.

## 3. Connect your domain

In the Vercel project: **Settings → Domains**

Add both:

- `www.jondemondaxelrodstudio.com` (primary)
- `jondemondaxelrodstudio.com` (apex)

Vercel will show DNS records to add at your registrar (where you bought the domain).

Typical setup:

| Type | Name | Value |
|------|------|--------|
| A | `@` | Vercel’s apex IP (shown in dashboard) |
| CNAME | `www` | `cname.vercel-dns.com` |

The app also redirects non-www → www via `next.config.ts`.

## 4. Verify

After DNS propagates (often 5–60 minutes):

- https://www.jondemondaxelrodstudio.com
- https://jondemondaxelrodstudio.com (should redirect to www)
- https://www.jondemondaxelrodstudio.com/sitemap.xml
- https://www.jondemondaxelrodstudio.com/robots.txt

## Local production check

```bash
npm run build
npm run start
```

Open http://localhost:3000

## Other hosts

- **Netlify / Cloudflare Pages:** Use the official Next.js adapter for that platform.
- **Static-only hosts:** Not suitable — this app uses Next.js server features and client components.
