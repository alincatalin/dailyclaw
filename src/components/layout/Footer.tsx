import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        DAILY<span>CLAW</span>
      </div>
      <div className={styles.links}>
        <Link href="/interviews">Interviews</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/recipes">Recipes</Link>
        <Link href="/about">About</Link>
        <Link href="/advertise">Advertise</Link>
      </div>
      <div className={styles.copy}>Workflows and automations powered by OpenClaw — 2025</div>
    </footer>
  );
}
