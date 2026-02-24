import { notFound } from "next/navigation";
import Link from "next/link";
import { getFieldNote, getFieldNotes } from "@/lib/content";
import Breadcrumb from "@/components/layout/Breadcrumb";
import MdxContent from "@/components/content/MdxContent";
import AdSlot from "@/components/ui/AdSlot";
import styles from "./field-note-detail.module.css";

export async function generateStaticParams() {
  return getFieldNotes().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getFieldNote(slug);
  if (!note) return {};
  return {
    title: `${note.name} — DailyClaw Field Notes`,
    description: note.pullQuote,
  };
}

export default async function FieldNoteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getFieldNote(slug);
  if (!note) notFound();

  const allNotes = getFieldNotes();
  const currentIndex = allNotes.findIndex((i) => i.slug === slug);
  const prev = currentIndex > 0 ? allNotes[currentIndex - 1] : null;
  const next = currentIndex < allNotes.length - 1 ? allNotes[currentIndex + 1] : null;

  const initials = note.name.split(" ").map((n) => n[0]).join("");

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Field Notes", href: "/field-notes" },
        { label: note.name },
      ]} />

      {/* HERO */}
      <div className={styles.hero}>
        <div className={`${styles.heroMain} anim anim-d1`}>
          <div>
            <div className={styles.interviewMeta}>
              <div className={styles.interviewNum}>{String(note.number).padStart(2, "0")}</div>
              <div className={styles.interviewTags}>
                {note.tags.map((tag) => (
                  <span key={tag} className={styles.tagPill}>{tag}</span>
                ))}
                <span className={styles.tagPill}>{note.location}</span>
                <span className={styles.tagPill}>{note.date}</span>
              </div>
            </div>

            <h1 className={styles.makerName}>
              {note.name.split(" ")[0].toUpperCase()}
              <em>{note.name.split(" ").slice(1).join(" ")}</em>
            </h1>
            <div className={styles.makerDescriptor}>
              <span className={styles.handle}>@{note.handle}</span>
              <span className={styles.dot}>&middot;</span>
              <span>{note.role}</span>
            </div>
          </div>

          <div className={styles.heroQuoteBlock}>
            &ldquo;{note.pullQuote}&rdquo;
          </div>
        </div>

        <div className={`${styles.heroSidebar} anim anim-d2`}>
          <div>
            <div className={styles.sidebarLabel}>Builder</div>
            <div className={styles.avatarLarge}>{initials}</div>
          </div>

          <div>
            <div className={styles.sidebarLabel}>Setup Stats</div>
            <div className={styles.quickStats}>
              <div className={styles.quickStat}>
                <span className={styles.qsNum}>{note.stats.mcpServers}</span>
                <span className={styles.qsLabel}>MCP Servers</span>
              </div>
              <div className={styles.quickStat}>
                <span className={styles.qsNum}>{note.stats.activeAgents}</span>
                <span className={styles.qsLabel}>Active Agents</span>
              </div>
              <div className={styles.quickStat}>
                <span className={styles.qsNum}>{note.stats.savedPerDay}</span>
                <span className={styles.qsLabel}>Saved / day</span>
              </div>
              <div className={styles.quickStat}>
                <span className={styles.qsNum}>{note.stats.automations}</span>
                <span className={styles.qsLabel}>Automations</span>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.sidebarLabel}>Tools mentioned</div>
            <div className={styles.toolList}>
              {note.tools.map((tool) => (
                <div key={tool} className={styles.toolRow}>
                  <span className={styles.toolRowName}>{tool}</span>
                  <span className={styles.toolRowArrow}>&nearr;</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className={styles.body}>
        <div className={styles.content}>
          <MdxContent source={note.content} />
        </div>
        <div className={styles.contentSidebar}>
          <div>
            <div className={styles.sidebarLabel}>Related</div>
            <Link href="/systems" className={styles.relatedLink}>
              <div className={styles.relatedType}>Systems</div>
              <div className={styles.relatedName}>Browse all systems &rarr;</div>
            </Link>
          </div>
          <AdSlot />
        </div>
      </div>

      {/* PREV/NEXT */}
      <div className={styles.nav}>
        {prev ? (
          <Link href={`/field-notes/${prev.slug}`} className={styles.navCard}>
            <span className={styles.navDir}>&larr; Previous</span>
            <span className={styles.navName}>{prev.name}</span>
            <span className={styles.navDesc}>{prev.role}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/field-notes/${next.slug}`} className={`${styles.navCard} ${styles.navRight}`}>
            <span className={styles.navDir}>Next &rarr;</span>
            <span className={styles.navName}>{next.name}</span>
            <span className={styles.navDesc}>{next.role}</span>
          </Link>
        ) : <div />}
      </div>
    </>
  );
}
