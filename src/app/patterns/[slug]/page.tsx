import { notFound } from "next/navigation";
import Link from "next/link";
import { getPattern, getPatterns, getBlueprints } from "@/lib/content";
import Breadcrumb from "@/components/layout/Breadcrumb";
import MdxContent from "@/components/content/MdxContent";
import AdSlot from "@/components/ui/AdSlot";
import styles from "./pattern-detail.module.css";

export async function generateStaticParams() {
  return getPatterns().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pattern = getPattern(slug);
  if (!pattern) return {};
  return {
    title: `${pattern.title} — DailyClaw Patterns`,
    description: pattern.subtitle || `${pattern.category} pattern for OpenClaw builders.`,
  };
}

export default async function PatternDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pattern = getPattern(slug);
  if (!pattern) notFound();

  // Find blueprints that reference patterns (for the sidebar)
  const allBlueprints = getBlueprints();
  const relatedBlueprints = allBlueprints.filter(
    (b) => b.patterns && b.patterns.some((p) => p.includes("model") || p.includes("routing") || p.includes("cost"))
  ).slice(0, 5);

  // Table of contents entries extracted from the content
  const tocEntries = [
    "The Problem in Numbers",
    "The Model Landscape",
    "The Three-Tier Routing Map",
    "The Configuration",
    "The Fallback Chain",
    "Non-Anthropic Models",
    "Cost Optimization",
    "Decision Matrix",
    "Summary",
  ];

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Patterns", href: "/patterns" },
        { label: pattern.title },
      ]} />

      {/* PATTERN HERO */}
      <div className={`${styles.hero} anim anim-d1`}>
        <div className={styles.category}>{pattern.category}</div>
        <h1 className={styles.title}>
          {pattern.title.split(" ").slice(0, 2).join(" ").toUpperCase()}
          <em>{pattern.subtitle}</em>
        </h1>
        <div className={styles.meta}>
          <span className={`${styles.metaPill} ${styles.metaPillHl}`}>{pattern.category}</span>
          <span className={styles.metaPill}>A DailyClaw Pattern</span>
          <span className={styles.metaPill}>{pattern.date}</span>
          <span className={styles.metaPill}>{pattern.readTime} read</span>
        </div>
      </div>

      {/* CONTENT + SIDEBAR */}
      <div className={styles.contentSection}>
        <div className={styles.contentMain}>
          <div className={styles.contentHeader}>
            <h2 className={styles.contentTitle}>THE PATTERN</h2>
            <span className={styles.contentSubtitle}>&mdash; updated February 2026</span>
          </div>
          <MdxContent source={pattern.content} />
        </div>

        <div className={styles.sidebar}>
          <div>
            <div className={styles.sidebarLabel}>In this pattern</div>
            <div className={styles.tocList}>
              {tocEntries.map((entry) => (
                <div key={entry} className={styles.tocItem}>
                  <span className={styles.tocDot} />
                  <span>{entry}</span>
                </div>
              ))}
            </div>
          </div>

          {relatedBlueprints.length > 0 && (
            <div>
              <div className={styles.sidebarLabel}>Related blueprints</div>
              <div className={styles.tocList}>
                {relatedBlueprints.map((b) => (
                  <Link key={b.slug} href={`/blueprints/${b.slug}`} className={styles.tocItem}>
                    <span className={styles.tocDot} />
                    <span>{b.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <AdSlot />
        </div>
      </div>
    </>
  );
}
