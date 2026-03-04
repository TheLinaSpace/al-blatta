import { useState, useMemo } from "react";
import type { Recipe } from "../data/recipes";
import { SearchBar } from "./SearchBar";
import { RecipeCard } from "./RecipeCard";
import { RecipeDetail } from "./RecipeDetail";

interface RecipeGridProps {
  recipes: Recipe[];
  categories: string[];
  lang?: string;
  heroTitle?: string;
  labels: {
    searchPlaceholder: string;
    noResults: string;
    prep: string;
    cook: string;
    serves: string;
    people: string;
    ingredients: string;
    instructions: string;
    portionSize: string;
    recipeTab: string;
    storyTimeTab: string;
    otherRecipesTab: string;
    expand: string;
    backToRecipes: string;
  };
}

export function RecipeGrid({ recipes, lang, heroTitle, labels }: RecipeGridProps) {
  const isAr = lang === "ar";
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return recipes.filter((r) => {
      return (
        !query ||
        r.title.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query) ||
        r.ingredients.some((ing) => ing.toLowerCase().includes(query))
      );
    });
  }, [search, recipes]);

  if (selectedRecipe) {
    return (
      <RecipeDetail
        recipe={selectedRecipe}
        allRecipes={recipes}
        lang={lang}
        labels={labels}
        onClose={() => setSelectedRecipe(null)}
        onSelectRecipe={setSelectedRecipe}
      />
    );
  }

  return (
    <div>
      {heroTitle && (
        <header className="text-center px-4 pt-8 pb-6">
          <h1 className={`${isAr ? "font-aref-ruqaa text-[42px]" : "font-mansalva text-[32px]"} text-black mx-auto leading-snug whitespace-nowrap`}>
            {heroTitle}
          </h1>
        </header>
      )}
      <div className="max-w-xl mx-auto mb-10">
        <SearchBar
          value={search}
          placeholder={labels.searchPlaceholder}
          onChange={setSearch}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-stone-400">
          <p className="text-4xl mb-3">🍽️</p>
          <p className="text-lg">{labels.noResults}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((recipe, index) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              labels={labels}
              index={index}
              onSelect={() => setSelectedRecipe(recipe)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
