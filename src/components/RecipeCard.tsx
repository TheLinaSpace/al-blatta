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
  onSelect?: () => void;
}

const cardStyles = [
  { default: "/card-1-default.png", hover: "/card-1-hover.png", bg: "rgba(189,204,233,0.4)" },
  { default: "/card-2-default.png", hover: "/card-2-hover.png", bg: "rgba(185,63,21,0.4)" },
];

export function RecipeCard({ recipe, labels, index = 0, onSelect }: RecipeCardProps) {
  const [hovered, setHovered] = useState(false);
  const styleIndex = index % 2;
  const style = cardStyles[styleIndex];

  return (
    <article
      onClick={onSelect}
      className="recipe-card group relative rounded-[16px] sm:rounded-[22px] overflow-hidden transition-all duration-300 cursor-pointer"
      style={{ backgroundColor: style.bg }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card background images (default + hover) */}
      <img
        src={style.default}
        alt=""
        className={`absolute inset-0 w-full h-full object-fill pointer-events-none transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"}`}
        aria-hidden="true"
      />
      <img
        src={style.hover}
        alt=""
        className={`absolute inset-0 w-full h-full object-fill pointer-events-none transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
      />

      <div
        className="w-full text-start relative z-10 aspect-[330/292] flex flex-col items-center justify-center"
      >
        <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white/50 shadow-sm">
          <img
            src={recipe.photo}
            alt={recipe.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <h3 className="text-[22px] sm:text-[32px] text-black font-mansalva mt-3 sm:mt-4 px-4 sm:px-5 text-center">
          {recipe.title}
        </h3>
      </div>
    </article>
  );
}
