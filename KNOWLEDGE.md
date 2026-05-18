# Project Knowledge Base - HS Vaid Website

## Project Overview
Mobile-friendly web app / landing page for HS Vaid (Red Book Expert)
Location: Ludhiana, Punjab, India

## Business Details
- **Name**: HS Vaid
- **Title**: Red Book Expert / ज्योतिषी
- **Office**: #2944, Phase 1, Dugri, Ludhiana - 141013, Punjab, IN
- **Phone**: +91-99159-90088
- **WhatsApp**: +91-99159-90088
- **Hours**: 11 AM to 6 PM (All Days) | Call & WhatsApp 24x7
- **Cases Solved**: 1000+
- **Client Reviews**: 50+ (paginated, 5 per page)

## Design System
- **Skill**: Futuristic (from typeui.sh registry) — see `.opencode/skills/design-system/SKILL.md`
- **Fonts**: Audiowide (display/headings), Roboto (body), Anonymous Pro (mono)
- **Colors**: Primary #3B82F6, Secondary #8B5CF6, Success #16A34A, Warning #D97706, Danger #DC2626, Surface #FFFFFF, Text #111827
- **Spacing scale**: 4/8/12/16/24/32 (tokenized as --space-*)
- **Radius**: 4px/8px/12px/16px/100px (tokenized as --radius-*)

## Tech Stack
- Pure HTML + CSS + JavaScript (static site, no build step)
- Font Awesome 6.5 for icons
- Google Fonts (Audiowide, Roboto, Anonymous Pro)
- Progressive Web App (manifest.json + sw.js for offline support)
- Netlify-ready static files
- WCAG 2.2 AA accessibility (focus-visible states, semantic HTML, skip link)

## Features
- Bilingual (Hindi/English) toggle with all labels translated
- Interactive particle animation background (respects prefers-reduced-motion)
- Animated stat counters (IntersectionObserver-based)
- Paginated reviews — 5 per box/page, 11 pages total (51 reviews)
- Fully responsive mobile-first design (100dvh, safe areas)
- Touch-friendly with proper tap targets
- WhatsApp & Phone FAB buttons on mobile
- Keyboard-accessible navigation (focus-visible, aria-* attributes)
- Service worker for offline caching
- PWA manifest for "Add to Home Screen"

## Deployment
- **Platform**: Netlify (static site, no build step)
  - Publish directory: `.` (root)
  - No build command required
- **GitHub**: https://github.com/SandeepSingh1991/hs-vaid-astrologer
- **Domain**: Configure via Netlify custom domain

## File Structure
```
/
├── index.html          # Main landing page (semantic HTML5, ARIA labels)
├── styles.css          # All styles (SKILL.md design tokens, responsive)
├── scripts.js          # All JS (reviews, language, particles, counters, nav)
├── manifest.json       # PWA manifest
├── sw.js              # Service worker (offline caching)
├── netlify.toml       # Netlify deployment config
├── DESIGN.md           # Futuristic design tokens (from typeui.sh)
└── .opencode/
    └── skills/
        └── design-system/
            └── SKILL.md  # Futuristic design system rules
```

## Commands Reference
```bash
# Preview locally
python -m http.server 8000
# OR
npx serve .

# Git push
git add -A && git commit -m "message" && git push
```

## Design Tokens (CSS Custom Properties)
Located in `styles.css :root`:
- `--primary`, `--primary-dark`, `--primary-light`, `--primary-glow`
- `--secondary`, `--secondary-dark`, `--secondary-glow`
- `--success`, `--warning`, `--danger`, `--surface`, `--text`, `--text-muted`
- `--bg-dark`, `--bg-card`, `--bg-card-hover`
- `--border`, `--border-hover`, `--focus-ring`
- `--space-{4,8,12,16,24,32}`, `--radius-{sm,md,lg,xl,full}`
- `--ease` (transition cubic-bezier)
