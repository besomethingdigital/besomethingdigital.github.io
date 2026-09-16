# Be Something Digital — Marketing Site

Public one-page marketing site for **Be Something Digital**.

**Live URL:** [https://besomethingdigital.github.io/](https://besomethingdigital.github.io/)

## What’s on the page

- Hero with phone CTA `(509) 761-9505`
- What you get (site + Google Business guidance + lead form)
- Pricing: **$1,200** one-time or **$149/mo**
- Portfolio examples (labeled demos)
- How it works
- Contact (phone + `be.something.llc@gmail.com`)

Static HTML/CSS/JS only — no build step.

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## GitHub Pages

This repo deploys via GitHub Actions (`.github/workflows/pages.yml`) on every push to `main`.

Alternatively, Pages can serve from the `main` branch root in **Settings → Pages**.

`.nojekyll` is included so asset paths are not processed by Jekyll.

## How to update

1. Edit `index.html`, `styles.css`, or `main.js` (and files under `assets/` as needed).
2. Commit and push to `main`:

```bash
git add -A
git commit -m "Update site copy or assets"
git push origin main
```

3. Wait for the **Deploy GitHub Pages** workflow to finish (Actions tab). The live site updates shortly after.

## Contact

- Phone: (509) 761-9505
- Email: be.something.llc@gmail.com
