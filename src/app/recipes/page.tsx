import { getRecipes } from "@/lib/content";
import RecipeCard from "@/components/cards/RecipeCard";
import Breadcrumb from "@/components/layout/Breadcrumb";
import styles from "./recipes.module.css";

export const metadata = {
  title: "Recipes — DailyClaw",
  description: "Copy-paste workflows and automations for OpenClaw. Tested configs, step-by-step guides.",
};

export default function RecipesPage() {
  const recipes = getRecipes();

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Recipes" },
      ]} />

      <div className={styles.header}>
        <h1 className={styles.title}>RECIPES</h1>
        <span className={styles.subtitle}>&mdash; {recipes.length} copy-paste workflows</span>
      </div>

      <div className={styles.grid}>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.slug}
            category={recipe.category}
            steps={recipe.steps}
            title={recipe.title}
            description={recipe.content.slice(0, 120)}
            slug={recipe.slug}
          />
        ))}
      </div>
    </>
  );
}
