import { getFieldNotes } from "@/lib/content";
import FieldNoteCard from "@/components/cards/FieldNoteCard";
import Breadcrumb from "@/components/layout/Breadcrumb";
import styles from "./field-notes.module.css";

export const metadata = {
  title: "Field Notes — DailyClaw",
  description: "Builder deep-dives. How people use OpenClaw — their systems, automations, and the setups that work.",
};

export default function FieldNotesPage() {
  const fieldNotes = getFieldNotes();

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Field Notes" },
      ]} />

      <div className={styles.header}>
        <h1 className={styles.title}>FIELD NOTES</h1>
        <span className={styles.subtitle}>&mdash; {fieldNotes.length} builder deep-dives</span>
      </div>

      <div className={styles.grid}>
        {fieldNotes.map((note, i) => (
          <FieldNoteCard
            key={note.slug}
            number={note.number}
            name={note.name}
            handle={note.handle}
            role={note.role}
            pullQuote={note.pullQuote}
            tools={note.tools}
            slug={note.slug}
            wide={i === 0}
          />
        ))}
      </div>
    </>
  );
}
