import { getInterviews } from "@/lib/content";
import InterviewCard from "@/components/cards/InterviewCard";
import Breadcrumb from "@/components/layout/Breadcrumb";
import styles from "./interviews.module.css";

export const metadata = {
  title: "Interviews — DailyClaw",
  description: "Builder spotlights. How people use OpenClaw — their workflows, automations, and the setups that work.",
};

export default function InterviewsPage() {
  const interviews = getInterviews();

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Interviews" },
      ]} />

      <div className={styles.header}>
        <h1 className={styles.title}>INTERVIEWS</h1>
        <span className={styles.subtitle}>&mdash; {interviews.length} maker deep-dives</span>
      </div>

      <div className={styles.grid}>
        {interviews.map((interview, i) => (
          <InterviewCard
            key={interview.slug}
            number={interview.number}
            name={interview.name}
            handle={interview.handle}
            role={interview.role}
            pullQuote={interview.pullQuote}
            tools={interview.tools}
            slug={interview.slug}
            wide={i === 0}
          />
        ))}
      </div>
    </>
  );
}
