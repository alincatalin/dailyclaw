import Link from "next/link";
import type { Metadata } from "next";
import { getBlueprints } from "@/lib/content";
import Breadcrumb from "@/components/layout/Breadcrumb";
import styles from "./patterns.module.css";

export const metadata: Metadata = {
  title: "Patterns — DailyClaw",
  description: "Reusable architecture patterns for building agent blueprints with OpenClaw. Event-driven, human-in-the-loop, multi-tool pipelines, and more.",
};

export default function PatternsPage() {
  const blueprints = getBlueprints();
  const allPatterns = Array.from(new Set(blueprints.flatMap((b) => b.patterns || [])));

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Patterns" },
      ]} />

      <div className={styles.header}>
        <h1 className={styles.title}>PATTERNS</h1>
        <span className={styles.subtitle}>&mdash; reusable architecture patterns</span>
      </div>

      <div className={styles.content}>
        <div className={styles.description}>
          <p>
            Patterns are the reusable building blocks behind every blueprint. Each pattern describes an architecture approach &mdash; how agents coordinate, when humans intervene, how data flows between tools.
          </p>
          <p>
            We&apos;re documenting patterns extracted from real blueprints built by OpenClaw builders. This section is growing &mdash; each blueprint references the patterns it uses.
          </p>
        </div>

        <div className={styles.pillGrid}>
          {allPatterns.length > 0 ? (
            allPatterns.map((pattern) => (
              <span key={pattern} className={styles.pill}>{pattern}</span>
            ))
          ) : (
            <>
              <span className={styles.pill}>event-driven</span>
              <span className={styles.pill}>human-in-the-loop</span>
              <span className={styles.pill}>scheduled-agent</span>
              <span className={styles.pill}>multi-tool-pipeline</span>
              <span className={styles.pill}>personalization-agent</span>
              <span className={styles.pill}>multi-source-aggregation</span>
              <span className={styles.pill}>report-generation</span>
            </>
          )}
        </div>

        <div className={styles.comingSoon}>
          <div className={styles.comingSoonLabel}>Coming soon</div>
          <p>
            Full pattern documentation with diagrams, trade-offs, and example blueprints. Each pattern will link to the blueprints that implement it.
          </p>
          <Link href="/blueprints" className={styles.browseLink}>Browse blueprints &rarr;</Link>
        </div>
      </div>
    </>
  );
}
