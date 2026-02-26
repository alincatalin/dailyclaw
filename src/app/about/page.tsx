import Link from "next/link";
import type { Metadata } from "next";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About DailyClaw",
  description: "DailyClaw is the blueprints library for people using OpenClaw to design, build, and ship agent architectures.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroMain}>
          <div className={styles.eyebrow}>// About</div>
          <h1 className={styles.title}>
            WHAT IS
            <em>DailyClaw</em>
          </h1>
          <p className={styles.subtitle}>
            The blueprints library for people using OpenClaw to design, build, and ship agent architectures. Blueprints, composability, architecture-first.
          </p>
        </div>
        <div className={styles.heroSidebar}>
          <div className={styles.sidebarLabel}>Quick links</div>
          <div className={styles.quickLinks}>
            <Link href="/blueprints">Blueprints</Link>
            <Link href="/patterns">Patterns</Link>
            <Link href="/stack">Stack</Link>
            <Link href="/field-notes">Field Notes</Link>
            <Link href="/advertise">Advertise</Link>
          </div>
        </div>
      </div>

      {/* MISSION */}
      <div className={styles.section}>
        <div className={styles.sectionMain}>
          <h2 className={styles.sectionTitle}>THE MISSION</h2>
          <div className={styles.prose}>
            <p>
              OpenClaw is changing how people build with AI &mdash; but the space is moving fast and most builders are designing architectures alone.
            </p>
            <p>
              DailyClaw bridges the gap. We document reference blueprints that builders ship with OpenClaw. We catalog the patterns that make those blueprints composable. We curate the stack that powers them. And we publish field notes from builders in the trenches.
            </p>
            <p>
              No hype. No theory. Tested architectures from people who ship.
            </p>
          </div>
        </div>
        <div className={styles.sectionSidebar}>
          <div className={styles.statBlock}>
            <div className={styles.statVal}>4</div>
            <div className={styles.statKey}>Content pillars</div>
          </div>
          <div className={styles.statBlock}>
            <div className={styles.statVal}>10+</div>
            <div className={styles.statKey}>Stack items catalogued</div>
          </div>
          <div className={styles.statBlock}>
            <div className={styles.statVal}>100%</div>
            <div className={styles.statKey}>Free to read</div>
          </div>
        </div>
      </div>

      {/* PILLARS */}
      <div className={styles.pillars}>
        <div className={styles.pillar}>
          <div className={styles.pillarNum}>01</div>
          <h3 className={styles.pillarTitle}>Blueprints</h3>
          <p className={styles.pillarDesc}>
            Reference agent architectures. Production-ready blueprints with tested configs, tools, patterns, and trade-offs documented.
          </p>
          <Link href="/blueprints" className={styles.pillarLink}>Browse blueprints &rarr;</Link>
        </div>
        <div className={styles.pillar}>
          <div className={styles.pillarNum}>02</div>
          <h3 className={styles.pillarTitle}>Patterns</h3>
          <p className={styles.pillarDesc}>
            Reusable architecture building blocks. Event-driven, human-in-the-loop, multi-tool pipelines &mdash; the composable pieces behind every blueprint.
          </p>
          <Link href="/patterns" className={styles.pillarLink}>Browse patterns &rarr;</Link>
        </div>
        <div className={styles.pillar}>
          <div className={styles.pillarNum}>03</div>
          <h3 className={styles.pillarTitle}>Stack</h3>
          <p className={styles.pillarDesc}>
            MCP servers, integrations, and tooling that power OpenClaw blueprints. Install commands, compatibility, and real-world usage.
          </p>
          <Link href="/stack" className={styles.pillarLink}>Browse stack &rarr;</Link>
        </div>
        <div className={styles.pillar}>
          <div className={styles.pillarNum}>04</div>
          <h3 className={styles.pillarTitle}>Field Notes</h3>
          <p className={styles.pillarDesc}>
            Builder deep-dives. We dig into their OpenClaw setups &mdash; which tools they wire up, what they automate, what breaks, and what saves them hours.
          </p>
          <Link href="/field-notes" className={styles.pillarLink}>Browse field notes &rarr;</Link>
        </div>
      </div>

      {/* MAKER */}
      <div className={styles.section}>
        <div className={styles.sectionMain}>
          <h2 className={styles.sectionTitle}>THE MAKER</h2>
          <div className={styles.prose}>
            <p>
              DailyClaw is built by <strong>Alin Postolache</strong> &mdash; a builder and AI architect based in Europe. After spending months building agent blueprints with OpenClaw, Alin realized the community needed a structured reference for architectures, patterns, and real use cases.
            </p>
            <p>
              Want to get in touch? <Link href="/#submit" className={styles.inlineLink}>Submit your setup</Link> or reach out on social.
            </p>
          </div>
        </div>
        <div className={styles.sectionSidebar}>
          <div className={styles.makerCard}>
            <div className={styles.makerAvatar}>AP</div>
            <div className={styles.makerName}>Alin Postolache</div>
            <div className={styles.makerRole}>Builder & Creator</div>
          </div>
        </div>
      </div>
    </>
  );
}
