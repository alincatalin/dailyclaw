import Link from "next/link";
import type { Metadata } from "next";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About DailyClaw",
  description: "DailyClaw is the go-to resource for OpenClaw workflows, automations, and builder spotlights.",
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
            The go-to resource for OpenClaw workflows, automations, and builder spotlights. See what people build. Steal the configs.
          </p>
        </div>
        <div className={styles.heroSidebar}>
          <div className={styles.sidebarLabel}>Quick links</div>
          <div className={styles.quickLinks}>
            <Link href="/interviews">Interviews</Link>
            <Link href="/tools">Tools Directory</Link>
            <Link href="/recipes">Recipes</Link>
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
              OpenClaw is changing how people interact with AI &mdash; but the space is moving fast and most builders are figuring things out alone.
            </p>
            <p>
              DailyClaw bridges the gap. We interview builders shipping real workflows with OpenClaw. We catalog the tools and MCP servers that power those workflows. And we publish copy-paste recipes you can run today.
            </p>
            <p>
              No hype. No theory. Tested workflows from people who ship.
            </p>
          </div>
        </div>
        <div className={styles.sectionSidebar}>
          <div className={styles.statBlock}>
            <div className={styles.statVal}>3</div>
            <div className={styles.statKey}>Content pillars</div>
          </div>
          <div className={styles.statBlock}>
            <div className={styles.statVal}>10+</div>
            <div className={styles.statKey}>Tools catalogued</div>
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
          <h3 className={styles.pillarTitle}>Interviews</h3>
          <p className={styles.pillarDesc}>
            Builder spotlights. We dig into their OpenClaw setups &mdash; which tools they wire up, what they automate, what breaks, and what saves them hours.
          </p>
          <Link href="/interviews" className={styles.pillarLink}>Browse interviews &rarr;</Link>
        </div>
        <div className={styles.pillar}>
          <div className={styles.pillarNum}>02</div>
          <h3 className={styles.pillarTitle}>Tools</h3>
          <p className={styles.pillarDesc}>
            MCP servers, integrations, and tooling that power OpenClaw workflows. Install commands, compatibility, and real-world usage.
          </p>
          <Link href="/tools" className={styles.pillarLink}>Browse tools &rarr;</Link>
        </div>
        <div className={styles.pillar}>
          <div className={styles.pillarNum}>03</div>
          <h3 className={styles.pillarTitle}>Recipes</h3>
          <p className={styles.pillarDesc}>
            Step-by-step workflow guides you can copy-paste and run. Automations built on OpenClaw with tested configs.
          </p>
          <Link href="/recipes" className={styles.pillarLink}>Browse recipes &rarr;</Link>
        </div>
      </div>

      {/* MAKER */}
      <div className={styles.section}>
        <div className={styles.sectionMain}>
          <h2 className={styles.sectionTitle}>THE MAKER</h2>
          <div className={styles.prose}>
            <p>
              DailyClaw is built by <strong>Alin Postolache</strong> &mdash; a builder and AI workflow enthusiast based in Europe. After spending months building automations with OpenClaw, Alin realized the community needed a central resource for workflows, setups, and real use cases.
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
