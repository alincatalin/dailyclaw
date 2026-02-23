"use client";

import { useState } from "react";
import styles from "./CodeBlock.module.css";

interface CodeBlockProps {
  label?: string;
  children: React.ReactNode;
  accentColor?: string;
}

export default function CodeBlock({ label, children, accentColor }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = typeof children === "string" ? children : "";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.codeBlock} style={accentColor ? { borderLeftColor: accentColor } : undefined}>
      {label && <span className={styles.label} style={accentColor ? { background: accentColor } : undefined}>{label}</span>}
      <pre className={styles.pre}>{children}</pre>
      <button className={styles.copyBtn} onClick={handleCopy}>
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
