# Great Lakes Solar — Design Blueprint

## Overall direction & vibe
The design feels like a calm, premium concierge service rather than a hard-sell solar pitch. The mood is editorial and homeowner-friendly: warm cream backgrounds, soft rounded surfaces, generous whitespace, and a confident but quiet typographic voice. The audience is thoughtful residential homeowners who want guidance and clarity, so the personality is informed, grounded, and trustworthy with a touch of modern lifestyle-brand polish.

## Section-by-section breakdown

### Header (sticky)
A sticky top bar with a translucent cream background (90% opacity) and a subtle backdrop blur, separated from content by a hairline border. Left side: client logo, sized roughly 48–56px tall, capped to ~210px wide. Right side on desktop: horizontal nav of uppercase, wide-tracked links (Benefits, Process, FAQs) followed by a pill-shaped dark CTA button ("Get a Quote") in ink with white text. On mobile, the nav collapses behind a bordered icon-button hamburger that toggles a vertical dropdown menu with divider lines and a full-width pill CTA at the bottom.

### Hero
A full-bleed inset photo card with very rounded corners (24–32px). A cinematic aerial photo of solar panels fills the card; a top-to-bottom black gradient (80% to 10%) deepens the lower area for legibility. Content is anchored to the bottom of the card in a 5-column grid:
- Left (3 cols): white text. Tiny uppercase eyebrow with wide letter-spacing, then an oversized semibold headline (up to ~8xl on desktop) with very tight leading. Supporting paragraph in white at 80% opacity.
- Right (2 cols): a floating white consultation card with rounded ~28px corners and a deep shadow. Contains a teal uppercase eyebrow, a serious headline, then a form with cream-filled inputs/select (rounded-xl, hairline borders, amber focus ring) and a full-width amber submit button with bold label.

### Benefits section
Light cream background. Two-column layout on desktop (5/7 split):
- Left column is a sticky panel that, on large screens, becomes a white rounded card with subtle border and shadow, holding a teal eyebrow, a massive headline, supportive paragraph in slate, and a small teal pill-icon + reassurance line.
- Right column is a stack of three large benefit cards, each ~32px radius. Cards alternate white and sand (warm beige) backgrounds. Each card uses a two-column inner grid: a 48px rounded-2xl numbered badge (01 amber-tinted, 02 white on sand with teal text, 03 teal-tinted) and a content block with a large semibold title and a generous body paragraph. Hover lifts shadow subtly.

### Homeowner story / testimonial
White background, two-column layout. Left: a large rounded image (~32px radius, 360–460px tall). Right: teal uppercase eyebrow, a 4–5xl semibold headline, then a quote card on cream with rounded corners and a hairline border. The quote uses large 2xl serif-feeling sans text, followed by a small uppercase wide-tracked attribution in slate.

### Process section
Cream background. Teal eyebrow, oversized headline. A three-column grid of steps; each step starts with a heavy 2px black top border, then a giant amber numeral (01/02/03 at 5xl), a 2xl semibold title, and a slate paragraph. Feels like an editorial chapter index.

### Real-home context (dark band)
Full-width dark band using ink (near-black) background with white text. Two columns: left holds an amber uppercase eyebrow, a 4–5xl headline, and a white/70 paragraph; right is a tall rounded image. Provides visual rhythm and contrast in the middle of the page.

### FAQ section
Narrow centered max-width (~4xl) on cream. Teal eyebrow and oversized headline. Stack of white rounded-2xl cards, each with a left-aligned bold question and a +/– toggle on the right. Answers expand below in slate body text. Spacing is generous; corners are softer (16px).

### Footer
White background with a top hairline. Left: logo, then a slate description paragraph. Right: a dark pill CTA button ("Schedule a Consultation") aligned to the start on desktop. Simple, unfussy close.

## Typography
- Heading and body share a single family: Inter, falling back to ui-sans-serif, system-ui, sans-serif.
- Headings are semibold (600), with very tight leading (0.9–1.0) on hero/section titles and tight tracking. Sizes scale aggressively: hero up to ~8xl (~6rem), section H2s 4xl–6xl, card H3s 2xl–3xl.
- Body copy is regular weight at lg–xl (1.125–1.25rem) with relaxed leading for readability; slate-600/700 for muted body, white/70–80 over imagery.
- Eyebrows are tiny (11–12px), uppercase, bold, with wide letter-spacing (~0.2–0.25em), often colored teal or amber.
- Attribution and meta lines use small uppercase wide-tracked slate text.
- Buttons use semibold to bold weights; pill CTAs keep natural casing while nav uses uppercase tracked.

## Color palette
- Cream `#FAF7F0` — primary page background and form input fill.
- Sand `#EFE6D4` — warm secondary surface used on alternating benefit cards and accents.
- Ink `#111827` — primary foreground text, dark CTAs, dark band background.
- Teal `#2F7E8A` — accent for eyebrows, icon tints, supporting highlights.
- Amber `#E9A82E` — primary action accent: submit button, process numerals, focus rings.
- White `#FFFFFF` — card surfaces, dark-band foreground text.
- Slate-600 `#475569` — muted body text on light surfaces.
- Slate-700 `#334155` — slightly darker muted body on sand surfaces.
- Slate-500 `#64748B` — meta/attribution text.
- Black at low opacities (5–10%) — hairline borders and overlays.
- Black gradient overlay (80% → 10%) for hero image legibility.

## Spacing & layout
- Max content width: 1280px (max-w-7xl), centered with horizontal padding of 16px mobile, 24px from sm up.
- Vertical section rhythm: 64–96px on mobile (py-16), 80–96px on larger screens (py-20/24).
- Hero card uses min-height ~560px mobile, ~650px sm+, with internal padding from 20px up to 56px.
- Grid systems: 12-col split (5/7) for benefits, 2-col 50/50 for testimonial and dark band, 3-col for process steps.
- Breakpoints follow Tailwind defaults: sm 640, md 768, lg 1024, xl 1280.
- Form fields and small CTAs use rounded-xl (~12px); cards use ~24–32px radii; pills use full radius.
- Generous gaps inside grids (20–48px) and between stacked cards (20–24px).

## Unique visual treatments
- Sticky translucent header with backdrop blur (`bg-cream/90 backdrop-blur`).
- Hero as an oversized rounded "poster" card with a dark vertical gradient over a photo and a floating white form card overlapping the lower right.
- Very large display typography with sub-1.0 leading creating an editorial, almost magazine-cover feel.
- Alternating warm surfaces (white and sand) inside the benefits column for soft visual rhythm without harsh contrast.
- Numbered badge chips in rounded-2xl tinted swatches (amber/20, white/70, teal/10) — a subtle tonal system.
- Process steps use a top 2px ink rule plus oversized amber numerals as a typographic divider motif.
- Dark ink band mid-page creates a strong contrast palette inversion before returning to cream.
- Quote card sits inside a cream surface against white, creating a layered, tactile depth.
- Soft, consistent shadows (shadow-sm to shadow-2xl) and hairline `border-black/5` borders give surfaces a paper-like quality.
- Focus states use an amber/60 ring, tying interaction feedback to the primary accent.
- FAQ uses simple +/– glyph swap for expand/collapse, keeping the UI minimal.
