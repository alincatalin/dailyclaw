import Link from "next/link";
import styles from "./ToolCard.module.css";

interface ToolCardProps {
  icon: string;
  name: string;
  description: string;
  makers: number;
  slug: string;
}

export default function ToolCard({ icon, name, description, makers, slug }: ToolCardProps) {
  return (
    <Link href={`/tools/${slug}`} className={styles.toolItem}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.name}>{name}</span>
      <span className={styles.desc}>{description}</span>
      <span className={styles.count}>&uarr; {makers} makers use this</span>
    </Link>
  );
}
