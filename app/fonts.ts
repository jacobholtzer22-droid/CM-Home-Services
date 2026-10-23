import localFont from 'next/font/local'

/**
 * The two typefaces for this site, self-hosted through next/font/local so
 * the build never depends on fetching from Google Fonts (Vercel builds of
 * next/font/google failed when the Google response changed). This is the ONE
 * file to edit to change fonts: swap the files and the two exports, keep the
 * `variable` names, and list only weights the family actually ships.
 *
 * Fraunces and Manrope are variable fonts; each file is the latin subset from
 * Google Fonts and covers every weight in the range.
 *
 * The display face must have character. Never Inter, system-ui, or Arial for
 * headings. See AGENT.md Phase 2 for the pairings per direction.
 */
export const headingFont = localFont({
  src: './fonts/fraunces-latin-variable.woff2',
  weight: '500 700',
  variable: '--font-heading',
  display: 'swap',
  adjustFontFallback: 'Times New Roman',
})

export const bodyFont = localFont({
  src: './fonts/manrope-latin-variable.woff2',
  weight: '400 600',
  variable: '--font-body',
  display: 'swap',
  adjustFontFallback: 'Arial',
})
