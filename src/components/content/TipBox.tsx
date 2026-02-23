import styles from "./TipBox.module.css";

interface TipBoxProps {
  children: React.ReactNode;
}

export default function TipBox({ children }: TipBoxProps) {
  return <div className={styles.tipBox}>{children}</div>;
}
