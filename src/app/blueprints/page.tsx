import { getBlueprints } from "@/lib/content";
import BlueprintCard from "@/components/cards/BlueprintCard";
import Breadcrumb from "@/components/layout/Breadcrumb";
import styles from "./blueprints.module.css";

export const metadata = {
  title: "Blueprints — DailyClaw",
  description: "Reference blueprints and agent architectures for OpenClaw. Tested configs, real results.",
};

export default function BlueprintsPage() {
  const blueprints = getBlueprints();

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Blueprints" },
      ]} />

      <div className={styles.header}>
        <h1 className={styles.title}>BLUEPRINTS</h1>
        <span className={styles.subtitle}>&mdash; {blueprints.length} reference architectures</span>
      </div>

      <div className={styles.grid}>
        {blueprints.map((blueprint) => (
          <BlueprintCard
            key={blueprint.slug}
            category={blueprint.category}
            title={blueprint.title}
            description={blueprint.content.slice(0, 120)}
            slug={blueprint.slug}
            useCase={blueprint.useCase}
            complexity={blueprint.complexity}
            patterns={blueprint.patterns}
            tools={blueprint.tools}
          />
        ))}
      </div>
    </>
  );
}
