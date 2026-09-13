export type PracticeSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type ProcessStep = {
  title: string;
  body: string;
};

export type PracticeFaq = {
  question: string;
  answer: string;
};

export type PracticeEntry = {
  slug: string;
  kind: "service" | "engage";
  label: string;
  tagline: string;
  intro: string[];
  quickFacts: { label: string; value: string }[];
  signals: string[];
  sections: PracticeSection[];
  process: ProcessStep[];
  deliverables: string[];
  boundaries: string[];
  faqs: PracticeFaq[];
  proof: string[];
  accent: string;
};

export const services: PracticeEntry[] = [
  {
    slug: "saas-platforms",
    kind: "service",
    label: "SaaS & Platforms",
    tagline: "Multi-tenant products built to carry real customers",
    intro: [
      "Most of what we ship is multi-tenant SaaS — products with org boundaries, role hierarchies, billing, admin tooling and white-label surfaces. We build them so the fiftieth customer costs the same to onboard as the first, because the difference between a platform and a well-dressed prototype is whether growth costs engineering time.",
      "We have taken products from an empty repository to production traffic, and we have taken over platforms where tenancy was retrofitted and every new customer required a developer. Both jobs come down to the same thing: getting the boundaries right, then making the operator surfaces as good as the customer ones.",
    ],
    quickFacts: [
      { label: "Typical shape", value: "Squad or solo embed" },
      { label: "Starts at", value: "Greenfield or inherited" },
      { label: "Ships with", value: "Admin + billing + docs" },
    ],
    signals: [
      "Onboarding a new customer requires an engineer to run a script or touch config",
      "White-labelling means maintaining a fork or a pile of conditional branches",
      "Support cannot see what a customer sees, so every bug report becomes a guessing game",
      "Permissions are checked in the UI, and nobody is confident about what the API allows",
      "Billing and entitlements disagree, so people keep access they stopped paying for",
    ],
    sections: [
      {
        heading: "Tenancy is the decision you cannot cheaply reverse",
        body: [
          "Almost every expensive SaaS rebuild we have inherited traces back to the same root cause: the tenancy model was decided implicitly, usually by whoever wrote the first database migration. Once customer data, permissions and billing have grown around a weak boundary, separating them is a rewrite rather than a refactor.",
          "So we settle it first. Which entities are tenant-scoped, which are global, how isolation is enforced at the data layer rather than by remembering to add a filter, and what happens when one customer needs to see across several orgs. It is unglamorous work that takes days and saves quarters.",
        ],
        bullets: [
          "Isolation enforced at the data layer, not by developer discipline in each query",
          "Org, workspace and user hierarchies modelled before feature work begins",
          "Cross-tenant access designed deliberately for agencies, parents and resellers",
          "Migration paths planned for when a customer splits, merges or is acquired",
        ],
      },
      {
        heading: "White-label as data, never as a fork",
        body: [
          "White-label goes wrong when branding is treated as a deployment concern. You end up with a fork per customer, and every fix has to be applied several times until someone misses one and a customer sits on a stale build for months.",
          "We model branding, domains, theming, email identity and feature entitlements as tenant data. A new white-label workspace is a record, not a release. That is how Treply supported agency partners running their own branded consoles on top of one codebase.",
        ],
        bullets: [
          "Brand, domain, theme and email identity stored as tenant configuration",
          "Agency and reseller consoles that manage their own downstream customers",
          "Entitlements driving what each tier can see, on the server and not just the UI",
          "One deploy serving every brand, so fixes land everywhere at once",
        ],
      },
      {
        heading: "Operator surfaces are product, not internal tooling",
        body: [
          "The admin console decides whether your company can actually run the product. When support cannot reproduce a customer's view, every ticket escalates to engineering, and your senior developers spend their week doing customer service with database access.",
          "We build the operator side in step with the customer side. Impersonation with an audit trail, tenant-level analytics, manual overrides for the cases the product does not cover yet, and the ability for sales to provision an account without filing a ticket.",
        ],
        bullets: [
          "Impersonation with full audit logging so support sees exactly what the customer sees",
          "Tenant provisioning and configuration usable by non-engineers",
          "Usage and health analytics per tenant, surfaced before customers complain",
          "Safe manual overrides for the edge cases every real business has",
        ],
      },
      {
        heading: "Billing wired to the same truth as permissions",
        body: [
          "When billing state and access control live in separate systems, they drift. Customers churn and keep access, plans upgrade and features stay locked, and finance reconciles by hand every month.",
          "We wire entitlements to the same source of truth the permission layer reads, so a plan change immediately and correctly changes what the customer can do. Trials, proration, seat counts and usage limits all resolve through one path.",
        ],
      },
    ],
    process: [
      {
        title: "Architecture read",
        body: "One to two weeks. We map the tenancy model, permission surface, billing path and integration boundaries — whether that is a blank page or an existing codebase. You get an honest written assessment, including the parts we think are fine.",
      },
      {
        title: "Foundation",
        body: "Tenancy, auth, roles and the deployment pipeline land first, with a thin but genuinely working feature slice on top so the model gets tested against reality rather than a diagram.",
      },
      {
        title: "Surface build",
        body: "Customer app, operator console and billing get built in parallel rather than sequenced, so the product is operable the day it is usable.",
      },
      {
        title: "Scale and hand back",
        body: "Load characteristics, monitoring and documentation. Your team can run and extend the platform without us, which is the point.",
      },
    ],
    deliverables: [
      "Production multi-tenant application in your repositories and infrastructure",
      "Admin and operator console with impersonation and audit trails",
      "Billing and entitlement integration tied to the permission model",
      "White-label and theming layer where the engagement calls for it",
      "Deployment pipeline, monitoring and written architecture documentation",
    ],
    boundaries: [
      "We do not run long discovery phases before engineers are in the codebase",
      "We do not take ownership of your infrastructure accounts — they stay yours",
      "We will tell you when a rebuild is not warranted, even though rebuilds bill more",
    ],
    faqs: [
      {
        question: "Can you fix tenancy on a product that is already live?",
        answer:
          "Usually yes, and we have done it. It is done in phases behind live traffic rather than as a cutover — new boundaries go in alongside the old ones, data migrates in stages, and the old path is removed last. It is slower than a rewrite and far less risky.",
      },
      {
        question: "Do you work with our existing stack or impose one?",
        answer:
          "We work with what you have unless there is a concrete reason to change it. Replacing a stack that works is expensive and mostly serves the agency, not the client.",
      },
      {
        question: "How long until something is usable?",
        answer:
          "For greenfield, weeks rather than months to a working slice you can click through. We deliberately avoid long stretches where the only visible output is documents.",
      },
    ],
    proof: ["treply", "floor-nexus", "clinicos"],
    accent: "#5B8DEF",
  },
  {
    slug: "ai-pipelines",
    kind: "service",
    label: "Production AI Pipelines",
    tagline: "AI features that hold up outside the demo",
    intro: [
      "We build AI into products people pay for — voice agents that answer real calls, document intake that feeds real records, in-app assistants with genuine context, and generation pipelines running at volume. The prompt is never the hard part. Latency, cost, failure handling and vendor portability are.",
      "The gap between an impressive prototype and a production feature is mostly unglamorous engineering: what happens on a timeout, how a bad extraction gets caught before it corrupts a record, what a provider price change does to your margin, and how quickly you can leave a vendor that stops working for you.",
    ],
    quickFacts: [
      { label: "Typical shape", value: "Embedded specialist" },
      { label: "Covers", value: "Voice · documents · assistants" },
      { label: "Principle", value: "Provider-portable by default" },
    ],
    signals: [
      "The demo is impressive and production is unreliable",
      "You are locked into one provider and their pricing just changed",
      "Nobody can say what an AI request costs you per customer",
      "Latency is fine in testing and unacceptable on a real phone call",
      "Extraction accuracy is good enough to demo and not good enough to trust",
    ],
    sections: [
      {
        heading: "Portability is designed in, not bolted on later",
        body: [
          "Model providers change pricing, deprecate endpoints and have outages. Teams that call a vendor SDK directly from product code discover the cost of that decision at the worst possible moment, usually during an incident or a renewal negotiation.",
          "We put a provider boundary in from the first week. Product code speaks to our interface, adapters speak to vendors, and swapping one out is a contained change rather than a quarter of work. We have migrated a live voice product from one provider to another end to end — that is the level of portability we build toward by default.",
        ],
        bullets: [
          "Provider-agnostic interface between product code and any model vendor",
          "Adapters per vendor so migration is contained rather than sprawling",
          "Fallback routing when a provider degrades or goes down mid-call",
          "Ability to run providers side by side to compare quality and cost on real traffic",
        ],
      },
      {
        heading: "Voice is a latency problem wearing an AI costume",
        body: [
          "Real-time voice is the most demanding AI surface to get right. A human on a phone call notices delay long before they notice a slightly weaker answer, so the whole pipeline has to be tuned for time-to-first-token rather than benchmark quality.",
          "That means streaming everywhere, speculative work where it pays off, careful turn-taking and barge-in handling, and telephony integration that does not add its own delay. We have built this into live products — Twilio calling, real-time transcription, AI on the call, and messaging on the same customer record.",
        ],
        bullets: [
          "Streaming pipelines tuned for time-to-first-token, not offline accuracy",
          "Turn-taking, interruption and silence handling that feels human",
          "Telephony integration with transcription and post-call structured output",
          "Graceful degradation and human handoff when the agent is out of its depth",
        ],
      },
      {
        heading: "Accuracy needs a review path, not just a better model",
        body: [
          "For document intake and extraction, the question is never whether the model is ever wrong. It is what happens when it is. If a wrong extraction silently writes to a record, you have built a system that quietly corrupts your customer's data.",
          "We design confidence handling and human review into the pipeline from the start. High-confidence output flows through, uncertain output routes to a person, and every field keeps a link back to its source so a human can verify in seconds instead of re-reading a document.",
        ],
        bullets: [
          "Confidence scoring with explicit thresholds per field, not one global setting",
          "Human-in-the-loop review queues for anything below the bar",
          "Source provenance retained so any value can be traced back and verified",
          "Correction feedback captured to improve the pipeline over time",
        ],
      },
      {
        heading: "Unit economics stay visible",
        body: [
          "AI features can quietly destroy margin. Token spend scales with usage, so the feature that looked cheap during a pilot becomes your largest infrastructure line once adoption arrives.",
          "We instrument cost per request, per feature and per customer from the beginning, with caching and model tiering where cheaper models are genuinely good enough. You should be able to answer what an average customer costs you to serve — before finance asks.",
        ],
      },
    ],
    process: [
      {
        title: "Pipeline audit",
        body: "We measure what exists: latency distribution, failure modes, cost per request and where accuracy actually breaks. Assumptions get replaced with numbers before anyone proposes a fix.",
      },
      {
        title: "Boundary and instrumentation",
        body: "The provider abstraction and cost or quality telemetry go in early, because every later decision depends on being able to measure and swap.",
      },
      {
        title: "Harden the path",
        body: "Failure handling, fallbacks, review queues and latency work on the highest-traffic surface first, validated against real traffic rather than test fixtures.",
      },
      {
        title: "Extend and document",
        body: "New AI surfaces built on the now-proven foundation, with runbooks so your team can operate and debug the pipeline independently.",
      },
    ],
    deliverables: [
      "Provider-portable AI layer with working adapters for your chosen vendors",
      "Latency, cost and quality instrumentation per feature and per customer",
      "Failure handling, fallback routing and human review paths",
      "Voice, transcription and messaging integration where in scope",
      "Runbooks covering debugging, tuning and provider migration",
    ],
    boundaries: [
      "We do not train foundation models — we build the product engineering around them",
      "We will not ship an AI feature we cannot instrument for cost and failure",
      "We will say when a rules-based approach beats a model for your use case",
    ],
    faqs: [
      {
        question: "Which providers do you work with?",
        answer:
          "Whichever fits the workload, and we build so the answer can change. We have shipped on multiple voice and model providers and migrated a production product between them without a rewrite.",
      },
      {
        question: "Can you take over an AI prototype someone else built?",
        answer:
          "Frequently. Prototypes usually need the same three things: a provider boundary, real failure handling, and instrumentation. The model work is often the part that needs least change.",
      },
      {
        question: "How do you keep AI costs predictable?",
        answer:
          "Per-request cost tracking, caching where responses repeat, and tiering so cheap models handle the easy majority. Predictability comes from measurement first, optimisation second.",
      },
    ],
    proof: ["voxtell", "otteri", "floor-nexus"],
    accent: "#C084FC",
  },
  {
    slug: "messaging",
    kind: "service",
    label: "High-Volume Messaging",
    tagline: "SMS, MMS and voice infrastructure at production scale",
    intro: [
      "Messaging looks trivial until volume, carrier rules and deliverability arrive together. We have built and run platforms sending roughly one to two million SMS and MMS messages a month, along with the compliance, monitoring and campaign tooling that keeps those numbers moving.",
      "At low volume any provider SDK works. At high volume you are managing throughput, carrier registration, consent records, opt-out handling, number pools and delivery health — and all of it has to be visible to the people running campaigns rather than buried in a vendor dashboard.",
    ],
    quickFacts: [
      { label: "Proven at", value: "1–2M messages / month" },
      { label: "Channels", value: "SMS · MMS · voice · inbox" },
      { label: "Includes", value: "Compliance + deliverability" },
    ],
    signals: [
      "Messages are being filtered or blocked and nobody knows why",
      "Carrier registration and consent are handled manually or not at all",
      "Campaign sends are slow, or throughput collapses at peak",
      "Opt-outs are tracked somewhere outside the product's data model",
      "Nobody can report delivery rates without exporting from a provider console",
    ],
    sections: [
      {
        heading: "Deliverability is a product feature",
        body: [
          "Teams usually treat deliverability as an operations problem until carriers start filtering and revenue drops. By then the fixes are reactive and the sender reputation is already damaged.",
          "We build the things carriers care about into the product itself: registration state, consent capture with an auditable record, opt-out handling that is impossible to bypass, sensible content and throughput patterns, and number pool management. The product should make a compliant send the default and a risky one difficult.",
        ],
        bullets: [
          "Carrier registration and campaign approval tracked as product state",
          "Consent and opt-out enforced in the data model, not in support process",
          "Number pools and rotation managed with reputation in mind",
          "Content and throughput patterns that keep sender reputation intact",
        ],
      },
      {
        heading: "Campaign tooling built for volume",
        body: [
          "Sending a million messages is not sending one message a million times. Scheduling, segmentation, rate control, retries and partial-failure handling all have to work under load, and the queue has to behave sensibly when a provider slows down mid-send.",
          "We build the send path to degrade gracefully: throttle rather than drop, retry with awareness of what already delivered, and give operators a way to pause or adjust a campaign that is in flight.",
        ],
        bullets: [
          "Scheduling and segmentation that hold up against large recipient sets",
          "Throughput control and backpressure so provider slowdowns do not cascade",
          "Retry logic that never double-sends to a recipient who already received",
          "Live pause, resume and adjust on campaigns that are mid-flight",
        ],
      },
      {
        heading: "Two-way, not just broadcast",
        body: [
          "Outbound-only messaging stops being enough the moment customers reply. Replies need to reach a person, land on the right customer record, and carry the context of what was sent.",
          "We build the inbound path on the same record as the outbound one — shared inbox, assignment, conversation history, and voice on the same thread where the product calls for it. One customer, one timeline, regardless of channel.",
        ],
        bullets: [
          "Shared team inbox with assignment and conversation history",
          "Inbound replies matched to the correct customer record automatically",
          "Voice, missed-call handling and callback flows on the same record",
          "Automation and routing so common replies do not need a human",
        ],
      },
      {
        heading: "Numbers the operators can actually see",
        body: [
          "People running campaigns need delivery rates, failure reasons and spend before and during a send, not in a monthly export. When the data lives only in a provider console, nobody looks until something has already gone wrong.",
          "We surface delivery health, failure breakdowns and cost inside the product, scoped to whoever is looking — per campaign, per tenant, per number.",
        ],
      },
    ],
    process: [
      {
        title: "Deliverability and volume audit",
        body: "Current send patterns, failure reasons, registration state and consent handling. Usually this surfaces one or two concrete causes behind filtering that had been treated as mysterious.",
      },
      {
        title: "Compliance foundation",
        body: "Consent, opt-out and registration move into the data model so compliance stops depending on process and memory.",
      },
      {
        title: "Send path hardening",
        body: "Throughput control, retries, queueing and failure handling rebuilt to behave under peak load and provider degradation.",
      },
      {
        title: "Operator visibility",
        body: "Campaign tooling and delivery reporting surfaced to the people who actually run sends.",
      },
    ],
    deliverables: [
      "High-throughput send pipeline with retry and backpressure handling",
      "Consent, opt-out and carrier registration modelled in the product",
      "Campaign tooling with scheduling, segmentation and live controls",
      "Two-way inbox with assignment, history and voice where in scope",
      "Delivery, failure and cost reporting surfaced to operators",
    ],
    boundaries: [
      "We build the platform — we do not write your campaign content or strategy",
      "We will not ship a send path that can bypass opt-out handling",
      "We are engineers, not your legal advisors on regional messaging regulation",
    ],
    faqs: [
      {
        question: "Which messaging providers do you build on?",
        answer:
          "We have shipped production messaging and voice on mainstream carriers and CPaaS providers, and we abstract the provider so you keep the option to move or run more than one.",
      },
      {
        question: "Can you fix deliverability on an existing platform?",
        answer:
          "Usually. Most cases come down to registration state, consent handling or send patterns, and all three are diagnosable from your current data before anyone commits to a build.",
      },
      {
        question: "Is voice part of this or separate?",
        answer:
          "It can be the same engagement. We have built SMS, MMS and voice against a shared customer record, including missed-call handling and call-back flows.",
      },
    ],
    proof: ["treply", "voxtell", "floor-nexus"],
    accent: "#6EE7B7",
  },
  {
    slug: "mobile",
    kind: "service",
    label: "Mobile Applications",
    tagline: "Apps shipped in step with the platform, not behind it",
    intro: [
      "Mobile falls behind because it gets staffed last. The web product moves weekly, the app ships quarterly, and within a year they are effectively two different products with two different truths about your data.",
      "We build mobile in parallel with the platform — same API contract, same permission model, same release rhythm — so field users, customers and operators all work from one source of truth. On larger engagements that has meant customer apps, field apps and partner apps developed alongside the main web product rather than trailing it.",
    ],
    quickFacts: [
      { label: "Typical shape", value: "Parallel with platform" },
      { label: "Built for", value: "Field · customer · partner" },
      { label: "Includes", value: "Store release pipeline" },
    ],
    signals: [
      "The app is months or years behind the web product",
      "Mobile has its own API endpoints that drifted from the main ones",
      "Field users work around the app instead of through it",
      "Releases are a big event rather than a routine week",
      "Offline or poor-connectivity use was never really designed for",
    ],
    sections: [
      {
        heading: "One contract, one permission model",
        body: [
          "The most common cause of mobile drift is a separate API built for the app, which then evolves independently. Two contracts mean two sets of bugs, two permission surfaces to get wrong, and a growing pile of behaviour that differs depending on which client you opened.",
          "We work against one shared contract and one permission model. If a role cannot do something on the web, it cannot do it on mobile either — enforced server-side, not by hiding a button.",
        ],
        bullets: [
          "Single API contract shared by web and mobile clients",
          "Permissions enforced server-side so clients cannot diverge",
          "Parity tracked as an explicit backlog rather than a vague intention",
          "Shared types and validation so breaking changes surface at build time",
        ],
      },
      {
        heading: "Designed for where the work happens",
        body: [
          "Field applications get used in basements, on job sites and in buildings with poor reception. An app that assumes connectivity fails exactly where it is most needed, and users fall back to notes and phone calls.",
          "We design for the real environment: offline capture with sensible conflict resolution, camera and media flows that work with gloves on and one hand free, and sync that resolves cleanly rather than silently losing someone's afternoon of work.",
        ],
        bullets: [
          "Offline capture with deliberate, understandable conflict resolution",
          "Camera, media and document flows built for on-site conditions",
          "Interfaces usable one-handed and readable in bad lighting",
          "Sync status made visible so users trust that their work saved",
        ],
      },
      {
        heading: "Release as routine, not as an event",
        body: [
          "When shipping to the stores is painful, teams ship less, batches get bigger and each release carries more risk. The fix is to make release boring early, before the pressure arrives.",
          "We set up the pipeline, signing, device testing and staged rollout at the start of the engagement, so mobile releases run on the same cadence as everything else.",
        ],
        bullets: [
          "Build, signing and store submission automated from the start",
          "Device and OS coverage testing as part of the normal cycle",
          "Staged rollout and crash monitoring so bad builds are caught early",
          "Push, deep links and notifications wired into the core product model",
        ],
      },
    ],
    process: [
      {
        title: "Parity and platform read",
        body: "What exists, where mobile has drifted from web, and which of that gap actually matters to users. Not everything on web belongs on a phone.",
      },
      {
        title: "Contract alignment",
        body: "Mobile moves onto the shared API and permission model, which is usually where most of the long-standing bug class disappears.",
      },
      {
        title: "Surface build",
        body: "The flows users actually need in the field, built for real conditions rather than desk testing.",
      },
      {
        title: "Release discipline",
        body: "Pipeline, monitoring and cadence handed over so releases stay routine after we step back.",
      },
    ],
    deliverables: [
      "Production mobile applications on your developer accounts",
      "Shared API contract alignment with the web platform",
      "Offline, media and field-condition flows where the product needs them",
      "Automated build, signing and store release pipeline",
      "Crash monitoring, analytics and release runbooks",
    ],
    boundaries: [
      "We do not rebuild a working app for the sake of a framework preference",
      "We will push back on porting web features that do not belong on a phone",
      "Store accounts and signing credentials stay in your control",
    ],
    faqs: [
      {
        question: "Native or cross-platform?",
        answer:
          "Whatever suits the product and your team's ability to maintain it. Cross-platform covers most business applications well; we recommend native when device capability or performance genuinely demands it.",
      },
      {
        question: "Can you take over an existing app?",
        answer:
          "Yes, and inherited apps are common for us. The first job is usually contract alignment and release pipeline, since those unblock everything after.",
      },
      {
        question: "Do you handle store submission and review?",
        answer:
          "We set up and run the submission pipeline, on your accounts. If a review gets rejected, dealing with it is part of the work.",
      },
    ],
    proof: ["floor-nexus", "clinicos", "ppv-my"],
    accent: "#38BDF8",
  },
];

export const engagements: PracticeEntry[] = [
  {
    slug: "dedicated-squads",
    kind: "engage",
    label: "Dedicated Squads",
    tagline: "A full engineering team, owned and accountable",
    intro: [
      "When the bottleneck is capacity, we bring an entire team — engineers, QA and delivery management — and take ownership of shipping. Our largest squad runs more than twelve engineers across five product surfaces, with another team of eight on a separate client platform.",
      "We have run this model in three different situations: taking over a platform whose delivery had stalled, building out a healthcare product from a standing start, and running squads across a multi-product portfolio where the same team shipped a messaging platform and a set of AI products under one owner. The shape changes, the accountability does not.",
      "That is the distinction that matters. We are not filling seats against your backlog and waiting for direction. We own architecture, release cadence and quality, and we report on outcomes — so your founders can stay on customers and fundraising instead of triaging engineering every morning.",
    ],
    quickFacts: [
      { label: "Team size", value: "6–12+ engineers" },
      { label: "Includes", value: "Engineering · QA · delivery" },
      { label: "Commitment", value: "Ongoing, scales with roadmap" },
    ],
    signals: [
      "Delivery is the constraint on the business, not demand or funding",
      "Hiring cannot move fast enough for the window you are in",
      "Several product surfaces need to move at once and one team cannot cover them",
      "Your senior people spend more time coordinating contractors than building",
      "Quality is slipping because nobody owns the release process",
    ],
    sections: [
      {
        heading: "What a squad actually includes",
        body: [
          "A squad is a working unit, not a pile of individual contractors. It comes with a senior lead who owns architecture and technical decisions, engineers across the surfaces in scope, QA, and delivery management running scrum, stories and reporting.",
          "That last part is normally where agency engagements quietly fail. Delivery process gets treated as the client's job, so nobody is accountable for whether the work actually lands. We include it, because a team without delivery ownership is just a more expensive way to have the same bottleneck.",
        ],
        bullets: [
          "Senior lead owning architecture, standards and release cadence",
          "Engineers sized to the surfaces in scope, not to a fixed template",
          "QA inside the team so quality is not a phase at the end",
          "Scrum, stories, estimates and delivery reporting included as standard",
        ],
      },
      {
        heading: "Embed, stabilize, accelerate",
        body: [
          "We do not open with a rewrite proposal. The first weeks are spent getting genuinely productive inside your codebase and understanding why delivery is slow, which is frequently a process problem wearing a technical costume.",
          "Then we stabilize whatever is actively costing you — flaky releases, broken environments, the module everyone is afraid to touch. Only after that do we accelerate feature work, because velocity on an unstable base is just a faster way to create incidents.",
        ],
        bullets: [
          "Weeks one to two: into the codebase, shipping small real changes",
          "Weeks three to six: stabilize releases, environments and the risky areas",
          "From there: sustained feature delivery on a predictable cadence",
          "Throughout: written decisions so context does not live only in our heads",
        ],
      },
      {
        heading: "How we work with your existing team",
        body: [
          "Most squads run alongside in-house engineers, and the failure mode there is two parallel teams with separate standards and quiet resentment. We avoid it by joining your process rather than running our own beside it — your repository, your review standards, shared standups.",
          "Where you have no in-house engineering yet, we operate as the engineering function until you do, and we build with the explicit assumption that you will hire. That means documentation and conventions aimed at the developer who has not been hired yet.",
        ],
      },
      {
        heading: "Squads across a portfolio",
        body: [
          "Some of our squad work is not one product but several. Where a single owner runs a portfolio, we have staffed teams across a messaging platform and a group of AI products at the same time, with shared standards and people moving between products as priorities shift.",
          "That arrangement only works if conventions, review standards and delivery process are genuinely shared rather than nominally shared. It is more setup work at the start, and it means a new product in the portfolio starts with a team that already knows how you build.",
        ],
        bullets: [
          "Shared engineering standards and review process across products",
          "People reallocated between products as priorities change, without re-onboarding",
          "One delivery rhythm and one reporting view across the portfolio",
        ],
      },
      {
        heading: "Timezones and overlap",
        body: [
          "We have deployed engineers across six continents and treat overlap as a design decision rather than something to apologise for. Clients in the United States, Australia, Europe and Southeast Asia all run on scheduled daily overlap with their squad.",
          "Async is used where it genuinely works — written decisions, recorded context, detailed pull requests — and live hours are reserved for the things that need them.",
        ],
      },
    ],
    process: [
      {
        title: "Scoping conversation",
        body: "What is actually blocking delivery, which surfaces matter, and what the next two quarters need to look like. We will tell you if a squad is the wrong shape for your problem.",
      },
      {
        title: "Team assembly",
        body: "Two to three weeks to stand up a squad matched to the stack and the surfaces, led by someone who has shipped something comparable.",
      },
      {
        title: "Embed and stabilize",
        body: "Into your repository and process, shipping real changes early, then stabilizing the parts actively costing you time.",
      },
      {
        title: "Sustained delivery",
        body: "Predictable cadence with delivery reporting, scaling the team up or down as the roadmap changes.",
      },
    ],
    deliverables: [
      "Dedicated engineering team with named senior technical ownership",
      "Delivery process — scrum, stories, estimates and reporting",
      "QA coverage inside the team rather than as an afterthought",
      "Written architecture decisions and onboarding documentation",
      "A predictable release cadence your business can plan around",
    ],
    boundaries: [
      "We do not bill a discovery phase before engineers are shipping",
      "We will not staff a squad larger than the problem needs",
      "Code, infrastructure and accounts remain yours throughout",
    ],
    faqs: [
      {
        question: "How quickly can a squad start?",
        answer:
          "Typically two to three weeks to assemble and embed a full team. A solo senior can usually start sooner if you need momentum immediately while the squad forms.",
      },
      {
        question: "Can we scale the team down later?",
        answer:
          "Yes. Engagements are ongoing rather than locked into long fixed contracts. If scope shrinks the team shrinks, and handover documentation is part of the work rather than an exit negotiation.",
      },
      {
        question: "Who manages the team day to day?",
        answer:
          "We do. Delivery management comes with the squad, and you get reporting and a direct line to the technical lead rather than an account manager relaying messages.",
      },
      {
        question: "What happens to knowledge if we part ways?",
        answer:
          "It is documented as we go, in your repository. We build so your team is never dependent on us to keep shipping — that is a condition of doing this well, not a favour.",
      },
    ],
    proof: ["floor-nexus", "clinicos", "treply", "otteri"],
    accent: "#5B8DEF",
  },
  {
    slug: "solo-embeds",
    kind: "engage",
    label: "Solo Senior Embeds",
    tagline: "One senior engineer who owns the build",
    intro: [
      "Sometimes a team is the wrong answer. One senior engineer inside your product, owning the work end to end, moves faster than a squad carrying coordination overhead — and we have delivered entire production applications this way, including a complete invoicing platform built by a single engineer.",
      "The advantage is that nothing gets lost in translation. The person making architectural decisions is the person writing the code and the person talking to you, so there is no handoff layer where context and urgency go to die.",
    ],
    quickFacts: [
      { label: "Team size", value: "One senior engineer" },
      { label: "Scope", value: "Full-stack ownership" },
      { label: "Scales to", value: "A squad if needed" },
    ],
    signals: [
      "The scope is clear and coordination overhead would cost more than it adds",
      "You need one strong pair of hands, not a project",
      "Previous agency work came with more account management than engineering",
      "An early product needs to get built before it needs to get organised",
      "Your in-house team needs a senior addition rather than a parallel team",
    ],
    sections: [
      {
        heading: "Full ownership, no translation layer",
        body: [
          "A solo embed owns the work from data model through to shipped interface. They join your standups, work in your repository, and make technical calls in the conversation rather than taking them away to a team that then makes them differently.",
          "This is deliberately the opposite of the traditional agency structure. There is no account manager summarising your requirements into a document, and no risk that the person who understood the problem is not the person who builds the solution.",
        ],
        bullets: [
          "Full-stack ownership from database through deployed product",
          "Direct working relationship with founders and your in-house team",
          "Technical decisions made in conversation, not relayed through an intermediary",
          "Accountable for shipped outcomes rather than logged hours",
        ],
      },
      {
        heading: "When one person genuinely is faster",
        body: [
          "Adding engineers adds communication cost. Below a certain scope, a single senior person holding the entire system in their head ships more per week than three people coordinating — because there is no interface to negotiate, no merge friction, and no shared understanding to maintain.",
          "We are honest about where that line sits. If the scope needs a team, we will say so rather than stretching one person thin and calling it efficiency.",
        ],
      },
      {
        heading: "Built to be handed over",
        body: [
          "The obvious risk with a solo build is concentration: everything lives in one person's head. We treat that as a design constraint rather than something to worry about at the end.",
          "Conventional structure over clever abstractions, documented decisions, and a codebase aimed at the next developer. The measure of a good solo engagement is how ordinary it feels for someone else to pick up.",
        ],
        bullets: [
          "Conventional patterns chosen over personal preference",
          "Architecture decisions written down as they are made",
          "Setup and operational documentation kept current, not written at the end",
          "Regular walkthroughs so you are never surprised by your own codebase",
        ],
      },
      {
        heading: "Scaling up when the scope grows",
        body: [
          "Solo engagements often grow. When that happens, the engineer who built the product becomes the technical lead of the squad that extends it, so the context transfers with the person instead of being re-learned by strangers.",
        ],
      },
    ],
    process: [
      {
        title: "Fit conversation",
        body: "Scope, stack and what success looks like in the first month. This is also where we tell you if the work really needs a team.",
      },
      {
        title: "Fast start",
        body: "Usually one to two weeks to begin. Into your repository, shipping small real changes in the first week.",
      },
      {
        title: "Build and ship",
        body: "Continuous delivery with direct communication, working against your priorities rather than a fixed statement of work.",
      },
      {
        title: "Hand over or scale",
        body: "Documentation and walkthrough for your team, or expansion into a squad with the same engineer leading.",
      },
    ],
    deliverables: [
      "Shipped product in your repositories and infrastructure",
      "Direct working relationship with the engineer building it",
      "Written architecture decisions and setup documentation",
      "Conventional, handover-ready codebase structure",
      "Optional path to scale into a full squad with continuity",
    ],
    boundaries: [
      "We will tell you when scope has outgrown one person",
      "A solo embed is not a twenty-four hour on-call function",
      "We do not add an account layer you did not ask for",
    ],
    faqs: [
      {
        question: "What if the engineer becomes unavailable?",
        answer:
          "Documentation and conventional structure are part of the engagement precisely so continuity does not depend on one person. We can also bring in a second engineer for overlap where the risk warrants it.",
      },
      {
        question: "Can they work inside our existing team?",
        answer:
          "That is common. They join your standups, your review process and your repository as a senior addition rather than running a separate project alongside you.",
      },
      {
        question: "Is this cheaper than a squad?",
        answer:
          "Considerably, and for the right scope it is also faster. The trade-off is throughput ceiling, not quality.",
      },
    ],
    proof: [/* "smartfaktura", */ "ppv-my"],
    accent: "#A3E635",
  },
  {
    slug: "greenfield",
    kind: "engage",
    label: "Greenfield 0 → Live",
    tagline: "From nothing to a product in market",
    intro: [
      "We build new products start to finish, without discovery theater. The goal is a real thing customers can use and pay for, then iteration against actual usage — because the fastest way to learn what to build is to put something in front of people.",
      "We have taken products from an empty repository to production traffic more than once, including a multi-tenant messaging platform that reached one to two million messages a month and an AI product now live with paid tiers in market.",
    ],
    quickFacts: [
      { label: "Typical shape", value: "Solo or small squad" },
      { label: "First milestone", value: "Working slice in weeks" },
      { label: "Launch scope", value: "Auth · billing · admin · deploy" },
    ],
    signals: [
      "You have a validated problem and need the first real version built",
      "An existing company is launching a new product line",
      "A prototype proved the idea and now needs to become a product",
      "Previous quotes came back with months of discovery before any code",
      "There is a market window and the plan cannot survive a long build",
    ],
    sections: [
      {
        heading: "Compress planning to the irreversible decisions",
        body: [
          "Long discovery phases mostly produce documents that are wrong, because the questions they try to answer cannot be answered before people use the product. What they reliably do is burn the budget and the calendar before anything exists.",
          "We plan only what is genuinely expensive to reverse — tenancy, core data model, integration boundaries, auth and compliance constraints — and decide everything else against working software. That is usually days of focused work rather than weeks of workshops.",
        ],
        bullets: [
          "Tenancy and data model settled before feature work starts",
          "Integration and compliance constraints identified early, not discovered at launch",
          "Everything else deferred until there is working software to judge it against",
          "Documents kept to what someone will actually read",
        ],
      },
      {
        heading: "Working software early and continuously",
        body: [
          "You should be clicking through a real product within weeks, not watching a demo at the end of a quarter. Early working software is how you find out that the flow you were certain about does not survive contact with a user.",
          "It also changes the relationship. When you can use the thing, your feedback is concrete rather than speculative, and we spend the engagement building the right product instead of the specified one.",
        ],
        bullets: [
          "A usable slice in weeks, deployed where you can reach it",
          "Continuous deployment from the first week, not a release phase",
          "Priorities revisited against real usage rather than the original plan",
          "Scope cut honestly when something is not earning its place",
        ],
      },
      {
        heading: "Launch scope includes the boring essentials",
        body: [
          "Products get delayed at the end by everything nobody counted as a feature: authentication edge cases, billing, admin tooling, legal pages, email deliverability, monitoring. Treated as afterthoughts, these add a surprise month.",
          "We count them as launch scope from the start. Launch means a product your company can actually operate and charge for, not a demo with a waiting list.",
        ],
        bullets: [
          "Authentication, roles and account lifecycle handled properly",
          "Billing and subscription flows working before launch, not after",
          "Admin tooling so your team can support customers on day one",
          "Monitoring, error tracking and deployment pipeline in place",
        ],
      },
      {
        heading: "Marketing site when it belongs in the same push",
        body: [
          "For most launches the marketing site and the product ship together, and splitting them across two vendors creates a seam nobody owns. We have built both in the same engagement where it made sense — including for products where the site and app launched together.",
        ],
      },
    ],
    process: [
      {
        title: "Shape the build",
        body: "A focused session on the irreversible decisions and the smallest version that is genuinely valuable. Output is a plan you can read in one sitting.",
      },
      {
        title: "Foundation week",
        body: "Repository, auth, data model, deployment pipeline. Boring, fast, and the reason later weeks stay fast.",
      },
      {
        title: "Build to usable",
        body: "The core loop first, deployed continuously, with priorities adjusted as you use it.",
      },
      {
        title: "Launch scope and go live",
        body: "Billing, admin, monitoring and the operational essentials, then into market — and typically straight into iteration.",
      },
    ],
    deliverables: [
      "Live product in market, in your repositories and infrastructure",
      "Authentication, billing, admin tooling and deployment pipeline",
      "Monitoring and error tracking from day one",
      "Marketing site where it is part of the same engagement",
      "Architecture documentation for whoever comes next",
    ],
    boundaries: [
      "We do not run months of discovery before writing code",
      "We will tell you when the scope you described is bigger than the budget",
      "We build products, not pitch decks or investor prototypes meant to be thrown away",
    ],
    faqs: [
      {
        question: "How long does a greenfield build take?",
        answer:
          "It depends on scope, but the shape is consistent: a usable slice in weeks, a launchable product in months rather than quarters. We would rather cut scope than extend timelines.",
      },
      {
        question: "Do we need designs before you start?",
        answer:
          "Helpful but not required. We work from designs when they exist and build sensible, conventional interfaces when they do not, rather than waiting.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Most greenfield engagements roll into ongoing ownership, because launch is when the real learning begins. Some hand over to an in-house team instead, which we plan for from the start.",
      },
    ],
    proof: ["treply", /* "smartfaktura", */ "otteri"],
    accent: "#FBBF24",
  },
  {
    slug: "codebase-rescue",
    kind: "engage",
    label: "Codebase Rescue",
    tagline: "Inherit the mess, stabilize it, get shipping again",
    intro: [
      "We regularly pick up products mid-flight — after a contractor exit, a stalled rebuild, or a delivery setup that simply stopped working. Our largest engagement started exactly this way: we took over technology ownership of a platform in a difficult delivery position and turned it into continuous weekly shipping.",
      "The constraint that defines this work is that live customers do not pause for a refactor. Everything has to be fixed underneath running traffic, which rules out the clean rewrite that is always the first instinct and almost always the wrong call.",
    ],
    quickFacts: [
      { label: "Starts with", value: "Honest assessment" },
      { label: "First goal", value: "Stop the bleeding" },
      { label: "Method", value: "Phased, behind live traffic" },
    ],
    signals: [
      "The team that built it has left and nobody fully understands it",
      "Releases have stalled or every deploy is an incident risk",
      "A rebuild was started and then abandoned halfway",
      "There are areas of the codebase nobody is willing to touch",
      "Velocity keeps dropping while headcount stays the same",
    ],
    sections: [
      {
        heading: "An honest assessment before any promises",
        body: [
          "We start by reading the code and the delivery process, and we report what we find without dressing it up in either direction. Sometimes the codebase is in better shape than the team believes and the real problem is process. Sometimes a component genuinely does need replacing.",
          "You get a written assessment covering what is fine, what is actively costing you, what is risky but tolerable, and what we would do in what order. That has value whether or not you continue with us.",
        ],
        bullets: [
          "Codebase, architecture and dependency review",
          "Delivery process review — often where the real bottleneck is",
          "Risk register covering what could break and what it would cost",
          "Sequenced recommendation, including the parts we would leave alone",
        ],
      },
      {
        heading: "Stabilize before you improve",
        body: [
          "The instinct on inheriting a difficult codebase is to start improving it. That is the wrong order. If releases are unreliable and environments are broken, improvements cannot be delivered safely anyway.",
          "So the first phase targets whatever is actively costing you: flaky deployments, broken environments, the recurring incidents, the manual steps that eat a day a week. It is unglamorous and it is what makes everything afterwards possible.",
        ],
        bullets: [
          "Deployment and environment reliability first",
          "Recurring incidents traced to cause rather than repeatedly patched",
          "Manual operational steps automated to reclaim team time",
          "Test and monitoring coverage on the highest-risk paths",
        ],
      },
      {
        heading: "Phased rebuild behind live traffic",
        body: [
          "Where components genuinely need replacing, we do it in stages behind working software. New implementations run alongside old ones, traffic shifts gradually, and the old path is removed last once the new one has proven itself on real usage.",
          "There is no cutover weekend. Big-bang rewrites fail for well-documented reasons, and doing one on a product with paying customers converts an engineering problem into a business problem.",
        ],
        bullets: [
          "New paths built alongside old ones rather than replacing them outright",
          "Gradual traffic migration with the ability to reverse at any point",
          "Feature delivery continuing throughout — the roadmap does not freeze",
          "Old code removed only once the replacement has proven itself",
        ],
      },
      {
        heading: "Knowledge back into your team",
        body: [
          "You have already experienced what happens when understanding leaves with the people who had it. Repeating that with us would be a poor outcome, so documentation and knowledge transfer are part of the work rather than a final phase that gets cut.",
          "Architecture decisions get written down, conventions get made explicit, and your team is brought along rather than handed a finished thing they did not follow.",
        ],
      },
    ],
    process: [
      {
        title: "Assessment",
        body: "One to two weeks reading the codebase and the process. You get a written report and a sequenced plan, whether or not you continue.",
      },
      {
        title: "Stabilize",
        body: "Deployments, environments and recurring incidents first, so the team can ship safely again.",
      },
      {
        title: "Restore cadence",
        body: "Feature delivery resumes on a predictable rhythm while structural work continues underneath it.",
      },
      {
        title: "Rebuild in phases",
        body: "Components genuinely needing replacement, migrated gradually behind live traffic, with documentation as we go.",
      },
    ],
    deliverables: [
      "Written technical and delivery assessment with a sequenced plan",
      "Reliable deployment pipeline and environments",
      "Restored, predictable release cadence",
      "Phased replacement of components that warrant it",
      "Documentation and knowledge transfer into your team",
    ],
    boundaries: [
      "We do not recommend rewrites we do not believe in, even though they bill more",
      "We will not freeze your roadmap for a structural project",
      "We will tell you plainly if the honest answer is that the product needs rebuilding",
    ],
    faqs: [
      {
        question: "What if the codebase is genuinely bad?",
        answer:
          "We will say so directly, with reasoning. Even then the answer is usually phased replacement rather than a rewrite, because a rewrite means running two products while your competitors ship one.",
      },
      {
        question: "Can you work with no original documentation or team?",
        answer:
          "Yes, that is the common case. We read the code, trace the behaviour, and produce the documentation that should have existed.",
      },
      {
        question: "Will feature work stop during the rescue?",
        answer:
          "No. Freezing the roadmap is what turns a technical problem into a commercial one. Structural work runs underneath continued delivery.",
      },
      {
        question: "How fast will we see a difference?",
        answer:
          "Deployment and environment reliability usually improve within the first few weeks, because that is deliberately the first target. Cadence recovery follows.",
      },
    ],
    proof: ["floor-nexus", "voxtell"],
    accent: "#FB7185",
  },
];

export const allPracticeEntries = [...services, ...engagements];

export function getPracticeEntry(kind: PracticeEntry["kind"], slug: string) {
  return allPracticeEntries.find((e) => e.kind === kind && e.slug === slug);
}

export type FaqItem = {
  question: string;
  answer: string;
};

export const founderFaqs: FaqItem[] = [
  {
    question: "How quickly can you start?",
    answer:
      "Usually one to two weeks for a solo embed, and two to three for a full squad. We do not ask for a long discovery phase before engineers are in the codebase.",
  },
  {
    question: "Do you work on existing codebases or only new builds?",
    answer:
      "Both, and roughly half our work is inherited. We have taken over products mid-flight after contractor exits and stalled rebuilds, and stabilized them without pausing live customers.",
  },
  {
    question: "Who owns the code and the IP?",
    answer:
      "You do, completely. Work lives in your repositories and your infrastructure from day one. We also document as we go, so your team is never dependent on us to keep shipping.",
  },
  {
    question: "How is this different from hiring an agency?",
    answer:
      "We are an engineering team, not an account layer. You talk directly to the people writing the code, technical decisions get made in the same conversation, and there is no discovery phase billed before anything ships.",
  },
  {
    question: "Can you work with our existing engineers?",
    answer:
      "Yes. Many of our engagements are embedded alongside an in-house team — we join your standups, your repository and your review process rather than running a parallel project beside you.",
  },
  {
    question: "What does a squad actually include?",
    answer:
      "Engineers, QA and delivery management. Scrum, stories and release reporting come with the team rather than being billed as separate line items.",
  },
  {
    question: "How do you handle timezones?",
    answer:
      "We have deployed engineers across six continents and build overlap into the working day deliberately. Clients in the US, Australia, Europe and Southeast Asia all run on scheduled daily overlap rather than pure async.",
  },
  {
    question: "What if we need to scale down or stop?",
    answer:
      "Engagements are ongoing rather than locked into long fixed contracts. If scope shrinks, the team shrinks — and handover documentation is part of the work, not an exit negotiation.",
  },
  {
    question: "What size of company do you usually work with?",
    answer:
      "Mostly funded startups and small product companies — from solo founders with a validated problem through to platforms with established paying customers and a team already in place.",
  },
  {
    question: "Do you sign NDAs and work under our contracts?",
    answer:
      "Yes to both. Several of our engagements are covered by client confidentiality, which is why some case studies describe outcomes without naming people or internal detail.",
  },
];
