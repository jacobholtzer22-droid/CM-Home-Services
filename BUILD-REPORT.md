# Build report: go_live, cm-home-services-llc-1792585847144

## 1. Verify output

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

## 2. site.config.ts

The only change in this run is one line:

```diff
   // Flip to false at launch, then redeploy.
-  prelaunch: true,
+  prelaunch: false,
```

This repo uses the older `prelaunch` key and has no `launch.indexable`. Following INSTRUCTIONS.md, I set `prelaunch` to `false` and did not add `launch.indexable`. The `phone` (+16096082645) and `email` (cmhomeservicesnj@gmail.com) fields are both filled in, so the launch was allowed. Nothing else in the config changed.

## 3. Alt-text spot checks

Not applicable. A go_live run does not touch images.

## 4. Design direction

Unchanged. A go_live run does not touch design.

## 5. Templated-looking issues

Not applicable. A go_live run does not touch design or content.

## 6. UNRESOLVED

No change from the previous build report. This run left all config facts as they were.

## 7. INVENTED

Nothing. This list is empty.

## 8. Template issues

- I checked the built output after the flip. `out/robots.txt` is a normal allow-all file with `Sitemap: https://www.cmhomeservicesllc.com/sitemap.xml`. Every page has `<meta name="robots" content="index, follow"/>`, except `404.html`, which is noindex.
- This repo is on the older template. Its gate has 19 checks, so the go_live checks AGENT.md mentions (21: robots, 26: a launched config with phone or email null) do not exist here. I checked robots by hand instead (see above). Upgrading the repo to the current template would add those checks.
- `out/404.html` has two robots meta tags: `noindex` and `noindex, nofollow`. They do no harm because both say noindex, but it is a duplicate the template should clean up. I left it alone because a go_live run may not change it.
