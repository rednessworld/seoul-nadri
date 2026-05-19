---
name: Linen & Clay
colors:
  surface: '#fff8f4'
  surface-dim: '#e2d8d1'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf2ea'
  surface-container: '#f6ece5'
  surface-container-high: '#f1e6df'
  surface-container-highest: '#ebe1da'
  on-surface: '#1f1b17'
  on-surface-variant: '#4f453e'
  inverse-surface: '#352f2b'
  inverse-on-surface: '#f9efe8'
  outline: '#81756c'
  outline-variant: '#d3c4ba'
  surface-tint: '#765841'
  primary: '#765841'
  on-primary: '#ffffff'
  primary-container: '#af8c72'
  on-primary-container: '#3e2713'
  inverse-primary: '#e6bfa3'
  secondary: '#645d53'
  on-secondary: '#ffffff'
  secondary-container: '#e8ded1'
  on-secondary-container: '#686257'
  tertiary: '#5e5e5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#94938f'
  on-tertiary-container: '#2c2c29'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#e6bfa3'
  on-primary-fixed: '#2b1705'
  on-primary-fixed-variant: '#5c412b'
  secondary-fixed: '#ebe1d4'
  secondary-fixed-dim: '#cfc5b9'
  on-secondary-fixed: '#1f1b13'
  on-secondary-fixed-variant: '#4c463c'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fff8f4'
  on-background: '#1f1b17'
  surface-variant: '#ebe1da'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.5'
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 80px
  container-padding: 24px
  gutter: 16px
  max-width: 1200px
---

## Brand & Style

The design system is anchored in the concept of "slow living"—an aesthetic that prioritizes breathability, artisanal quality, and a profound sense of serenity. It targets a discerning audience that values mindful consumption, travel, and craft.

The visual style is a fusion of **Minimalism** and **Tactile/Skeuomorphic** elements. While the layouts remain clean and spacious, surfaces are treated with subtle organic textures—reminiscent of handmade paper or sun-bleached linen—to avoid the coldness of digital sterility. The UI should evoke the emotional response of walking into a quiet, well-lit gallery: calm, intentional, and high-end.

## Colors

The palette is derived from natural, unrefined materials. 

- **Primary (Clay):** A muted, earthy terracotta used sparingly for calls to action and critical focal points.
- **Secondary (Linen):** A warm, desaturated beige that serves as the primary surface color for containers and secondary buttons.
- **Tertiary (Bone):** A near-white off-white used for the deepest background layers to provide a crisp, airy foundation.
- **Neutral (Charcoal Earth):** A soft, warm dark grey used for typography to maintain high legibility without the harshness of pure black.

Color application should favor monochromatic layering over high-contrast vibrance, relying on subtle shifts in value to define hierarchy.

## Typography

This design system employs an editorial typographic scale that prioritizes white space and reading rhythm. 

**Newsreader** is used for headlines to provide a literary, sophisticated character. It should be set with generous top margins to allow the "air" of the design to settle.

**Plus Jakarta Sans** provides a soft, contemporary contrast for functional text. Body copy uses an intentionally tall line-height (1.6x–1.7x) to prevent density and maintain the airy atmosphere. Labels are set in uppercase with increased letter spacing to create a sense of architectural precision.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model on desktop to ensure content feels like a curated page, while transitioning to a fluid model on mobile. 

1.  **Grid:** A 12-column grid is used for desktop (1200px max width). Gutters are kept tight (16px) to allow images to feel connected, while external margins are wide (container-padding) to frame the content.
2.  **Rhythm:** Vertical rhythm is driven by large "breathing rooms." Section gaps are intentionally oversized (80px+) to separate different thoughts or content blocks, reinforcing the "slow" nature of the experience.
3.  **Adaptive Rules:** On mobile, section gaps compress to 48px, and typography shifts to the mobile-specific variants to maintain a comfortable reading eye-line.

## Elevation & Depth

Depth in this design system is achieved through **Tonal Layers** and subtle **Tactile Textures** rather than traditional drop shadows.

- **Backgrounds:** The base layer is always "Bone." 
- **Surfaces:** Floating cards or containers use "Linen" with a very subtle 1px inner stroke in a slightly darker shade to define edges.
- **Shadows:** When elevation is necessary (e.g., a modal or primary button), use an ultra-diffused, low-opacity shadow tinted with the "Clay" or "Neutral" color (#4A443F at 5% opacity).
- **Texture:** A global grain or "noise" overlay (at 2-3% opacity) should be applied to secondary containers to mimic the feel of physical material.

## Shapes

The shape language is **Soft**. A 0.25rem (4px) corner radius is the standard for buttons and inputs, providing just enough organic feel without becoming "bubbly." 

Larger containers (Cards) use the `rounded-lg` (8px) token. This subtle rounding mimics the slightly softened edges of a hand-pressed tile or a stack of linen paper. Icons should follow this language, utilizing a medium stroke weight with rounded terminals.

## Components

- **Buttons:** Primary buttons are filled with "Clay" and use white or bone text. Secondary buttons use a "Linen" fill with a "Neutral" border. The interaction state should be a subtle darkening of the hue, never a harsh color shift.
- **Input Fields:** Use a minimal approach. A bottom-border only or a very light "Linen" fill with no border. Focus states are indicated by a slightly thicker "Clay" bottom border.
- **Cards:** Cards should not have heavy shadows. They use the "Linen" surface color against the "Bone" background, relying on the value difference and a 1px soft stroke for definition.
- **Chips/Tags:** Small, pill-shaped elements with "Linen" backgrounds and "Label-sm" typography.
- **Lists:** High vertical padding between list items (16px minimum) to ensure each item feels distinct and important.
- **Tactile Accents:** Use horizontal rules (HR) that are thin and colored in "Secondary" to separate editorial sections, mimicking the fold of a paper.