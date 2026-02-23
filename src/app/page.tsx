import Link from "next/link";
import { getInterviews, getTools, getRecipes } from "@/lib/content";
import InterviewCard from "@/components/cards/InterviewCard";
import ToolCard from "@/components/cards/ToolCard";
import RecipeCard from "@/components/cards/RecipeCard";
import Ticker from "@/components/ui/Ticker";
import styles from "./home.module.css";

export default function HomePage() {
  const interviews = getInterviews();
  const tools = getTools();
  const recipes = getRecipes();

  const featured = interviews[0];

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div>
            <div className={`${styles.heroEyebrow} anim anim-d1`}>Powered by OpenClaw.</div>
            <h1 className={`${styles.heroTitle} anim anim-d2`}>
              WHAT ARE YOU
              <em>building</em>
              WITH OPENCLAW
            </h1>
            <p className={`${styles.heroSub} anim anim-d3`}>
              Workflows, automations, and real setups from builders shipping with OpenClaw. See what&apos;s possible, steal the configs, and start building.
            </p>
          </div>
          <div className={`${styles.heroMeta} anim anim-d4`}>
            <div className={styles.heroStat}>
              <span className={styles.statNum}>{interviews.length}</span>
              <span className={styles.statLabel}>Interviews</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.statNum}>{tools.length}</span>
              <span className={styles.statLabel}>Tools &amp; Servers</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.statNum}>{recipes.length}</span>
              <span className={styles.statLabel}>Recipes</span>
            </div>
          </div>
        </div>

        <div className={`${styles.heroRight} anim anim-d3`}>
          <div className={styles.featuredTag}>Latest interview</div>
          {featured ? (
            <Link href={`/interviews/${featured.slug}`} className={styles.featuredCard}>
              <div className={styles.makerHeader}>
                <div className={styles.makerAvatar}>
                  {featured.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className={styles.makerInfo}>
                  <h3>{featured.name}</h3>
                  <span className={styles.handle}>@{featured.handle} &middot; {featured.role}</span>
                </div>
              </div>
              <p className={styles.makerBio}>&ldquo;{featured.pullQuote}&rdquo;</p>
              <div className={styles.toolChips}>
                {featured.tools.map((t) => (
                  <span key={t} className={styles.chip}>{t}</span>
                ))}
              </div>
            </Link>
          ) : (
            <div className={styles.featuredCard}>
              <div className={styles.makerHeader}>
                <div className={styles.makerAvatar}>AP</div>
                <div className={styles.makerInfo}>
                  <h3>Alin Postolache</h3>
                  <span className={styles.handle}>@alincatalin &middot; AI Builder</span>
                </div>
              </div>
              <p className={styles.makerBio}>&ldquo;I automated my entire morning brief with OpenClaw &mdash; standup, GitHub issues, Stripe revenue &mdash; all piped to my inbox before coffee.&rdquo;</p>
              <div className={styles.toolChips}>
                <span className={`${styles.chip} ${styles.chipHighlight}`}>OpenClaw</span>
                <span className={styles.chip}>MCP Servers</span>
                <span className={styles.chip}>Automations</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TICKER */}
      <Ticker />

      {/* INTERVIEWS SECTION */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>INTERVIEWS</h2>
        <span className={styles.sectionSubtitle}>&mdash; sorted by newest</span>
      </div>

      <div className={styles.interviewsGrid}>
        {interviews.length > 0 ? (
          interviews.map((interview, i) => (
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
          ))
        ) : (
          <>
            <InterviewCard number={1} name="Coming Soon" handle="dailyclaw" role="Founder" pullQuote="Our first interview is being prepared. Submit your workflow to be featured!" tools={["OpenClaw", "MCP Servers"]} slug="" />
            <InterviewCard number={2} name="Your Name Here" handle="you" role="Builder" pullQuote="We're looking for builders to interview. Got a workflow worth sharing? Tell us about it." tools={["Your Tools"]} slug="" />
            <InterviewCard number={3} name="Join Us" handle="submit" role="Builder" pullQuote="Share your OpenClaw workflow, tools, and the automations that save you hours." tools={["Submit"]} slug="" />
          </>
        )}
      </div>

      {/* RECIPES TEASER */}
      <div className={styles.recipesTeaser}>
        <div className={styles.recipesLeft}>
          <h2>COPY-PASTE<em>recipes</em></h2>
          <p>Copy-paste workflows and automations for OpenClaw. Tested configs, real results.</p>
          <br />
          <Link href="/recipes" className={styles.submitBtn}>Browse recipes</Link>
        </div>
        <div className={styles.recipeCards}>
          {recipes.length > 0 ? (
            recipes.slice(0, 3).map((recipe) => (
              <RecipeCard
                key={recipe.slug}
                category={recipe.category}
                steps={recipe.steps}
                title={recipe.title}
                description={recipe.content.slice(0, 120)}
                slug={recipe.slug}
              />
            ))
          ) : (
            <>
              <RecipeCard category="Workflow" steps={5} title="Automated Issue Triage" description="Read new GitHub issues, check for dups, auto-label, draft first response. Runs on cron." slug="" />
              <RecipeCard category="Prompt" steps={1} title="Literature Review Agent" description="Feed PDFs, get a structured synthesis with citations. Academic-grade output, 10 minutes." slug="" />
              <RecipeCard category="Workflow" steps={3} title="Failed Payment Recovery" description="Monitor Stripe, detect failures, draft personalized recovery emails automatically." slug="" />
            </>
          )}
        </div>
      </div>

      {/* TOOLS PREVIEW */}
      <div className={styles.toolsSection}>
        <div className={styles.toolsAside}>
          <h2>TOOLS</h2>
          <p>Tools, servers, and integrations that power OpenClaw workflows.</p>
          <Link href="/tools" className={styles.soonPill}>Browse all</Link>
        </div>
        <div className={styles.toolsGrid}>
          {tools.length > 0 ? (
            tools.slice(0, 8).map((tool) => (
              <ToolCard
                key={tool.slug}
                icon={tool.icon}
                name={tool.title}
                description={tool.description}
                makers={tool.makers}
                slug={tool.slug}
              />
            ))
          ) : (
            <>
              <ToolCard icon="&#9881;&#65039;" name="Linear MCP" description="Project management via natural language." makers={14} slug="linear-mcp" />
              <ToolCard icon="&#128230;" name="GitHub MCP" description="Full repo control, issue triage, PR reviews." makers={21} slug="github-mcp" />
              <ToolCard icon="&#9993;&#65039;" name="Gmail MCP" description="Read, send, and triage emails from agents." makers={9} slug="gmail-mcp" />
              <ToolCard icon="&#129504;" name="Obsidian MCP" description="Your second brain, queryable by agents." makers={17} slug="obsidian-mcp" />
              <ToolCard icon="&#128179;" name="Stripe MCP" description="Payments, subscriptions, and customer data." makers={7} slug="stripe-mcp" />
              <ToolCard icon="&#128451;&#65039;" name="Notion MCP" description="Databases, pages, and docs via agents." makers={12} slug="notion-mcp" />
              <ToolCard icon="&#128269;" name="Brave Search" description="Real-time web access without hallucinations." makers={18} slug="brave-search" />
              <ToolCard icon="&#128506;&#65039;" name="Slack MCP" description="Team messaging and notifications." makers={11} slug="slack-mcp" />
            </>
          )}
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className={styles.newsletter}>
        <div className={styles.newsletterLeft}>
          <h2>STAY IN <em>the loop</em></h2>
          <p>OpenClaw workflows, tool guides, and builder spotlights. No spam &mdash; just the stuff that ships.</p>
        </div>
        <div>
          <div className={styles.newsletterForm}>
            <input className={styles.newsletterInput} type="email" placeholder="your@email.com" />
            <button className={styles.newsletterBtn}>SUBSCRIBE</button>
          </div>
          <div className={styles.newsletterNote}>Free. Unsubscribe anytime.</div>
        </div>
      </div>

      {/* SUBMIT SECTION */}
      <div className={styles.submitSection} id="submit">
        <div className={styles.submitLeft}>
          <h2>SHOW US WHAT YOU <span>BUILT.</span></h2>
          <p>Automated something cool with OpenClaw? We want to feature your workflow &mdash; the tools, the configs, and the results.</p>
          <p>No follower count required. Just a workflow worth sharing.</p>
        </div>
        <div className={styles.submitRight}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Your name / handle</label>
            <input className={styles.formInput} type="text" placeholder="e.g. sara_builds" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>What do you build?</label>
            <input className={styles.formInput} type="text" placeholder="e.g. Indie SaaS founder, Berlin" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>What did you build or automate?</label>
            <textarea className={styles.formInput} placeholder="Describe the workflow, what it does, and what tools it uses..." />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Tools used (MCP servers, APIs, scripts)</label>
            <input className={styles.formInput} type="text" placeholder="e.g. OpenClaw, Stripe MCP, GitHub MCP, cron" />
          </div>
          <button className={styles.ctaBig}>SUBMIT MY WORKFLOW &rarr;</button>
        </div>
      </div>
    </>
  );
}
