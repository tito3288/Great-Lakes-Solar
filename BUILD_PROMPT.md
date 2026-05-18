# Build the Great Lakes Solar homepage — Phase 2 (Design)

You are Claude Code running inside Cursor. The scaffolded Astro project for **Great Lakes Solar** is open as the workspace, and the design hand-off files are already in this workspace.

## Source of truth (already in this workspace)

- `design/index.html` — the rendered homepage mockup (frozen reference)
- `BLUEPRINT.md` — design intent: vibe, sections, typography, palette, spacing, unique treatments
- `theme.config.ts` — extracted theme tokens (colors, fonts, radius). You will move this to `src/lib/theme.config.ts` in step 1; from then on, treat `src/lib/theme.config.ts` as the canonical theme source.

Read all three before writing any code.

## What to do

1. **Move `theme.config.ts` into `src/lib/`.** Before anything else, move `theme.config.ts` from this folder into `src/lib/theme.config.ts` so all live code lives under `src/`. The `design/` folder remains a frozen reference (only `index.html` and any other reference assets stay there). Update any imports to point at the new path.

2. **Wire the theme tokens into Tailwind.** First, detect which Tailwind version was installed by `astro add tailwind`:
   - Check `package.json` for `tailwindcss` (or `@tailwindcss/vite`) — if the major version is **4 or higher**, use the v4 CSS-first config: define an `@theme` block in your global stylesheet (typically `src/styles/global.css`) and mirror the values from `theme.config.ts` into it (CSS custom properties like `--color-primary`, `--font-heading`, `--radius-md`). Keep `theme.config.ts` as-is so non-CSS code can still import it.
   - If the major version is **3**, use the v3 JS config: create/update `tailwind.config.ts` to import `theme.config.ts` and drive `theme.extend.colors`, `theme.extend.fontFamily`, and `theme.extend.borderRadius` from it.

   Either way, the goal is: tokens live in `theme.config.ts` (or its CSS mirror), and components reference them by semantic name. **No hard-coded hex values in components.**

3. **Color naming — handle the mockup's class style, do NOT ask the user.** Inspect the color classes used in `design/index.html` and decide which case applies:

   - **Case A — stock Tailwind palette classes** (e.g. `bg-stone-50`, `text-slate-900`, `border-zinc-200`): these are placeholders, not design tokens. **Translate them to the semantic tokens** in `src/lib/theme.config.ts` — e.g. `bg-stone-50` → `bg-background`, `text-slate-900` → `text-foreground`. Components reference the semantic names; the raw palette names disappear.

   - **Case B — brand-evocative custom names** (e.g. `bg-sage`, `bg-lavender`, `text-cream`, `bg-warmGray`): these are meaningful brand tokens. **Keep them as-is in components** AND **add them as aliases in `src/lib/theme.config.ts`** so the TS file still drives the values. Then expose the same names in Tailwind (v4 `@theme` block, or v3 `theme.extend.colors`). Both the mockup HTML and your components reference the same brand names — no rename pass needed.

   - **Case C — mixed**: prefer the brand names (more design-meaningful). For any stock palette class describing the same color as a brand name, replace with the brand name.

   In all cases, components must never reference hex values directly — every color goes through `src/lib/theme.config.ts` (or its CSS-mirror in v4). Pick the case that matches the mockup and proceed; do not stop to ask the user which naming style to use.

4. **Recreate the homepage** as accessible Astro components, section by section, faithful to `design/index.html` and `BLUEPRINT.md`. Break the page into reusable `.astro` components under `src/components/`.

5. **Use the mockup's copy literally.** When recreating each section, use the exact text content as it appears in `design/index.html` — headings, body copy, button labels, testimonials, navigation links. The mockup was generated with the client's real voice and services in mind (often pulled from their existing site). Only invent new copy if a section is genuinely incomplete in the mockup; never lorem ipsum, never paraphrase the mockup's wording.

6. **Fully responsive** (mobile, tablet, desktop). Mobile-first. The viewport meta tag is already in Astro's default layout — confirm it. **If the mockup includes a mobile hamburger menu button, implement it as a functional toggle** (a small inline `<script>` controlling a hidden drawer, or an Astro client directive). Do NOT ship a button that does nothing just because the mockup omitted the drawer behavior — that's a mockup limitation, not a design choice.

7. **Accessibility** — semantic HTML, descriptive alt text, keyboard navigation, sufficient color contrast. Note any contrast issues that fall below WCAG AA in the hand-off summary; do not silently downgrade them.

8. **SEO-ready** — `<title>`, meta description, Open Graph tags, canonical URL.

9. **Verify** — run `npx astro check` and `npx astro build`. Fix any errors before reporting done.

## Hand-off back to the user

When done, summarize what was built section by section, and note any decisions you made (e.g. invented copy, breakpoints not present in the mockup, components extracted).

The slugified project name is `great-lakes-solar`.
