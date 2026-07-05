// Blog content lives here as typed data — simpler than MDX for a site this
// size, fully static, and the sitemap derives post URLs from this array so
// there is exactly one source of truth.
//
// Paragraph strings support one inline token: [label](/internal-path), which
// the post template renders as a Next <Link>. Keep links internal.

export type PostSection = {
  /** Rendered as an H2. Omit for intro paragraphs before the first heading. */
  heading?: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. "2026-07-05" */
  publishedAt: string;
  readingTime: string;
  sections: PostSection[];
  relatedService: { name: string; href: string; blurb: string };
  cta: { heading: string; body: string; label: string };
};

export const posts: Post[] = [
  {
    slug: "website-cost-ottawa",
    title: "How Much Does a Website Cost in Ottawa? (2026 Guide)",
    description:
      "An honest breakdown of website costs in Ottawa: freelancers, agencies, DIY builders, and subscription models — real ranges and what actually drives the price.",
    publishedAt: "2026-06-24",
    readingTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "The honest short answer: an Ottawa small-business website can cost anywhere from a few hundred dollars to well over $25,000. That range is useless on its own, so this guide breaks down what each route actually costs, what you get for the money, and the questions that decide which end of the range you land on.",
          "We build websites for a living, so we have a horse in this race — but the numbers below are real market ranges, not a sales pitch. Even if you never work with us, you should be able to walk into any pricing conversation knowing what is normal.",
        ],
      },
      {
        heading: "The four ways to get a website in Ottawa",
        paragraphs: [
          "Broadly, you have four options: hire a freelancer, hire a traditional agency, build it yourself on a DIY platform, or use a subscription model where design and upkeep are bundled monthly. Each trades money against time and risk differently.",
        ],
      },
      {
        heading: "Freelancer: roughly $1,000–$5,000",
        paragraphs: [
          "A capable freelance designer or developer in the Ottawa area typically charges between $1,000 and $5,000 for a small-business site, depending on experience and scope. At the low end you get a clean template customization; at the high end, genuinely custom design and copy.",
          "The strength of this route is value: a good freelancer can deliver agency-quality work for less. The risk is continuity. When the project ends, so does the relationship — and a year later, when something breaks or needs updating, that person may be booked, out of the industry, or simply unreachable. Ask up front who handles maintenance, hosting, and edits after launch, and what they cost.",
        ],
      },
      {
        heading: "Traditional agency: $5,000–$25,000+",
        paragraphs: [
          "Established Ottawa agencies usually quote $5,000 to $25,000 or more for a small-business website, with larger builds going well beyond that. You are paying for a team — strategist, designer, developer, project manager — and for process: discovery workshops, revision rounds, formal timelines.",
          "For complex projects, that overhead earns its keep. For a five-page local business site, much of it is process you are funding but do not need. Agencies also typically bill maintenance separately, often as a monthly retainer of a few hundred dollars.",
        ],
      },
      {
        heading: "DIY builders: $20–$60 per month — plus your evenings",
        paragraphs: [
          "Platforms like Wix, Squarespace, and Shopify run roughly $20–$60 per month, and they are genuinely good tools. The cost that never shows up on the invoice is your time: expect dozens of hours to get something presentable, and know that the result tends to look like what it is — a template filled in by a busy owner.",
          "DIY makes sense when the budget truly is zero and your time is not yet worth more than the savings. It stops making sense the moment lost customers from a slow, generic, or hard-to-find site cost more than professional help would.",
        ],
      },
      {
        heading: "The subscription model: from $49.99/month",
        paragraphs: [
          "The newer option — and the one we use at Zenith AI — bundles design, hosting, updates, and support into one monthly fee. Our [web design in Ottawa](/services/web-design-ottawa) plans start at $49.99/month all-in, or from $499.99 as a one-time build you own outright. Full details are on our [pricing page](/pricing).",
          "The trade-off is straightforward: you avoid the large upfront cost and the maintenance gap, in exchange for an ongoing fee. AI handles much of the production work, which is how the monthly number stays low without cutting corners on quality — humans still do the strategy and the checking.",
        ],
      },
      {
        heading: "What actually moves the price",
        paragraphs: [
          "Four things drive most of the variation in quotes. Page count: a five-page brochure site is a different job than a twenty-page site with service areas. Features: online booking, e-commerce, memberships, or custom integrations each add real work. Content: if someone has to write your copy and source your photos, that is billable time. And maintenance: who hosts it, who fixes it, and who makes the edits after launch — priced in, or extra?",
        ],
      },
      {
        heading: "Hidden costs to watch for",
        paragraphs: [
          "Wherever you buy, budget for the recurring items that surprise people: the domain name (roughly $15–$25/year), hosting ($10–$50/month if not bundled), premium plugin or theme renewals on WordPress builds, and per-edit fees — some shops charge $50–$150 every time you want a sentence changed. Always ask what an edit costs before you sign.",
        ],
      },
      {
        heading: "So what should an Ottawa small business pay?",
        paragraphs: [
          "For most local service businesses, something in the $1,000–$5,000 range upfront — or a bundled subscription under $100/month — buys everything you actually need: a fast, mobile-first, search-ready site with maintenance handled. Paying agency rates only makes sense when your requirements genuinely are complex.",
          "Whatever route you choose, compare quotes on the same scope, ask who owns the site and the domain, and get maintenance pricing in writing. The cheapest quote with an unanswered maintenance question is rarely the cheapest website.",
        ],
      },
    ],
    relatedService: {
      name: "Web Design in Ottawa",
      href: "/services/web-design-ottawa",
      blurb:
        "Fast, mobile-first websites for Ottawa small businesses — from $49.99/month all-in, or $499.99 one-time.",
    },
    cta: {
      heading: "Want a real number for your project?",
      body: "Book a free call. We will scope what you actually need and quote it up front — no billable hours, no surprises.",
      label: "Book a Free Call",
    },
  },
  {
    slug: "signs-business-needs-website",
    title: "5 Signs Your Ottawa Business Needs a New Website",
    description:
      "Outdated design, slow mobile pages, invisible on Google, no leads, competitors pulling ahead — five practical signs it is time to replace your website.",
    publishedAt: "2026-06-30",
    readingTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "Most business owners do not wake up thinking about their website. It sits there quietly, and as long as it exists, it feels like the job is done. But a website can be technically online and practically useless — and the difference shows up in your phone that stopped ringing, not in any error message.",
          "Here are five concrete signs your current site is costing you business, and what each one actually means.",
        ],
      },
      {
        heading: "1. The design looks like the year it was built",
        paragraphs: [
          "Visitors judge a business in seconds, and design is the first thing they judge. Tiny text, stretched photos, layouts that predate smartphones — all of it reads as “this business is not paying attention,” even when the work behind the business is excellent.",
          "You do not need trendy. You need current: clean layout, readable type, real photos, and clear next steps. If your site visibly belongs to a previous era, customers quietly assume your service might too.",
        ],
      },
      {
        heading: "2. It is slow or broken on a phone",
        paragraphs: [
          "More than half of local browsing happens on phones, and for “near me” searches it is far more. Pull out your phone and load your own site on mobile data — not Wi-Fi. If it takes more than a few seconds, if you have to pinch-zoom to read, or if the menu fights back, you are losing the majority of your visitors before they see anything.",
          "Google also ranks mobile performance directly, so a slow mobile site hurts you twice: once with the visitor, once in the search results.",
        ],
      },
      {
        heading: "3. You cannot be found on Google",
        paragraphs: [
          "Search for what you do — “electrician Barrhaven,” “physio Kanata” — not your business name. If you are nowhere in the first page or two, the site is not doing its most important job: being found by people who have never heard of you.",
          "Sometimes the fix is [local SEO](/services/seo-ottawa) work on an otherwise decent site. But often the site itself is the blocker — slow, thin on content, or built in a way Google struggles to read — and no amount of SEO effort on top will compensate.",
        ],
      },
      {
        heading: "4. It never sends you a lead",
        paragraphs: [
          "Think back over the last month: how many calls, form submissions, or bookings actually started at your website? If the honest answer is “none, or I do not know,” the site is a brochure, not a salesperson.",
          "A working site makes contact effortless — click-to-call, a short form, a booking link — and gives visitors a reason to act now. If yours buries the phone number and ends every page in a dead end, the traffic you do get leaks away silently.",
        ],
      },
      {
        heading: "5. Your competitors simply look better",
        paragraphs: [
          "Search your service in your neighbourhood and open the top three results. That is what your customers compare you against — Westboro café or Orleans contractor alike. If their sites are faster, clearer, and more professional, they win the customers you both wanted, without ever being better at the actual work.",
          "This one stings, but it is also the easiest to verify: it takes five minutes and it is completely objective.",
        ],
      },
      {
        heading: "What to do next",
        paragraphs: [
          "If two or more of these hit home, the site needs attention — and the fix is more affordable than most owners expect. A modern [website rebuild](/services/web-design-ottawa) no longer requires an agency budget or a months-long project.",
          "Start by deciding what the site is for: more calls, more bookings, more walk-ins. Everything else — design, content, SEO — should serve that one goal.",
        ],
      },
    ],
    relatedService: {
      name: "Web Design in Ottawa",
      href: "/services/web-design-ottawa",
      blurb:
        "Modern, mobile-first websites built to bring in leads — launch-ready in days, not months.",
    },
    cta: {
      heading: "Not sure if your site is the problem?",
      body: "Book a free call. We will look at your current site together and tell you honestly whether it needs a refresh, a rebuild, or just better SEO.",
      label: "Book a Free Call",
    },
  },
  {
    slug: "local-seo-ottawa-guide",
    title: "Local SEO for Ottawa Businesses: A Beginner's Guide",
    description:
      "What local SEO is and how to start today: Google Business Profile, reviews, local keywords, and citations — practical steps for Ottawa business owners.",
    publishedAt: "2026-07-05",
    readingTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "When someone in Ottawa searches “plumber near me” or “best barber in Westboro,” Google shows a map with three businesses before almost anything else. Local SEO is the work of earning one of those spots — and showing up in the regular results underneath them.",
          "The good news: unlike national SEO, local SEO is winnable for a small business. Your competition is not the whole internet; it is the other businesses in your part of the city, most of whom are doing very little. This guide covers the fundamentals you can genuinely start today, no agency required.",
        ],
      },
      {
        heading: "What local SEO actually is",
        paragraphs: [
          "Google decides local rankings on three broad factors: relevance (do you offer what was searched for?), distance (how close are you to the searcher?), and prominence (how established and trusted do you look online?). You cannot move your shop, but you can strongly influence the other two — and that is what every tactic below is doing.",
        ],
      },
      {
        heading: "Step 1: Claim and complete your Google Business Profile",
        paragraphs: [
          "Your Google Business Profile — the panel with your map pin, hours, photos, and reviews — is the single highest-leverage asset in local search. Claim it at google.com/business if you have not, then fill in every field: precise categories (primary category matters most), services, service area, hours, and attributes.",
          "Add real photos — your storefront, your team, your work — and keep them coming; profiles with fresh photos get measurably more clicks and calls. Post short updates every week or two. An actively maintained profile signals a business that is actually open and actually cares.",
        ],
      },
      {
        heading: "Step 2: Build a steady stream of reviews",
        paragraphs: [
          "Reviews are the strongest trust signal in the map pack, and recency matters as much as the average score. The system that works: ask every happy customer at the moment they are happiest, make it effortless with a direct review link (your Business Profile gives you one to share), and respond to every review — good and bad — like a human being.",
          "Never buy reviews or stage them. Google is increasingly good at spotting patterns, and a penalty on your profile costs far more than the shortcut ever earned.",
        ],
      },
      {
        heading: "Step 3: Put local keywords on your website",
        paragraphs: [
          "Google connects your site to Ottawa searches through the words on the page. Say what you do and where you do it, in plain language: page titles like “Renovation Contractor in Ottawa” beat “Welcome to Our Website” every time. Mention the neighbourhoods you serve — Kanata, Barrhaven, Orleans, Nepean — where it is natural to do so.",
          "If you serve several distinct areas or services, give the important ones their own page. One strong, specific page per topic will always outrank a single page trying to say everything.",
        ],
      },
      {
        heading: "Step 4: Get your citations consistent",
        paragraphs: [
          "Citations are mentions of your business name, address, and phone number on other sites: Yelp, YellowPages.ca, the Better Business Bureau, industry directories, the Ottawa Board of Trade. Google cross-checks them, and inconsistencies — an old address here, a different phone number there — quietly erode its confidence in your listing.",
          "Pick one exact format for your name, address, and phone, then work through the major directories making everything match. It is tedious, unglamorous work, and it genuinely moves rankings.",
        ],
      },
      {
        heading: "Step 5: Track whether any of it is working",
        paragraphs: [
          "You do not need paid tools to start. Your Google Business Profile shows calls, direction requests, and website clicks. Google Search Console — free — shows which searches your site appears for and where you rank. Check both monthly; local SEO moves in weeks and months, not days, and the trend matters more than any single number.",
        ],
      },
      {
        heading: "When it makes sense to get help",
        paragraphs: [
          "Everything above is genuinely doable yourself — the constraint is rarely difficulty, it is consistency. The owners who fall behind are not missing knowledge; they are missing the hours, every month, forever.",
          "If that is you, a [local SEO service](/services/seo-ottawa) takes the recurring work — profile upkeep, content, citations, reporting — off your plate. And if you just want to know where you stand, start with an audit: where you rank today, what your competitors are doing, and what to fix first.",
        ],
      },
    ],
    relatedService: {
      name: "Local SEO in Ottawa",
      href: "/services/seo-ottawa",
      blurb:
        "Google Business Profile optimization, citations, and local content — done consistently, reported in plain English.",
    },
    cta: {
      heading: "Want to know where you rank right now?",
      body: "Get a free SEO audit. We will show you your current rankings, what your Ottawa competitors are doing, and the fastest wins — no obligation.",
      label: "Get a Free SEO Audit",
    },
  },
];

/** Posts sorted newest first — used by the blog index and anywhere order matters. */
export const postsNewestFirst: Post[] = [...posts].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt)
);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
