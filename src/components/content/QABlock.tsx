import styles from "./QABlock.module.css";

interface QABlockProps {
  question: string;
  children: React.ReactNode;
  id?: string;
}

export default function QABlock({ question, children, id }: QABlockProps) {
  return (
    <div className={styles.qaBlock} id={id}>
      <div className={styles.question}>{question}</div>
      <div className={styles.answer}>{children}</div>
    </div>
  );
}
