import { getSystems } from "@/lib/content";
import SystemCard from "@/components/cards/SystemCard";
import Breadcrumb from "@/components/layout/Breadcrumb";
import styles from "./systems.module.css";

export const metadata = {
  title: "Systems — DailyClaw",
  description: "Reference systems and agent architectures for OpenClaw. Tested configs, real results.",
};

export default function SystemsPage() {
  const systems = getSystems();

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Systems" },
      ]} />

      <div className={styles.header}>
        <h1 className={styles.title}>SYSTEMS</h1>
        <span className={styles.subtitle}>&mdash; {systems.length} reference architectures</span>
      </div>

      <div className={styles.grid}>
        {systems.map((system) => (
          <SystemCard
            key={system.slug}
            category={system.category}
            title={system.title}
            description={system.content.slice(0, 120)}
            slug={system.slug}
            useCase={system.useCase}
            complexity={system.complexity}
            patterns={system.patterns}
            tools={system.tools}
          />
        ))}
      </div>
    </>
  );
}
