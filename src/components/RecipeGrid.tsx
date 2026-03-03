import { useState, useMemo } from "react";
import type { Recipe } from "../data/recipes";
import { SearchBar } from "./SearchBar";
import { RecipeCard } from "./RecipeCard";

interface RecipeGridProps {
  recipes: Recipe[];
  categories: string[];
  labels: {
    searchPlaceholder: string;
    noResults: string;
    prep: string;
    cook: string;
    serves: string;
    people: string;
    ingredients: string;
    instructions: string;
  };
}

export function RecipeGrid({ recipes, labels }: RecipeGridProps) {
  const [search, setSearch] = useState("");

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

  return (
    <div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} labels={labels} />
          ))}
        </div>
      )}
    </div>
  );
}
