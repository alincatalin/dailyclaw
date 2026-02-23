import { notFound } from "next/navigation";
import Link from "next/link";
import { getInterview, getInterviews } from "@/lib/content";
import Breadcrumb from "@/components/layout/Breadcrumb";
import MdxContent from "@/components/content/MdxContent";
import AdSlot from "@/components/ui/AdSlot";
import styles from "./interview-detail.module.css";

export async function generateStaticParams() {
  return getInterviews().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const interview = getInterview(slug);
  if (!interview) return {};
  return {
    title: `${interview.name} — DailyClaw Interview`,
    description: interview.pullQuote,
  };
}

export default async function InterviewDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const interview = getInterview(slug);
  if (!interview) notFound();

  const interviews = getInterviews();
  const currentIndex = interviews.findIndex((i) => i.slug === slug);
  const prev = currentIndex > 0 ? interviews[currentIndex - 1] : null;
  const next = currentIndex < interviews.length - 1 ? interviews[currentIndex + 1] : null;

  const initials = interview.name.split(" ").map((n) => n[0]).join("");

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Interviews", href: "/interviews" },
        { label: interview.name },
      ]} />

      {/* HERO */}
      <div className={styles.hero}>
        <div className={`${styles.heroMain} anim anim-d1`}>
          <div>
            <div className={styles.interviewMeta}>
              <div className={styles.interviewNum}>{String(interview.number).padStart(2, "0")}</div>
              <div className={styles.interviewTags}>
                {interview.tags.map((tag) => (
                  <span key={tag} className={styles.tagPill}>{tag}</span>
                ))}
                <span className={styles.tagPill}>{interview.location}</span>
                <span className={styles.tagPill}>{interview.date}</span>
              </div>
            </div>

            <h1 className={styles.makerName}>
              {interview.name.split(" ")[0].toUpperCase()}
              <em>{interview.name.split(" ").slice(1).join(" ")}</em>
            </h1>
            <div className={styles.makerDescriptor}>
              <span className={styles.handle}>@{interview.handle}</span>
              <span className={styles.dot}>&middot;</span>
              <span>{interview.role}</span>
            </div>
          </div>

          <div className={styles.heroQuoteBlock}>
            &ldquo;{interview.pullQuote}&rdquo;
          </div>
        </div>

        <div className={`${styles.heroSidebar} anim anim-d2`}>
          <div>
            <div className={styles.sidebarLabel}>Maker</div>
            <div className={styles.avatarLarge}>{initials}</div>
          </div>

          <div>
            <div className={styles.sidebarLabel}>Setup Stats</div>
            <div className={styles.quickStats}>
              <div className={styles.quickStat}>
                <span className={styles.qsNum}>{interview.stats.mcpServers}</span>
                <span className={styles.qsLabel}>MCP Servers</span>
              </div>
              <div className={styles.quickStat}>
                <span className={styles.qsNum}>{interview.stats.activeAgents}</span>
                <span className={styles.qsLabel}>Active Agents</span>
              </div>
              <div className={styles.quickStat}>
                <span className={styles.qsNum}>{interview.stats.savedPerDay}</span>
                <span className={styles.qsLabel}>Saved / day</span>
              </div>
              <div className={styles.quickStat}>
                <span className={styles.qsNum}>{interview.stats.automations}</span>
                <span className={styles.qsLabel}>Automations</span>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.sidebarLabel}>Tools mentioned</div>
            <div className={styles.toolList}>
              {interview.tools.map((tool) => (
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
          <MdxContent source={interview.content} />
        </div>
        <div className={styles.contentSidebar}>
          <div>
            <div className={styles.sidebarLabel}>Related</div>
            <Link href="/recipes" className={styles.relatedLink}>
              <div className={styles.relatedType}>Recipes</div>
              <div className={styles.relatedName}>Browse all recipes &rarr;</div>
            </Link>
          </div>
          <AdSlot />
        </div>
      </div>

      {/* PREV/NEXT */}
      <div className={styles.nav}>
        {prev ? (
          <Link href={`/interviews/${prev.slug}`} className={styles.navCard}>
            <span className={styles.navDir}>&larr; Previous</span>
            <span className={styles.navName}>{prev.name}</span>
            <span className={styles.navDesc}>{prev.role}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/interviews/${next.slug}`} className={`${styles.navCard} ${styles.navRight}`}>
            <span className={styles.navDir}>Next &rarr;</span>
            <span className={styles.navName}>{next.name}</span>
            <span className={styles.navDesc}>{next.role}</span>
          </Link>
        ) : <div />}
      </div>
    </>
  );
}
