import type { SiteConfigInput } from './lib/config-schema'

/**
 * Every business fact for this site lives here and nowhere else, filled from
 * BRIEF.md. Unknown facts are null. A null field renders nothing. A guessed
 * value is a defect.
 */
const siteConfig = {
  businessSlug: 'cm-home-services-llc-1792585847144',

  legalName: 'CM Home Services LLC',
  displayName: 'CM Home Services',
  tagline: 'Yard cleanups and junk removal for Hamilton homeowners.',

  schemaType: 'HomeAndConstructionBusiness',

  phone: '+16096082645',
  email: 'cmhomeservicesnj@gmail.com',

  // The street is the owner's home address, so it is null: never shown and
  // never in JSON-LD. City, state, and ZIP still publish.
  address: {
    street: null,
    city: 'Hamilton Township',
    state: 'NJ',
    zip: '08620',
    lat: null,
    lng: null,
  },

  primaryCity: 'Hamilton',
  primaryState: 'NJ',

  serviceAreas: [
    { slug: 'hamilton', name: 'Hamilton', county: 'Mercer County' },
    { slug: 'robbinsville', name: 'Robbinsville', county: 'Mercer County' },
    { slug: 'bordentown', name: 'Bordentown', county: 'Burlington County' },
    { slug: 'allentown', name: 'Allentown', county: 'Monmouth County' },
    { slug: 'east-windsor', name: 'East Windsor', county: 'Mercer County' },
    { slug: 'west-windsor', name: 'West Windsor', county: 'Mercer County' },
    { slug: 'princeton', name: 'Princeton', county: 'Mercer County' },
    { slug: 'hopewell', name: 'Hopewell', county: 'Mercer County' },
    { slug: 'pennington', name: 'Pennington', county: 'Mercer County' },
    { slug: 'millstone', name: 'Millstone', county: 'Monmouth County' },
    { slug: 'chesterfield', name: 'Chesterfield', county: 'Burlington County' },
    { slug: 'florence', name: 'Florence', county: 'Burlington County' },
    { slug: 'southampton', name: 'Southampton', county: 'Burlington County' },
  ],

  // Brief order: fall cleanups and junk removal lead everywhere.
  services: [
    {
      slug: 'fall-cleanup',
      name: 'Fall Cleanup',
      shortDescription:
        'A fall cleanup typically clears leaves from your lawn and beds and picks up fallen branches, with the exact scope set at a free estimate.',
      priceFrom: null,
      priceNote: 'set after a free estimate, and jobs start at a $200 minimum',
      image: 'stock-red-rake-leaf-pile.jpg',
      faqs: [
        {
          q: 'Will my yard need one fall cleanup visit or two?',
          a: 'It depends on the trees on your property. In central New Jersey leaves usually come down from late October into early December, and oaks drop late, so many yards are done in two rounds. We decide that with you at the free estimate.',
        },
        {
          q: 'What happens to the leaves once they are cleared?',
          a: 'We go over that with you at the free estimate, so you know what to expect before any work starts.',
        },
        {
          q: 'When should I book a fall cleanup?',
          a: 'As soon as the leaves start falling. Booking early gets them off the grass before they mat down.',
        },
        {
          q: 'Why not just leave the leaves on the lawn over winter?',
          a: 'Leaves left on turf through winter block light and hold moisture, which thins the grass and can invite fungus. Clearing them in fall usually means a healthier lawn in spring.',
        },
      ],
    },
    {
      slug: 'junk-removal',
      name: 'Junk Removal',
      shortDescription:
        'Old furniture, appliances, boxes, and yard debris taken off your property. Describe what you have and we will confirm it is something we take.',
      priceFrom: null,
      priceNote: 'set after a free estimate, and jobs start at a $200 minimum',
      image: 'stock-old-furniture-pile-junk.jpg',
      faqs: [
        {
          q: 'What kinds of junk do you take?',
          a: 'Describe what you have in the form or over the phone and we will confirm it is something we take. Homeowners typically call about old furniture, appliances, mattresses, boxes, and yard debris.',
        },
        {
          q: 'How is junk removal priced?',
          a: 'Every job starts at the minimum shown on this page, and the exact price is set after a free estimate once we know what is going.',
        },
        {
          q: 'Can you haul away the yard debris from a cleanup?',
          a: 'Yes. Yard cleanups and junk removal are both services we offer, so mention the debris when you ask about your cleanup and we will include it in the estimate.',
        },
        {
          q: 'Can you clear out a garage, basement, or shed?',
          a: 'Garage, basement, and shed cleanouts are a common reason homeowners call for junk removal. Tell us what is in the space and we will confirm what we can take and give you a price.',
        },
      ],
    },
    {
      slug: 'hedge-trimming',
      name: 'Hedge Trimming',
      shortDescription:
        'Hedges trimmed back into shape so they stay dense and full instead of growing leggy and bare at the bottom.',
      priceFrom: null,
      priceNote: 'set after a free estimate',
      image: 'stock-hedge-trimmer-round-shrub.jpg',
      faqs: [
        {
          q: 'How often should hedges be trimmed?',
          a: 'Most hedges take one or two trims a season. Regular trimming keeps a hedge dense and in shape instead of leggy and bare at the bottom.',
        },
        {
          q: 'When is the right time to trim a hedge?',
          a: 'It depends on the plant. Spring-flowering shrubs are usually trimmed right after they bloom, and evergreen hedges in late spring and again in late summer.',
        },
        {
          q: 'What happens to the clippings?',
          a: 'Clippings are typically cleaned up as part of a hedge trim, and we go over the details with you at the free estimate.',
        },
        {
          q: 'How much does hedge trimming cost?',
          a: 'Hedge trimming is priced after a free estimate. Call or send the form and we will come look at your hedges.',
        },
      ],
    },
    {
      slug: 'stone-work',
      name: 'Stone Work',
      shortDescription:
        'Stone projects for your yard. Tell us what you have in mind, whether edging, a path, or a small patio, and we will say if it is a fit.',
      priceFrom: null,
      priceNote: 'set after a free estimate',
      image: 'job-paver-patio-arborvitae.jpg',
      faqs: [
        {
          q: 'Do you build stone patios?',
          a: 'Tell us about the project and we will confirm whether it is a fit. Common residential stone jobs include edging along beds, walkways and stepping stone paths, small patios, low retaining walls, and decorative gravel or river rock beds.',
        },
        {
          q: 'Do you do stone edging along garden beds?',
          a: 'Tell us what you have in mind and we will say whether it is a fit, then give you a price at a free estimate.',
        },
        {
          q: 'How is stone work priced?',
          a: 'Stone work is priced after a free estimate, once we have seen the space and talked through what you want.',
        },
      ],
    },
    {
      slug: 'irrigation',
      name: 'Irrigation',
      shortDescription:
        'Sprinkler system help for homeowners. Tell us what your system is doing and we will confirm whether it is something we handle.',
      priceFrom: null,
      priceNote: 'set after a free estimate',
      image: 'stock-lawn-sprinkler-spraying.jpg',
      faqs: [
        {
          q: 'Do you winterize sprinkler systems?',
          a: 'Describe your system and we will confirm. In New Jersey, sprinkler systems are typically blown out before the first hard freeze and restarted in spring.',
        },
        {
          q: 'Do you install new sprinkler systems?',
          a: 'Tell us what you are looking for and we will confirm whether it is a fit, then give you a price at a free estimate.',
        },
        {
          q: 'My sprinkler system is not working right. Can you look at it?',
          a: 'Tell us what your system is doing. Common problems are broken heads, leaks, and zones that will not run. We will confirm whether it is something we handle.',
        },
      ],
    },
    {
      slug: 'spring-cleanup',
      name: 'Spring Cleanup',
      shortDescription:
        'A spring cleanup typically clears winter debris, leftover leaves, and fallen branches and gets your beds ready for the season.',
      priceFrom: null,
      priceNote: 'set after a free estimate, and jobs start at a $200 minimum',
      image: 'job-front-bed-after.jpg',
      faqs: [
        {
          q: 'When should I book a spring cleanup?',
          a: 'In March, before growth takes off. The spring cleanup window usually runs from March into April.',
        },
        {
          q: 'What does a spring cleanup include?',
          a: 'A spring cleanup typically clears winter debris, leftover leaves, and fallen branches, cuts back ornamental grasses and perennials, and gets beds ready for the season. We confirm what your yard needs at the free estimate.',
        },
        {
          q: 'How is a spring cleanup priced?',
          a: 'Pricing is set after a free estimate, and every job starts at the minimum shown on this page.',
        },
      ],
    },
  ],

  // Times are from the intake. Days were not stated; Monday to Friday is the brief's default.
  hours: [
    { day: 'Monday', open: '08:00', close: '18:30' },
    { day: 'Tuesday', open: '08:00', close: '18:30' },
    { day: 'Wednesday', open: '08:00', close: '18:30' },
    { day: 'Thursday', open: '08:00', close: '18:30' },
    { day: 'Friday', open: '08:00', close: '18:30' },
  ],

  yearsInBusiness: null,
  licenseNumber: null,
  insured: null,

  reviews: [],

  profiles: {
    gbp: null,
    facebook: null,
    instagram: null,
    yelp: null,
  },

  faqs: [
    {
      q: 'What services do you offer?',
      a: 'Fall cleanups and junk removal come first, followed by hedge trimming, stone work, irrigation, and spring cleanups. All six are for homeowners in Hamilton and nearby towns.',
    },
    {
      q: 'Is the estimate free?',
      a: 'Yes. Every estimate is free. We look at the property and give you a price before any work starts.',
    },
    {
      q: 'Is there a minimum job size?',
      a: 'Yes. Jobs start at a $200 minimum, and every job is priced after a free estimate.',
    },
    {
      q: 'Where do you work?',
      a: 'We are based in Hamilton and work in Robbinsville, Bordentown, Allentown, East Windsor, West Windsor, Princeton, Hopewell, Pennington, Millstone, Chesterfield, Florence, and Southampton, across Mercer, Monmouth, and Burlington counties.',
    },
    {
      q: 'Who do you work for?',
      a: 'We work for homeowners. Every job is at a home: your yard, your property.',
    },
    {
      q: 'When are you open?',
      a: 'Monday through Friday, 8am to 6:30pm.',
    },
    {
      q: 'Can you take the junk from a yard cleanup?',
      a: 'Yes. Yard cleanups and junk removal are both services we offer, so you can ask about both in the same call or form.',
    },
    {
      q: 'What junk do you take?',
      a: 'Describe what you have in the form or over the phone and we will confirm it is something we take.',
    },
    {
      q: 'Do you offer a veteran discount?',
      a: 'Yes. Veterans get 15% off. Mention it when you call or send the form and we will apply it to your estimate.',
    },
    {
      q: 'How do I get started?',
      a: 'Call us or send the form on this site. Tell us what needs doing and we will set up a free estimate.',
    },
  ],

  images: {
    hero: 'stock-fall-leaves-blower-lawn.jpg',
    about: 'job-bed-around-stone-wall.jpg',
    // Owner job photos only. Stock never goes in the gallery.
    gallery: [
      'job-side-bed-after.jpg',
      'job-side-bed-before.jpg',
      'job-front-bed-rock-border-after.jpg',
      'job-front-bed-rock-border-before.jpg',
      'job-island-bed-shed.jpg',
      'job-front-bed-after.jpg',
      'job-front-bed-before.jpg',
      'job-bed-around-stone-wall.jpg',
      'job-paver-patio-arborvitae.jpg',
    ],
  },

  contactForm: {
    splitName: false,
    address: 'off',
    zip: 'optional',
    serviceDropdown: true,
    emailRequired: false,
    timeframe: {
      label: 'When do you need it done?',
      options: ['As soon as possible', 'Within a few weeks', 'Just getting prices'],
      required: false,
    },
    messageLabel: 'Tell us about the job',
    messagePlaceholder:
      'What needs doing, roughly how big the yard or the pile is, and anything we should know before we come out.',
    submitLabel: 'Request My Free Estimate',
  },

  // Flip to false at launch, then redeploy.
  prelaunch: true,

  offer: {
    headline: '15% Off for Veterans',
    detail: 'Veterans get 15% off. Mention it when you call or send the form and we will apply it to your estimate.',
    finePrint: 'Jobs start at a $200 minimum.',
  },

  heroHeading: 'Fall Cleanups and Junk Removal in Hamilton, NJ and Nearby Towns',
  homeFormHeading: 'Need the leaves gone or the junk hauled off?',

  trustItems: [
    { label: 'Serving Mercer, Monmouth and Burlington County towns', href: '/service-areas' },
    { label: 'Free estimates', href: null },
    { label: '15% off for veterans', href: null },
  ],

  benefits: [
    { title: 'Free estimates', text: 'We look at the property and give you a price before any work starts.' },
    { title: '15% off for veterans', text: 'Mention it when you call or send the form and we will apply it to your estimate.' },
    { title: 'Based in Hamilton', text: 'Serving Mercer, Monmouth, and Burlington County towns.' },
    { title: 'Cleanups and junk removal together', text: 'Yard cleanups and junk removal from the same crew.' },
    { title: 'Work for homeowners', text: 'Residential yards and properties, nothing else.' },
    { title: 'A real price', text: 'Call or send the form and get a real estimate, not a ballpark.' },
  ],

  process: [
    {
      title: 'Call or send the form',
      text: 'Tell us what needs doing: leaves, a pile of junk, hedges, stone, or sprinklers.',
    },
    { title: 'Free estimate', text: 'We look at the property and give you a price.' },
    { title: 'We do the work', text: 'You get a heads-up before we arrive.' },
    { title: 'Walkthrough', text: 'We go over the finished job with you before we leave.' },
  ],

  domain: 'https://www.cmhomeservicesnj.com',
} satisfies SiteConfigInput

export default siteConfig
