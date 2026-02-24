import { notFound } from "next/navigation";
import Link from "next/link";
import { getSystem, getSystems } from "@/lib/content";
import Breadcrumb from "@/components/layout/Breadcrumb";
import MdxContent from "@/components/content/MdxContent";
import AdSlot from "@/components/ui/AdSlot";
import styles from "./system-detail.module.css";

export async function generateStaticParams() {
  return getSystems().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const system = getSystem(slug);
  if (!system) return {};
  return {
    title: `${system.title} — DailyClaw Systems`,
    description: system.useCase || `${system.category} system. ${system.difficulty} difficulty.`,
  };
}

export default async function SystemDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const system = getSystem(slug);
  if (!system) notFound();

  const allSystems = getSystems();
  const related = allSystems.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Systems", href: "/systems" },
        { label: system.title },
      ]} />

      {/* SYSTEM HERO */}
      <div className={styles.hero}>
        <div className={`${styles.heroMain} anim anim-d1`}>
          <div>
            <div className={styles.category}>{system.category}</div>
            <h1 className={styles.title}>
              {system.title.split(" ")[0].toUpperCase()}
              <em>{system.title.split(" ").slice(1).join(" ")}</em>
            </h1>
            <div className={styles.pills}>
              <span className={`${styles.rpill} ${styles.rpillHl}`}>{system.category} &middot; {system.complexity || system.difficulty}</span>
              <span className={styles.rpill}>~{system.setupTime} setup</span>
              <span className={styles.rpill}>{system.difficulty}</span>
              {system.tools.map((t) => (
                <span key={t} className={styles.rpill}>{t}</span>
              ))}
            </div>
            {system.patterns && system.patterns.length > 0 && (
              <div className={styles.patternPills}>
                {system.patterns.map((p) => (
                  <Link key={p} href="/patterns" className={styles.patternPill}>{p}</Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={`${styles.heroSidebar} anim anim-d2`}>
          <div>
            <div className={styles.sidebarLabel}>At a glance</div>
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaVal}>{system.steps}</span>
                <span className={styles.metaKey}>Steps</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaVal}>{system.setupTime}</span>
                <span className={styles.metaKey}>Setup time</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaVal}>{system.timeSaved}</span>
                <span className={styles.metaKey}>Saved / day</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaVal}>{system.complexity ? system.complexity.charAt(0) : system.difficulty.charAt(0)}</span>
                <span className={styles.metaKey}>Complexity</span>
              </div>
            </div>
          </div>

          {system.tradeoffs && (
            <div>
              <div className={styles.sidebarLabel}>Trade-offs</div>
              <p className={styles.tradeoffs}>{system.tradeoffs}</p>
            </div>
          )}

          {system.contributor && (
            <div>
              <div className={styles.sidebarLabel}>Contributed by</div>
              <div className={styles.attribution}>
                {system.contributorSlug ? (
                  <Link href={`/field-notes/${system.contributorSlug}`}>{system.contributor}</Link>
                ) : (
                  <span>{system.contributor}</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* STEPS / CONTENT */}
      <div className={styles.stepsSection}>
        <div className={styles.stepsMain}>
          <div className={styles.stepsHeader}>
            <h2 className={styles.stepsTitle}>THE SYSTEM</h2>
            <span className={styles.stepsSubtitle}>&mdash; follow these steps in order</span>
          </div>
          <MdxContent source={system.content} />
        </div>

        <div className={styles.stepsSidebar}>
          <div>
            <div className={styles.sidebarLabel}>Tools used</div>
            <div className={styles.prereqList}>
              {system.tools.map((tool) => (
                <div key={tool} className={styles.prereqItem}>
                  <span className={styles.prereqDot} />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
          <AdSlot />
        </div>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <div className={styles.relatedSection}>
          <div className={styles.stepsHeader}>
            <h2 className={styles.stepsTitle}>RELATED</h2>
            <span className={styles.stepsSubtitle}>&mdash; you might also like these</span>
          </div>
          <div className={styles.relatedGrid}>
            {related.map((s) => (
              <Link key={s.slug} href={`/systems/${s.slug}`} className={styles.relatedCard}>
                <div className={styles.relatedType}>{s.category} &middot; {s.complexity || s.difficulty}</div>
                <div className={styles.relatedName}>{s.title}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
