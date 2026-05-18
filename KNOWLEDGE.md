# Project Knowledge Base - HS Vaid Website

## Project Overview
Astrologer landing page for HS Vaid (Red Book Expert)
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
- **Skill**: Futuristic (from typeui.sh registry)
- **Fonts**: Audiowide (headings), Roboto (body), Anonymous Pro (mono)
- **Colors**: Primary #3B82F6, Secondary #8B5CF6, Success #16A34A, Warning #D97706, Danger #DC2626

## Tech Stack
- Pure HTML + CSS + JavaScript (static site)
- Font Awesome 6.5 for icons
- Google Fonts (Audiowide, Roboto, Anonymous Pro)
- Netlify-ready static files

## Features
- Bilingual (Hindi/English) toggle
- Particle animation background
- Animated stat counters
- Paginated reviews (5 per box/page)
- Fully responsive
- WhatsApp & Phone CTA buttons

## Deployment
- **Platform**: Netlify (static site, no build step)
- **GitHub**: https://github.com/sandeepsingh1991/hs-vaid-astrologer
- **Domain**: Configure via Netlify custom domain

## File Structure
```
/
├── index.html          # Main landing page
├── styles.css          # All styles
├── scripts.js          # All JS (reviews, language, particles, etc.)
├── netlify.toml        # Netlify deployment config
├── DESIGN.md           # Futuristic design tokens
└── .opencode/
    └── skills/
        └── design-system/
            └── SKILL.md
```

## Commands Reference
```bash
# Preview locally (if python available)
python -m http.server 8000

# Or with npx live-server
npx live-server

# Deploy to Netlify CLI
npx netlify deploy --prod
```
