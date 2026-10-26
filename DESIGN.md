---
name: Nutriva Global
description: B2B healthy-food supplier site — product photography on food-coloured fields, confident grotesque type, the proposal request always one step away.
colors:
  paper: "#FFFFFF"
  oat: "#F5F2EA"
  line: "#E2DED3"
  line-strong: "#CFC9BA"
  forest-ink: "#14342B"
  ink-soft: "#4A5D54"
  ink-faint: "#6E7D75"
  leaf-green: "#2F7A4E"
  leaf-green-deep: "#24613D"
  green-wash: "#E6F0E7"
  field-oat: "#F1DFB6"
  field-sage: "#D5E5C7"
  field-apricot: "#F6CDB2"
  field-sky: "#CFDCEC"
  apricot-ink: "#B4521F"
  band-text: "#F5F2EA"
  band-soft: "#B8C8BF"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5.4vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.8vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.5vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  control: "999px"
  input: "12px"
  card: "14px"
  image: "20px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  section: "clamp(4.5rem, 9vw, 8rem)"
  container: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.leaf-green}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.leaf-green-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  button-light:
    backgroundColor: "{colors.band-text}"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.control}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.input}"
    height: "48px"
    padding: "11px 16px"
  chip:
    backgroundColor: "rgba(20, 52, 43, 0.07)"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.control}"
    padding: "5px 12px"
  line-tile:
    backgroundColor: "{colors.field-sage}"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.card}"
    padding: "18px 20px"
---

# Design System: Nutriva Global

## Overview

**North star: the produce aisle, set by a careful hand.** The site is the category standard for a healthy-food supplier, executed at the craft level of Oatly and Rude Health: generous product photography sitting on soft food-coloured fields, a confident grotesque that sets every heading, and a calm white-and-oat page that lets the food carry the colour. It is built for trade buyers (distributors, importers, retailers): every page answers what is supplied, from where, on what terms, and how to ask for a proposal.

It refuses the template the site replaced: eyebrow labels above headings, gradient text, gold divider bars, emoji icon-card grids and a loading screen.

## Colors

- **Forest Ink `#14342B`** — all type and the dark bands (CTA, footer). Never pure black.
- **Leaf Green `#2F7A4E`** — every action and only actions: buttons, link-arrows, focus rings, checkmarks. Hover deepens to `#24613D`.
- **Paper `#FFFFFF` / Oat `#F5F2EA`** — the two grounds, alternating section by section. Hairlines `#E2DED3` / `#CFC9BA`.
- **Food fields** — one tint per product line, and that line only: Oat `#F1DFB6` (Alimentos Saludables), Sage `#D5E5C7` (Plant-Based), Apricot `#F6CDB2` (Superfoods), Sky `#CFDCEC` (Línea Global). They hold the line's photography, colour its hero band, tile and nav dot. Mapping lives in `src/data/site.ts`.
- **Apricot Ink `#B4521F`** — reserved for the "Datos de ejemplo" note.
- Secondary text is tinted green-grey (`#4A5D54`, `#6E7D75`), never neutral grey. On dark bands, use `#F5F2EA` and `#B8C8BF`.

## Typography

- **Bricolage Grotesque** (display, 600–800, optical size axis) for every heading, prices, figures and the wordmark. Tracking −0.025em on display, −0.015em on titles; headings use `text-wrap: balance`.
- **Hanken Grotesk** (400–700) for body, labels, buttons and tables.
- Scale: display 4.75rem max → headline 3.25rem → title 1.5rem → lede 1.31rem → body 1.0625rem → label 0.875rem. Numbers in tables and prices use tabular figures.

## Layout

- Container 1320px with a fluid gutter; sections pad `clamp(4.5rem, 9vw, 8rem)` vertically and alternate Paper and Oat.
- Section heads are a two-column row: heading left (max ~14em), lede right-aligned at the baseline. They collapse to one column under 860px.
- Asymmetric splits (5/7, 7/5, 4/8) carry content; equal card grids are used only for actual products.
- Breakpoints in use: 1140px (header collapses to menu), 960px, 860px, 700px, 600px, 520px.

## Elevation & Depth

Flat. Depth comes from tonal layering (Paper over Oat, white panels on Oat, food fields behind photos) and hairline rules. No card shadows. The only blur is the sticky header's backdrop.

## Shapes

- Images 20px radius; tiles and panels 14px; inputs 12px; buttons, chips and nav pills fully rounded.
- Rules are 1px hairlines; the process steps use a 2px ink rule with numbered ink discs.

## Components

- **Buttons**: primary (leaf green), ghost (ink outline, fills ink on hover), light and ghost-light for dark bands. 48px tall, arrow icons nudge 3px on hover.
- **Proposal form**: lives inside the home hero (email, country, line) and as the full form on /contacto, which pre-fills line and product from `?linea=&producto=` and validates inline with accessible errors.
- **Line tiles / price sheets / tables**: product lines are shown as tinted tiles, white panels with a field-coloured top edge, and price tables, not decorative cards.
- **Steps**: numbered ordered list on an ink rule, used where the order matters (process, onboarding of distributors).
- **FactList**: definition list in 2–3 columns with hairlines, replacing icon cards for benefits.
- **Figures + ExampleNote**: statistics set as text with a "Datos de ejemplo" note. `SHOW_EXAMPLE_NOTES` in `src/data/site.ts` turns the notes off once real data replaces the placeholders.
- **FAQ**: native `<details>` accordion with FAQPage JSON-LD.

## Do's and Don'ts

- Do let one line own its colour: a page about Superfoods is apricot, everywhere on that page.
- Do keep the proposal action visible: header button, hero form, CTA band, and a "Pedir/Cotizar" next to every product.
- Do label placeholder statistics, testimonials and certifications until they are real.
- Don't add eyebrow/kicker labels above headings, gradient text, emoji icons or icon-card grids.
- Don't introduce shadows on cards or a second accent colour for actions.
- Don't repeat the same photo across a product grid; use the price-sheet layout when a line has no product photos.
