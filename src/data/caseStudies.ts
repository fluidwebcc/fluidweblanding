export type CaseStat = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  summary: string;
  sector: string;
  location: string;
  engagementLabel: string;
  whatWeBuilt: string[];
  problem: string;
  approach: string;
  outcome: string;
  stats: CaseStat[];
  logo: string;
  order: number;
  accent: string;
};

export const companyProof = {
  productsShipped: "15+",
  continents: "6",
  mission:
    "We ship AI-native product engineering for startups and teams that are stuck. Old waterfall habits and slow agency practices don't scale — we pick up the pace and get the work into market.",
  whoWeHelp:
    "Startups and product teams struggling to move. We embed engineers — in squads or solo — and turn stalled roadmaps into live product.",
} as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "floor-nexus",
    name: "Floor Nexus",
    url: "https://floornexus.com/",
    tagline: "Vertical SaaS for specialty flooring contractors",
    summary:
      "Floor Nexus needed technology ownership that could keep up with the market. Fluid Web embedded a dedicated senior team, took over product engineering, and turned a fragile delivery setup into continuous shipping across web, mobile, and operator tools.",
    sector: "Vertical SaaS · Construction",
    location: "Florida, USA",
    engagementLabel: "Tech ownership · team of 12+",
    whatWeBuilt: [
      "Took over end-to-end product engineering so founders could stay on customers and GTM",
      "Rebuilt core workflows so office, field, and customer surfaces stay in sync",
      "Shipped mobile + portal work in parallel with the main platform — not as afterthoughts",
      "Layered automation and AI assists into daily ops so teams spend less time on busywork",
      "Stood up admin and analytics so the business can run the product at scale",
    ],
    problem:
      "The product had momentum and paying users, but engineering delivery was the bottleneck. Releases dragged, surfaces drifted apart, and the team needed a partner who could own tech — not another rotating freelancers bench.",
    approach:
      "We staffed a dedicated Fluid Web squad, took ownership of architecture and release cadence, and shipped in sequenced phases. Same playbook we use everywhere: embed, stabilize, then accelerate — with modern tooling and AI where it actually cuts cycle time.",
    outcome:
      "Floor Nexus now ships continuously under Fluid Web ownership. A team of 12+ covers five product surfaces, release cadence went from stalled / sporadic to weekly product motion, and the client stopped burning budget on fragmented contractor handoffs.",
    stats: [
      { label: "Engineers deployed", value: "12+" },
      { label: "Product surfaces", value: "5" },
      { label: "Delivery cadence", value: "Weekly" },
      { label: "Engagement", value: "Ongoing" },
    ],
    logo: "/logos/floor-nexus.png",
    order: 1,
    accent: "#5B8DEF",
  },
  {
    slug: "treply",
    name: "Treply",
    url: "https://treply.so/",
    tagline: "SMS / MMS engagement for nonprofits & agencies",
    summary:
      "Treply needed a real multi-tenant messaging product — not a thin wrapper. Fluid Web led engineering and delivery from greenfield to production scale, including team management, scrum, and the marketing site.",
    sector: "SaaS · Messaging",
    location: "Illinois, USA",
    engagementLabel: "Lead engineering · team delivery",
    whatWeBuilt: [
      "Greenfield multi-tenant platform with agency white-label workspaces",
      "Campaign tooling for high-volume SMS/MMS with delivery health baked in",
      "Admin and partner consoles so operators can run many orgs without mixing data",
      "Compliance-aware send flows (quiet hours, opt-out, registration paths)",
      "Marketing site shipped in the same cadence as the product",
    ],
    problem:
      "Nonprofits and agencies were duct-taping spreadsheets, donation tools, and generic SMS products. Nothing gave them tenant isolation, white-label partner workflows, and production-grade volume in one place — and delivery kept slipping.",
    approach:
      "We led the build from zero: architecture, scrum, stories, and a local team under Fluid Web ownership. Same operating model we use when a founder needs the product shipped, not workshopped.",
    outcome:
      "Treply hit production scale at roughly 1–2 million SMS/MMS messages per month during our engagement. Greenfield to live traffic — app, admin, agency consoles, and marketing — without the usual agency stall.",
    stats: [
      { label: "Messages / month", value: "1–2M" },
      { label: "Build", value: "0 → live" },
      { label: "Architecture", value: "Multi-tenant" },
      { label: "Surfaces", value: "Full stack" },
    ],
    logo: "/logos/treply.svg",
    order: 2,
    accent: "#6EE7B7",
  },
  {
    slug: "ppv-my",
    name: "PPV.MY",
    url: "https://ppv.my/",
    tagline: "Combat-sports pay-per-view for Malaysia",
    summary:
      "Promoters needed event-by-event PPV with local payments and real streaming — not a one-off Zoom link every fight night. Fluid Web built the full product: storefront, live + replay, checkout, and admin.",
    sector: "Media · Live streaming",
    location: "Malaysia",
    engagementLabel: "Full product build",
    whatWeBuilt: [
      "Consumer storefront with per-event live and replay access",
      "Broadcast-grade streaming pipeline with secure playback",
      "Malaysia-first checkout plus international card rails",
      "Organizer admin — events, streams, payments, users",
      "Marketing site and support flows that match how fans actually buy",
    ],
    problem:
      "Independent promotions couldn't sell reliable PPV without standing up engineering for every card. Generic OTT tools ignored local payment rails; DIY streams leaked money and trust.",
    approach:
      "We owned the full build — product, payments, streaming, admin — and shipped a TVOD platform promoters can run without hiring an in-house eng team for each event.",
    outcome:
      "PPV.MY has hosted real fight cards with live + replay sales. Promoters launch events from one admin instead of duct-taping streams and spreadsheets the night before.",
    stats: [
      { label: "Build scope", value: "Full product" },
      { label: "Events", value: "Live cards" },
      { label: "Checkout", value: "Local + global" },
      { label: "Time-to-product", value: "Fast" },
    ],
    logo: "/logos/ppv-my.svg",
    order: 3,
    accent: "#F59E0B",
  },
  {
    slug: "clinicos",
    name: "clinicOS",
    url: "https://myclinicos.com.au/",
    tagline: "Staff ops for Australian GP practices",
    summary:
      "GP practices were drowning in spreadsheets, group chats, and inbox chaos. Fluid Web deployed an eight-person team to build clinicOS — roster, comms, AI document intake, and invoicing in one secure staff workspace.",
    sector: "Healthcare SaaS",
    location: "Australia",
    engagementLabel: "Team of 8 · product delivery",
    whatWeBuilt: [
      "Multi-tenant staff ops platform — roster, messaging, invoicing, settings",
      "AI-assisted document intake with human review before anything is filed",
      "Role-based access so practices stay audit-ready",
      "Mobile workflows for floor staff who aren't at a desk",
      "AU-friendly hosting posture and early-access marketing site",
    ],
    problem:
      "Practices were losing hours every week to admin glue — roster edits in sheets, correspondence in email, invoices elsewhere. They needed speed without gambling compliance on a random ChatGPT paste.",
    approach:
      "We embedded a full Fluid Web squad and shipped modules that share one practice directory. AI where it saves time (intake), humans where risk matters (review before filing).",
    outcome:
      "clinicOS is in early access with web + mobile under an eight-person Fluid Web team. Practices get one ops hub instead of four tools — less admin thrash, cleaner handoffs, faster day-to-day motion.",
    stats: [
      { label: "Fluid Web team", value: "8" },
      { label: "Modules shipped", value: "4+" },
      { label: "AI intake", value: "Live" },
      { label: "Hosting", value: "AU region" },
    ],
    logo: "/logos/clinicos.svg",
    order: 4,
    accent: "#38BDF8",
  },
  {
    slug: "smartfaktura",
    name: "SmartFaktura",
    url: "https://app.smartfaktura.tech",
    tagline: "Cloud invoicing for Rwanda SMEs",
    summary:
      "A founder needed a real invoicing SaaS for Rwanda SMEs — without waiting a year for a local eng hire. Fluid Web solo-built the full application: invoices, expenses, VAT, multi-org, and Stripe billing.",
    sector: "Fintech · SME invoicing",
    location: "Norway · Rwanda",
    engagementLabel: "Solo full-product build",
    whatWeBuilt: [
      "Full invoicing app — create, send, track, PDF, payment states",
      "Customers, products, expenses, and VAT reporting in one place",
      "Multi-org flows so accountants can run several companies",
      "Stripe subscription billing with Free / Pro / Business tiers",
      "Production deploy ready for Rwanda-oriented SME GTM",
    ],
    problem:
      "SMEs were stuck on Excel and paper. European accounting suites were overkill and wrong for local VAT/TIN context. The founder needed product yesterday — not a six-month agency discovery phase.",
    approach:
      "One Fluid Web engineer. Focused scope. Ship the app that gets invoices out the door, then layer billing and multi-org. Modern stack, no ceremony.",
    outcome:
      "SmartFaktura is live in production with paid plans. Solo delivery meant the founder launched without standing up a full eng payroll first — months of burn avoided, product in market instead of still in Figma.",
    stats: [
      { label: "Build model", value: "Solo" },
      { label: "Status", value: "Live" },
      { label: "Plans", value: "3 tiers" },
      { label: "Outcome", value: "Shipped" },
    ],
    logo: "/logos/smartfaktura.png",
    order: 5,
    accent: "#A3E635",
  },
  {
    slug: "voxtell",
    name: "Voxtell AI",
    url: "https://www.voxtell.ai/",
    tagline: "White-label AI voice for telecom partners",
    summary:
      "Voxtell needed production voice infrastructure partners could rebrand — not a demo chatbot. Fluid Web owned the AI calling pipeline migration, telephony wiring, transcripts, messaging, and deep white-label theming.",
    sector: "AI · Telecom",
    location: "Florida, USA",
    engagementLabel: "AI voice pipeline · white-label",
    whatWeBuilt: [
      "Migrated the production AI calling pipeline to a stable modern stack",
      "Wired live telephony with AI on calls — not slideware demos",
      "Transcription and post-call messaging tied into partner tenants",
      "Deep white-label theming so partners sell under their own brand",
      "Multi-tenant patterns ready for reseller scale",
    ],
    problem:
      "Channel partners won't sell an AI receptionist that looks like someone else's product or drops calls in production. The prior voice stack was holding GTM back.",
    approach:
      "We owned the hard path: migrate the pipeline, harden telephony, and make theming deep enough that partners set their own brand and pricing. Ship production voice, not a pilot that dies in a sandbox.",
    outcome:
      "Voxtell ships white-label voice experiences with production calling, transcripts, and follow-up messaging. Partners can sell AI receptionists without building voice infra — and Fluid Web unblocked the stack that was slowing that motion down.",
    stats: [
      { label: "Pipeline", value: "Migrated" },
      { label: "Calling", value: "Production" },
      { label: "Theming", value: "White-label" },
      { label: "Motion", value: "Unblocked" },
    ],
    logo: "/logos/voxtell.png",
    order: 6,
    accent: "#FB7185",
  },
  {
    slug: "otteri",
    name: "Otteri AI",
    url: "https://otteri.ai/",
    tagline: "All-in-one AI productivity workspace",
    summary:
      "Teams were paying for a fragmented AI stack — one tool for writing, another for research, another for images. Fluid Web led a greenfield build of Otteri: multi-model workspace, research, creative media, and docs under one subscription.",
    sector: "AI productivity",
    location: "Illinois, USA",
    engagementLabel: "Led greenfield build",
    whatWeBuilt: [
      "Multi-model AI workspace under one login and billing",
      "Research, content, and creative media flows in a single product",
      "Document intelligence for PDFs, sites, and video summaries",
      "Prompt library and browser extension for in-workflow use",
      "Team plan architecture for multi-seat customers",
    ],
    problem:
      "Operators were bleeding money across single-purpose AI tabs with no shared credits and no shared context. They needed one workspace that ships fast — Merlin-class, not a Frankenstein of wrappers.",
    approach:
      "Fluid Web ran the greenfield playbook: lead engineer, coordinated team, continuous delivery. Scope the command center, ship the core loops, get users on a real subscription — not another prototype graveyard.",
    outcome:
      "Otteri is live at otteri.ai with Pro and Teams pricing and a Chrome extension in market. From zero to a credible all-in-one AI product under Fluid Web leadership — the kind of pace old agency process can't match.",
    stats: [
      { label: "Build", value: "From scratch" },
      { label: "Status", value: "Live" },
      { label: "Models", value: "Multi" },
      { label: "Delivery", value: "Fast" },
    ],
    logo: "/logos/otteri.png",
    order: 7,
    accent: "#2DD4BF",
  },
];

export const allCaseStudiesSorted = [...caseStudies].sort(
  (a, b) => a.order - b.order,
);

export const featuredCaseStudies = allCaseStudiesSorted;

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export const geographyHighlights = [
  "Illinois, USA",
  "California, USA",
  "Florida, USA",
  "France",
  "Australia",
  "Malaysia",
  "Norway · Rwanda",
  "Chile",
] as const;

export type MapProject = {
  name: string;
  slug?: string;
};

export type MapPin = {
  id: string;
  label: string;
  detail: string;
  lat: number;
  lng: number;
  accent: string;
  projects: MapProject[];
};

export const mapPins: MapPin[] = [
  {
    id: "illinois",
    label: "Illinois, USA",
    detail: "Nexobe portfolio",
    lat: 41.6986,
    lng: -88.0684,
    accent: "#6EE7B7",
    projects: [
      { name: "Treply", slug: "treply" },
      { name: "Otteri AI", slug: "otteri" },
      { name: "GoodOff" },
      { name: "Pikcel" },
      { name: "Snap.Photo" },
    ],
  },
  {
    id: "california",
    label: "California, USA",
    detail: "Rank.ai",
    lat: 37.7749,
    lng: -122.4194,
    accent: "#C084FC",
    projects: [{ name: "Rank.ai" }],
  },
  {
    id: "jacksonville",
    label: "Florida, USA",
    detail: "Floor Nexus",
    lat: 30.0819,
    lng: -81.5478,
    accent: "#5B8DEF",
    projects: [{ name: "Floor Nexus", slug: "floor-nexus" }],
  },
  {
    id: "orlando",
    label: "Florida, USA",
    detail: "Voxtell AI",
    lat: 28.5383,
    lng: -81.3792,
    accent: "#FB7185",
    projects: [{ name: "Voxtell AI", slug: "voxtell" }],
  },
  {
    id: "france",
    label: "France",
    detail: "Jarik · Dealwey",
    lat: 45.764,
    lng: 4.8357,
    accent: "#F472B6",
    projects: [{ name: "Jarik" }, { name: "Dealwey" }],
  },
  {
    id: "australia",
    label: "Australia",
    detail: "clinicOS · Practice Pro",
    lat: -25.2744,
    lng: 133.7751,
    accent: "#38BDF8",
    projects: [
      { name: "clinicOS", slug: "clinicos" },
      { name: "Practice Pro" },
    ],
  },
  {
    id: "malaysia",
    label: "Malaysia",
    detail: "PPV.MY",
    lat: 3.139,
    lng: 101.6869,
    accent: "#F59E0B",
    projects: [{ name: "PPV.MY", slug: "ppv-my" }],
  },
  {
    id: "norway",
    label: "Norway",
    detail: "SmartFaktura",
    lat: 59.9139,
    lng: 10.7522,
    accent: "#A3E635",
    projects: [{ name: "SmartFaktura", slug: "smartfaktura" }],
  },
  {
    id: "rwanda",
    label: "Rwanda",
    detail: "SmartFaktura",
    lat: -1.9441,
    lng: 30.0619,
    accent: "#A3E635",
    projects: [{ name: "SmartFaktura", slug: "smartfaktura" }],
  },
  {
    id: "chile",
    label: "Chile",
    detail: "Plenor",
    lat: -33.4489,
    lng: -70.6693,
    accent: "#FBBF24",
    projects: [{ name: "Plenor" }],
  },
  {
    id: "radar-usa",
    label: "United States",
    detail: "Radar",
    lat: 39.7392,
    lng: -104.9903,
    accent: "#94A3B8",
    projects: [{ name: "Radar" }],
  },
];
