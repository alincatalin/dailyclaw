import styles from "./Ticker.module.css";

const items = [
  "OpenClaw Workflows",
  "AI Automations",
  "Builder Spotlights",
  "Copy-Paste Recipes",
  "MCP Servers",
  "Tool Setups",
  "What Can You Build",
  "Real Configs",
  "Ship Faster",
];

export default function Ticker() {
  const content = items.map((item) => (
    <span key={item}>
      {item} <span className={styles.star}>&#10022;</span>{" "}
    </span>
  ));

  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        {content}
        {content}
      </div>
    </div>
  );
}
