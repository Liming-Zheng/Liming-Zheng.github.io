# limingzheng.com

Academic website for Liming Zheng, focused on morphology-driven intelligence,
bio-inspired aerial robotics, morphing aircraft, adaptive flight, and perching.

The site is built with Astro. Research project content is stored in Markdown,
while GitHub Actions deploys the static build to GitHub Pages.

## Local preview

```bash
npm install
npm run dev -- --host 127.0.0.1
```

Open <http://127.0.0.1:4321/>. Astro refreshes the page after saved changes.

## Updating content

- `src/pages/index.astro`: homepage introduction and non-publication highlights
- `src/pages/projects/index.astro`: layout of the Research overview
- `src/content/projects/*.md`: research text, evidence, roles, links, and media
- `src/pages/publications/index.astro`: publication list
- `src/data/profile.ts`: email, affiliation, CV link, and external profiles
- `src/styles/global.css`: colors, typography, cards, and responsive layout
- `public/cv`: current CV
- `public/images`: profile, research, highlight, and video-poster images
- `public/media`: selected and supplementary research videos
- `public/CNAME`: custom domain

The project Markdown files have two sections. The YAML frontmatter between the
first pair of `---` lines controls cards, metadata, links, and videos. The
Markdown below it becomes the full project narrative.

### Add a research project

1. Copy an existing file in `src/content/projects/` and give it a short slug,
   such as `new-project.md`.
2. Replace the title, venue, status, summary, research question, evidence,
   role, links, and media entries.
3. Set `order` to control its position. Lower numbers appear first.
4. Put images in `public/images/` and videos in `public/media/`. Paths used in
   content start after `public`, for example `/images/example.jpg`.
5. Run `npm run build` before publishing.

### Publish an update

```bash
git status
git add src public
git commit -m "Update research content"
git push
```

Only stage the files intended for that update. The push to `main` starts the
GitHub Pages workflow automatically.

## Deploy

Build static files:

```bash
npm run build
```

The generated site is in `dist/`, which is ignored by Git. Pushing the `main`
branch deploys the website through `.github/workflows/deploy.yml`.
