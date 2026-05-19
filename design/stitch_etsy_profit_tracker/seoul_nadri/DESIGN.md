---
name: Seoul Nadri
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#484740'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#79776f'
  outline-variant: '#cac6bd'
  surface-tint: '#605e58'
  primary: '#605e58'
  on-primary: '#ffffff'
  primary-container: '#f0ece4'
  on-primary-container: '#6c6a64'
  inverse-primary: '#cac6bf'
  secondary: '#6f5c35'
  on-secondary: '#ffffff'
  secondary-container: '#f7dcac'
  on-secondary-container: '#746039'
  tertiary: '#635d5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#f3eaeb'
  on-tertiary-container: '#6f696a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e6e2da'
  primary-fixed-dim: '#cac6bf'
  on-primary-fixed: '#1c1c17'
  on-primary-fixed-variant: '#484741'
  secondary-fixed: '#fadfaf'
  secondary-fixed-dim: '#ddc395'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#564420'
  tertiary-fixed: '#e9e0e1'
  tertiary-fixed-dim: '#cdc4c5'
  on-tertiary-fixed: '#1e1b1c'
  on-tertiary-fixed-variant: '#4b4546'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  hanji-cream: '#F0ECE4'
  brasserie-gold: '#9A845A'
  slate-charcoal: '#231F20'
  soft-greige: '#D9D2C5'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-desktop: 80px
  margin-mobile: 24px
  gutter: 24px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  stack-xl: 96px
---

## Brand & Style

This design system embodies the intersection of a sophisticated European brasserie and the serene, rhythmic architecture of a traditional Korean Hanok. The personality is curated, airy, and high-end, focusing on the "Beauty of Emptiness" (*Yeobaek-ui mi*) to ensure the content remains the focal point.

The aesthetic follows a **Minimalist Editorial** style. It utilizes expansive whitespace, a limited but rich color palette, and structured typographic hierarchies. The interface should feel like a premium lifestyle magazine—intentional, quiet, and deeply tactile. Visual cues are drawn from natural textures like *Hanji* paper, dark charred wood (*Sumi-fication*), and polished brass accents.

## Colors

The palette is anchored in a triple-tone neutral base to create warmth and depth without clutter. 

- **Primary (Hanji Cream):** Used for large surface areas and page backgrounds to evoke the feeling of artisanal paper.
- **Secondary (Brasserie Gold):** A rich wood and metal tone used for interactive highlights, icons, and subtle dividers.
- **Tertiary (Slate Charcoal):** Used for primary text and structural elements to provide high-contrast legibility and a grounded, premium feel.
- **Accent (Soft Greige):** Utilized for secondary containers, borders, and subtle UI depth to distinguish layers without relying on shadows.

## Typography

The typography system is built on a high-contrast pairing that balances classical European elegance with modern clarity.

- **Headlines:** Use **Playfair Display**. Its high stroke contrast provides an editorial feel. In Korean contexts, this pairs with high-quality serif fonts that emphasize the calligraphic origins of the characters.
- **Body & UI:** Use **Plus Jakarta Sans**. Its open apertures and soft geometric shapes maintain a friendly yet professional tone. It offers excellent legibility at smaller sizes for menus and long-form descriptions.
- **Styling:** Use `label-caps` for section headers and small navigational elements to add an architectural, structured feel to the layout.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** on desktop (12 columns, max-width 1280px) and a **Fluid Fluid** on mobile (4 columns). 

- **The Grid:** Center-aligned with generous outer margins to compress the content and create a "boutique" feel.
- **Rhythm:** Vertical spacing is intentionally oversized (`stack-xl`) between major sections to emphasize the "Airy" brand pillar. 
- **Asymmetry:** Use staggered image placements and off-center text alignments to mimic the organic flow of traditional Korean garden layouts.

## Elevation & Depth

This design system avoids traditional drop shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

- **Layers:** Depth is communicated by placing `White` surfaces over `Hanji Cream` backgrounds. 
- **Outlines:** Use 1px solid borders in `Soft Greige` or `Brasserie Gold` to define containers. 
- **Glassmorphism:** Reserved strictly for global navigation bars and sticky headers, using a very high background blur (20px+) and 80% opacity `Hanji Cream` to maintain the airy feel without losing structural integrity.

## Shapes

The shape language is primarily **Soft (0.25rem)**. While the overall layout is architectural and linear, subtle rounding on buttons and cards softens the interface, making it feel more approachable and "human." 

- **Standard Elements:** Use `rounded-sm` (4px).
- **Interactive Containers:** Large cards or modal surfaces should use `rounded-lg` (8px).
- **Textual Framing:** Do not use roundedness on vertical dividers or structural line-art, which should remain sharp and clean.

## Components

- **Buttons:** Primary buttons use the `Slate Charcoal` background with `White` text, featuring a square-ish profile with minimal rounding. Secondary buttons are outlined in `Brasserie Gold`.
- **Input Fields:** Bottom-border only styling to mimic traditional stationery, using `Soft Greige` as the inactive state and `Slate Charcoal` for focus.
- **Cards:** Flat surfaces with 1px `Soft Greige` borders. Imagery within cards should always feature a slight desaturation to match the brand's muted palette.
- **Chips/Badges:** Small, `label-caps` typography inside `Hanji Cream` containers with a `Brasserie Gold` border.
- **Navigation:** A minimalist top-bar with a centered logo and high-letter-spaced text links. Use a "hamburger" menu even on tablet to preserve whitespace.
- **Dividers:** Use thin, horizontal lines in `Brasserie Gold` to separate content, often paired with a centered icon or character to denote a section break.