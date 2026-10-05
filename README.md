# Tomás Dias — Swiss Modernist Developer Portfolio

An authentic **Swiss Modernist (International Typographic Style)** personal website designed specifically for a Computer Science & Engineering graduate specializing in Artificial Intelligence and Concurrent Systems.

---

## Design Philosophy

This design translates your passion for art and graphic design into an authoritative, engineering-grade web presentation:

* **Grid & Proportions:** Asymmetric two-column modular grid with numbered indices (`00 / INTRODUCTION`, `01 / WORK EXPERIENCE`, `02 / FEATURED PROJECTS`, `03 / PROJECT ARCHIVE`, `04 / TECHNICAL INDEX`, `05 / CONTACT`).
* **Palette:** Gallery off-white (`#FBFBFA`) paper tone with deep carbon black (`#111111`) and your signature brand accent: **Yves Klein Ultramarine (`#0044FF`)**, with live Swiss Inks switcher for Vermillion and Amber (the classic Bauhaus/Modernist Triad).
* **Themes:** Full Dark Mode and Light Mode with automatic OS detection and local storage persistence.
* **Live Lisbon Clock:** An authentic Swiss typographic touch in the top masthead.

---

## How to Preview Locally

### Option A: Double-Click
Simply open `website/index.html` directly in your web browser (Chrome, Firefox, Safari, Edge).

### Option B: Local Python Server (Recommended)
Open a terminal in this folder and run:
```bash
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## Customization Checklist

In `index.html`:
1. **GitHub & LinkedIn URLs:** Replace `https://github.com/yourgithub` and `https://linkedin.com/in/yourprofile` with your real URLs.
2. **Email Address:** Replace `email@example.com` in the footer with your actual contact email.
3. **PDF CV Link:** Once you compile `main.tex` to `cv_tomas_dias.pdf`, place the PDF in the `website/` folder and update the button link to `href="cv_tomas_dias.pdf"`.
4. **Technical Paper Link:** The Concurrent B-Tree project card already links to `../report_Group04.pdf`. If deploying to the web, copy `report_Group04.pdf` directly into the `website/` directory and update the link.

---

## How to Deploy for Free (In 2 Minutes)

### Method 1: GitHub Pages (Easiest)
1. Push this folder to a GitHub repository (e.g. `yourname.github.io`).
2. Go to **Repository Settings** $\to$ **Pages**.
3. Under **Branch**, select `main` and root folder `/` (or `/website`). Click **Save**.
4. Your site will be live instantly at `https://yourname.github.io`!

### Method 2: Cloudflare Pages / Vercel
1. Connect your GitHub repository to Cloudflare Pages or Vercel.
2. Set root directory to `website`.
3. Deploy! (Includes instant global CDN and custom domain support like `tomasdias.dev`).
