import Link from "next/link";
import { getFieldNotes, getStackItems, getBlueprints } from "@/lib/content";
import FieldNoteCard from "@/components/cards/FieldNoteCard";
import StackCard from "@/components/cards/StackCard";
import BlueprintCard from "@/components/cards/BlueprintCard";
import NewsletterForm from "@/components/forms/NewsletterForm";
import SubmitBlueprintForm from "@/components/forms/SubmitBlueprintForm";
import styles from "./home.module.css";

export default function HomePage() {
  const fieldNotes = getFieldNotes();
  const stackItems = getStackItems();
  const blueprints = getBlueprints();

  const allPatterns = Array.from(new Set(blueprints.flatMap((b) => b.patterns || [])));

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div>
          <div className={`${styles.heroEyebrow} anim anim-d1`}>Build with OpenClaw.</div>
          <h1 className={`${styles.heroTitle} anim anim-d2`}>
            THE BLUEPRINTS LIBRARY FOR
            <em>OpenClaw builders</em>
          </h1>
          <p className={`${styles.heroSub} anim anim-d3`}>
            Reference blueprints, architecture patterns, and the stack that powers them. Built by builders, for builders.
          </p>
          <div className={`${styles.heroCta} anim anim-d3`}>
            <Link href="/blueprints" className={styles.ctaPrimary}>Browse blueprints</Link>
          </div>
        </div>
        <div className={`${styles.heroMeta} anim anim-d4`}>
          <div className={styles.heroStat}>
            <span className={styles.statNum}>{blueprints.length}</span>
            <span className={styles.statLabel}>Blueprints</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.statNum}>{stackItems.length}</span>
            <span className={styles.statLabel}>Stack</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.statNum}>{fieldNotes.length}</span>
            <span className={styles.statLabel}>Field Notes</span>
          </div>
        </div>
      </section>

      {/* BLUEPRINTS SECTION */}
      <div className={styles.blueprintsSection}>
        <div className={styles.blueprintsLeft}>
          <h2>REFERENCE<em>blueprints</em></h2>
          <p>Production-ready agent architectures for OpenClaw. Tested configs, real results.</p>
          <br />
          <Link href="/blueprints" className={styles.browseBtn}>Browse all blueprints</Link>
        </div>
        <div className={styles.blueprintCards}>
          {blueprints.length > 0 ? (
            blueprints.slice(0, 3).map((blueprint) => (
              <BlueprintCard
                key={blueprint.slug}
                category={blueprint.category}
                title={blueprint.title}
                description={blueprint.content.slice(0, 120)}
                slug={blueprint.slug}
                useCase={blueprint.useCase}
                complexity={blueprint.complexity}
                patterns={blueprint.patterns}
                tools={blueprint.tools}
              />
            ))
          ) : (
            <>
              <BlueprintCard category="Workflow" title="Automated Issue Triage" description="Read new GitHub issues, check for dups, auto-label, draft first response." slug="" patterns={["event-driven", "human-in-the-loop"]} complexity="Low" />
              <BlueprintCard category="Automation" title="Failed Payment Recovery" description="Monitor Stripe, detect failures, draft personalized recovery emails." slug="" patterns={["multi-tool-pipeline", "personalization-agent"]} complexity="Medium" />
              <BlueprintCard category="Automation" title="Morning Standup Brief" description="Aggregate Linear, GitHub, Obsidian into a daily brief." slug="" patterns={["multi-source-aggregation", "scheduled-agent"]} complexity="Medium" />
            </>
          )}
        </div>
      </div>

      {/* PATTERNS SECTION */}
      <div className={styles.patternsSection}>
        <div className={styles.patternGrid}>
          {(allPatterns.length > 0 ? allPatterns : [
            "event-driven", "human-in-the-loop", "scheduled-agent",
            "multi-tool-pipeline", "personalization-agent", "multi-source-aggregation", "report-generation",
          ]).map((pattern) => (
            <Link key={pattern} href="/patterns" className={styles.patternPill}>{pattern}</Link>
          ))}
        </div>
      </div>

      {/* STACK SECTION */}
      <div className={styles.stackSection}>
        <div className={styles.stackAside}>
          <h2>STACK</h2>
          <p>Recently added MCP servers and integrations powering OpenClaw blueprints.</p>
          <Link href="/stack" className={styles.soonPill}>Browse all {stackItems.length > 0 && `${stackItems.length}+`}</Link>
        </div>
        <div className={styles.stackGrid}>
          {stackItems.length > 0 ? (
            stackItems.slice(0, 8).map((item) => (
              <StackCard
                key={item.slug}
                icon={item.icon}
                name={item.title}
                description={item.description}
                category={item.category}
                slug={item.slug}
              />
            ))
          ) : (
            <>
              <StackCard icon="&#9881;&#65039;" name="Linear MCP" description="Project management via natural language." category="Productivity" slug="linear-mcp" />
              <StackCard icon="&#128230;" name="GitHub MCP" description="Full repo control, issue triage, PR reviews." category="Developer Tools" slug="github-mcp" />
              <StackCard icon="&#128236;" name="GOG — Google Workspace" description="Gmail, Calendar, Drive, and more from one CLI." category="Communication" slug="google-workspace-cli" />
              <StackCard icon="&#129504;" name="Obsidian MCP" description="Your second brain, queryable by agents." category="Knowledge" slug="obsidian-mcp" />
              <StackCard icon="&#128179;" name="Stripe MCP" description="Payments, subscriptions, and customer data." category="Payments" slug="stripe-mcp" />
              <StackCard icon="&#128451;&#65039;" name="Notion MCP" description="Databases, pages, and docs via agents." category="Productivity" slug="notion-mcp" />
              <StackCard icon="&#128269;" name="Brave Search" description="Real-time web access without hallucinations." category="Search" slug="brave-search" />
              <StackCard icon="&#128506;&#65039;" name="Slack MCP" description="Team messaging and notifications." category="Communication" slug="slack-mcp" />
            </>
          )}
        </div>
      </div>

      {/* FIELD NOTES */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>FIELD NOTES</h2>
        <span className={styles.sectionSubtitle}>&mdash; from builders in the field</span>
      </div>

      <div className={styles.fieldNotesGrid}>
        {fieldNotes.length > 0 ? (
          fieldNotes.map((note, i) => (
            <FieldNoteCard
              key={note.slug}
              number={note.number}
              name={note.name}
              handle={note.handle}
              role={note.role}
              pullQuote={note.pullQuote}
              tools={note.tools}
              slug={note.slug}
              wide={i === 0}
            />
          ))
        ) : (
          <>
            <FieldNoteCard number={1} name="Coming Soon" handle="dailyclaw" role="Builder" pullQuote="Our first field note is being prepared. Submit your workflow to be featured!" tools={["OpenClaw", "MCP Servers"]} slug="" />
            <FieldNoteCard number={2} name="Your Name Here" handle="you" role="Builder" pullQuote="We're looking for builders to feature. Got a blueprint worth sharing? Tell us about it." tools={["Your Tools"]} slug="" />
            <FieldNoteCard number={3} name="Join Us" handle="submit" role="Builder" pullQuote="Share your OpenClaw blueprint, tools, and the automations that save you hours." tools={["Submit"]} slug="" />
          </>
        )}
      </div>

      {/* NEWSLETTER */}
      <NewsletterForm />

      {/* SUBMIT SECTION */}
      <SubmitBlueprintForm />
    </>
  );
}
