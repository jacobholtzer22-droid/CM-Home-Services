# Client Brief: CM Home Services LLC

Anything not in this brief does not appear on the site. Facts marked [intake] came from the owner's written intake answers on 2026-10-22. Facts marked [general] are general trade knowledge any yard or hauling company could state; write them with "typically", "usually", or "can", never as this company's promise. Facts marked [geo] are public geography (town locations, county membership, a ZIP code). There is no client website, no Google Business Profile, and no reachable reviews. Nothing else is a usable fact.

## Business identity

- Legal name: CM Home Services LLC [intake, matches the platform Business row]
- Display name: CM Home Services
- Trade: residential yard and property services. Services [intake]: hedge trimming, fall cleanups, spring cleanups, junk removal, stone jobs, irrigation. The owner's current focus is fall cleanups and junk removal [intake]; those two lead everywhere: hero, nav order, homepage service grid, form dropdown.
- Years in business: just under one year [intake]. Never state the age. No "years", "experienced", "established", "since", "trusted".
- Home base: the owner gave "30 kay rd" with no town [intake]. 30 Kay Rd is a residential street in Hamilton Township, Mercer County, NJ, postal city Trenton, ZIP 08620 [geo, matched from public property records on 2026-10-22]. UNRESOLVED: confirm with the owner. In copy the base is "Hamilton, NJ". Never write "Trenton" as a place served.
- Residential only [intake]. Never write commercial. Write "homeowners", "your yard", "your property".
- Job minimum [intake]: the owner no longer wants small jobs; $200 is the minimum he wants quoted, $150 is his absolute floor (internal only, never on the site). The site states a $200 minimum and nothing lower. Typical job [intake]: $200 and up. Dollar figures live only in config fields.
- Owner: first name Cole per the agency's notes; last name not supplied, permission to publish not asked. UNRESOLVED. Do not publish a name.
- License or insurance: not asked, not claimed. Never write licensed, insured, bonded, certified.
- Differentiators [intake]: free estimates; 15% off for veterans; a discount on "lawn service" when a neighbor signs up too (scope UNRESOLVED, see Offer; do not publish); a two week warranty on hedges and plants on jobs of $100 or more (wording ambiguous, UNRESOLVED; do not publish; never write warranty).
- Hours [intake]: 8:00am to 6:30pm. Days not stated. UNRESOLVED.
- No emergency hours [intake]. Never write emergency, 24/7, same-day, after-hours.
- Leads the owner wants [intake]: quote requests and phone calls. Every page ends in a call or a form.
- Ad budget about $200 per month [intake]: internal only, never on the site.
- Words to avoid everywhere: licensed, insured, bonded, certified, guaranteed, guarantee, warranty, 24/7, emergency, same-day, after-hours, cheap, affordable, lowest price, best in, #1, trusted, experienced, years of experience, established, since, family owned, veteran owned, commercial, mowing, lawn care, lawn service, mulch, gutter, snow, eco-friendly, any competitor name.

## Platform

- businessSlug: `cm-home-services-llc-1792585847144` (live, pulled from the Neon Business row on 2026-10-22; Business id `cmvi3bvxl0000jx06dwkzd279`). Hardcoded string literal in `site.config.ts`, nowhere else.
- Domain: the owner owns no domain and prefers .com [intake]. Canonical placeholder: `https://www.cmhomeservicesnj.com` (matches his email handle). UNRESOLVED until registered. The site deploys first on a Vercel URL with prelaunch: true and the domain attaches at launch. www is primary; the apex redirects to www.

## Contact

- Phone: 609-608-2645, E.164 `+16096082645` [intake].
- Email for quote requests: cmhomeservicesnj@gmail.com [intake]. (The intake also contained a version with a doubled @; that was a typo.)
- Hours: 8:00 to 18:30, America/New_York [intake for the times]. Days not stated; use Monday through Friday and list the days in UNRESOLVED (a yard company may well work Saturdays).
- Published address: the street is a home address. Do not show it on any page. Keep `address.city` "Hamilton Township", `address.state` "NJ", `address.zip` "08620" [geo]. If the schema allows `address.street` to be null, set it null; if it requires a value, use "30 Kay Rd" and flag in UNRESOLVED that it then appears in JSON-LD. Footer and contact page show "Hamilton, NJ" and the phone, nothing more.
- Lat/lng: if the schema requires coordinates, geocode ZIP 08620 (Hamilton Township / Yardville area), use that centroid, and flag it; otherwise null.
- Service area [intake, spelling normalized]: Allentown, Millstone Township, Pennington, Hopewell, Princeton, Southampton, Chesterfield, Bordentown, Florence, Robbinsville, West Windsor, East Windsor. The owner also wrote "southplainsfeild": South Plainfield is in Middlesex County, 35 to 40 miles north of every other town, so he probably meant Plainsboro (next to Princeton and West Windsor). UNRESOLVED; leave both off until he confirms. Hamilton Township is the home base and is not on his list; include it as the primary town and flag it in UNRESOLVED.

## Services (in this order)

General trade knowledge is allowed on these pages; specific claims about this company are not unless they are in this brief. For stone work and irrigation the owner gave one word each; name the common jobs, never say which ones he does.

### Service 1: Fall Cleanup
- slug: fall-cleanup
- Includes [intake]: fall cleanups. What this company's cleanup includes (leaf removal only, bed cleanup, branch pickup, haul away, final cut) is UNRESOLVED; write "typically" and point to the estimate.
- General facts you may state [general]: leaves left on turf through winter block light and hold moisture, which thins the grass and invites fungus; a fall cleanup typically covers clearing leaves from the lawn and beds, cutting back spent perennials, pulling dead annuals, and picking up fallen branches and debris; in central New Jersey the window runs late October into early December, often in two rounds because oaks drop late.
- Price note: "jobs start at a $200 minimum and are priced after a free estimate" (config only).
- Customer questions: one visit or two (depends on the trees on the property, decided at the estimate)? what happens to the leaves (go over it at the estimate; do not claim hauling or bagging)? when should I book (before the leaves mat down, so as soon as they start falling)? do you do gutters (not listed; do not mention gutters anywhere)?

### Service 2: Junk Removal
- slug: junk-removal
- Includes [intake]: junk removal for homeowners.
- General facts [general]: residential junk removal typically covers furniture, appliances, mattresses, boxes, yard debris, garage, basement, and shed cleanouts, and leftovers after a move or renovation. What this company accepts or refuses (hazardous materials, paint, tires, electronics, construction debris), how it prices (by load, by item), and where items go (dump, donation, recycling) are UNRESOLVED; write "describe what you have in the form or over the phone and we will confirm it is something we take".
- Price note: "jobs start at a $200 minimum and are priced after a free estimate" (config only).
- Customer questions: what do you take (describe it and we will confirm)? how is it priced (the minimum, then quoted after a free estimate)? can you take yard debris from a cleanup (yes, both are services)?

### Service 3: Hedge Trimming
- slug: hedge-trimming
- Includes [intake]: hedge trimming.
- General facts [general]: regular trimming keeps hedges dense and in shape instead of leggy and bare at the bottom; most hedges take one or two trims a season; spring-flowering shrubs are trimmed after they bloom, evergreen hedges in late spring and again in late summer; clippings are cleaned up.
- Price note: "priced after a free estimate".
- Customer questions: how often (one or two times a season, general)? when (depends on the plant, general)? overgrown shrub removal (not listed; do not claim)? warranty (UNRESOLVED; never mention).

### Service 4: Stone Work
- slug: stone-work
- Includes [intake]: "stone jobs". Which kinds is UNRESOLVED.
- General facts [general]: common residential stone jobs are stone or paver edging along beds, walkways and stepping stone paths, small patios, low retaining walls, and decorative gravel or river rock beds. Write "common stone jobs include" and "tell us what you have in mind and we will say whether it is a fit". Never claim a specific type is offered.
- Price note: "priced after a free estimate".
- Customer questions: do you build patios (tell us the project and we will confirm)? do you do edging (same)?

### Service 5: Irrigation
- slug: irrigation
- Includes [intake]: irrigation. Install, repair, winterization, or spring startup is UNRESOLVED.
- General facts [general]: in New Jersey, sprinkler systems are typically blown out before the first hard freeze and restarted in spring; common repairs are broken heads, leaks, and zones that will not run. Write "tell us what your system is doing" and never promise a specific service.
- Price note: "priced after a free estimate".
- Customer questions: do you winterize (describe your system and we will confirm)? do you install new systems (same)?

### Service 6: Spring Cleanup
- slug: spring-cleanup
- Includes [intake]: spring cleanups.
- General facts [general]: a spring cleanup typically clears winter debris, leftover leaves, and fallen branches, cuts back ornamental grasses and perennials, and gets beds ready for the season; the window is March into April. Do not mention mulch.
- Price note: "jobs start at a $200 minimum and are priced after a free estimate" (config only).
- Customer questions: when should I book (March, before growth takes off)? what is included (typically the above; confirmed at the estimate)?

## Homepage benefits ("Why CM Home Services") [intake unless marked]

- Free estimates.
- 15% off for veterans.
- Hamilton based, serving Mercer, Monmouth, and Burlington County towns [geo for the counties].
- Yard cleanups and junk removal from the same crew [general wording, both are listed services].
- Residential work for homeowners.
- Call or send the form and get a real quote, not a ballpark [general wording; the estimate is free per intake].

## How it works (four steps)

Steps 1 and 2 are sourced. Steps 3 and 4 are generic process copy with no timelines, crew sizes, or promises; list them under PROCESS COPY TO CONFIRM in the report and in CLIENT-TODO.
1. Call or send the form. Tell us what needs doing: leaves, a pile of junk, hedges, stone, or sprinklers. [intake: calls and quote requests]
2. Free estimate. We look at the property and give you a price. [intake: free estimates]
3. We do the work. You get a heads-up before we arrive. [generic]
4. Walkthrough. We go over the finished job with you before we leave. [generic]

## Offer

- Veteran discount, owner's words: "Veteran discounts 15% percent off" [intake]. config.offer: headline "15% Off for Veterans", detail "Veterans get 15% off. Mention it when you call or send the form and we will apply it to your estimate.", finePrint "Jobs start at a $200 minimum."
- Neighbor discount, owner's words: "Lawns service discounts when you include a neighbor" [intake]. "Lawn service" is not one of the six listed services, so the scope is unclear. UNRESOLVED. Do not publish. CLIENT-TODO.
- Hedge and plant warranty, owner's words: "2 week warranty on hedges/plants $100 or more" [intake]. Ambiguous. UNRESOLVED. Do not publish. CLIENT-TODO.

## Contact form

- Ask for first and last name separately? no
- Ask for the property address? off
- Ask for a ZIP code? optional (the owner's service area is a town list; the ZIP tells him whether a lead is in range)
- Show a dropdown of the services above? yes, the six services in order, plus "Not sure yet"
- Require the email address? no
- Timeframe dropdown: label "When do you need it done?", options "As soon as possible", "Within a few weeks", "Just getting prices", required no
- messageLabel: "Tell us about the job"
- messagePlaceholder: "What needs doing, roughly how big the yard or the pile is, and anything we should know before we come out."
- submitLabel: "Request My Free Estimate"
- Quote page note (config field the quote page renders, if one exists; otherwise the offer fine print carries it): "Jobs start at a $200 minimum."
- Homepage form section heading: "Need the leaves gone or the junk hauled off?" (seasonal; list under SEASONAL COPY)

## Service areas

- Primary city and state for SEO: Hamilton, NJ (home base, [geo]). Homepage H1: "Fall Cleanups and Junk Removal in Hamilton, NJ and Nearby Towns" (seasonal; list under SEASONAL COPY).
- Area pages (config.serviceAreas, in this order): Hamilton, Robbinsville, Bordentown, Allentown, East Windsor, West Windsor, Princeton, Hopewell, Pennington, Millstone, Chesterfield, Florence, Southampton. Hamilton is [geo] home base and flagged; the other twelve are [intake]. Write short area pages from true, widely known facts about each place (housing age and lot sizes, tree cover and leaf load, newer developments versus older neighborhoods, rural edges). If you are not confident a sentence is true, cut it. Report any page you consider thin.
- Counties for copy [geo]: Mercer (Hamilton, Robbinsville, East Windsor, West Windsor, Princeton, Hopewell, Pennington), Monmouth (Allentown, Millstone), Burlington (Bordentown, Chesterfield, Florence, Southampton). Trust strip reads "Serving Mercer, Monmouth and Burlington County towns" and links to the service areas page.
- Off the list until confirmed: South Plainfield or Plainsboro (UNRESOLVED), Hightstown, Cranbury, Lawrence, Ewing, Trenton (not named by the owner; list them as a question in UNRESOLVED).

## Hours

- Monday through Friday, 8:00 to 18:30, America/New_York. Saturday and Sunday closed. [intake for the times; days UNRESOLVED]

## Profile URLs

- Google Business Profile: none yet [intake]. profiles.gbp null. UNRESOLVED: the agency creates one.
- Facebook: the owner has some reviews on Facebook [intake]. No URL supplied. Do not link Facebook. UNRESOLVED.
- Instagram, Yelp, Angi, Nextdoor: none supplied. Leave off.

## Testimonials

None available. config.reviews stays []. No testimonials section. No Review or AggregateRating JSON-LD.

## Photos

Filled by section 2 of the build prompt. Stock only until the owner's photos arrive. Hero and service images from the section 2 table. No gallery.

## Brand notes

- Logo: coming from the owner, not yet received [intake]. theme.logo stays null and the header renders the wordmark. UNRESOLVED: the file.
- Palette (provisional, to be retuned to the logo when it arrives): deep green as primary, burnt orange as the single accent (reads fall without being a pumpkin), warm off-white background. Plain and solid, no gradients, no leaf or rake iconography.
- Typography, spacing, radius, shadows, motion: the template's defaults. Do not restyle.
- Owner's own words [intake]: "free estimates", "veteran discounts 15% percent off", "no more small jobs".
- Competitors: none named. Never name one.

## UNKNOWN (each becomes null or is left out; this is the list to chase)

- Confirm the home base is Hamilton Township, NJ 08620 (matched from "30 kay rd")
- Whether to show the street address anywhere (default: no)
- Which days he works (hours given as 8:00 to 6:30, days not stated; Saturdays?)
- "southplainsfeild": South Plainfield or Plainsboro?
- Hamilton, Hightstown, Cranbury, Lawrence, Ewing: in or out?
- What a fall cleanup includes: leaves only, beds, branches, haul away, final cut?
- Junk removal: what he will not take; pricing by load or by item; truck or trailer size; dump versus donation
- Stone work: which jobs he actually does (edging, walkways, patios, walls, gravel beds)
- Irrigation: install, repair, winterization, spring startup, or some of these
- Does he mow or offer regular lawn service (the neighbor discount mentions "lawn service")
- Neighbor discount: exact terms and which services it applies to
- Hedge and plant warranty: exact wording, what it covers, the $100 threshold
- Owner's name and whether to publish it
- Facebook page URL and whether its reviews can be reused
- Logo file (transparent PNG or SVG)
- Job photos
- Domain registration (cmhomeservicesnj.com assumed)
- Insurance status (not asked, not claimed)
