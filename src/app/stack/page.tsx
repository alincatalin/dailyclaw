import { getStackItems } from "@/lib/content";
import StackCard from "@/components/cards/StackCard";
import Breadcrumb from "@/components/layout/Breadcrumb";
import styles from "./stack.module.css";

export const metadata = {
  title: "Stack — DailyClaw",
  description: "MCP servers, tools, and integrations that power OpenClaw systems. Curated and categorized.",
};

export default function StackPage() {
  const items = getStackItems();

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Stack" },
      ]} />

      <div className={styles.header}>
        <h1 className={styles.title}>STACK</h1>
        <span className={styles.subtitle}>&mdash; {items.length} MCP servers &amp; integrations</span>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <StackCard
            key={item.slug}
            icon={item.icon}
            name={item.title}
            description={item.description}
            category={item.category}
            slug={item.slug}
          />
        ))}
      </div>
    </>
  );
}
