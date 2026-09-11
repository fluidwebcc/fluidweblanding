export type PracticeSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type PracticeEntry = {
  slug: string;
  kind: "service" | "engage";
  label: string;
  tagline: string;
  intro: string;
  sections: PracticeSection[];
  proof: string[];
  accent: string;
};

export const services: PracticeEntry[] = [
  {
    slug: "saas-platforms",
    kind: "service",
    label: "SaaS & Platforms",
    tagline: "Multi-tenant products built to carry real customers",
    intro:
      "Most of what we ship is multi-tenant SaaS — the kind with org boundaries, roles, billing, admin tooling and white-label surfaces. We build it so the second and fiftieth customer cost the same to onboard as the first.",
    sections: [
      {
        heading: "How we do it",
        body: "We start at the tenancy model, because it is the one decision you cannot cheaply reverse. Org and role boundaries go in before features, billing is wired to the same source of truth as permissions, and admin tooling ships alongside the customer app instead of six months later.",
        bullets: [
          "Tenancy, roles and permissions designed before feature work starts",
          "White-label workspaces where the brand, domain and theme are data — not forks",
          "Operator surfaces — admin console, impersonation, analytics — treated as product",
          "Billing and entitlements wired to the same permission model, not bolted on",
        ],
      },
      {
        heading: "What you get",
        body: "A platform your team can actually operate. Support can see what the customer sees, sales can stand up a new tenant without engineering, and adding the next surface does not mean re-architecting the last one.",
      },
      {
        heading: "Where this fits",
        body: "Greenfield platforms that need to be right the first time, and existing products where tenancy was an afterthought and every new customer now costs engineering time.",
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
    intro:
      "We build AI into products that customers pay for — voice agents, document intake, in-app assistants, generation pipelines. The hard part is never the prompt. It is latency, cost, failure handling and swapping providers without a rewrite.",
    sections: [
      {
        heading: "How we do it",
        body: "We put a provider boundary in from day one so the model layer stays replaceable, then design around the failure cases first: what happens on timeout, on a bad extraction, on a provider outage. Evaluation and cost tracking are part of the build, not a follow-up ticket.",
        bullets: [
          "Provider-agnostic layer so you can migrate vendors without touching product code",
          "Real-time voice and transcription paths tuned for latency, not benchmark scores",
          "Document and media pipelines with human review where accuracy actually matters",
          "Cost and quality instrumented per call so unit economics stay visible",
        ],
      },
      {
        heading: "What you get",
        body: "AI surfaces that survive production traffic and a stack you are not locked into. We have migrated a live voice product between providers end to end — that is the level of portability we design for.",
      },
      {
        heading: "Where this fits",
        body: "Teams with a working prototype that breaks under real usage, and teams who want AI in the product but do not want to bet the roadmap on one vendor's pricing page.",
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
    intro:
      "Messaging looks simple until volume, carrier rules and deliverability arrive at once. We have run platforms sending one to two million SMS/MMS messages a month, and built the compliance and monitoring layers that keep those numbers sending.",
    sections: [
      {
        heading: "How we do it",
        body: "We treat deliverability as a product feature. Carrier registration, opt-out handling and consent records are built in rather than patched after the first block, and delivery health is visible to the people running campaigns — not buried in a provider dashboard.",
        bullets: [
          "Campaign tooling built for volume — scheduling, segmentation, throughput control",
          "Carrier compliance and consent handled in the data model, not in support tickets",
          "Delivery, failure and cost reporting surfaced to operators in real time",
          "Two-way inbox and voice paths on the same customer record",
        ],
      },
      {
        heading: "What you get",
        body: "A messaging stack that scales with your sending, stays on the right side of carrier rules, and gives your team the numbers they need before a campaign goes out.",
      },
      {
        heading: "Where this fits",
        body: "Products where messaging is the core loop rather than a notification afterthought, and teams hitting deliverability or throughput walls on their current setup.",
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
    intro:
      "Mobile usually lags because it is staffed last. We build it in parallel with the web product so field users, customers and operators are working from the same data and the same release cadence.",
    sections: [
      {
        heading: "How we do it",
        body: "One shared API contract, one permission model, and parity tracked as an explicit backlog rather than a vague intention. Store submission, device testing and release process are set up early so shipping is routine instead of an event.",
        bullets: [
          "Parity with web tracked deliberately so mobile never becomes a stale sibling",
          "Offline and field-first flows where the work actually happens on site",
          "Push, deep links and device integrations wired into the core product model",
          "App store release pipeline set up so updates ship on a normal cadence",
        ],
      },
      {
        heading: "What you get",
        body: "A mobile product your users trust, released on the same rhythm as the rest of the platform.",
      },
      {
        heading: "Where this fits",
        body: "Products with field or on-the-go users, and teams whose mobile app has drifted a year behind the web app.",
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
    intro:
      "When the bottleneck is capacity, we bring a whole team — engineers, QA and delivery management — and take ownership of shipping. Our largest squad runs 12+ engineers across five product surfaces.",
    sections: [
      {
        heading: "How it works",
        body: "We take responsibility for the release train, not just tickets. Scrum, stories, QA and delivery reporting come with the team, so your founders stay on customers and GTM instead of triaging engineering.",
        bullets: [
          "Senior lead owns architecture and release cadence end to end",
          "Delivery process, QA and reporting included — not billed as extras",
          "Sequenced phases: embed, stabilize, then accelerate",
          "Scales with the roadmap instead of a fixed statement of work",
        ],
      },
      {
        heading: "Best for",
        body: "Funded products with real customers where delivery has become the constraint, and teams who need engineering ownership rather than another rotating contractor bench.",
      },
    ],
    proof: ["floor-nexus", "clinicos"],
    accent: "#5B8DEF",
  },
  {
    slug: "solo-embeds",
    kind: "engage",
    label: "Solo Senior Embeds",
    tagline: "One senior engineer who owns the build",
    intro:
      "Sometimes a team is the wrong answer. One senior engineer inside your product, owning the work end to end, moves faster than a squad with coordination overhead — and we have shipped entire production applications this way.",
    sections: [
      {
        heading: "How it works",
        body: "The engineer joins your standups and your codebase, makes technical calls without waiting on an account layer, and is accountable for outcomes rather than hours. No handoffs, no translation tax.",
        bullets: [
          "Full-stack ownership from data model through shipped interface",
          "Works directly with founders — no account management in the middle",
          "Scales into a squad if scope grows past one person",
        ],
      },
      {
        heading: "Best for",
        body: "Early products, focused builds, and teams that need one strong pair of hands rather than coordination overhead.",
      },
    ],
    proof: ["smartfaktura", "ppv-my"],
    accent: "#A3E635",
  },
  {
    slug: "greenfield",
    kind: "engage",
    label: "Greenfield 0 → Live",
    tagline: "From nothing to a product in market",
    intro:
      "We build new products start to finish without discovery theater. The goal is a real thing customers can use and pay for — then iterate against actual usage instead of assumptions.",
    sections: [
      {
        heading: "How it works",
        body: "We compress the planning phase into the decisions that genuinely cannot be reversed later — tenancy, data model, integration boundaries — and start shipping. Everything else gets decided against working software.",
        bullets: [
          "Architecture decisions made up front where reversal is expensive",
          "Working software early so feedback comes from usage, not documents",
          "Auth, billing, admin and deployment treated as launch scope",
          "Marketing site included when it belongs in the same push",
        ],
      },
      {
        heading: "Best for",
        body: "Founders with a validated problem who need the first real version built, and existing companies launching a new product line.",
      },
    ],
    proof: ["treply", "smartfaktura", "otteri"],
    accent: "#FBBF24",
  },
  {
    slug: "codebase-rescue",
    kind: "engage",
    label: "Codebase Rescue",
    tagline: "Inherit the mess, stabilize it, get shipping again",
    intro:
      "We regularly pick up products mid-flight — after a contractor exit, a stalled rebuild, or a delivery setup that stopped working. The job is to stabilize without stopping, because live customers do not pause for a refactor.",
    sections: [
      {
        heading: "How it works",
        body: "First we get an honest read on the codebase and the delivery process, then we stabilize the parts that are actively costing you. Rebuilds happen in phases behind working software, never as a big-bang cutover.",
        bullets: [
          "Technical and delivery assessment before anyone promises a timeline",
          "Stabilize first — stop the bleeding before touching architecture",
          "Phased rebuild behind live traffic, no cutover weekend",
          "Knowledge documented so you are not dependent on us forever",
        ],
      },
      {
        heading: "Best for",
        body: "Products where releases have stalled, quality is slipping, or the team that built it is gone.",
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
      "Usually within one to two weeks for a solo embed, and two to three for a full squad. We do not ask for a long discovery phase before engineers are in the codebase.",
  },
  {
    question: "Do you work on existing codebases or only new builds?",
    answer:
      "Both, and roughly half our work is inherited. We have taken over products mid-flight after contractor exits and stalled rebuilds, and stabilized them without pausing live customers.",
  },
  {
    question: "Who owns the code and the IP?",
    answer:
      "You do, completely. Work lives in your repositories and your infrastructure from day one. We also document as we go so your team is never dependent on us to keep shipping.",
  },
  {
    question: "How is this different from hiring an agency?",
    answer:
      "We are an engineering team, not an account layer. You talk directly to the people writing the code, technical decisions get made in the same conversation, and there is no discovery phase billed before anything ships.",
  },
  {
    question: "Can you work with our existing engineers?",
    answer:
      "Yes. A lot of our engagements are embedded alongside an in-house team — we join your standups, your repo and your review process rather than running a parallel project.",
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
];
