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
        workflows &times; automations &times; OpenClaw
      </div>
      <div className={styles.right}>
        <nav className={styles.nav}>
          <Link href="/interviews">Interviews</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/about">About</Link>
        </nav>
        <Link href="/#submit" className={styles.submitBtn}>
          Submit Setup
        </Link>
      </div>
    </header>
  );
}
