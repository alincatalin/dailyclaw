import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlueprint, getBlueprints } from "@/lib/content";
import Breadcrumb from "@/components/layout/Breadcrumb";
import MdxContent from "@/components/content/MdxContent";
import AdSlot from "@/components/ui/AdSlot";
import styles from "./blueprint-detail.module.css";

export async function generateStaticParams() {
  return getBlueprints().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blueprint = getBlueprint(slug);
  if (!blueprint) return {};
  return {
    title: `${blueprint.title} — DailyClaw Blueprints`,
    description: blueprint.useCase || `${blueprint.category} blueprint. ${blueprint.difficulty} difficulty.`,
  };
}

export default async function BlueprintDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blueprint = getBlueprint(slug);
  if (!blueprint) notFound();

  const allBlueprints = getBlueprints();
  const related = allBlueprints.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Blueprints", href: "/blueprints" },
        { label: blueprint.title },
      ]} />

      {/* BLUEPRINT HERO */}
      <div className={styles.hero}>
        <div className={`${styles.heroMain} anim anim-d1`}>
          <div>
            <div className={styles.category}>{blueprint.category}</div>
            <h1 className={styles.title}>
              {blueprint.title.split(" ")[0].toUpperCase()}
              <em>{blueprint.title.split(" ").slice(1).join(" ")}</em>
            </h1>
            <div className={styles.pills}>
              <span className={`${styles.rpill} ${styles.rpillHl}`}>{blueprint.category} &middot; {blueprint.complexity || blueprint.difficulty}</span>
              <span className={styles.rpill}>~{blueprint.setupTime} setup</span>
              <span className={styles.rpill}>{blueprint.difficulty}</span>
              {blueprint.tools.map((t) => (
                <span key={t} className={styles.rpill}>{t}</span>
              ))}
            </div>
            {blueprint.patterns && blueprint.patterns.length > 0 && (
              <div className={styles.patternPills}>
                {blueprint.patterns.map((p) => (
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
                <span className={styles.metaVal}>{blueprint.steps}</span>
                <span className={styles.metaKey}>Steps</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaVal}>{blueprint.setupTime}</span>
                <span className={styles.metaKey}>Setup time</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaVal}>{blueprint.timeSaved}</span>
                <span className={styles.metaKey}>Saved / day</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaVal}>{blueprint.complexity ? blueprint.complexity.charAt(0) : blueprint.difficulty.charAt(0)}</span>
                <span className={styles.metaKey}>Complexity</span>
              </div>
            </div>
          </div>

          {blueprint.tradeoffs && (
            <div>
              <div className={styles.sidebarLabel}>Trade-offs</div>
              <p className={styles.tradeoffs}>{blueprint.tradeoffs}</p>
            </div>
          )}

          {blueprint.contributor && (
            <div>
              <div className={styles.sidebarLabel}>Contributed by</div>
              <div className={styles.attribution}>
                {blueprint.contributorSlug ? (
                  <Link href={`/field-notes/${blueprint.contributorSlug}`}>{blueprint.contributor}</Link>
                ) : (
                  <span>{blueprint.contributor}</span>
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
            <h2 className={styles.stepsTitle}>THE BLUEPRINT</h2>
            <span className={styles.stepsSubtitle}>&mdash; follow these steps in order</span>
          </div>
          <MdxContent source={blueprint.content} />
        </div>

        <div className={styles.stepsSidebar}>
          <div>
            <div className={styles.sidebarLabel}>Tools used</div>
            <div className={styles.prereqList}>
              {blueprint.tools.map((tool) => (
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
            {related.map((b) => (
              <Link key={b.slug} href={`/blueprints/${b.slug}`} className={styles.relatedCard}>
                <div className={styles.relatedType}>{b.category} &middot; {b.complexity || b.difficulty}</div>
                <div className={styles.relatedName}>{b.title}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
