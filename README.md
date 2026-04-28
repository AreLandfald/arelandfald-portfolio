# Are Landfald — Portfolio

Personal portfolio site for Are Landfald, built with Next.js 16 and the App Router. Deploys to Vercel.

## Local development

```bash
# 1. Make sure Node 20+ is on your PATH (this repo was set up with /Users/arelandfald/.local/node/bin/node)
export PATH="$HOME/.local/node/bin:$PATH"

# 2. Install dependencies (already done — only re-run if package.json changes)
npm install

# 3. Start the dev server
npm run dev
# → http://localhost:3000
```

`npm run build` produces a production build. `npm start` runs it locally.

## Project structure

```
app/                     App Router pages
  layout.tsx             Root layout, global metadata, fonts loaded via globals.css
  globals.css            All styles (merged from old style.css + project-style.css)
  page.tsx               Home (the 6-tile portfolio grid)
  about/page.tsx
  contact/page.tsx
  work/
    visual-identity/page.tsx     (Diplom-Is)
    website/page.tsx             (ChatGPT-5 self-portrait)
    immersive-sound/page.tsx     (Nattmannen)
      StoryCard.tsx              client component for the audio-card grid
      AudioPlayer.tsx            client component for the intro audio player
    gamedesign/page.tsx          (Beredt board game)
    musical-instrument/page.tsx  (Sound toys)

components/              Shared client components
  CustomCursor.tsx       Hides system cursor + draws cursor.png on desktop
  FadeInObserver.tsx     IntersectionObserver-driven .fade-in animations
  SlideMenu.tsx          Hamburger + slide-in nav (used on visual-identity page)
  ProjectNav.tsx         Back-to-portfolio link + prev/next navigation
  ScrollColorMode.tsx    Toggles body classes (yellow/dark/blue) based on visible sections
  BodyClass.tsx          Adds a body class for the lifetime of a route

public/Assets/           All images / videos / audio / fonts (served from /Assets/...)

_legacy/                 Original static HTML files, kept locally for reference (gitignored)
```

## Deploying to Vercel

See **VERCEL_DEPLOY.md** in this repo for the step-by-step.

## Notes / things to iterate on later

- The home page grid uses fixed positioning sized for a 1240px+ viewport. Below that it falls back to a responsive flex grid.
- `_legacy/` is gitignored so it won't be deployed; delete it once you've copied anything you still need.
- `note.md` was the original brief and can be removed once you no longer need it.
