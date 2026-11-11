Tracking install. Write this tracking block into site.config.ts as the `tracking` key, exactly as given, and change nothing else (AGENT.md, CI mode, Tracking installs):

```ts
tracking: {
  googleAdsId: 'AW-18533635579',
  conversions: { form: 'AW-18533635579/GCOMCMy_lqwdEPurw4VF', call: 'AW-18533635579/wVc0CPi_97UdEPurw4VF' },
},
```

Then run the gate: check 22 must pass.