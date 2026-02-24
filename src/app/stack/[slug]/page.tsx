import { notFound } from "next/navigation";
import Link from "next/link";
import { getStackItem, getStackItems } from "@/lib/content";
import Breadcrumb from "@/components/layout/Breadcrumb";
import MdxContent from "@/components/content/MdxContent";
import AdSlot from "@/components/ui/AdSlot";
import styles from "./stack-detail.module.css";

export async function generateStaticParams() {
  return getStackItems().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getStackItem(slug);
  if (!item) return {};
  return {
    title: `${item.title} — DailyClaw Stack`,
    description: item.description,
  };
}

export default async function StackDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getStackItem(slug);
  if (!item) notFound();

  const allItems = getStackItems();
  const related = allItems.filter((t) => t.slug !== slug && t.category === item.category).slice(0, 4);

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Stack", href: "/stack" },
        { label: item.title },
      ]} />

      {/* STACK ITEM HERO */}
      <div className={styles.hero}>
        <div className={`${styles.heroLeft} anim anim-d1`}>
          <div>
            <div className={styles.badge}>
              <div className={styles.iconLarge}>{item.icon}</div>
              <div className={styles.typeStack}>
                <span className={styles.typePill}>{item.type}</span>
                <span className={styles.license}>{item.license}</span>
              </div>
            </div>

            <h1 className={styles.toolName}>
              {item.title.split(" ")[0].toUpperCase()}
              <em>{item.title.split(" ").slice(1).join(" ")}</em>
            </h1>

            <p className={styles.tagline}>{item.description}</p>
          </div>

          <div className={styles.installStrip}>
            <span className={styles.installCmd}>{item.installCmd}</span>
          </div>
        </div>

        <div className={`${styles.heroRight} anim anim-d2`}>
          <div>
            <div className={styles.sidebarLabel}>At a glance</div>
            <div className={styles.statRow}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>{item.makers}</span>
                <span className={styles.statLabelSm}>Builders use this</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>{item.capabilities.length}</span>
                <span className={styles.statLabelSm}>Capabilities</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>{item.version}</span>
                <span className={styles.statLabelSm}>Latest</span>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.sidebarLabel}>Compatibility</div>
            <div className={styles.compatGrid}>
              {item.compatibility.map((c) => (
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
              {item.capabilities.map((cap) => (
                <div key={cap} className={styles.capItem}>
                  <span className={styles.capName}>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MDX CONTENT */}
          <div className={styles.sectionBlock}>
            <MdxContent source={item.content} />
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

      {/* RELATED */}
      {related.length > 0 && (
        <div className={styles.similarSection}>
          <div className={styles.sectionHeaderRow}>
            <h2 className={styles.sectionTitleLg}>SIMILAR STACK</h2>
            <span className={styles.sectionSub}>&mdash; other {item.category} integrations</span>
          </div>
          <div className={styles.similarGrid}>
            {related.map((t) => (
              <Link key={t.slug} href={`/stack/${t.slug}`} className={styles.similarCard}>
                <div className={styles.simIcon}>{t.icon}</div>
                <div className={styles.simName}>{t.title}</div>
                <div className={styles.simDesc}>{t.description}</div>
                <div className={styles.simCount}>&nearr; {t.makers} builders</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
