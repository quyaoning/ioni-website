# ION-I website

Club homepage for ION-I, the Electric Propulsion Initiative at UIUC. Built with [Astro](https://astro.build), with React for interactive components.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Where things live

| Path | What |
|---|---|
| `src/content/subteams/*.md` | One Markdown file per subteam page. Edit these to update subteam content, no code needed |
| `src/data/milestones.ts` | "This year" timeline on the home page |
| `src/data/research.ts` | Posters, talks, papers on the Research page |
| `src/data/gallery.ts` | Gallery albums and captions |
| `src/assets/` | Photos, CAD renders, logo (optimized automatically at build) |
| `src/components/ThrusterExplainer.tsx` | Interactive thruster diagram (React island) |

### Adding a subteam page

Copy an existing file in `src/content/subteams/`, change the frontmatter (`title`, `stage`, `summary`, `order`, `status`, `cover`, `coverAlt`), and write the body in Markdown. It shows up on the home page, the Subteams page, and at `/subteams/<filename>/`.

### Adding interactive content

Interactive pieces are React components in `src/components/`, placed on a page with a `client:*` directive (for example `<Viewer client:visible />`). Simulation output should be precomputed in Python and saved as static files (JSON, glTF, images) that the component loads, so the site stays static and needs no server.

## Deploy

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`. It reads the Pages URL at build time, so it works unchanged for a project site (`<user>.github.io/<repo>/`) or an org root site (`<org>.github.io`). To turn it on: repo **Settings → Pages → Source: GitHub Actions**.

Moving the repo to a club organization later: use **Settings → Transfer ownership**, then rename it to `<org>.github.io` for a root URL. For a custom domain, add it under Settings → Pages.

## Content sources

Text is drawn from the club's own material on Box: the Plasma Source, Discharge Chamber, and Ion Optics SRR decks, the Fall 2026 semester outlook, the spring 2026 EOH research poster, and the Fall 2026 Scientific Visualization kickoff. Photos are from `Resources/Multimedia/2025 - 2026`.

Still needed:

- Contact email / social links for the "Join" section
- Confirmation that the "Forging the Future" theme award (3rd place, 2026) was from Engineering Open House
- Firm Ion Optics PDR/CDR dates
