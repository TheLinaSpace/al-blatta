import { useState } from "react";
import type { Recipe } from "../data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
  labels: {
    prep: string;
    cook: string;
    serves: string;
    people: string;
    ingredients: string;
    instructions: string;
  };
  index?: number;
}

const cardStyles = [
  { default: "/card-1-default.png", hover: "/card-1-hover.png", bg: "rgba(189,204,233,0.4)" },
  { default: "/card-2-default.png", hover: "/card-2-hover.png", bg: "rgba(185,63,21,0.4)" },
];

export function RecipeCard({ recipe, labels, index = 0 }: RecipeCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const styleIndex = index % 2;
  const style = cardStyles[styleIndex];

  return (
    <article
      className={`recipe-card group relative rounded-[22px] overflow-hidden transition-all duration-300 ${
        expanded ? "col-span-1 sm:col-span-2 lg:col-span-3" : ""
      }`}
      style={{ backgroundColor: style.bg }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card background images (default + hover) */}
      <img
        src={style.default}
        alt=""
        className={`absolute inset-0 w-full h-full object-fill transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"}`}
        aria-hidden="true"
      />
      <img
        src={style.hover}
        alt=""
        className={`absolute inset-0 w-full h-full object-fill transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
      />

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-start cursor-pointer relative z-10 aspect-[330/292] flex flex-col items-center justify-center"
      >
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/50 shadow-sm">
          <img
            src={recipe.photo}
            alt={recipe.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <h3 className="text-[32px] text-black font-mansalva mt-4 px-5 text-center">
          {recipe.title}
        </h3>
      </button>

      {expanded && (
        <div className="relative z-10 px-6 pb-6 pt-4 animate-fade-in bg-white/90 mx-3 mb-3 rounded-xl">
          <p className="text-sm text-stone-600 mb-4 text-center leading-relaxed">
            {recipe.description}
          </p>

          <div className="flex justify-center gap-6 mb-4 text-xs text-stone-500">
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {labels.prep}: {recipe.prepTime}
            </span>
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v10l4.24 4.24"/><circle cx="12" cy="12" r="10"/></svg>
              {labels.cook}: {recipe.cookTime}
            </span>
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              {labels.serves}: {recipe.servings} {labels.people}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-stone-800 mb-3 text-sm uppercase tracking-wider">
                {labels.ingredients}
              </h4>
              <ul className="space-y-1.5">
                {recipe.ingredients.map((ing, i) => (
                  <li
                    key={i}
                    className="text-sm text-stone-600 flex items-start gap-2"
                  >
                    <span className="text-amber-600 mt-0.5 flex-shrink-0">&#x2022;</span>
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800 mb-3 text-sm uppercase tracking-wider">
                {labels.instructions}
              </h4>
              <ol className="space-y-2">
                {recipe.instructions.map((step, i) => (
                  <li key={i} className="text-sm text-stone-600 flex gap-2">
                    <span className="font-bold text-amber-700 flex-shrink-0">
                      {i + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
