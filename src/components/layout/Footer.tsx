import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        DAILY<span>CLAW</span>
      </div>
      <div className={styles.links}>
        <Link href="/blueprints">Blueprints</Link>
        <Link href="/patterns">Patterns</Link>
        <Link href="/stack">Stack</Link>
        <Link href="/field-notes">Field Notes</Link>
        <Link href="/about">About</Link>
        <Link href="/advertise">Advertise</Link>
      </div>
      <div className={styles.copy}>The blueprints library for OpenClaw builders — 2025</div>
    </footer>
  );
}
