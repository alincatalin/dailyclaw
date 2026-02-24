import Link from "next/link";
import type { Metadata } from "next";
import styles from "./advertise.module.css";

export const metadata: Metadata = {
  title: "Advertise on DailyClaw",
  description: "Reach OpenClaw builders, AI automation enthusiasts, and developers. Sponsorship packages for tools, APIs, and developer products.",
};

export default function AdvertisePage() {
  return (
    <>
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroMain}>
          <div className={styles.eyebrow}>// Advertise</div>
          <h1 className={styles.title}>
            REACH THE
            <em>builders</em>
          </h1>
          <p className={styles.subtitle}>
            DailyClaw readers are builders and developers who actively use OpenClaw to automate workflows. Put your product in front of the people shipping with AI.
          </p>
        </div>
        <div className={styles.heroSidebar}>
          <div className={styles.sidebarLabel}>Audience snapshot</div>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>100%</span>
              <span className={styles.statKey}>Technical audience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>4</span>
              <span className={styles.statKey}>Content verticals</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>AI</span>
              <span className={styles.statKey}>Primary focus</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>Dev</span>
              <span className={styles.statKey}>Buyer persona</span>
            </div>
          </div>
        </div>
      </div>

      {/* WHY ADVERTISE */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>WHY DAILYCLAW</h2>
        <span className={styles.sectionSubtitle}>&mdash; your audience is already here</span>
      </div>

      <div className={styles.whyGrid}>
        <div className={styles.whyCard}>
          <div className={styles.whyIcon}>01</div>
          <h3>High-intent readers</h3>
          <p>Our readers actively search for tools and workflows. They&apos;re not browsing &mdash; they&apos;re evaluating and adopting.</p>
        </div>
        <div className={styles.whyCard}>
          <div className={styles.whyIcon}>02</div>
          <h3>Niche focus</h3>
          <p>Focused audience. Every reader uses OpenClaw, MCP servers, or AI workflow tooling. No dilution.</p>
        </div>
        <div className={styles.whyCard}>
          <div className={styles.whyIcon}>03</div>
          <h3>Trust-first content</h3>
          <p>We only feature tools our makers actually use. Sponsored content follows the same editorial standards.</p>
        </div>
        <div className={styles.whyCard}>
          <div className={styles.whyIcon}>04</div>
          <h3>Multiple touchpoints</h3>
          <p>Your brand appears across systems, stack pages, field notes, and the newsletter &mdash; reinforced naturally.</p>
        </div>
      </div>

      {/* AD PLACEMENTS */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>AD PLACEMENTS</h2>
        <span className={styles.sectionSubtitle}>&mdash; where your brand appears</span>
      </div>

      <div className={styles.placementsGrid}>
        <div className={styles.placement}>
          <div className={styles.placementLabel}>Sidebar banner</div>
          <div className={styles.placementPreview}>
            <div className={styles.previewBox}>300 x 250</div>
          </div>
          <p>Appears on all system, stack, and field note detail pages. Sticky position, always visible while reading.</p>
        </div>
        <div className={styles.placement}>
          <div className={styles.placementLabel}>Newsletter sponsor</div>
          <div className={styles.placementPreview}>
            <div className={styles.previewBox}>Inline</div>
          </div>
          <p>Featured placement in our weekly newsletter. Includes logo, headline, description, and CTA link.</p>
        </div>
        <div className={styles.placement}>
          <div className={styles.placementLabel}>Tool listing</div>
          <div className={styles.placementPreview}>
            <div className={styles.previewBoxAccent}>Featured</div>
          </div>
          <p>Your tool featured at the top of the stack directory with a &ldquo;Sponsored&rdquo; badge. Includes full stack page.</p>
        </div>
      </div>

      {/* PACKAGES */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>PACKAGES</h2>
        <span className={styles.sectionSubtitle}>&mdash; pick your level</span>
      </div>

      <div className={styles.packagesGrid}>
        <div className={styles.package}>
          <div className={styles.packageHeader}>
            <div className={styles.packageName}>STARTER</div>
            <div className={styles.packagePrice}>$250<span>/mo</span></div>
          </div>
          <ul className={styles.packageFeatures}>
            <li>Sidebar banner on all detail pages</li>
            <li>Logo in footer sponsors section</li>
            <li>1 newsletter mention / month</li>
            <li>Basic analytics report</li>
          </ul>
          <Link href="mailto:advertise@dailyclaw.dev" className={styles.packageCta}>Get started</Link>
        </div>

        <div className={`${styles.package} ${styles.packageFeatured}`}>
          <div className={styles.packageBadge}>POPULAR</div>
          <div className={styles.packageHeader}>
            <div className={styles.packageName}>GROWTH</div>
            <div className={styles.packagePrice}>$500<span>/mo</span></div>
          </div>
          <ul className={styles.packageFeatures}>
            <li>Everything in Starter</li>
            <li>Featured stack listing with full page</li>
            <li>2 newsletter mentions / month</li>
            <li>Sponsored system or field note</li>
            <li>Detailed analytics dashboard</li>
          </ul>
          <Link href="mailto:advertise@dailyclaw.dev" className={styles.packageCtaPrimary}>Get started</Link>
        </div>

        <div className={styles.package}>
          <div className={styles.packageHeader}>
            <div className={styles.packageName}>ENTERPRISE</div>
            <div className={styles.packagePrice}>Custom</div>
          </div>
          <ul className={styles.packageFeatures}>
            <li>Everything in Growth</li>
            <li>Exclusive category sponsorship</li>
            <li>Custom content series</li>
            <li>Homepage hero placement</li>
            <li>Dedicated account manager</li>
            <li>Custom integration options</li>
          </ul>
          <Link href="mailto:advertise@dailyclaw.dev" className={styles.packageCta}>Contact us</Link>
        </div>
      </div>

      {/* CTA */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>READY TO <em>reach builders?</em></h2>
        <p className={styles.ctaDesc}>Drop us a line. We&apos;ll send you a media kit with audience demographics, traffic data, and case studies.</p>
        <Link href="mailto:advertise@dailyclaw.dev" className={styles.ctaBtn}>ADVERTISE@DAILYCLAW.DEV</Link>
      </div>
    </>
  );
}
