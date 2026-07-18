import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Maintenance Checklist for Ottawa Businesses (2026) | Zenith AI",
  description:
    "Monthly, quarterly, and annual website maintenance for Ottawa businesses: backups, speed, SEO health, content refresh, hosting, accessibility.",
  alternates: {
    canonical: "https://zenithai.ca/blog/website-maintenance-checklist-ottawa-2026",
  },
  robots: { index: true, follow: true },
};

export default function BlogPost() {
  return (
    <article>
      <h1>Website Maintenance Checklist for Ottawa Businesses (2026)</h1>
      <h2>Why maintenance matters more than launch</h2>
      <p>
        Most Ottawa business owners treat a website like a brochure: build it once, forget
        it. But search rankings, security, and conversions all decay without upkeep. A
        maintained site outranks a stale one every time.
      </p>

      <h2>Monthly essentials</h2>
      <h3>Backups and updates</h3>
      <p>
        Verify automated backups ran and apply CMS/plugin/theme updates. An unpatched site is
        a hack waiting to happen.
      </p>
      <h3>Speed check</h3>
      <p>
        Run PageSpeed Insights monthly. Ottawa users on mobile expect sub-3-second loads; a
        slow site bleeds leads.
      </p>

      <h2>Quarterly essentials</h2>
      <h3>SEO health audit</h3>
      <p>Check indexed pages in Google Search Console, fix coverage errors, and refresh thin content.</p>
      <h3>Content refresh</h3>
      <p>Update pricing, service areas, and testimonials. Add a blog post per quarter to signal activity.</p>

      <h2>Annual essentials</h2>
      <h3>Hosting and domain review</h3>
      <p>Confirm renewal dates, review hosting performance, and consider a design refresh if conversion has slipped.</p>
      <h3>Accessibility and compliance</h3>
      <p>Re-test contrast, alt text, and CASL email consent flows yearly.</p>

      <h2>Signs you&apos;re behind</h2>
      <h3>Traffic dropping with no reason</h3>
      <p>Usually a technical issue or an algorithm shift — diagnose before you spend on ads.</p>
      <h3>Forms silently failing</h3>
      <p>A broken contact form can cost you leads for months unnoticed. Test it quarterly.</p>

      <h2>Let Zenith AI handle it</h2>
      <p>
        Our maintenance plans cover backups, updates, speed, and SEO monitoring so you focus
        on the business, not the backend.
      </p>
    </article>
  );
}
