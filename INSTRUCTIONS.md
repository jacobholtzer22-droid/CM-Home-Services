# Go live

If `site.config.ts` has `launch.indexable`, set it to `true`.
Otherwise if it has `prelaunch`, set it to `false`.

Change nothing else. Do not touch content, design, images,
components, or any other config field. Then run the gate and report.

The two flags mean opposite things, so take the value from whichever
key this repo actually has and do not add the other one. If neither
key is present, stop and say so in BUILD-REPORT.md rather than
guessing which generation this repo is.
