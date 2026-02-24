import Link from "next/link";
import styles from "./SystemCard.module.css";

interface SystemCardProps {
  category: string;
  title: string;
  description: string;
  slug: string;
  useCase?: string;
  complexity?: string;
  patterns?: string[];
  tools?: string[];
}

export default function SystemCard({
  category, title, description, slug, useCase, complexity, patterns, tools,
}: SystemCardProps) {
  return (
    <Link href={`/systems/${slug}`} className={styles.card}>
      <div className={styles.label}>{category}{complexity ? ` \u00B7 ${complexity}` : ""}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{useCase || description}</p>
      {patterns && patterns.length > 0 && (
        <div className={styles.patternPills}>
          {patterns.slice(0, 3).map((p) => (
            <span key={p} className={styles.pill}>{p}</span>
          ))}
        </div>
      )}
      {tools && tools.length > 0 && (
        <div className={styles.toolChips}>
          {tools.slice(0, 3).map((t) => (
            <span key={t} className={styles.toolChip}>{t}</span>
          ))}
        </div>
      )}
    </Link>
  );
}
