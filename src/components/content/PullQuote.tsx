import styles from "./PullQuote.module.css";

interface PullQuoteProps {
  quote: string;
  attribution?: string;
}

export default function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <div className={styles.pullQuote}>
      <p className={styles.text}>{quote}</p>
      {attribution && <div className={styles.attrib}>{attribution}</div>}
    </div>
  );
}
