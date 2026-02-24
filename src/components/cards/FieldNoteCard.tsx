import Link from "next/link";
import styles from "./FieldNoteCard.module.css";

interface FieldNoteCardProps {
  number: number;
  name: string;
  handle: string;
  role: string;
  pullQuote: string;
  tools: string[];
  slug: string;
  wide?: boolean;
  config?: string;
}

export default function FieldNoteCard({
  number, name, handle, role, pullQuote, tools, slug, wide, config,
}: FieldNoteCardProps) {
  const num = String(number).padStart(2, "0");

  if (wide) {
    return (
      <Link href={`/field-notes/${slug}`} className={`${styles.card} ${styles.wide}`}>
        <div className={styles.wideLeft}>
          <div className={styles.cardNumber}>{num}</div>
          <div className={styles.cardTag}>{role}</div>
          <h2 className={styles.cardName}>
            <span className={styles.ulHover}>{name}</span>
          </h2>
          <div className={styles.cardHandle}>@{handle}</div>
          <p className={styles.cardQuote}>{pullQuote}</p>
          <div className={styles.cardFooter}>
            <div className={styles.cardTools}>
              {tools.slice(0, 4).map((t) => (
                <span key={t} className={styles.miniChip}>{t}</span>
              ))}
            </div>
            <span className={styles.readMore}>Read</span>
          </div>
        </div>
        {config && (
          <div className={styles.wideRight}>
            <div className={styles.cardTag}>Their actual config</div>
            <pre className={styles.terminalBlock}>{config}</pre>
          </div>
        )}
      </Link>
    );
  }

  return (
    <Link href={`/field-notes/${slug}`} className={styles.card}>
      <div className={styles.cardNumber}>{num}</div>
      <div className={styles.cardTag}>{role}</div>
      <h2 className={styles.cardName}>
        <span className={styles.ulHover}>{name}</span>
      </h2>
      <div className={styles.cardHandle}>@{handle}</div>
      <p className={styles.cardQuote}>{pullQuote}</p>
      <div className={styles.cardFooter}>
        <div className={styles.cardTools}>
          {tools.slice(0, 3).map((t) => (
            <span key={t} className={styles.miniChip}>{t}</span>
          ))}
        </div>
        <span className={styles.readMore}>Read</span>
      </div>
    </Link>
  );
}
