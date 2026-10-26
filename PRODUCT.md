# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: B2B buyers — distributors, importers, retail chains and independent health-food retailers evaluating Nutriva Global as a wholesale supplier of healthy foods for their market. They arrive comparing suppliers: they want to know what is in the catalogue, where it comes from, what certifications and documentation ship with it, minimum orders and logistics, and how fast someone answers.

Secondary: end consumers who land on the site; they are served but are not the audience the pages are built to convince.

## Product Purpose

Nutriva Global is an international distributor of healthy, organic and sustainable food products, headquartered in Amsterdam. The site exists to turn a qualified trade buyer into a conversation: a contact-form submission, WhatsApp message or email asking for the commercial proposal. Success is a distributor understanding the catalogue and the supply terms quickly enough to reach out.

## Positioning

A single supplier covering four lines (healthy snacks/bars/granola, plant-based, superfoods, and market-adapted "Línea Global" editions) with traceability from producer to buyer and documentation shipped with each order. Specific origin stories in the copy (Andean quinoa, chía from Mexico/Argentina, flax from Canada) are the material a neighbouring brand could not copy.

## Operating Context

- Buyers evaluate on desktop during work hours, often comparing several suppliers; they also reach out from mobile via WhatsApp.
- Conversion paths: `/contacto` form (formsubmit.co), WhatsApp deep link, email.
- Catalogue data lives in `src/data/products.json` (4 categories, featured products with price/unit/benefits/certifications).
- Spanish-language site (`lang="es"`), with SEO metadata and JSON-LD in `src/layouts/Layout.astro`.

## Capabilities and Constraints

- Stack: Astro 6, Tailwind CSS 4 (Vite plugin), GSAP available; deployed on Cloudflare Pages (`public/_headers`).
- Routes: `/`, `/productos/alimentos-saludables`, `/productos/plant-based`, `/productos/superfoods`, `/productos/linea-global`, `/nosotros`, `/contacto`.
- Images are imported via `astro:assets` from `src/assets/`.
- No cart or checkout: ordering happens through contact with a sales advisor.

## Brand Commitments

- Name: Nutriva Global. Tagline in use: "Nutriendo el mundo, naturalmente."
- The user gave full visual freedom for the redesign (2026-10-26): the existing logo, green/gold palette and loading screen are not binding. Name, copy and content are preserved.

## Evidence on Hand

- Product photography and category images in `src/assets/` (hero, 4 category images, 3 product images, about_team).
- **All statistics (20+ countries, 50k+ clients, 98% satisfaction, market figures), testimonials (María González, Kenji Tanaka, Carlos Medina) and certification claims (Organic EU, Non-GMO, Vegan Society, ISO 22000, HACCP, Fair Trade, ISO 17025) are placeholder content confirmed by the user.** Future work must not add new claims. On 2026-10-26 the user asked to remove the on-page "Datos de ejemplo" notes (`SHOW_EXAMPLE_NOTES = false` in `src/data/site.ts`); the content still needs replacing with real data.
- Contact details (phone +31 20 123 4567, info@nutrivaglobal.com, Amsterdam address) are as currently in the code; treat as placeholder unless confirmed.

## Product Principles

1. Built for the trade buyer: every page answers "can this supplier serve my market?" before it tries to delight.
2. Show the supply chain, don't adjective it: origin, documentation and terms over superlatives.
3. One clear next step: talk to a sales advisor, reachable from every page.
4. Honest proof only: placeholder evidence is labelled; nothing is invented.
