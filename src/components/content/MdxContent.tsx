import { MDXRemote } from "next-mdx-remote/rsc";
import CodeBlock from "./CodeBlock";
import QABlock from "./QABlock";
import PullQuote from "./PullQuote";
import TipBox from "./TipBox";
import StepCard from "./StepCard";

const components = {
  CodeBlock,
  QABlock,
  PullQuote,
  TipBox,
  StepCard,
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
  return <MDXRemote source={source} components={components} />;
}
