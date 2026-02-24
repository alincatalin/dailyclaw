import Link from "next/link";
import styles from "./AdSlot.module.css";

interface AdSlotProps {
  variant?: "sidebar" | "inline";
}

export default function AdSlot({ variant = "sidebar" }: AdSlotProps) {
  return (
    <div className={`${styles.adSlot} ${variant === "inline" ? styles.inline : ""}`}>
      <div className={styles.adLabel}>Sponsor</div>
      <div className={styles.adContent}>
        <div className={styles.adPlaceholder}>Your ad here</div>
        <p className={styles.adText}>Reach OpenClaw builders and system architects.</p>
        <Link href="/advertise" className={styles.adLink}>Learn more &rarr;</Link>
      </div>
    </div>
  );
}
