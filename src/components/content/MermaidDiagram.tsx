"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./MermaidDiagram.module.css";

interface MermaidDiagramProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    async function render() {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          darkMode: true,
          background: "#0a0a0a",
          primaryColor: "#1a1a1a",
          primaryTextColor: "#e0e0e0",
          primaryBorderColor: "#333",
          lineColor: "#555",
          secondaryColor: "#1a1a1a",
          tertiaryColor: "#111",
          fontFamily: "monospace",
          fontSize: "13px",
        },
        flowchart: {
          htmlLabels: true,
          curve: "basis",
          padding: 12,
        },
      });
      const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
      try {
        const { svg: rendered } = await mermaid.render(id, chart.trim());
        if (!cancelled) setSvg(rendered);
      } catch {
        // Fallback to plain text if mermaid can't parse
        if (!cancelled) setSvg("");
      }
    }
    render();
    return () => { cancelled = true; };
  }, [chart]);

  if (!svg) {
    return (
      <div className={styles.fallback}>
        <pre>{chart}</pre>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={styles.diagram}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
