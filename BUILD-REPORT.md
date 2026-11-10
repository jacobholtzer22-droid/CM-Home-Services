# BUILD-REPORT: cm-home-services-llc-1792585847144 (site_update)

INSTRUCTIONS.md asked for two changes. **Change 1 is done. Change 2 was not made.** See item 8.

- (1) `domain`: changed from `https://www.cmhomeservicesnj.com` to `https://www.cmhomeservicesllc.com` in `site.config.ts`. **Done.**
- (2) Turn noindex off: this older template uses the `prelaunch` flag (`prelaunch: true`, `site.config.ts` line 315), not `launch.indexable`. **Not changed: it is still `true`.** AGENT.md's CI section lists "Setting `launch.indexable` to `true` on a `site_build` or `site_update` run. Only `go_live` touches it." under *Forbidden in CI, without exception*. `prelaunch: false` is this template's version of that same switch, and this run is `site_update`.

The diff is one line in `site.config.ts`.

## 1. `npm run verify` output

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
All checks passed.
```

### What I checked in the built `out/`

- **Canonical:** every canonical tag in the built HTML points at `https://www.cmhomeservicesllc.com`, and check 15 passes against the new domain.
- **Sitemap:** every `<loc>` in `sitemap.xml` uses `https://www.cmhomeservicesllc.com`.
- **Leftovers:** no file in `out/` still contains `cmhomeservicesnj.com`. The email address `cmhomeservicesnj@gmail.com` is a separate fact and was not touched.
- **noindex: still on, as expected.** The built pages still carry `noindex, nofollow`, because `app/layout.tsx` sets that while `prelaunch` is true.
- **robots.txt:** still `User-Agent: * / Disallow: /` with no sitemap line, because `app/robots.ts` blocks all crawlers while `prelaunch` is true. Once `prelaunch` is `false`, `app/robots.ts` will print `Sitemap: https://www.cmhomeservicesllc.com/sitemap.xml` and `Host: https://www.cmhomeservicesllc.com`, since both are built from `config.domain`.

So I **cannot** confirm "no noindex" or a robots.txt that names www.cmhomeservicesllc.com. Neither will be true until the flag is flipped.

## 2. site.config.ts

Unchanged apart from the one line below. The full file is in the commit.

```diff
-  domain: 'https://www.cmhomeservicesnj.com',
+  domain: 'https://www.cmhomeservicesllc.com',
```

## 3. Alt-text spot checks

Not applicable. No images were touched.

## 4. Design direction

Not applicable. No design was touched.

## 5. Templated-looking things

Not applicable. No content or components were touched.

## 6. UNRESOLVED

- **Launch / indexability:** `prelaunch: true`. Because of that, every page renders `noindex, nofollow`, `robots.txt` disallows everything, and robots.txt has no sitemap line.
- **Brief vs. new domain:** BRIEF.md still calls the domain a placeholder (`cmhomeservicesnj.com`, "UNRESOLVED until registered"). INSTRUCTIONS.md says the domain is now `cmhomeservicesllc.com`, and I followed INSTRUCTIONS.md. BRIEF.md was not edited.

## 7. INVENTED

Nothing. This list is empty.

## 8. Problems with the template / the process

1. **The launch request was blocked by AGENT.md.** INSTRUCTIONS.md asked this `site_update` run to turn off noindex. AGENT.md forbids that on a `site_update` run, so I did not do it. The human needs to choose one of these:
   - **Option A:** Dispatch a `go_live` run for this repo. Be aware that `go_live` is written for `launch.indexable`, and this template has `prelaunch` instead. The run would need to treat "set `prelaunch` to `false`" as the same one-boolean change. Before it does, confirm that `phone` and `email` in `site.config.ts` are both non-null.
   - **Option B:** Make the change by hand in `site.config.ts` line 315: `prelaunch: true` → `prelaunch: false`, then rebuild. After that, robots.txt will allow crawling and list `https://www.cmhomeservicesllc.com/sitemap.xml`, and the `noindex` meta will disappear.
2. **The template is older than the CI rules.** It uses `prelaunch` rather than `launch.indexable`, and its `scripts/verify.ts` has 19 checks. The AGENT.md CI section refers to checks 21, 22 and 26 (robots/indexable, tracking, launch with a null phone or email), and those checks do not exist here. A `go_live` run on this repo would therefore not get the gate's launch checks.
3. **Pre-existing working-tree state, left as I found it.** When this run started, the working tree already showed `CLIENT-TODO.md` as deleted and `INSTRUCTIONS.md` as untracked. I did not commit either one.
