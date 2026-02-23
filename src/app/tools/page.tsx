import { getTools } from "@/lib/content";
import ToolCard from "@/components/cards/ToolCard";
import Breadcrumb from "@/components/layout/Breadcrumb";
import styles from "./tools.module.css";

export const metadata = {
  title: "Tools — DailyClaw",
  description: "MCP servers, tools, and integrations that power OpenClaw workflows. Curated and categorized.",
};

export default function ToolsPage() {
  const tools = getTools();

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Tools" },
      ]} />

      <div className={styles.header}>
        <h1 className={styles.title}>TOOLS</h1>
        <span className={styles.subtitle}>&mdash; {tools.length} MCP servers &amp; integrations</span>
      </div>

      <div className={styles.grid}>
        {tools.map((tool) => (
          <ToolCard
            key={tool.slug}
            icon={tool.icon}
            name={tool.title}
            description={tool.description}
            makers={tool.makers}
            slug={tool.slug}
          />
        ))}
      </div>
    </>
  );
}
