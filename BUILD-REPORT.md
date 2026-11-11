# Build report: site_update (tracking install), cm-home-services-llc-1792585847144

**STOPPED: tracking block NOT installed.** This repo is on an older template that has no tracking support, so the instruction can't be done without editing files CI mode forbids. Nothing in the site changed.

## 1. `npm run verify` output (unchanged site)

```
#   check                                                                   result  detail
--- ----------------------------------------------------------------------  ------  ------
1   site.config.ts parses against schema                                    PASS
2   businessSlug and identity are filled in (not the template sample)       PASS    slug "cm-home-services-llc-1792585847144"
3   businessSlug exists in the live platform database                       PASS    platform confirmed slug "cm-home-services-llc-1792585847144"
4   components/ContactForm.tsx matches sealed checksum                      PASS    10499ee5c991
5   built HTML posts to the www contact endpoint, never the bare apex       PASS    endpoint on /contact, /quote
6   honeypot hp_7d3a_ref inside hidden wrapper, no "company" field          PASS
7   content/ contains no bare phone, address, email, or price               PASS
8   no placeholder tokens in content/ or site.config.ts                     PASS
9   every JSON-LD block parses, has @context/@type, all types on allowlist  PASS
10  Review/aggregateRating only with real, visible reviews                  PASS
11  every image has a 15+ char alt; no two images share an alt              PASS
12  exactly one <h1> per page                                               PASS
13  titles unique, 30 to 60 chars as rendered                               PASS
14  meta descriptions present, unique, 140 to 160 chars                     PASS
15  canonical present on every page and matches config.domain               PASS
16  sitemap lists every built route and nothing else                        PASS
17  every internal link resolves to a built route                           PASS
18  no blank MDX interpolation in rendered text                             PASS
19  text over the hero photo meets WCAG AA (4.5:1)                          PASS    nothing measured: heroVariant is "split": no text sits on a photograph

19/19 checks passed across 28 pages.
```

There is no check 22 in this repo's `scripts/verify.ts` (its checks end at 19), so "check 22 must pass" can't be met here.

## 2. site.config.ts
Unchanged; see `site.config.ts` on this branch. No `tracking` key was added.

## 3–5. Alt spot checks, design direction, templated-look fixes
Not applicable: a tracking install doesn't touch images, design or content.

## 6. UNRESOLVED
- The Google tag (`googleAdsId` AW-18533635579, form and call conversions) is **not live** on the site. Ads conversions won't record until the template upgrade below is done and this install is re-run.

## 7. INVENTED
Nothing. I added no tracking code by hand.

## 8. What's wrong with the template / why this stopped
This repo was built on an older generation of the template (it still uses `prelaunch`, not `launch.indexable`). Specifically:
- `lib/config-schema.ts` is `.strict()` and has no `tracking` field. Adding the block to `site.config.ts` fails `tsc` (`satisfies SiteConfigInput`) and check 1. CI mode forbids editing `lib/config-schema.ts`.
- `components/GoogleTag.tsx` doesn't exist, and nothing in `app/layout.tsx` renders a tag or the form and call conversions.
- `scripts/verify.ts` has no check 22, so the install couldn't be verified even if it rendered.

**Fix needed (human, in the template repo):** pull the current AA-Template's tracking support (schema `tracking` key, `components/GoogleTag.tsx` with its layout and ContactForm/Phone conversion wiring, verify check 22, and any other checks added since) into this client repo, the way MIGRATING.md describes. Then re-dispatch this same tracking install. The IDs to use are in this run's INSTRUCTIONS.md.
