/**
 * Visual theme. This is the one file (with app/fonts.ts) where the agent has
 * real freedom: pick a direction, a palette, and a hero layout so two client
 * sites do not look like the same site with different words. No business facts
 * belong here.
 *
 * Rules the palette must satisfy (AGENT.md Phase 2c): one dark neutral, one
 * warm or cool off-white, exactly one accent used on under 5% of any page. No
 * pure #000000 or #FFFFFF. `onPrimary` sits on `primary`, `onAccent` on
 * `accent`, `ink` on `bg` and `surface`. One radius and one shadow for the
 * whole site; components read them as CSS variables and nothing else.
 */
export type HeroVariant = 'full-bleed' | 'split'

export interface Theme {
  palette: {
    /** The dark neutral. Also the full-dark section background. */
    primary: string
    primaryDark: string
    primarySoft: string
    /** The single accent. Buttons, the call bar, small marks. Under 5% of any page. */
    accent: string
    accentDark: string
    /** The off-white page ground. */
    bg: string
    surface: string
    /** Body text. Never pure black. */
    ink: string
    muted: string
    line: string
    onPrimary: string
    onAccent: string
  }
  /**
   * 'full-bleed': client photo behind a dark scrim, headline and phone CTA
   * left-aligned in the lower third. Needs a photo that can carry it.
   * 'split': large photo one side, oversized type the other. For weaker photos.
   */
  heroVariant: HeroVariant
  /** The ONE corner radius for the site, in rem. 0 for hard edges. */
  radius: number
  /** The ONE shadow for the site, as a CSS box-shadow value. 'none' is valid. */
  shadow: string
  /**
   * The client's logo, a path under /public. null renders a wordmark from
   * config.displayName in the header instead.
   */
  logo: { src: string; alt: string } | null
}

// Palette taken from the client's logo: near-black navy for the header,
// footer, and dark bands (so the logo sits on the ground it was drawn for),
// the logo's bright blue as the single accent, and a cool off-white page.
const theme: Theme = {
  palette: {
    primary: '#0B3A5C',
    primaryDark: '#08141F',
    primarySoft: '#E7EFF7',
    accent: '#1866B4',
    accentDark: '#114E8C',
    bg: '#F6F8FB',
    surface: '#FFFFFF',
    ink: '#14202B',
    muted: '#56636F',
    line: '#DDE4EC',
    onPrimary: '#F2F6FA',
    onAccent: '#FFFFFF',
  },
  heroVariant: 'split',
  radius: 0.375,
  shadow: '0 1px 2px rgb(20 30 24 / 0.08)',
  // Cut from the owner's logo file (brand/logo-owner-black-bg.png) with the black matte removed.
  logo: { src: '/logo.png', alt: 'CM Home Services logo' },
}

export default theme
