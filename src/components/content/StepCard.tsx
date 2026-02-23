import styles from "./StepCard.module.css";

interface StepCardProps {
  number?: number | string;
  label?: string;
  heading?: string;
  children?: React.ReactNode;
}

export default function StepCard({ number, label, heading, children }: StepCardProps) {
  const num = number != null ? Number(number) : 0;
  const display = isNaN(num) || num === 0 ? "--" : String(num).padStart(2, "0");

  return (
    <div className={styles.stepCard}>
      <div className={styles.numCol}>
        <div className={styles.num}>{display}</div>
      </div>
      <div className={styles.body}>
        {label && <div className={styles.label}>{label}</div>}
        {heading && <h3 className={styles.heading}>{heading}</h3>}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
