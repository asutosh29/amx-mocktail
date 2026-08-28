# Velvet Pour — Style Guide & Design System Notes

Reference implementation: `src/app/globals.bak.css` (tutorial source).
Active implementation: `src/app/globals.css` (Tailwind v4 + shadcn).

---

## 1. Design Tokens

Semantic colors live in `:root` / `.dark`, then are aliased in `@theme inline` so Tailwind utilities are generated.

| Token | Value | Usage |
| --- | --- | --- |
| `--color-yellow` | `#e7d393` | Accent color. `text-yellow`, `hover:text-yellow`, `bg-yellow` |
| `--color-white-100` | `#efefef` | Near-white. `text-white-100`, `bg-white-100` |
| `--background` / `--foreground` | shadcn oklch | Base bg/text, dark-forced via next-themes |
| `--font-modern-negra` | ModernNegraDemo.ttf (local) | Display font — headings, drink names, big numerals |
| `--font-serif` | DM Serif Text | Quotes, sub-headlines, descriptions |
| `--font-sans` | Mona Sans | Body text, UI |

**Rules:**
- Never use arbitrary values (`w-[17px]`, `text-[#505050]`) — only semantic tokens.
- New styling variables go in the `@theme` block of `src/app/globals.css`, not config files.
- `--font-modern-negra` is loaded via `next/font/local` in `layout.tsx`, exposed as a CSS var.

---

## 2. Custom Utilities (`@utility`)

All defined in `src/app/globals.css`.

| Utility | What it does |
| --- | --- |
| `flex-center` | `flex items-center justify-center` — center children in a row |
| `col-center` | `flex flex-col items-center justify-center` — center children in a column |
| `abs-center` | `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` — perfect overlay centering |
| `text-gradient` | Vertical white → `#898989` gradient clipped to text (metal-shine headings) |
| `radial-gradient` | `#434343` center → black 50% → transparent edge. Soft glow/vignette so black sections aren't flat |
| `masked-img` | Masks an image into `/images/mask-img.png` shape, centered, 50% size |

---

## 3. Global Rules

- `main` — `w-full overflow-x-hidden`. **Never remove the overflow lock**: GSAP translates elements horizontally, and without this you get horizontal scrollbars on every scroll animation.
- `nav` — `fixed z-50 w-full`. Logo (`p`) in Modern Negra, links (`a`) with `text-nowrap`, `ul` using `flex-center`.
- html/body base — black background, white text, `scroll-behavior: smooth`, `overflow-x: hidden`.

---

## 4. Section Anatomy (component class patterns)

Every section follows the same skeleton:

```
relative section → corner leaf decorations → container mx-auto content → radial-gradient glow → overflow-hidden
```

### Hero (`#hero`)
- `min-h-dvh relative z-10` with a **transparent border** (reserves layout space, prevents margin collapse).
- `h1` — `text-8xl md:text-[20vw] font-modern-negra leading-none` — scales with viewport.
- `.left-leaf` / `.right-leaf` — decorative leaves pinned to corners (`absolute left-0` / `right-0`, `md:w-fit w-1/3`).
- `.body` — absolute copy block: `container mx-auto left-1/2 -translate-x-1/2 lg:bottom-20 md:top-[30vh]`.
- `.content` — flex row → column on mobile, spreads text blocks apart.
- Big yellow prompt: `font-modern-negra text-6xl text-yellow`; CTA link `hover:text-yellow`.
- Background `video` — `w-full absolute bottom-0 left-0 md:object-contain object-cover`.

### Cocktails (`#cocktails`)
- `min-h-dvh overflow-hidden` + corner leaf ids `#c-left-leaf` / `#c-right-leaf`.
- `.list` — two columns (`.popular` / `.loved`), `pt-40`, `gap-20`, flex-col on mobile.
- List rows: `li` = `flex justify-between items-start`; `h3` name in `font-modern-negra text-yellow`; `span` price.

### About (`#about`)
- 12-col grid intro: `grid grid-cols-1 lg:grid-cols-12 gap-5`, `.sub-content` = `md:col-span-4`.
- Stat numbers: `text-yellow font-bold text-5xl`.
- `.badge` — white pill: `inline-block rounded-full bg-white text-black px-4 py-2 text-sm font-medium`.
- Image grids: `.top-grid` / `.bottom-grid`, each `> div` = `rounded-3xl overflow-hidden h-72 relative`, `img` = `object-cover w-full h-full`.

### Art (`#art`) — the centerpiece
- `flex-center flex-col min-h-dvh relative radial-gradient`.
- Ghost headline `h2` — huge `text-[20vw]` Modern Negra in muted gray, sits behind the image.
- `.cocktail-img` — `md:w-[60vw] h-[70vh] rounded-4xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2` — floating centered drink image.
- `.masked-container div` — **starts `opacity-0`; GSAP reveals it on scroll**. Quote `h3` in `font-serif`.

### Menu (`#menu`)
- Tab bar: `grid md:grid-cols-4 grid-cols-2`, tab `button` = Modern Negra, `hover:text-yellow hover:border-yellow border-b-1`.
- `.arrows` — absolute prev/next flanking the drink image.
- `.cocktail img` — `object-contain h-[60vh]`.
- `.recipe` — bottom bar: `.info #title` (yellow Modern Negra drink name), `.details h2` serif headline + `p` description.

### Contact / Footer (`#contact`)
- `text-center radial-gradient overflow-hidden`, corner leaves (right leaf `hidden lg:block`).
- `.content` — `min-h-dvh flex flex-col justify-between` centered column.
- `h2` Modern Negra giant, `h3` uppercase kicker, `p` contact lines.
- `.drink-img` — `absolute bottom-0 right-0 pointer-events-none`.

---

## 5. Design Language Summary

- **Display type:** Modern Negra everywhere big — headings, drink names, tab labels, arrows.
- **Accent:** `text-yellow` (`#e7d393`) for emphasis — drink names, prompts, hover states, stat numbers.
- **Serif:** DM Serif Text for quotes and sub-headlines (`.details h2`, masked quote).
- **Background:** black base + `radial-gradient` glows per section so the page isn't flat.
- **Reveals:** elements start `opacity-0` and GSAP animates them in on scroll (`ScrollTrigger`).
- **Leaves:** every section has corner leaf imagery (`.left-leaf`/`.right-leaf` variants) for decoration.

---

## 6. Migration Notes

- Fonts come from `next/font` in `layout.tsx` — **do not** copy the `@import url(...)` / `@font-face` from `globals.bak.css`.
- The site is force-dark via next-themes (`forcedTheme="dark"`), so the `.dark` palette in globals.css is the active one.
- Token-first: if a class needs a color not in the token set, add the token to `@theme` before using it.
