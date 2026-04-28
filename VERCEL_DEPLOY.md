# Deploying to Vercel — Step by Step

This guide assumes you don't have a Vercel account or a GitHub repo yet. If you already have either, skip the relevant steps.

## 1. Create a GitHub account (if you don't have one)

1. Go to <https://github.com/signup>.
2. Use **are.landfald@gmail.com** so it lines up with your other accounts.
3. Verify your email.

## 2. Push this project to GitHub

There are two paths. The easiest is using the GitHub website + Git on your machine.

### Option A — From the terminal (recommended)

Open Terminal and run, one block at a time:

```bash
cd /Users/arelandfald/Code025/Groise/Portefølje

# Make sure Node is on the PATH if you ever need it again
export PATH="$HOME/.local/node/bin:$PATH"

# Sanity check git is set up
git status

# Create a new repo on GitHub *without* a README/license (we already have files):
# Go to https://github.com/new
#   Repository name:  arelandfald-portfolio  (or anything you like)
#   Public or Private: your call (Vercel works with both)
#   Initialize: leave EVERYTHING unchecked
# Click "Create repository". GitHub will show you the commands; the relevant ones:

git add .
git commit -m "Migrate portfolio to Next.js"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/arelandfald-portfolio.git
git push -u origin main
```

If `git push` asks for a password, use a Personal Access Token (PAT), not your GitHub password — GitHub deprecated password auth. Create one at <https://github.com/settings/tokens?type=beta>, give it `repo` scope, and paste it as the password.

### Option B — GitHub Desktop

If terminal is annoying:

1. Install GitHub Desktop: <https://desktop.github.com>.
2. File → Add Local Repository → choose `/Users/arelandfald/Code025/Groise/Portefølje`.
3. Commit your changes.
4. "Publish repository" — choose a name and visibility.

## 3. Create a Vercel account

1. Go to <https://vercel.com/signup>.
2. Click **"Continue with GitHub"**. This is the fastest path because it skips a separate password and links your repos automatically.
3. When Vercel asks for permissions, **allow access to your repositories** — at minimum the new portfolio repo.
4. Pick the **Hobby (Free)** plan when prompted. That's all you need for this site.

## 4. Import the repo into Vercel

1. From <https://vercel.com/new>, find your `arelandfald-portfolio` repo and click **Import**.
2. Vercel auto-detects Next.js. **Don't change any settings**:
   - Framework Preset: Next.js ✅
   - Build command: `next build` ✅
   - Output directory: `.next` ✅
   - Root directory: `./` ✅
   - Install command: `npm install` ✅
3. Click **Deploy**.

The first build takes 1–3 minutes. When it's done you'll see a preview URL like `arelandfald-portfolio.vercel.app`.

## 5. Wire up the custom domain `arelandfald.no`

1. In your Vercel project, go to **Settings → Domains**.
2. Type `arelandfald.no` and click **Add**. Then add `www.arelandfald.no` too.
3. Vercel will show you DNS records to add at your domain registrar (Domeneshop, Namecheap, GoDaddy, wherever you bought `arelandfald.no`):
   - For the apex `arelandfald.no` → an **A record** pointing to `76.76.21.21`.
   - For `www.arelandfald.no` → a **CNAME record** pointing to `cname.vercel-dns.com`.
4. Save the records at the registrar. DNS can take anywhere from a couple of minutes to a couple of hours to propagate.
5. Vercel auto-issues a Let's Encrypt SSL certificate once DNS resolves. The status in Settings → Domains will change to **Valid Configuration** — at that point the site is live on your domain.

If you don't own `arelandfald.no` yet, Domeneshop is the typical Norwegian choice (`domeneshop.no`). The .no TLD requires a Norwegian organization number or personal ID — heads-up.

## 6. Future deploys are automatic

From now on:

- Every `git push` to **main** → Vercel deploys to production (`arelandfald.no`).
- Pushes to other branches → Vercel deploys a preview URL you can share before merging.

To make a content change locally:

```bash
cd /Users/arelandfald/Code025/Groise/Portefølje
# edit files
git add .
git commit -m "Update copy on about page"
git push
```

That's it.

## 7. Common gotchas

- **Vercel build fails on `npm install`** — Make sure `package-lock.json` is committed. (It is, in this repo.)
- **Images don't show up in production** — Asset paths must start with `/Assets/...` (a leading slash), not `./Assets/...`. All routes in this repo already use the correct form.
- **Fonts look wrong** — Filenames in `public/Assets/Font/` have spaces in them. Browsers handle that automatically when the URL is quoted in CSS, but if you ever rename a font file, update the matching `@font-face` rule in `app/globals.css`.
- **Deploy works but the home grid looks broken on a small laptop** — The 6×2 fixed-grid layout is designed for ~1240px+ width. Below that, the layout falls back to a responsive flex grid (intentional).
- **Vercel's free plan limits** — 100 GB bandwidth/month, plenty for a portfolio. The Diplom-Is `.mp4` videos are the heaviest assets; if you ever bump up against the limit, compress them or move them to a CDN like Cloudflare R2.

## TL;DR

```
GitHub repo → Vercel auto-imports it → push to main = deploy
```

Open the preview URL Vercel gives you, point `arelandfald.no` at it, you're done.
