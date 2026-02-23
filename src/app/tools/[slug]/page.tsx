import { notFound } from "next/navigation";
import Link from "next/link";
import { getTool, getTools } from "@/lib/content";
import Breadcrumb from "@/components/layout/Breadcrumb";
import MdxContent from "@/components/content/MdxContent";
import AdSlot from "@/components/ui/AdSlot";
import styles from "./tool-detail.module.css";

export async function generateStaticParams() {
  return getTools().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: `${tool.title} — DailyClaw Tools`,
    description: tool.description,
  };
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const allTools = getTools();
  const related = allTools.filter((t) => t.slug !== slug && t.category === tool.category).slice(0, 4);

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: tool.title },
      ]} />

      {/* TOOL HERO */}
      <div className={styles.hero}>
        <div className={`${styles.heroLeft} anim anim-d1`}>
          <div>
            <div className={styles.badge}>
              <div className={styles.iconLarge}>{tool.icon}</div>
              <div className={styles.typeStack}>
                <span className={styles.typePill}>{tool.type}</span>
                <span className={styles.license}>{tool.license}</span>
              </div>
            </div>

            <h1 className={styles.toolName}>
              {tool.title.split(" ")[0].toUpperCase()}
              <em>{tool.title.split(" ").slice(1).join(" ")}</em>
            </h1>

            <p className={styles.tagline}>{tool.description}</p>
          </div>

          <div className={styles.installStrip}>
            <span className={styles.installCmd}>{tool.installCmd}</span>
          </div>
        </div>

        <div className={`${styles.heroRight} anim anim-d2`}>
          <div>
            <div className={styles.sidebarLabel}>At a glance</div>
            <div className={styles.statRow}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>{tool.makers}</span>
                <span className={styles.statLabelSm}>Makers use this</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>{tool.capabilities.length}</span>
                <span className={styles.statLabelSm}>Capabilities</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>{tool.version}</span>
                <span className={styles.statLabelSm}>Latest</span>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.sidebarLabel}>Compatibility</div>
            <div className={styles.compatGrid}>
              {tool.compatibility.map((c) => (
                <div key={c.name} className={styles.compatItem}>
                  <span className={styles.compatName}>{c.name}</span>
                  <span className={`${styles.compatStatus} ${styles[c.status]}`}>
                    {c.status === "ok" ? "Verified" : c.status === "warn" ? "Partial" : "Not yet"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className={styles.body}>
        <div className={styles.main}>
          {/* CAPABILITIES */}
          <div className={styles.sectionBlock}>
            <div className={styles.blockLabel}>Capabilities</div>
            <h2 className={styles.blockTitle}>WHAT IT DOES</h2>
            <div className={styles.capGrid}>
              {tool.capabilities.map((cap) => (
                <div key={cap} className={styles.capItem}>
                  <span className={styles.capName}>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MDX CONTENT */}
          <div className={styles.sectionBlock}>
            <MdxContent source={tool.content} />
          </div>
        </div>

        <div className={styles.sidebar}>
          <div>
            <div className={styles.sidebarLabel}>Quick links</div>
            <div className={styles.quickLinks}>
              <div className={styles.quickLink}>
                <span className={styles.qlText}>npm package</span>
                <span className={styles.qlArrow}>&nearr;</span>
              </div>
              <div className={styles.quickLink}>
                <span className={styles.qlText}>Report an issue</span>
                <span className={styles.qlArrow}>&nearr;</span>
              </div>
            </div>
          </div>
          <AdSlot />
        </div>
      </div>

      {/* RELATED TOOLS */}
      {related.length > 0 && (
        <div className={styles.similarSection}>
          <div className={styles.sectionHeaderRow}>
            <h2 className={styles.sectionTitleLg}>SIMILAR TOOLS</h2>
            <span className={styles.sectionSub}>&mdash; other {tool.category} integrations</span>
          </div>
          <div className={styles.similarGrid}>
            {related.map((t) => (
              <Link key={t.slug} href={`/tools/${t.slug}`} className={styles.similarCard}>
                <div className={styles.simIcon}>{t.icon}</div>
                <div className={styles.simName}>{t.title}</div>
                <div className={styles.simDesc}>{t.description}</div>
                <div className={styles.simCount}>&nearr; {t.makers} makers</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
