# Millbrooke Design System

Millbrooke is a Sydney-based, locally owned **commercial cleaning and facility management** company serving Australian businesses — offices, industrial sites, healthcare & aged care, education, construction, events and real estate. Its brand promise is built on three pillars: **Compliance. Sustainability. People.**

The single product surface is the marketing website (millbrooke.com.au) — a 6-page Astro site (Home, Compliance & Standards, Green Cleaning & Management, People & Culture, Contact, Privacy) whose one conversion goal is the enquiry form.

## Sources
- GitHub: **https://github.com/sleekermedia/millbrooke** (branch `main`) — Astro 6 site, Tailwind via CDN with an inline `tailwind.config`, `public/styles/global.css`, `public/scripts/app.js`, pages in `src/pages/*.astro`, shell in `src/layouts/Layout.astro`. Built by Sleeker Media.
- Explore that repo further for exact markup when building new Millbrooke designs; everything here was lifted from it.

---

## CONTENT FUNDAMENTALS
- **Voice:** calm, professional, partnership-led. Millbrooke speaks as **"we"** to the client as **"you / your business / your facility"**. Third-person "Millbrooke…" is used heavily in long-form pillar copy ("Millbrooke promotes a culture of transparency…").
- **Spelling:** Australian/British — *programme*, *customise*, *whilst*, *individualised*, *centred*, *recognising*.
- **Headlines:** short declarative sentences ending in a full stop: "Built around your business." "How we deliver work you can trust." "A real partner — there when you need us most." Sentence case. A muted word inside a display line adds rhythm (*Built <muted>around</muted> your business.*).
- **Eyebrows / labels:** UPPERCASE, very wide tracking, often with an em-dash pairing: "Pillar 01 — Trust", "Millbrooke — Commercial Cleaning & Facility Management".
- **Page/feature titles:** Title Case with ampersands: "Compliance & Standards", "Green Cleaning & Management", "Health & Aged Care".
- **CTAs:** Uppercase verb phrases — "Start a Conversation", "Explore Our Approach", "Contact Us", "Send Enquiry", "Learn More".
- **Closing CTA questions:** "Ready to work with a compliance-driven cleaning partner?" "Want a greener approach for your facility?"
- **Body copy:** long, formal, benefit-dense sentences in pillar pages (semicolons, compound clauses); tighter one-liners in tiles ("Daily, scheduled, and one-off office cleaning programs."). Oxford comma used.
- **Em-dashes** ( — ) are a signature connector. Curly quotes for pull-quotes.
- **No emoji.** The only decorative glyph is ◆ in the marquee.
- **Stats** are short tokens: "10+", "100%", "24/7", "AU".
- **System messages:** "Thanks — we'll be in touch shortly." / "Sorry, something went wrong. Please try again or email us directly." / button state "Sending…".

## VISUAL FOUNDATIONS
- **Colour:** a near-monochrome navy system. Primary navy `#192e47` carries heroes, bands, footer, drawer and all text. Steel blue `#4A6FA5` is the only accent — eyebrows on light grounds, feature labels, and the radial glow in CTA bands. Mist `#F0F2F5` page, white `#FFFFFF` cards, line `#DDE2EA` borders, slate `#6B7A93` muted text. Hierarchy on navy is done purely with **white opacity** (85/75/70/60/50/40/30/20/15/10). On light, navy at 80% (body), 70%, 60% (descriptions), 30% (index numerals), 20%/10% (rules).
- **Type:** Montserrat only (300–700). Headlines semibold 600, tight tracking (-0.025em), line-height 1.05 for heroes / 1.25 for H2. Stats in Light 300. Pull-quotes Light Italic. Micro-labels are tiny (10–12px) uppercase with extreme tracking (0.18–0.42em). Index numerals "01" use the system monospace.
- **Rhythm alternates** mist → white → navy bands section by section; sections pad 96px (128px desktop); container 1280px with 24/40px gutters.
- **Backgrounds:** full-bleed photography always under a navy scrim — hero: diagonal gradient navy 90%→75%→40% plus a 64px white/6% **grid overlay** at 40% opacity; pillar cards: bottom-up navy gradient; quote band: flat navy/70 with `background-attachment: fixed`; CTA bands: navy + grid at 30% + blurred steel **radial glow** off the right edge. No pattern textures, no illustrations.
- **Imagery:** cool, clean, desaturated commercial interiors and work scenes — greys, teal-navy walls, daylight. Never warm or grainy. Always photography, never stock illustration.
- **Corner radii:** almost square. 2px (`rounded-sm`) for images, tiles, glass form. 16px only on the tall pillar cards. Fully round pills for all buttons, the toast and icon rings.
- **Cards:** (a) service tiles — flat, no radius, hairline navy/10 grid borders; (b) feature tiles — 2px radius, 1px `#DDE2EA` border, mist fill; (c) feature items — no box, just a navy/20 top rule; (d) pillar cards — photo + gradient, 16px radius. No drop shadows on cards.
- **Borders/rules:** hairlines everywhere — short 64–96px horizontal rules under headings (navy/20 or white/40), left rules on stats (white/15), top rules on feature items.
- **Shadows:** only three — scrolled header `0 10px 30px rgba(0,0,0,.2)`, toast `0 10px 30px rgba(0,0,0,.15)`, and Tailwind `shadow-2xl` on button hover.
- **Transparency & blur:** header becomes navy/95 + 8px blur on scroll; drawer backdrop navy/60 + 4px blur; contact form is frosted glass (white/5 fill, white/15 border, backdrop blur).
- **Motion:** quiet and slow. Elements fade up 16px over 700ms ease-out as they enter (staggered 60–240ms). Hero images Ken Burns 1.08→1 over 14s. Marquee 45s linear. Drawer slides 500ms `cubic-bezier(.22,1,.36,1)`. No bounces.
- **Hover:** service tiles reveal their photo under navy/80 and invert text to white (500ms); pillar card images scale 1.05 (700ms); arrows nudge 4px right; feature icons lift 4px; text links go from white/70→white; outline buttons' border goes white/30→white; solid buttons gain shadow-2xl. No colour-darkening hovers.
- **Press states:** none defined beyond browser default; no shrink.
- **Forms:** underline-only fields (white/25 → white on focus), uppercase 11px labels, transparent fill — only ever on navy.
- **Fixed elements:** the header is fixed and transparent over the hero; no sticky sub-nav, no floating buttons.

## ICONOGRAPHY
- **System:** inline SVG outline icons in the Feather/Lucide style — 24px grid, `stroke="currentColor"`, `stroke-linecap/linejoin="round"`, no fill. Stroke 1.5 for decorative icons, 2 for arrows/chevrons in CTAs and breadcrumbs.
- **No icon font, no sprite, no PNG icons, no emoji.** Unicode use is limited to ◆ (marquee separator) and the em-dash.
- Icons always sit in a container: 48px outline ring (service tiles), 40px ring (contact rows), 48px solid navy circle (feature items) or 44px 2px-radius navy square (feature tiles).
- The `Icon` component (`components/core/Icon.jsx`) contains the exact path data copied from the site's inline SVGs (arrow-up-right, arrow-right, chevron-right, menu, close, mail, map-pin, shield(-check), eye, clipboard-check, message, leaf, recycle, footprints, graduation-cap, trending-up, award, users, building, factory, home, school, heart, wrench, star). If you need more, use **Lucide** (https://lucide.dev) at the same stroke — it matches.
- `assets/icons/` holds four standalone SVGs shipped in the repo (leaf, recycle, foot-print, graduate) — unused by the current pages but on-brand.

## Logo
- `assets/logo/millbrooke-logo.png` — **white** wordmark + concentric-loop mark, for navy/photo grounds (used in header & footer).
- `assets/logo/millbrooke-logo-on-light.png` — navy version for light grounds.
- `assets/logo/favicon.ico`.
Header height 44px (36px mobile); footer 48px. Never recolour or redraw.

---

## Index
- `styles.css` — entry point (imports only).
- `tokens/` — `fonts.css` (Montserrat via Google Fonts), `colors.css`, `typography.css`, `spacing.css` (spacing, radii, shadows, motion), `base.css` (global behaviours: fade-up, Ken Burns, grid overlay, marquee, field).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `assets/` — `logo/`, `icons/`, `images/` (17 photographs).
- `components/` — React primitives (below), one `@dsCard` per folder.
- `ui_kits/website/` — click-through recreation of the site.
- `SKILL.md` — Agent Skill entry. `github.md` — source sync record.

## Components
- **core:** `Icon`, `Button`, `TextLink`, `Eyebrow`, `IconBadge`
- **navigation:** `SiteHeader`, `MenuDrawer`, `SiteFooter`, `Breadcrumb`
- **content:** `SectionHeading`, `ServiceTile`, `PillarCard`, `FeatureItem`, `FeatureTile`, `StatBlock`, `Marquee`
- **forms:** `Field`, `ContactForm`
- **feedback:** `Toast`
- **sections:** `PageHero`, `CtaBand`, `QuoteBand`

The source repo has no component library — these are extracted from repeated markup patterns in the Astro pages.

### Intentional additions
- `Icon` — wraps the site's inline SVG paths so they're reusable.
- `Button variant="navy"` — the site never places a CTA on a light ground; this provides one in brand.

## UI kits
- `ui_kits/website/` — Home, Compliance & Standards, Green Cleaning & Management, People & Culture, Contact.
