import { useState } from "react";
import type { Recipe } from "../data/recipes";

interface RecipeDetailProps {
  recipe: Recipe;
  allRecipes: Recipe[];
  lang?: string;
  labels: {
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
  onClose: () => void;
  onSelectRecipe: (recipe: Recipe) => void;
}

export function RecipeDetail({
  recipe,
  allRecipes,
  lang = "en",
  labels,
  onClose,
  onSelectRecipe,
}: RecipeDetailProps) {
  const isAr = lang === "ar";
  const [activeTab, setActiveTab] = useState<"recipe" | "story" | "other">(
    "recipe"
  );
  const [portionSize, setPortionSize] = useState(recipe.servings);
  const [showPortionMenu, setShowPortionMenu] = useState(false);
  const [instructionsExpanded, setInstructionsExpanded] = useState(false);

  const scale = portionSize / recipe.servings;
  const otherRecipes = allRecipes.filter((r) => r.id !== recipe.id);
  const portionOptions = [1, 2, 3, 4, 5, 6, 8, 10, 12];

  const tabClass = (tab: string) =>
    `text-center whitespace-nowrap px-8 py-2.5 rounded-full ${isAr ? "text-[18px]" : "text-[16px]"} font-medium transition-all cursor-pointer ${
      activeTab === tab
        ? "bg-[#b93f15] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.2)]"
        : "text-[#99a1af] hover:text-stone-600"
    }`;

  return (
    <div className="animate-fade-in">
      {/* Title */}
      <h2 className={`text-center font-mansalva text-black mb-6 ${isAr ? "text-[44px]" : "text-[36px]"}`}>
        {recipe.title}
      </h2>

      {/* Tab bar */}
      <div className="flex justify-center mb-10">
        <div className="bg-[#f5f5f0] border border-[#d1d5dc] rounded-full shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.1)] p-2 flex gap-1">
          <button
            onClick={() => setActiveTab("recipe")}
            className={tabClass("recipe")}
          >
            {labels.recipeTab}
          </button>
          <button
            onClick={() => setActiveTab("story")}
            className={tabClass("story")}
          >
            {labels.storyTimeTab}
          </button>
          <button
            onClick={() => setActiveTab("other")}
            className={tabClass("other")}
          >
            {labels.otherRecipesTab}
          </button>
        </div>
      </div>

      {/* Recipe tab */}
      {activeTab === "recipe" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
          {/* Left: Photo */}
          <div className="rounded-[30px] overflow-hidden">
            <img
              src={recipe.photo}
              alt={recipe.title}
              className="w-full h-full object-cover"
              style={{ minHeight: "400px" }}
            />
          </div>

          {/* Center: Time bar + Ingredients */}
          <div className="flex flex-col gap-6">
            {/* Time/serves bar */}
            <div className="bg-[#ddac9b] border-3 border-[#b93f15] rounded-[30px] px-8 py-5 flex items-center justify-around">
              <div className="flex items-center gap-2 text-black">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className={isAr ? "text-[18px]" : "text-[16px]"}>{recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-2 text-black">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className={isAr ? "text-[18px]" : "text-[16px]"}>
                  {portionSize} {labels.serves}
                </span>
              </div>
            </div>

            {/* Ingredients card */}
            <div className="bg-[#ddac9b] border-3 border-[#b93f15] rounded-[30px] p-8 flex-1">
              <h3 className={`font-bold text-black mb-1 ${isAr ? "text-[24px]" : "text-[20px]"}`}>
                {labels.ingredients}
              </h3>
              <div className="relative inline-block mb-4">
                <button
                  onClick={() => setShowPortionMenu(!showPortionMenu)}
                  className={`flex items-center gap-1 text-stone-700 cursor-pointer hover:text-black transition-colors ${isAr ? "text-[16px]" : "text-sm"}`}
                >
                  {labels.portionSize}{" "}
                  <span className="font-bold">
                    {portionSize} {labels.people}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform ${showPortionMenu ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {showPortionMenu && (
                  <div className="absolute top-full start-0 mt-1 bg-white rounded-xl shadow-lg border border-stone-200 py-1 z-20 min-w-[120px]">
                    {portionOptions.map((n) => (
                      <button
                        key={n}
                        onClick={() => {
                          setPortionSize(n);
                          setShowPortionMenu(false);
                        }}
                        className={`w-full text-start px-4 py-2 text-sm cursor-pointer hover:bg-[#ddac9b]/40 transition-colors ${
                          n === portionSize ? "font-bold text-[#b93f15]" : "text-stone-700"
                        }`}
                      >
                        {n} {labels.people}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <ul className="space-y-2">
                {recipe.ingredients.map((ing, i) => (
                  <li
                    key={i}
                    className={`text-black flex items-start gap-2 ${isAr ? "text-[17px]" : "text-[15px]"}`}
                  >
                    <span className="mt-0.5 flex-shrink-0">&#x2022;</span>
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Instructions */}
          <div className={`bg-[#ddac9b] border-3 border-[#b93f15] rounded-[30px] p-8 overflow-y-auto transition-all ${instructionsExpanded ? "" : "max-h-[610px]"}`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`font-bold text-black ${isAr ? "text-[24px]" : "text-[20px]"}`}>
                {labels.instructions}
              </h3>
              <button
                onClick={() => setInstructionsExpanded(!instructionsExpanded)}
                className="text-sm border border-black rounded-full px-4 py-1 cursor-pointer hover:bg-black/10 transition-colors"
              >
                {labels.expand}
              </button>
            </div>
            <ol className="space-y-4">
              {recipe.instructions.map((step, i) => (
                <li
                  key={i}
                  className={`text-black flex gap-3 leading-relaxed ${isAr ? "text-[17px]" : "text-[15px]"}`}
                >
                  <span className="font-bold flex-shrink-0">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {/* Story Time tab */}
      {activeTab === "story" && (
        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="bg-[#ddac9b] border-3 border-[#b93f15] rounded-[30px] p-10">
            <div className="flex justify-center mb-6">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/50 shadow-md">
                <img
                  src={recipe.photo}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-[17px] text-black leading-relaxed text-center">
              {recipe.description}
            </p>
          </div>
        </div>
      )}

      {/* Other Recipes tab */}
      {activeTab === "other" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 animate-fade-in">
          {otherRecipes.map((r) => (
            <button
              key={r.id}
              onClick={() => {
                onSelectRecipe(r);
                setActiveTab("recipe");
              }}
              className="bg-[#ddac9b] border-3 border-[#b93f15] rounded-[30px] overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform text-start"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={r.photo}
                  alt={r.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="p-4 text-center font-mansalva text-[18px] text-black">
                {r.title}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
