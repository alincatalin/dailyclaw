import Link from "next/link";
import styles from "./RecipeCard.module.css";

interface RecipeCardProps {
  category: string;
  steps: number;
  title: string;
  description: string;
  slug: string;
}

export default function RecipeCard({ category, steps, title, description, slug }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${slug}`} className={styles.card}>
      <div className={styles.label}>{category} &middot; {steps} steps</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <div className={styles.stepDots}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={`${styles.dot} ${i < steps ? styles.active : ""}`} />
        ))}
      </div>
    </Link>
  );
}
