export type EngagementDepth =
  | "full-stack-lead"
  | "product-ownership"
  | "frontend-lead"
  | "fullstack-feature"
  | "ui-implementation"
  | "mobile-leadership"
  | "marketing-rebuild";

export type CaseStat = {
  label: string;
  value: string;
  note?: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  summary: string;
  sector: string;
  location: string;
  contactLabel: string;
  contactNote: string;
  engagement: EngagementDepth;
  engagementLabel: string;
  role: string;
  whatWeBuilt: string[];
  whatWeDidNot: string[];
  problem: string;
  approach: string;
  outcome: string;
  stats: CaseStat[];
  stack: string[];
  logo: string;
  featured: boolean;
  featuredOrder: number;
  accent: string;
};

/** Case study copy — engagement facts only, no invented uplift %. */
export const caseStudies: CaseStudy[] = [
  {
    slug: "floor-nexus",
    name: "Floor Nexus",
    url: "https://floornexus.com/",
    tagline: "Vertical operating system for flooring & resin contractors",
    summary:
      "Fluid Web owns the full technology surface for Floor Nexus — product engineering, mobile, vendor and homeowner portals, and platform operations — while Johnny drives industry decisions, contractor relationships, and marketing narrative. We joined when the platform was in distress and rebuilt delivery around a senior team that now ships continuously across five product surfaces. The work spans measure → quote → visualize → schedule → pay → order materials in one connected job record, purpose-built for epoxy, resin, and decorative concrete contractors rather than generic field-service CRMs.",
    sector: "Vertical SaaS · Construction",
    location: "St. Johns / Jacksonville area, Florida, USA",
    contactLabel: "Johnny",
    contactNote: "Founder · Jacksonville Epoxy / Floor Nexus",
    engagement: "product-ownership",
    engagementLabel: "Tech ownership · team of 12+",
    role: "Primary technology leadership — engineering, delivery, hiring coordination, and platform ops — with a deployed Fluid Web team of 12+. Johnny owns client handling, product direction, contractor relationships, and the public marketing site.",
    whatWeBuilt: [
      "Installer platform v2 — jobs hub, assessments, Quote Builder widgets, Starter/Pro/Teams seat billing, dark mode, team permissions",
      "Pipeline CRM with drag-and-drop stages, lead forms (Facebook, QR, embed), Nexus Leads Center, and activity history",
      "Quick Quote and Universal Calculators — manufacturer-catalog pricing from sq ft and system type in seconds",
      "Nexus Measure — AR point-capture, homeowner self-measure links, credits for video capture",
      "Nexus Visualizer — AI renders of flake/metallic/polished finishes on customer photos; still and video outputs",
      "Estimates, proposals, Stripe Connect payments, Klarna/Affirm, deposits and progress billing, QuickBooks Online sync",
      "Scheduling, work orders, crew assignment, subcontractor pay tracking, JobBox media per job",
      "Nexus Pro in-app AI — draft emails/texts, lead summaries, call transcription, quote/invoice actions from conversation",
      "Flows automation — pre-built nurture, follow-up, review, and reactivation sequences tied to pipeline events",
      "Nexus Connect — business SMS/MMS, A2P compliance, voice (ring groups, missed-call text-back, Trust Hub)",
      "Homeowner / job portal — magic-link access, branded renders, chat, invoices, progress updates, sign-off",
      "Vendor portal — catalog orders, white-label storefront builder, Lightspeed POS, vendor CRM, vendor teams, training events",
      "Mobile parity on iOS and Android with offline caching; App Clip; field installer read-only portal",
      "Admin and platform tools — org management, analytics, referrals, impersonation, Nexus Boost ads, Nexus Academy",
    ],
    whatWeDidNot: [
      "Final product positioning and industry catalog strategy (client-led)",
      "Primary marketing site ownership and contractor GTM narrative (client-led)",
    ],
    problem:
      "When Fluid Web joined, Floor Nexus was in a fragile state — a vertical product that had to compete with generic CRMs while serving a trade priced by spread rates, coverage, and manufacturer systems, not flat-rate task books. Flooring contractors win jobs by showing the finished floor, not describing it, yet most tools force re-entry across measure, quote, visualize, schedule, pay, and material order workflows. The platform needed a stable engineering organization and a sequenced rebuild across installer, homeowner, vendor, and mobile surfaces without losing momentum with active contractors.",
    approach:
      "We stabilized delivery with a senior Fluid Web team, then shipped in deliberate eras rather than boiling the ocean. March–April focused on installer v2 core; May–June added homeowner portal, Measure, marketplace, and Nexus Pro; July 2.0 opened vendor portal, storefront, proposals, Media Library, QuickBooks, and mobile refresh; August–September deepened storefront builder, vendor teams, Flows, Connect/voice, vendor CRM, and calculator/measure/visualizer parity on mobile. Each era extended the same connected job record so measure feeds quote, visualizer, estimate, schedule, vendor order, and invoice without re-keying.",
    outcome:
      "Floor Nexus now runs as a multi-surface contractor OS — installer, homeowner, vendor, mobile, and admin — shipping continuously through the Fluid Web engagement with a team of 12+ and growing. Public product surfaces list 7,800+ catalog SKUs and position the platform as replacing four to six disconnected tools with one connected lifecycle from lead capture through material order and reporting.",
    stats: [
      { label: "Fluid Web team", value: "12+", note: "Deployed and growing" },
      { label: "Ship eras", value: "4", note: "Mar–Apr · May–Jun · Jul 2.0 · Aug–Sep" },
      { label: "Surfaces", value: "5", note: "Installer · homeowner · vendor · mobile · admin" },
      { label: "Public catalog", value: "7,800+", note: "Products listed on client site at scrape time" },
    ],
    stack: [
      "React",
      "Mobile (iOS/Android)",
      "Stripe Connect",
      "QuickBooks",
      "Twilio-class messaging",
      "AI assistants",
    ],
    logo: "/logos/floor-nexus.png",
    featured: true,
    featuredOrder: 1,
    accent: "#5B8DEF",
  },
  {
    slug: "treply",
    name: "Treply",
    url: "https://treply.so/",
    tagline: "Multi-tenant SMS / MMS engagement for nonprofits & agencies",
    summary:
      "Fluid Web led product engineering for Treply from scratch — a multi-tenant messaging and donor-operations platform with agency white-label, admin consoles, and high-volume SMS/MMS production traffic. The engagement included scrum, story ownership, local team management, and delivery of the marketing site alongside the core application. Treply serves nonprofit and agency operators who need tenant isolation, compliance-aware sending, and white-label workspaces — not a thin Twilio wrapper.",
    sector: "SaaS · Messaging · Nonprofits",
    location: "Bolingbrook, Illinois, USA",
    contactLabel: "Asghar",
    contactNote: "Nexobe cluster · Illinois",
    engagement: "full-stack-lead",
    engagementLabel: "Lead engineer · team management",
    role: "Lead developer and delivery manager — scrum, stories, engineering, and local-team financials. Platform built greenfield under Fluid Web leadership with the same operating model used across the Nexobe portfolio.",
    whatWeBuilt: [
      "Greenfield multi-tenant architecture with per-org isolation and agency white-label workspaces",
      "Super-admin console plus agency and label consoles for partner-managed client orgs",
      "Campaign tooling for B2B and B2C SMS/MMS — guided launch, templates, scheduling, and delivery health",
      "Donor and contact surfaces — profiles, groups, dedupe workflows, opt-out handling, and inbox triage",
      "Enterprise-oriented customer-support and approval workflows before outbound sends",
      "Integrations layer for donation sources, webhooks, CSV import, and CRM connectors in scope",
      "Compliance posture — TCPA-oriented quiet hours, STOP/HELP handling, 10DLC registration flows",
      "Marketing website aligned to the product positioning at time of build",
    ],
    whatWeDidNot: [
      "Later faith-calendar / Zakat compliance features (shipped after engagement ended)",
    ],
    problem:
      "Nonprofit and agency operators were stitching together donation platforms, spreadsheets, and generic SMS tools that were never designed for tenant isolation or reseller white-label. High-volume messaging for fundraising and engagement requires reliable delivery, human-in-the-loop approvals, and separate workspaces for agencies managing many client orgs — capabilities off-the-shelf marketing SMS products do not provide out of the box. Treply needed a purpose-built Donor Ops layer that ingests gift events, knows donors across sources, and sends compliant campaigns at scale.",
    approach:
      "We built Treply greenfield under Fluid Web leadership with multi-tenant architecture from day one. Agency partners receive white-label consoles to manage client workspaces, numbers, campaigns, and delivery health without sharing donor records across tenants. Production messaging ops, admin tooling, and the public marketing site shipped in the same delivery cadence as the core app, with scrum and story ownership run by Fluid Web rather than ad-hoc contractor handoffs.",
    outcome:
      "Treply reached production scale handling on the order of 1–2 million SMS/MMS messages per month during the Fluid Web engagement. The platform shipped as a full product surface — app, admin, agency consoles, and marketing — rather than a prototype wrapper around carrier APIs.",
    stats: [
      { label: "Monthly SMS/MMS", value: "1–2M", note: "Volume during Fluid Web engagement" },
      { label: "Architecture", value: "Multi-tenant", note: "Agency white-label included" },
      { label: "Surfaces", value: "App + admin + marketing", note: "Built under Fluid Web lead" },
    ],
    stack: ["SMS/MMS", "Multi-tenant SaaS", "Agency white-label", "Webhook ingest"],
    logo: "/logos/treply.svg",
    featured: true,
    featuredOrder: 2,
    accent: "#6EE7B7",
  },
  {
    slug: "ppv-my",
    name: "PPV.MY",
    url: "https://ppv.my/",
    tagline: "Malaysia's combat-sports pay-per-view platform",
    summary:
      "Fluid Web built PPV.MY end to end — Malaysia's event-by-event pay-per-view marketplace for boxing, Muay Thai, and MMA. The work covers the consumer storefront, live and replay video pipeline, local and international checkout, organizer admin, and marketing site. Partner Hilman Ali runs the promoter side; we own the technical product from account-gated playback through payment reconciliation.",
    sector: "Media · Live streaming",
    location: "Malaysia",
    contactLabel: "Hilman Ali",
    contactNote: "Partner · boxer / promoter side",
    engagement: "product-ownership",
    engagementLabel: "Full product build",
    role: "Full technology and marketing implementation for the PPV platform. Hilman Ali leads fight promotion and Malaysia market GTM.",
    whatWeBuilt: [
      "Consumer PPV storefront and per-event pages with account-gated live and replay playback",
      "Mux live streaming and HLS replay pipeline with signed playback tokens and post-event access windows",
      "Billplz checkout for Malaysia — FPX, bank transfers, and local e-wallets — plus Stripe for international cards",
      "User accounts with email/password and Google OAuth; session limits and purchase library at /my-events",
      "Admin portal — events CRUD, stream control, payments, users, email templates, organizer assignment, impersonation",
      "Organizer-facing stats and per-event access for promoter partners",
      "Marketing site, FAQ, support flows, and PWA shell; native app work in progress",
    ],
    whatWeDidNot: [],
    problem:
      "Independent fight promotions in Malaysia needed event-by-event PPV with local payment rails fans actually use — not a generic OTT subscription or a one-off stream link rebuilt for every card. Promoters also need tooling to configure streams, track purchases, and reconcile FPX versus card mix without standing up an engineering team for each show.",
    approach:
      "We built a TVOD platform around an event catalog, Mux playback, Billplz plus Stripe checkout, and an admin console promoters use to launch cards. Free-pass events, purchase confirmation email, and replay expiry windows are first-class product rules.",
    outcome:
      "PPV.MY has hosted real cards across boxing, Muay Thai, and MMA with Mux delivery and Billplz checkout. Native app delivery is on the roadmap.",
    stats: [
      { label: "Payments", value: "Billplz + cards", note: "Malaysia-first checkout" },
      { label: "Streaming", value: "Live + replay", note: "Per-event access windows" },
      { label: "Model", value: "Per-event PPV", note: "Not SVOD" },
    ],
    stack: ["React", "Mux", "Billplz", "Stripe", "tRPC", "better-auth"],
    logo: "/logos/ppv-my.svg",
    featured: true,
    featuredOrder: 3,
    accent: "#F59E0B",
  },
  {
    slug: "clinicos",
    name: "clinicOS",
    url: "https://myclinicos.com.au/",
    tagline: "Staff operations platform for Australian GP practices",
    summary:
      "An eight-person Fluid Web team builds clinicOS — the staff-only operations product for Australian GP practices — spanning web, mobile, AI document intake, and marketing delivery. Dr Faisal Khan's Practice Pro Solutions operates the services parent; clinicOS is the product arm focused on roster, comms, correspondence intake, and invoicing inside one secure workspace. The platform deliberately avoids patient-portal scope — staff ops only — with AU-friendly hosting and RBAC across six practice roles.",
    sector: "Healthcare SaaS",
    location: "Australia",
    contactLabel: "Dr Faisal Khan",
    contactNote: "Practice Pro Solutions",
    engagement: "full-stack-lead",
    engagementLabel: "Team of 8 · product + marketing",
    role: "Fluid Web team (~8) owns technology, AI features, mobile, and marketing site delivery for clinicOS. Clinical PMS and patient-facing MedBridge remain separate future products outside this engagement scope.",
    whatWeBuilt: [
      "Multi-tenant practice ops product — roster grid, internal comms channels and DMs, invoicing, settings",
      "Weekly roster with session types, conflict detection, manager edit permissions, and audit-friendly history",
      "Internal messaging and announcements with mobile-first read paths for floor staff",
      "AI-assisted document intake — upload and dedicated intake email, OCR extraction, triage queue, GP review before filing",
      "Role-based access control across Owner, Manager, Doctor, Nurse, Reception, and Locum roles",
      "Tenant isolation with PostgreSQL row-level security, MFA for owners/managers, immutable audit logs",
      "Mobile app build for staff workflows; marketing website with early-access positioning",
      "Stripe-backed subscription billing and AU data residency posture (AWS Sydney)",
    ],
    whatWeDidNot: [
      "Clinical PMS / patient portal (MedBridge is a separate future product)",
      "Day-to-day BPO, reception outsourcing, or bookkeeping service delivery (human services business)",
    ],
    problem:
      "Australian GP practices juggle roster spreadsheets, group chat, correspondence inboxes, and ad-hoc invoicing across tools never designed for healthcare staff workflows. They need a staff-only ops hub with proper tenant isolation and audit trails — not another patient portal competing with their existing PMS. Document intake in particular creates compliance risk when AI extraction ships without human confirmation and filing discipline.",
    approach:
      "We built clinicOS as a multi-tenant staff workspace with RBAC, AI-assisted intake that requires GP review before filing, and modules that share one practice directory rather than four disconnected apps. Web handles roster editing, intake, invoicing, and admin; mobile prioritizes comms and real-time updates for floor staff. Hosting and security posture align to Australian practice expectations — Sydney region, encryption in transit and at rest, MFA for privileged roles.",
    outcome:
      "clinicOS is in early access for Australian practices with web, mobile, and marketing surfaces in active delivery under an eight-person Fluid Web team. The product ships as a coherent staff ops platform rather than a feature bundle bolted onto generic project software.",
    stats: [
      { label: "Fluid Web team", value: "8", note: "Deployed on clinicOS" },
      { label: "Modules", value: "4+", note: "Roster · comms · intake · invoices" },
      { label: "Hosting region", value: "AWS Sydney", note: "Public product claim" },
    ],
    stack: ["React", "PostgreSQL RLS", "Stripe", "AI/OCR", "Mobile", "AWS ap-southeast-2"],
    logo: "/logos/clinicos.svg",
    featured: true,
    featuredOrder: 4,
    accent: "#38BDF8",
  },
  {
    slug: "smartfaktura",
    name: "SmartFaktura",
    url: "https://app.smartfaktura.tech",
    tagline: "Rwanda-focused invoicing app, built in Norway",
    summary:
      "Fluid Web solo-built the full product application at app.smartfaktura.tech — invoicing, customers, expenses, VAT tooling, multi-org flows, and Stripe subscription billing. Zemichael's Norwegian legal entity backs the company; the go-to-market focus is Rwandan SMEs and accountants who need simple cloud invoicing with local VAT and TIN context. The older WordPress marketing site pre-existed and stayed out of scope; every in-app surface is Fluid Web work.",
    sector: "Fintech · SME invoicing",
    location: "Norway (legal) · Rwanda GTM",
    contactLabel: "Zemichael",
    contactNote: "Zemichael SmartInvoice · Norway",
    engagement: "full-stack-lead",
    engagementLabel: "Full product app",
    role: "Sole engineer on the application — React SPA, Express API, Supabase data layer, Stripe billing, and Vercel deployment. Marketing WordPress site and Norwegian legacy pages were client-owned and out of scope.",
    whatWeBuilt: [
      "Full invoicing app — create, send, and track PDF invoices with sequential numbering and paid/unpaid/overdue states",
      "Customer and product catalogs with TIN-oriented fields for Rwanda SME workflows",
      "Expense tracking with categories, receipt upload, and activity audit trail",
      "VAT calculations and reporting aligned to Rwanda's 18% rate; accounting export endpoints",
      "Multi-org and accountant-oriented flows — org switching, dashboard stats, multi-company on Business tier",
      "Stripe subscription billing — Free, Pro, and Business plans with checkout and customer portal",
      "Auth, settings, and responsive web experience (no native app required for GTM)",
    ],
    whatWeDidNot: [
      "Older WordPress marketing site and Norwegian-language legacy positioning pages",
      "Bookkeeping services or accountant-of-record delivery (product-only engagement)",
    ],
    problem:
      "Rwandan SMEs and the accountants who serve them still rely on Excel and paper for invoicing, expense tracking, and VAT reporting — tools built for European markets do not match local TIN, RWF pricing, or regulatory context. Enterprise accounting suites are overkill for freelancers and small businesses that need send-an-invoice-today simplicity with exportable VAT reports. SmartFaktura needed a lean SaaS app a solo founder could operate in market without a large engineering bench.",
    approach:
      "Fluid Web shipped a focused React plus Express application on Supabase with freemium limits and RWF-oriented pricing tiers. Invoicing, customers, products, expenses, and VAT reports share one activity log and org model so accountants can manage multiple client companies on the Business plan. Stripe handles subscription upgrades inside the app; the marketing site remains a separate WordPress surface pointing CTAs to the product.",
    outcome:
      "SmartFaktura runs in production at app.smartfaktura.tech with Stripe-backed Free, Pro, and Business plans and public RWF pricing. Core product features ship through Fluid Web for Zemichael's Norway-incorporated, Rwanda-targeted GTM.",
    stats: [
      { label: "Build", value: "Full app", note: "Solo Fluid Web delivery" },
      { label: "Plans", value: "Free · Pro · Business", note: "Public RWF pricing" },
      { label: "VAT rate", value: "18%", note: "Rwanda-oriented tooling" },
    ],
    stack: ["React", "Express", "Supabase", "Stripe", "Vercel", "Render"],
    logo: "/logos/smartfaktura.png",
    featured: true,
    featuredOrder: 5,
    accent: "#A3E635",
  },
  {
    slug: "voxtell",
    name: "Voxtell AI",
    url: "https://www.voxtell.ai/",
    tagline: "White-label AI voice agents for telecom partners",
    summary:
      "Fluid Web joined Voxtell as hired fullstack on the AI voice pipeline — migrating the calling stack from Retell to Vapi, wiring Twilio telephony, transcriptions, and messaging, and implementing deep white-label theming for channel partners. Voxtell sells white-label AI receptionists to MSPs and VoIP resellers in Orlando and nationally, not direct-to-SMB as the primary motion. Our work focused on production voice infrastructure partners can rebrand — not demo chatbots or marketing site polish.",
    sector: "AI · Telecom",
    location: "Orlando, Florida, USA",
    contactLabel: "Voxtell team",
    contactNote: "Orlando-based · channel partner platform",
    engagement: "fullstack-feature",
    engagementLabel: "AI pipeline · Twilio · white-label",
    role: "Hired fullstack engineer. Owned AI calling pipeline migration (Retell → Vapi), Twilio calling with AI on live calls, transcription and messaging flows, and deep white-label theming; contributed partially to partner portal surfaces.",
    whatWeBuilt: [
      "AI voice pipeline migration from Retell to Vapi with production call handling paths",
      "Twilio integration — inbound/outbound calling, AI on live calls, voicemail and recording hooks",
      "Transcription pipeline and post-call messaging flows tied to partner tenant config",
      "Deep white-label theming — partner logo, colors, domain-facing UI so vendor brand stays invisible",
      "Partial partner portal work for tenant configuration and operational surfaces in scope",
      "Multi-tenant configuration patterns required for reseller deployments at scale",
    ],
    whatWeDidNot: [
      "NetSapiens native integration (platform capability outside Fluid Web scope)",
      "Marketing website and GTM content (client-owned)",
      "End-customer sales motion or MSP enablement playbooks (partner business)",
    ],
    problem:
      "Channel partners — MSPs, VoIP resellers, telecom providers — need branded AI receptionists with real telephony, not a demo chatbot bolted onto SIP or an iframe that exposes the vendor brand. Production voice requires sub-second intent handling, warm transfer with context, SMS follow-up, and tenant theming deep enough that partners set retail pricing under their own domain. Voxtell's pipeline needed a stable Vapi plus Twilio foundation after outgrowing the prior Retell integration.",
    approach:
      "Fluid Web owned the migration and production voice stack around Vapi and Twilio, keeping partner-facing theming configurable per tenant rather than hard-coded to Voxtell branding. Transcription and messaging flows connect to the same conversation record partners see in operational tooling. Work stayed focused on shippable white-label voice experiences — calling, transcripts, and follow-up SMS — rather than net-new GTM or NetSapiens-native provisioning.",
    outcome:
      "Voxtell ships white-label voice experiences with production calling, transcripts, and messaging under partner brands — the technical foundation resellers need to sell AI receptionists without building voice infra themselves. The Retell → Vapi migration and Twilio integration landed as durable pipeline ownership rather than a one-off integration spike.",
    stats: [
      { label: "Voice pipeline", value: "Migrated", note: "Provider cutover owned end-to-end" },
      { label: "Calling", value: "Production", note: "AI-handled telephony flows" },
      { label: "Theming", value: "White-label", note: "Partner brand depth" },
    ],
    stack: ["Vapi", "Twilio", "White-label theming", "Multi-tenant SaaS"],
    logo: "/logos/voxtell.png",
    featured: true,
    featuredOrder: 6,
    accent: "#FB7185",
  },
  {
    slug: "otteri",
    name: "Otteri AI",
    url: "https://otteri.ai/",
    tagline: "All-in-one AI workspace (Merlin-class product)",
    summary:
      "Fluid Web led the same Nexobe engineering pattern used on Treply — building Otteri from scratch as a Merlin-class, multi-model AI productivity suite under Asghar's portfolio in Illinois. Otteri consolidates research, content generation, creative media, document intelligence, and a prompt library into one subscription workspace instead of a fragmented stack of single-purpose AI tools. The live product ships at otteri.ai; the unrelated parked otteri.com domain is not part of this engagement.",
    sector: "AI productivity",
    location: "Bolingbrook, Illinois, USA",
    contactLabel: "Asghar",
    contactNote: "Nexobe · Illinois",
    engagement: "full-stack-lead",
    engagementLabel: "Led greenfield build",
    role: "Led the team building Otteri from scratch as a Merlin.ai-class all-in-one AI platform — same delivery model, scrum ownership, and local team coordination used on Treply and other Nexobe products.",
    whatWeBuilt: [
      "Greenfield multi-model AI workspace — GPT, Claude, Gemini, Grok, DeepSeek, Llama, and related models behind one login and billing",
      "Deep research flows with live web browsing and structured reports with citations",
      "Content generation surfaces — blogs, ads, social copy, SEO-oriented drafts",
      "Creative media — image, video, and music generation pipelines in product",
      "Document intelligence — PDF chat, contract Q&A, website and video summarization",
      "AI mindmaps, custom bots, knowledge-base bots, and built-in code editor",
      "Prompt marketplace / library and Chrome extension for in-browser workflows",
      "Team plan architecture — centralized billing and org model for multi-seat customers",
    ],
    whatWeDidNot: [
      "Current parked otteri.com domain (unrelated marketplace listing — product lives at otteri.ai)",
      "Nexobe portfolio marketing and holding-company site (separate surface)",
    ],
    problem:
      "Operators and small teams were paying for a fragmented stack — one tool for writing, another for research, another for images, plus ChatGPT tabs and browser extensions with no shared credit model. Merlin-class products proved the market wants one workspace with model choice, creative tools, and document intelligence under a single subscription. Otteri needed a greenfield build that could ship fast under the Nexobe portfolio operating model rather than assembling white-label wrappers.",
    approach:
      "Fluid Web ran the same lead-engineer playbook as Treply: greenfield architecture, local team coordination, and continuous product delivery from scratch. Features were scoped as a horizontal AI command center — research, generation, media, docs, and prompts — with unified credits and plan tiers rather than per-feature SKUs. Next.js product surfaces, API boundaries, and extension packaging shipped as one coherent platform under Nexobe ownership.",
    outcome:
      "Otteri is live at otteri.ai with web app surfaces, public Pro and Teams pricing (including a $29/mo Pro anchor on marketing), and a Chrome extension listed under the Bolingbrook Nexobe footprint. The product ships as a credible Merlin-class alternative built entirely under Fluid Web leadership during the engagement window.",
    stats: [
      { label: "Build type", value: "From scratch", note: "Nexobe portfolio" },
      { label: "Public plan anchor", value: "$29/mo", note: "Pro tier on marketing site" },
      { label: "Delivery model", value: "Same as Treply", note: "Lead engineer + local team" },
    ],
    stack: ["Next.js", "Multi-model AI", "Chrome extension", "Credit billing"],
    logo: "/logos/otteri.png",
    featured: true,
    featuredOrder: 7,
    accent: "#2DD4BF",
  },
];

export const featuredCaseStudies = [...caseStudies]
  .filter((c) => c.featured)
  .sort((a, b) => a.featuredOrder - b.featuredOrder);

export const allCaseStudiesSorted = [...caseStudies].sort(
  (a, b) => a.featuredOrder - b.featuredOrder,
);

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export const geographyHighlights = [
  {
    place: "Illinois, USA",
    detail: "Nexobe cluster — Asghar (Treply, Otteri)",
  },
  {
    place: "Jacksonville / St. Johns, FL",
    detail: "Floor Nexus — Johnny",
  },
  { place: "Orlando, FL", detail: "Voxtell AI" },
  { place: "Australia", detail: "clinicOS — Dr Faisal Khan" },
  { place: "Malaysia", detail: "PPV.MY — Hilman Ali" },
  {
    place: "Norway → Rwanda GTM",
    detail: "SmartFaktura — Zemichael",
  },
] as const;

/** Map pins — accurate client geography for the homepage map. */
export const mapPins = [
  {
    id: "illinois",
    label: "Bolingbrook, Illinois",
    detail: "Asghar · Nexobe",
    lat: 41.6986,
    lng: -88.0684,
    accent: "#6EE7B7",
    projects: [
      { name: "Treply", slug: "treply" },
      { name: "Otteri AI", slug: "otteri" },
    ],
  },
  {
    id: "jacksonville",
    label: "St. Johns / Jacksonville, FL",
    detail: "Johnny · Floor Nexus",
    lat: 30.0819,
    lng: -81.5478,
    accent: "#5B8DEF",
    projects: [{ name: "Floor Nexus", slug: "floor-nexus" }],
  },
  {
    id: "orlando",
    label: "Orlando, FL",
    detail: "Voxtell AI",
    lat: 28.5383,
    lng: -81.3792,
    accent: "#FB7185",
    projects: [{ name: "Voxtell AI", slug: "voxtell" }],
  },
  {
    id: "australia",
    label: "Australia",
    detail: "Dr Faisal Khan · Practice Pro",
    lat: -25.2744,
    lng: 133.7751,
    accent: "#38BDF8",
    projects: [{ name: "clinicOS", slug: "clinicos" }],
  },
  {
    id: "malaysia",
    label: "Kuala Lumpur, Malaysia",
    detail: "Hilman Ali",
    lat: 3.139,
    lng: 101.6869,
    accent: "#F59E0B",
    projects: [{ name: "PPV.MY", slug: "ppv-my" }],
  },
  {
    id: "norway",
    label: "Norway",
    detail: "Zemichael",
    lat: 59.9139,
    lng: 10.7522,
    accent: "#A3E635",
    projects: [{ name: "SmartFaktura", slug: "smartfaktura" }],
  },
  {
    id: "rwanda",
    label: "Kigali, Rwanda",
    detail: "SmartFaktura GTM",
    lat: -1.9441,
    lng: 30.0619,
    accent: "#A3E635",
    projects: [{ name: "SmartFaktura", slug: "smartfaktura" }],
  },
] as const;
