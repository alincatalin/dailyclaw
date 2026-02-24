import Link from "next/link";
import styles from "./StackCard.module.css";

interface StackCardProps {
  icon: string;
  name: string;
  description: string;
  category?: string;
  slug: string;
}

export default function StackCard({ icon, name, description, category, slug }: StackCardProps) {
  return (
    <Link href={`/stack/${slug}`} className={styles.stackItem}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.name}>{name}</span>
      <span className={styles.desc}>{description}</span>
      {category && <span className={styles.category}>{category}</span>}
    </Link>
  );
}
