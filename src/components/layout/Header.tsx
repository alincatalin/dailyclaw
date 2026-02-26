import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          DAILY<span>CLAW</span>
        </Link>
        <span className={styles.statusPill}>BETA</span>
      </div>
      <div className={styles.center}>
        blueprints &times; patterns &times; OpenClaw
      </div>
      <div className={styles.right}>
        <nav className={styles.nav}>
          <Link href="/blueprints">Blueprints</Link>
          <Link href="/patterns">Patterns</Link>
          <Link href="/stack">Stack</Link>
          <Link href="/field-notes">Field Notes</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
