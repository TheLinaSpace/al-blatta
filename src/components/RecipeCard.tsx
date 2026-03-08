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

const cardBgs = [
  "/card tile 1.png",
  "/card tile 2.png",
  "/card tile 3.png",
];

export function RecipeCard({ recipe, index = 0, onSelect }: RecipeCardProps) {
  const bg = cardBgs[index % cardBgs.length];

  return (
    <article
      onClick={onSelect}
      className="recipe-card relative rounded-[10px] overflow-hidden cursor-pointer"
    >
      <img
        src={bg}
        alt=""
        className="absolute inset-0 w-full h-full object-fill pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="w-full relative z-10 aspect-[330/292] flex flex-col items-center pt-[14%]"
      >
        <div className="w-[50%] aspect-square rounded-full overflow-hidden">
          <img
            src={recipe.photo}
            alt={recipe.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <h3 className="text-[16px] sm:text-[22px] text-black font-mansalva mt-2 sm:mt-3 px-3 sm:px-4 text-center">
          {recipe.title}
        </h3>
      </div>
    </article>
  );
}
