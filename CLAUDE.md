# Stitch Restaurant Template — Claude Instructions

## Project Overview

This is a static restaurant website template built from a Stitch ZIP export. The workflow:
1. Design screens in Stitch
2. Export as ZIP (contains HTML/CSS/images from the Stitch design system)
3. Use this repo as the integration target — drop exported assets into src/, wire up content

## Directory Structure

/
├── CLAUDE.md
├── README.md
├── design/             ← raw Stitch export assets (drop ZIP contents here)
└── src/
    ├── index.html
    ├── privacy.html
    ├── 404.html
    ├── css/
    │   ├── style.css
    │   └── print.css
    ├── fonts/
    ├── js/
    │   ├── main.js
    │   └── i18n.js
    └── images/
        ├── Logo.png / Logo.webp
        ├── Background.png
        ├── apple-touch-icon.png  (180x180)
        ├── og-image.jpg          (1200x630)
        ├── icon-192.png          (192x192)
        └── icon-512.png          (512x512)

## Building from Stitch Screen PNGs

1. Export the Stitch ZIP and extract into design/
2. Use screen.png files as pixel-accurate visual reference
3. Extract design tokens into :root in src/css/style.css
4. Add fonts to src/fonts/ with font-display: swap
5. Build HTML section by section matching the screen.png
6. Drop optimised photos into src/images/
7. Run the polish sequence

Tips:
- Zoom into screen.png at 2x to read exact spacing and font sizes
- Stitch uses 4px or 8px base unit — set --space-1 accordingly
- Start mobile, layer up with --bp-md and --bp-lg

## Vercel Deployment

CRITICAL: All project files must be at the ROOT level of the repository. Do NOT nest inside a subdirectory. Keep index.html at the repo root alongside css/, js/, images/.

- Root Directory in Vercel: leave blank (default ./)
- No build step needed — Vercel serves static files directly
- Auto-deploys on every git push to main
- After first deploy: go to Settings → Deployment Protection → set to Off — otherwise the site requires Vercel login and clients cannot view it

Deploy commands:
git add .
git commit -m "Description of changes"
git push origin main

Always test on a real phone via the Vercel URL after every push.

## Custom Fonts

Store in src/fonts/. Always use font-display: swap.

@font-face {
  font-family: 'FontName';
  src: url('../fonts/fontname-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

Good pairings:
- Restaurants (warm/Mediterranean): Playfair Display (headings) + DM Sans (body)
- Nightlife/bars: Sregs Serif Display (headings) + DM Sans (body)

## Sections in index.html

- #nav — fixed navigation with logo, links, language switcher, reserve button, hamburger on mobile
- #hero — full-bleed hero with large centered logo, headline, CTA buttons
- #about — restaurant story, 2-column on desktop (image left, text right)
- #menu — full menu with all categories as cards
- #gallery — CSS grid photo gallery with Instagram link
- #reviews — 4 real Google reviews, average rating, link to Google Maps
- #find-us — address, hours, phone, WhatsApp reserve card, Google Maps embed
- footer — logo, tagline, nav links, social icons, language switcher, copyright

## Hero Section

The hero uses a full-bleed background photo with the restaurant logo centered as the dominant element.

HTML pattern:
<section id="hero">
  <div class="hero__bg">
    <picture>
      <source srcset="images/hero.webp" type="image/webp">
      <img src="images/hero.jpg" alt="" fetchpriority="high" loading="eager">
    </picture>
    <div class="hero__overlay"></div>
  </div>
  <div class="hero__content">
    <div class="hero__unit">
      <img src="images/Logo.png" alt="Restaurant name" class="hero__logo">
      <h2 class="hero__title" data-i18n="hero.title">Tagline goes here</h2>
    </div>
  </div>
</section>

CSS pattern:
.hero__logo { width: 520px; filter: brightness(0) invert(1); }
.hero__unit { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
.hero__content { display: flex; align-items: center; justify-content: center; height: 100%; position: relative; z-index: 2; }

- Single h1 is visually hidden (sr-only) for SEO — visible headline uses h2
- Do NOT use position:absolute on subtitle — must flow naturally in hero__unit flex container

## Paper Texture Background

Use a fixed texture image that stays static while content scrolls over it. This works on iOS Safari. NEVER use background-attachment: fixed — it breaks on iOS Safari.

Add as FIRST element after body:
<div class="bg-texture" aria-hidden="true"></div>

.bg-texture {
  position: fixed;
  inset: 0;
  background-image: url('images/Background.png');
  background-size: cover;
  background-position: center;
  z-index: -1;
  pointer-events: none;
}

Each section gets a semi-transparent color overlay for alternating dark/light effect:
#about    { background-color: rgba(239, 224, 200, 0.75); }
#menu     { background-color: rgba(250, 245, 238, 0.50); }
#gallery  { background-color: rgba(234, 212, 178, 0.80); }
#reviews  { background-color: rgba(250, 245, 238, 0.50); }
#find-us  { background-color: rgba(239, 224, 200, 0.75); }
footer    { background-color: var(--brown-dark); }

## Navigation

#nav { position: fixed; top: 0; background: transparent; }
#nav.scrolled { background: rgba(245, 237, 224, 0.96); backdrop-filter: blur(8px); box-shadow: 0 1px 20px rgba(42,26,16,0.10); }
.nav__link { color: white; }
#nav.scrolled .nav__link { color: var(--text-dark); }

- Hamburger: hidden on desktop (display:none above 768px)
- Mobile menu: full-screen overlay with role="dialog" and focus trap
- Focus trap: collect focusable elements inside menu, Tab/Shift+Tab cycles within, Escape closes, focus returns to hamburger on close
- Language switcher in nav, mobile menu, AND footer — all use same applyLang() function

## CSS Conventions

- All colors, typography, spacing in CSS custom properties on :root
- Mobile-first: --bp-md: 768px, --bp-lg: 1200px
- Never use !important
- Cards: no hard borders — use soft box-shadow
- Shadow tokens in :root: --shadow-sm, --shadow-md, --shadow-card — never raw rgba inline
- Only animate transform and opacity — never top, left, width, height
- Skip-nav transition: use transform: translateY() not top
- prefers-reduced-motion: wrap all animations in media query

## Tailwind CSS

Use Tailwind CLI for production (not CDN):
npx tailwindcss -i ./css/style.css -o ./css/output.css --minify

Invalid Tailwind class names that fail silently:
- font-600 is INVALID → use font-semibold
- font-700 is INVALID → use font-bold

## Testing Workflow

Run in this exact order after every build:
1. /audit — accessibility, performance, code quality
2. /harden — focus traps, cookie banner, Schema.org fixes
3. /clarify — i18n key mismatches, missing translations
4. /adapt — touch targets (44px min), responsive, iOS Safari
5. /normalize — replace hardcoded hex with tokens, fix Tailwind classes
6. /polish — final visual pass
7. /audit — final score, aim for 16+/20

Common audit fixes:
- og:type="restaurant" is invalid → use og:type="website"
- reviewCount must be Number not String: "reviewCount": 4 not "reviewCount": "4"
- Cookie banner: privacy link must be a separate a element outside data-i18n paragraph — applyLang() innerHTML destroys child links inside translated elements
- font-600 / font-700 → font-semibold / font-bold
- Star rating color: use #B45309 not #F59E0B on white (WCAG AA contrast)

## Multi-Language Support (ES / CA / EN)

Every visible text element must have data-i18n attribute including:
- All nav links, section headings, labels
- Every menu item name AND description
- All menu category titles
- Review texts, CTA buttons
- aria-labels on icon buttons wired to i18n
- Footer tagline, nav links, copyright

In applyLang() always use innerHTML not textContent:
el.innerHTML = translations[lang][key];
Using textContent destroys child HTML elements (links, em, strong tags).

Language switcher in: nav desktop, mobile menu overlay, AND footer.
All three use same data-lang button pattern and applyLang().

Menu translation is REQUIRED — all dish names, descriptions, category titles, dietary tags, and buttons. Clients always check this.

i18n key structure:
const translations = {
  es: {
    'nav.about': 'Nosotros',
    'menu.eggs_benedict.name': 'Eggs Benedict',
    'menu.eggs_benedict.desc': 'Huevos poche, jamon...',
  },
  ca: { },
  en: { }
}

## Accessibility

- Skip nav: first focusable element in body, links to #main-content
- Single h1 per page (sr-only in hero if logo is visual centrepiece)
- Heading hierarchy: h1 (sr-only) → h2 per section → h3 for cards
- aria-expanded on hamburger button
- aria-pressed on language switcher buttons
- aria-modal="true" + focus trap on mobile menu
- prefers-reduced-motion: disable all animations, skip IntersectionObserver
- Never outline: none without a replacement focus style
- All icon-only buttons need aria-label wired to i18n

## Performance

- Hero: fetchpriority="high" + link rel="preload" in head — always keep in sync
- Hero: NEVER loading="lazy" — always loading="eager"
- All below-fold images: loading="lazy" + decoding="async"
- Always use picture with WebP source + JPG/PNG fallback
- Logo: compress to WebP 30KB max via Squoosh.app — large PNG logos are #1 LCP killer
- NEVER background-attachment: fixed — broken on iOS Safari, use fixed div instead

## Image Sizes

- Hero image: 200KB max WebP
- Logo: 30KB max WebP (Squoosh.app)
- Gallery images: 200KB max each WebP
- og-image.jpg: exactly 1200x630px
- apple-touch-icon.png: exactly 180x180px
- icon-192.png: 192x192px
- icon-512.png: 512x512px

## WhatsApp

Essential for Barcelona restaurants. WhatsApp is the primary reservation channel.

HTML pattern:
id="whatsapp-btn" data-phone="+34XXXXXXXXX" on the floating button
id="whatsapp-find-us" data-phone="+34XXXXXXXXX" on the Find Us reserve card

- Pre-fill message translated per language via i18n.js
- Placeholder number: +34600000000 — update before launch
- WhatsApp CTA always in Find Us section; optional in hero

## Google Maps

Get embed URL: maps.google.com → Share → Embed a map → Copy HTML
Use the maps/embed?pb=... URL for iframe src (not the regular maps URL)
Remove width/height from iframe — let CSS handle sizing
Add a "View on Google Maps" text link below or above the map

## Google Reviews Section

Include 4 real reviews with:
- Reviewer name, star rating (aria-label), review text, source label
- Average rating score + star display
- Link to Google Maps reviews page
- Leave us a review CTA button

## Opening Hours

Always confirm real hours with client. Barcelona restaurants often:
- Close Monday and/or Tuesday
- Open Wed–Sun for brunch/lunch only (9:00–16:00)

Update hours in: Find Us section HTML, Schema.org JSON-LD, hero meta if shown, i18n translations for all 3 languages.

## SEO and Schema.org

{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "openingHoursSpecification": [
    {
      "dayOfWeek": ["Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "09:00",
      "closes": "16:00"
    }
  ],
  "aggregateRating": {
    "ratingValue": 4.8,
    "reviewCount": 47
  }
}

- reviewCount must be a Number (no quotes)
- og:type must be "website" (not "restaurant")
- Update domain in: canonical URL, og:url, Schema.org URL, robots.txt, sitemap.xml
- Validate at: https://search.google.com/test/rich-results

## Cookie Consent (GDPR / Spain)

- Consent stored in localStorage as 'accepted' or 'declined'
- GA4 only loads after 'accepted'
- Cookie banner privacy link must be a separate a element — NOT inside data-i18n paragraph (innerHTML wipes child nodes on language switch)
- Reset for testing: localStorage.removeItem('cookie_consent') in console

## Google Analytics 4

function loadGA4() {
  const s = document.createElement('script');
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
  s.async = true;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
}

Placeholder: G-XXXXXXXXXX — replace before launch.
Only call loadGA4() after cookie consent accepted.

## Smooth Scroll

Use custom JS smooth scroll — NOT css scroll-behavior: smooth (too snappy on mobile):
window.scrollTo({ top: targetPosition, behavior: 'smooth' });
Add scroll-padding-top equal to nav height so anchors are not hidden under fixed nav.

## Loading Screen

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
  }, 800);
});

## Back to Top Button

Appears after scrolling 400px, sits above WhatsApp button bottom-right.
window.addEventListener('scroll', () => {
  backTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

## Favicon and PWA

- favicon.svg — SVG with brand monogram
- site.webmanifest — update name, short_name, description, colors
- Required: apple-touch-icon.png (180x180), icon-192.png, icon-512.png

## Privacy Policy

src/privacy.html — GDPR compliant for Spanish law. Before launch:
- Replace all UPDATE comments with real restaurant data
- Legal name, CIF, address, data retention period, third-party processors
- Marked noindex — correct, legal pages should not be indexed
- Link from footer and cookie banner

## 404 Page

Branded error page. Vercel serves it automatically for any file named 404.html at root.

## robots.txt and sitemap.xml

Replace placeholder domain before launch. Submit sitemap to Google Search Console after first deploy.

## Before Launch Checklist

- [ ] Real WhatsApp number → update data-phone on #whatsapp-btn and #whatsapp-find-us
- [ ] Real phone number → update Schema.org telephone field
- [ ] GA4 Measurement ID → replace G-XXXXXXXXXX
- [ ] Real domain → update robots.txt, sitemap.xml, og:url, canonical, Schema.org
- [ ] Compress Logo to WebP 30KB max via Squoosh.app
- [ ] Create og-image.jpg (1200x630) for social sharing
- [ ] Create branded PWA icons (apple-touch-icon, icon-192, icon-512)
- [ ] Privacy policy reviewed by lawyer for Spanish GDPR obligations
- [ ] Real menu content (dishes, prices, descriptions)
- [ ] Real opening hours confirmed with client
- [ ] Real address confirmed with client
- [ ] Disable Vercel Deployment Protection (Settings → Deployment Protection → Off)
- [ ] Test on real phone via Vercel URL
- [ ] Final audit score 16+/20

## Print Stylesheet

src/css/print.css linked with media="print". Hides everything except menu. Test with Cmd+P in browser.

## Restaurant-Specific Guidelines

- Barcelona restaurants: WhatsApp is essential — always primary booking CTA
- Pet friendly: feature prominently if applicable — big selling point in Barcelona
- Aesthetic for restaurants: warm Mediterranean — cream/terracotta palette, NOT dark/nightlife
- Aesthetic for bars/nightlife: dark moody, neon glow, bold typography
- Always include Google Reviews section with real reviews — social proof is critical
- Instagram handle always in gallery section
- Schema.org JSON-LD with real address, hours, phone — required for Google rich results
- Always get real content from client before launch: hours, address, phone, WhatsApp number, menu prices
## Skills Available

### redmotion
Scroll animations for restaurant websites. Covers hero parallax, fade+slide reveals, staggered card entrances, and section heading animations. All vanilla HTML/CSS/JS, mobile-first, iOS Safari safe.

To use: read `memory/redmotion/SKILL.md` before adding any motion or animation to the site.