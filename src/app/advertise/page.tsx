import type { Metadata } from "next";
import styles from "./advertise.module.css";

export const metadata: Metadata = {
  title: "Advertise on DailyClaw",
  description: "Founding sponsor rates for reaching OpenClaw builders. Limited slots available. MCP server providers, AI tools, and developer products.",
};

export default function AdvertisePage() {
  return (
    <>
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroMain}>
          <div className={styles.eyebrow}>// Founding Sponsors</div>
          <h1 className={styles.title}>
            REACH THE
            <em>builders</em>
          </h1>
          <p className={styles.subtitle}>
            DailyClaw readers are developers building production AI agent systems with OpenClaw. They&apos;re actively evaluating and adopting tools for their workflows. Put your product in front of the people shipping with AI.
          </p>
          <div className={styles.foundingBadge}>
            <span className={styles.foundingDot} />
            Limited to 5 Founding Sponsors &mdash; founding rates locked in for early partners
          </div>
        </div>
        <div className={styles.heroSidebar}>
          <div className={styles.sidebarLabel}>The audience</div>
          <div className={styles.audienceList}>
            <p>Exclusively developers building production AI agent systems</p>
            <p>Readers actively evaluating and adopting tools for their OpenClaw workflows</p>
            <p>OpenClaw covered by TechCrunch, CrowdStrike, and Malwarebytes &mdash; riding the wave of a fast-growing ecosystem</p>
          </div>
          <div className={styles.slotsIndicator}>
            <div className={styles.slotsLabel}>Founding sponsor slots</div>
            <div className={styles.slotsBar}>
              <div className={styles.slotOpen} />
              <div className={styles.slotOpen} />
              <div className={styles.slotOpen} />
              <div className={styles.slotOpen} />
              <div className={styles.slotOpen} />
            </div>
            <div className={styles.slotsCount}>5 of 5 available</div>
          </div>
        </div>
      </div>

      {/* WHO THIS IS FOR */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>WHO THIS IS FOR</h2>
        <span className={styles.sectionSubtitle}>&mdash; if this sounds like you, we should talk</span>
      </div>

      <div className={styles.whoGrid}>
        <div className={styles.whoCard}>MCP server providers</div>
        <div className={styles.whoCard}>AI infrastructure companies</div>
        <div className={styles.whoCard}>Developer tools</div>
        <div className={styles.whoCard}>API platforms</div>
        <div className={styles.whoCard}>Monitoring &amp; observability</div>
        <div className={styles.whoCard}>Security tools</div>
      </div>

      {/* WHY DAILYCLAW */}
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
          <p>Every reader uses OpenClaw, MCP servers, or AI workflow tooling. No diluted audience. Pure signal.</p>
        </div>
        <div className={styles.whyCard}>
          <div className={styles.whyIcon}>03</div>
          <h3>Trust-first content</h3>
          <p>We only feature tools our builders actually use. Sponsored content follows the same editorial standards.</p>
        </div>
        <div className={styles.whyCard}>
          <div className={styles.whyIcon}>04</div>
          <h3>Multiple touchpoints</h3>
          <p>Your brand appears across blueprints, stack pages, field notes, and the newsletter &mdash; reinforced naturally.</p>
        </div>
      </div>

      {/* FOUNDING SPONSOR PRICING */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>FOUNDING RATES</h2>
        <span className={styles.sectionSubtitle}>&mdash; locked in for early partners</span>
      </div>

      <div className={styles.pricingTable}>
        <div className={styles.pricingRow}>
          <div className={styles.pricingProduct}>
            <div className={styles.pricingName}>Sidebar Banner</div>
            <div className={styles.pricingDesc}>Sticky 300x250 on all blueprint, stack, and field note detail pages. Always visible while reading.</div>
            <div className={styles.pricingSlots}>5 slots total &mdash; 5 available</div>
          </div>
          <div className={styles.pricingAmount}>
            <span className={styles.price}>$75</span>
            <span className={styles.pricePer}>/mo</span>
          </div>
        </div>

        <div className={styles.pricingRow}>
          <div className={styles.pricingProduct}>
            <div className={styles.pricingName}>Newsletter Primary Sponsor</div>
            <div className={styles.pricingDesc}>Top placement in the weekly newsletter. Logo, headline, description, and CTA link. Sent to all subscribers.</div>
          </div>
          <div className={styles.pricingAmount}>
            <span className={styles.price}>$50</span>
            <span className={styles.pricePer}>/issue</span>
          </div>
        </div>

        <div className={styles.pricingRow}>
          <div className={styles.pricingProduct}>
            <div className={styles.pricingName}>Newsletter Secondary Mention</div>
            <div className={styles.pricingDesc}>Inline mention in the body of the weekly newsletter. Name, one-liner, and link.</div>
          </div>
          <div className={styles.pricingAmount}>
            <span className={styles.price}>$25</span>
            <span className={styles.pricePer}>/issue</span>
          </div>
        </div>

        <div className={styles.pricingRow}>
          <div className={styles.pricingProduct}>
            <div className={styles.pricingName}>Promoted Tool Listing</div>
            <div className={styles.pricingDesc}>Your tool pinned to the top of the stack directory with a &ldquo;Sponsored&rdquo; badge. Includes full stack detail page.</div>
            <div className={styles.pricingSlots}>Limited to 2 promoted listings</div>
          </div>
          <div className={styles.pricingAmount}>
            <span className={styles.price}>$100</span>
            <span className={styles.pricePer}>/mo</span>
          </div>
        </div>
      </div>

      <div className={styles.foundingNote}>
        Founding sponsors lock in these rates for as long as they maintain their sponsorship. Prices increase as our audience grows.
      </div>

      {/* WEEKLY TAKEOVER */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>WEEKLY TAKEOVER</h2>
        <span className={styles.sectionSubtitle}>&mdash; own the entire DailyClaw experience for 7 days</span>
      </div>

      <div className={styles.takeoverSection}>
        <div className={styles.takeoverMain}>
          <p className={styles.takeoverDesc}>
            One advertiser owns every placement on DailyClaw for a full week. Sole sidebar banner, primary newsletter sponsor, and promoted tool listing &mdash; zero competition for attention.
          </p>
          <ul className={styles.takeoverIncludes}>
            <li>Exclusive sidebar banner across all pages</li>
            <li>Primary newsletter sponsor for that week&apos;s issue</li>
            <li>Promoted tool listing in the stack directory</li>
            <li>Optional: co-branded blueprint or field note</li>
          </ul>
        </div>
        <div className={styles.takeoverPricing}>
          <div className={styles.takeoverPrice}>$200</div>
          <div className={styles.takeoverPer}>/week</div>
          <button
            className={styles.takeoverCta}
            data-tally-open="kdYePM"
            data-tally-layout="modal"
            data-tally-width="700"
            data-tally-emoji-animation="rubber-band"
            data-tally-auto-close="3000"
            data-tally-form-events-forwarding="1"
          >
            CLAIM A WEEK
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>READY TO <em>reach builders?</em></h2>
        <p className={styles.ctaDesc}>
          Tell us about your product and which placements interest you. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          className={styles.ctaBtn}
          data-tally-open="kdYePM"
          data-tally-layout="modal"
          data-tally-width="700"
          data-tally-emoji-animation="rubber-band"
          data-tally-auto-close="3000"
          data-tally-form-events-forwarding="1"
        >
          BECOME A FOUNDING SPONSOR
        </button>
      </div>
    </>
  );
}
