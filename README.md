# meraipu — Your IPU. Simplified.

A frontend-only syllabus information web app for **Guru Gobind Singh Indraprastha University (IPU)**. Built with Next.js 14 (App Router), Tailwind CSS, and static MDX content. No backend or database.

## Run locally

- **Node:** Use Node.js 18.17 or later (see `engines` in `package.json`).
- Prefer **`npm ci`** when `package-lock.json` is present so dependencies match exactly (avoids missing styles or build issues on another machine).

```bash
npm ci
npm run dev
```

If you don't have the lock file, use `npm install` then run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

---

## How to add a new subject

1. Create a new MDX file under `content/year<N>/<branch>/<slug>.mdx`.

   - `year<N>`: use `year1`, `year2`, or `year3`.
   - `<branch>`: folder name matching a branch slug (e.g. `cse`, `it`, `bca`). See **How to add a new branch** if the branch folder doesn’t exist.
   - `<slug>`: URL-friendly name (e.g. `data-structures`, `mathematics-1`). This becomes the subject URL segment.

2. Use the following **frontmatter schema** (no body content required):

```yaml
---
title: "Subject Full Name"
code: "SUB-XXX"
year: 2
branch: "cse"
branchName: "Computer Science & Engineering"
credits: 4

units:
  - title: "Unit 1: Title"
    content: |
      Multi-line syllabus content for this unit.
  - title: "Unit 2: Title"
    content: |
      More content...
  # ... up to Unit 4 or as needed

practicalFiles:   # optional
  - title: "Lab File 2024"
    url: "https://drive.google.com/file/d/XXXXX/view"
    type: "pdf"

pyqs:            # optional
  - title: "End Sem 2023"
    url: "https://drive.google.com/file/d/XXXXX/view"
    type: "pdf"
---
```

- **Required fields:** `title`, `code`, `year`, `branch`, `branchName`, `credits`, `units`.
- **Optional:** `practicalFiles`, `pyqs` (arrays of `{ title, url, type }`).
- No code changes are needed; the app discovers the new file at build time.

---

## How to add a new branch

1. **Create content folders** for each year you want to support:
   - `content/year1/<new-branch>/`
   - `content/year2/<new-branch>/`
   - etc.  
   Add MDX subject files inside these folders as needed.

2. **Register the branch** in `constants/branches.ts`:

   - Add a new entry to the `BRANCHES` object: `slug: "Display Name"`.
   - Use a short, URL-friendly key (e.g. `biotech: "Biotechnology"`).

The branch will then appear on the year selection page and in breadcrumbs. Subject list for that branch comes from the MDX files in the folder; if the folder is empty, the app shows a “Coming soon” state.

---

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3
- **Content:** MDX files, frontmatter parsed with `gray-matter` at build time
- **Fonts:** Syne (display), DM Sans (body) via Google Fonts
- **Icons:** Lucide React
- **Theme:** next-themes (light/dark mode)

## License

MIT
