import { MDXRemote } from "next-mdx-remote/rsc";
import CodeBlock from "./CodeBlock";
import QABlock from "./QABlock";
import PullQuote from "./PullQuote";
import TipBox from "./TipBox";
import StepCard from "./StepCard";
import MermaidDiagram from "./MermaidDiagram";
import styles from "./MdxContent.module.css";

function PreBlock(props: React.ComponentProps<"pre">) {
  const child = props.children as React.ReactElement<{ className?: string; children?: string }>;
  if (child?.props?.className === "language-mermaid") {
    return <MermaidDiagram chart={child.props.children || ""} />;
  }
  return <pre {...props} />;
}

const components = {
  CodeBlock,
  QABlock,
  PullQuote,
  TipBox,
  StepCard,
  MermaidDiagram,
  pre: PreBlock,
  code: (props: React.ComponentProps<"code">) => (
    <code style={{
      fontFamily: "var(--font-mono), monospace",
      fontSize: "0.9em",
      background: "var(--surface)",
      padding: "2px 6px",
      border: "1px solid var(--border)",
    }} {...props} />
  ),
};

export default function MdxContent({ source }: { source: string }) {
  return (
    <div className={styles.prose}>
      <MDXRemote source={source} components={components} />
    </div>
  );
}
