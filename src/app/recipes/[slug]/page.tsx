import { notFound } from "next/navigation";
import Link from "next/link";
import { getRecipe, getRecipes } from "@/lib/content";
import Breadcrumb from "@/components/layout/Breadcrumb";
import MdxContent from "@/components/content/MdxContent";
import AdSlot from "@/components/ui/AdSlot";
import styles from "./recipe-detail.module.css";

export async function generateStaticParams() {
  return getRecipes().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return {};
  return {
    title: `${recipe.title} — DailyClaw Recipes`,
    description: `${recipe.category} recipe with ${recipe.steps} steps. ${recipe.difficulty} difficulty.`,
  };
}

export default async function RecipeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) notFound();

  const allRecipes = getRecipes();
  const related = allRecipes.filter((r) => r.slug !== slug).slice(0, 3);

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Recipes", href: "/recipes" },
        { label: recipe.title },
      ]} />

      {/* RECIPE HERO */}
      <div className={styles.hero}>
        <div className={`${styles.heroMain} anim anim-d1`}>
          <div>
            <div className={styles.category}>{recipe.category}</div>
            <h1 className={styles.title}>
              {recipe.title.split(" ")[0].toUpperCase()}
              <em>{recipe.title.split(" ").slice(1).join(" ")}</em>
            </h1>
            <div className={styles.pills}>
              <span className={`${styles.rpill} ${styles.rpillHl}`}>{recipe.category} &middot; {recipe.steps} steps</span>
              <span className={styles.rpill}>~{recipe.setupTime} setup</span>
              <span className={styles.rpill}>{recipe.difficulty}</span>
              {recipe.tools.map((t) => (
                <span key={t} className={styles.rpill}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.heroSidebar} anim anim-d2`}>
          <div>
            <div className={styles.sidebarLabel}>At a glance</div>
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaVal}>{recipe.steps}</span>
                <span className={styles.metaKey}>Steps</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaVal}>{recipe.setupTime}</span>
                <span className={styles.metaKey}>Setup time</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaVal}>{recipe.timeSaved}</span>
                <span className={styles.metaKey}>Saved / day</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaVal}>{recipe.difficulty.charAt(0)}</span>
                <span className={styles.metaKey}>Difficulty</span>
              </div>
            </div>
          </div>

          {recipe.contributor && (
            <div>
              <div className={styles.sidebarLabel}>Contributed by</div>
              <div className={styles.attribution}>
                {recipe.contributorSlug ? (
                  <Link href={`/interviews/${recipe.contributorSlug}`}>{recipe.contributor}</Link>
                ) : (
                  <span>{recipe.contributor}</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* STEPS / CONTENT */}
      <div className={styles.stepsSection}>
        <div className={styles.stepsMain}>
          <div className={styles.stepsHeader}>
            <h2 className={styles.stepsTitle}>THE RECIPE</h2>
            <span className={styles.stepsSubtitle}>&mdash; follow these steps in order</span>
          </div>
          <MdxContent source={recipe.content} />
        </div>

        <div className={styles.stepsSidebar}>
          <div>
            <div className={styles.sidebarLabel}>Tools used</div>
            <div className={styles.prereqList}>
              {recipe.tools.map((tool) => (
                <div key={tool} className={styles.prereqItem}>
                  <span className={styles.prereqDot} />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
          <AdSlot />
        </div>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <div className={styles.relatedSection}>
          <div className={styles.stepsHeader}>
            <h2 className={styles.stepsTitle}>RELATED</h2>
            <span className={styles.stepsSubtitle}>&mdash; you might also like these</span>
          </div>
          <div className={styles.relatedGrid}>
            {related.map((r) => (
              <Link key={r.slug} href={`/recipes/${r.slug}`} className={styles.relatedCard}>
                <div className={styles.relatedType}>{r.category} &middot; {r.steps} steps</div>
                <div className={styles.relatedName}>{r.title}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
