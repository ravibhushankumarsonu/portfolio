# Ravibhushan Kumar — Portfolio

Personal portfolio site: staff software engineer profile with projects, experience,
and contact info recruiters and collaborators can reach in one click. Built as
Phase 1 of a two-phase plan (Phase 2 adds a separate photography section later —
see `portfolio-design-document.md` in the planning docs).

## Stack

- React 19 + TypeScript + Vite (static build, no server needed)
- Plain CSS with a small design-token system in `src/index.css`
- Content-as-code: projects live in `src/data/projects.json`, experience in
  `src/data/experience.ts`, contact info in `src/data/site.ts`

## Local setup

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Deployment (Cloudflare Pages, recommended)

1. Push this repo to GitHub (already done: `ravibhushankumarsonu/portfolio`).
2. In the Cloudflare dashboard: Workers & Pages → Create → Pages → Connect to Git → select this repo.
3. Production branch: `main`. Build command: `npm run build`. Build output directory: `dist`.
4. Every merge to `main` auto-deploys; every pull request gets its own preview URL — no extra YAML needed for deploys (`.github/workflows/ci.yml` just runs lint + build checks on PRs).
5. Domain: if using an existing GoDaddy domain, delegate DNS to Cloudflare (change nameservers in GoDaddy's panel to the ones Cloudflare gives you), then add the domain as a custom domain on the Pages project.

## TODO before publishing

- [ ] Drop your real résumé as `public/resume.pdf` (the "Résumé" button already links there).
- [ ] Replace the sample entries in `src/data/projects.json` with your real projects (and add real thumbnail images to `public/`).
- [ ] Verify/adjust the work history in `src/data/experience.ts` (dates, company names, bullet points).
- [ ] Replace the placeholder education line in `src/pages/about/AboutPage.tsx`.
- [ ] Swap `public/logo.jpg` for your preferred headshot/avatar if desired.
- [ ] Update the domain in `public/sitemap.xml` and `public/robots.txt` once your real domain is live (currently a placeholder `ravibhushankumar.dev`).

## Project structure

- `src/data/` — content-as-code: `site.ts` (contact/social links), `experience.ts` (work history, shared by Home + About), `projects.json` (project list)
- `src/components/` — `common/Navbar`, `ui/Button`, `projects/ProjectGrid`, `experiance/Experiance`
- `src/pages/` — `home`, `about`, `projects`, `contact`
- `src/layouts/main/MainLayout.tsx` — shared header/footer shell
- `public/` — static assets, `robots.txt`, `sitemap.xml`


## References
- https://marcuss.pro/index.html 