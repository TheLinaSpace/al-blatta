import { useState } from "react";
import type { Recipe } from "../data/recipes";

function toArabicIndic(s: string): string {
  return s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[parseInt(d)]);
}

function toWesternArabic(s: string): string {
  return s.replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
}

function formatNum(n: number, arabic: boolean): string {
  const fracs: [number, string][] = [
    [1 / 4, "1/4"],
    [1 / 3, "1/3"],
    [1 / 2, "1/2"],
    [2 / 3, "2/3"],
    [3 / 4, "3/4"],
  ];
  const whole = Math.floor(n);
  const frac = n - whole;
  let result: string;

  if (frac < 0.05) {
    result = String(whole);
  } else if (frac > 0.95) {
    result = String(whole + 1);
  } else {
    let best = fracs[0];
    for (const f of fracs) {
      if (Math.abs(frac - f[0]) < Math.abs(frac - best[0])) best = f;
    }
    result =
      Math.abs(frac - best[0]) < 0.07
        ? whole > 0
          ? `${whole} ${best[1]}`
          : best[1]
        : n.toFixed(1);
  }
  return arabic ? toArabicIndic(result) : result;
}

function scaleIngredient(ingredient: string, scale: number, arabic: boolean): string {
  if (scale === 1) return ingredient;

  if (arabic) {
    return ingredient.replace(
      /[٠١٢٣٤٥٦٧٨٩]+(?:\.[٠١٢٣٤٥٦٧٨٩]+)?/g,
      (match, offset) => {
        const before = ingredient.slice(0, offset);
        if (/رقم\s*$/.test(before)) return match;
        const value = parseFloat(toWesternArabic(match));
        return formatNum(value * scale, true);
      }
    );
  }

  return ingredient.replace(
    /(\d+)\s+(\d+)\/(\d+)|(\d+)\/(\d+)|(\d+(?:\.\d+)?)/g,
    (match, wA, nA, dA, nB, dB, whole, offset) => {
      const before = ingredient.slice(0, offset);
      if (/#\s*$/.test(before)) return match;
      let value: number;
      if (wA !== undefined) {
        value = parseInt(wA) + parseInt(nA) / parseInt(dA);
      } else if (nB !== undefined) {
        value = parseInt(nB) / parseInt(dB);
      } else {
        value = parseFloat(whole);
      }
      return formatNum(value * scale, false);
    }
  );
}

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
    submittedBy: string;
    storyLabel: string;
  };
}

export function RecipeDetail({
  recipe,
  allRecipes,
  lang = "en",
  labels,
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
    `text-center whitespace-nowrap px-4 sm:px-8 py-2 sm:py-2.5 rounded-full ${isAr ? "text-[14px] sm:text-[18px]" : "text-[13px] sm:text-[16px]"} font-medium transition-all cursor-pointer ${
      activeTab === tab
        ? "bg-[#b93f15] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.2)]"
        : "text-[#99a1af] hover:text-stone-600"
    }`;

  return (
    <div className="animate-fade-in font-heebo">
      {/* Back link */}
      <div className={`mb-4 ${isAr ? "text-right" : "text-left"}`}>
        <a
          href={`/${lang}/`}
          className={`inline-flex items-center gap-1.5 text-stone-500 hover:text-black transition-colors ${isAr ? "text-[14px] sm:text-[16px] flex-row-reverse" : "text-[13px] sm:text-[15px]"}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isAr ? "rotate-180" : ""}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
          {labels.backToRecipes}
        </a>
      </div>

      {/* Title */}
      <h2 className={`text-center font-mansalva text-black mb-4 sm:mb-6 ${isAr ? "text-[30px] sm:text-[44px]" : "text-[26px] sm:text-[36px]"}`}>
        {recipe.title}
      </h2>

      {/* Tab bar */}
      <div className="flex justify-center mb-6 sm:mb-10">
        <div className="bg-[#f5f5f0] border border-[#d1d5dc] rounded-full shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.1)] p-1.5 sm:p-2 flex gap-1">
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
        <div className={`grid grid-cols-1 ${recipe.ingredients.length === 0 ? "lg:grid-cols-2" : "lg:grid-cols-3"} gap-4 sm:gap-6 animate-fade-in`}>
          {/* Left: Photo */}
          <div className="rounded-[20px] sm:rounded-[30px] overflow-hidden">
            <img
              src={recipe.photo}
              alt={recipe.title}
              className="w-full h-full object-cover"
              style={{ minHeight: "250px" }}
            />
          </div>

          {/* Center: Time bar + Ingredients (hidden for empty recipes) */}
          {recipe.ingredients.length > 0 && (
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Time/serves bar */}
              <div className="bg-[#ddac9b] border-3 border-[#b93f15] rounded-[20px] sm:rounded-[30px] px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-around">
                <div className="flex items-center gap-2 text-black">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-6 sm:h-6"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className={isAr ? "text-[16px] sm:text-[18px]" : "text-[14px] sm:text-[16px]"}>{recipe.cookTime}</span>
                </div>
                <div className="flex items-center gap-2 text-black">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-6 sm:h-6"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span className={isAr ? "text-[16px] sm:text-[18px]" : "text-[14px] sm:text-[16px]"}>
                    {portionSize} {labels.serves}
                  </span>
                </div>
              </div>

              {/* Ingredients card */}
              <div className="bg-[#ddac9b] border-3 border-[#b93f15] rounded-[20px] sm:rounded-[30px] p-5 sm:p-8 flex-1">
                <h3 className={`font-bold text-black mb-1 ${isAr ? "text-[20px] sm:text-[24px]" : "text-[18px] sm:text-[20px]"}`}>
                  {labels.ingredients}
                </h3>
                <div className="relative inline-block mb-4">
                  <button
                    onClick={() => setShowPortionMenu(!showPortionMenu)}
                    className={`flex items-center gap-1 text-stone-700 cursor-pointer hover:text-black transition-colors ${isAr ? "text-[14px] sm:text-[16px]" : "text-xs sm:text-sm"}`}
                  >
                    {labels.portionSize}{" "}
                    <span className="font-bold">
                      {portionSize} {labels.people}
                    </span>
                    <svg
                      width="18"
                      height="18"
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
                      className={`text-black flex items-start gap-2 ${isAr ? "text-[15px] sm:text-[17px]" : "text-[13px] sm:text-[15px]"}`}
                    >
                      <span className="mt-0.5 flex-shrink-0">&#x2022;</span>
                      {scaleIngredient(ing, scale, isAr)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Right: Instructions */}
          <div className={`${recipe.instructions.length > 0 ? "bg-[#ddac9b] border-3 border-[#b93f15] rounded-[20px] sm:rounded-[30px] p-5 sm:p-8" : ""} overflow-y-auto no-scrollbar transition-all ${instructionsExpanded ? "" : "max-h-[450px] sm:max-h-[610px]"}`}>
            {recipe.instructions.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-8">
                <p className={`text-stone-700 font-medium ${isAr ? "text-[16px]" : "text-[14px]"}`}>
                  {isAr ? "هذه الوصفة لا تزال بانتظار مساهمتك!" : "This recipe is waiting for your contribution!"}
                </p>
                <a
                  href={`/${lang}/contact`}
                  className="inline-block bg-[#b93f15] text-white font-heebo font-semibold rounded-full px-6 py-2 text-sm hover:bg-[#a03510] transition-colors"
                >
                  {isAr ? "شارك الوصفة" : "Contribute"}
                </a>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className={`font-bold text-black ${isAr ? "text-[20px] sm:text-[24px]" : "text-[18px] sm:text-[20px]"}`}>
                    {labels.instructions}
                  </h3>
                  <button
                    onClick={() => setInstructionsExpanded(!instructionsExpanded)}
                    className="text-xs sm:text-sm border border-black rounded-full px-3 sm:px-4 py-1 cursor-pointer hover:bg-black/10 transition-colors"
                  >
                    {labels.expand}
                  </button>
                </div>
                <ol className="space-y-3 sm:space-y-4">
                  {recipe.instructions.map((step, i) => (
                    <li
                      key={i}
                      className={`text-black flex gap-2 sm:gap-3 leading-relaxed ${isAr ? "text-[15px] sm:text-[17px]" : "text-[13px] sm:text-[15px]"}`}
                    >
                      <span className="font-bold flex-shrink-0">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>
        </div>
      )}

      {/* Story Time tab */}
      {activeTab === "story" && (
        <div className="animate-fade-in">
          {recipe.ingredients.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center gap-4 py-8">
              <p className={`text-stone-700 font-medium ${isAr ? "text-[16px]" : "text-[14px]"}`}>
                {isAr ? "هذه الوصفة لا تزال بانتظار مساهمتك!" : "This recipe is waiting for your contribution!"}
              </p>
              <a
                href={`/${lang}/contact`}
                className="inline-block bg-[#b93f15] text-white font-heebo font-semibold rounded-full px-6 py-2 text-sm hover:bg-[#a03510] transition-colors"
              >
                {isAr ? "شارك الوصفة" : "Contribute"}
              </a>
            </div>
          ) : (
            <div className={`flex flex-col sm:flex-row gap-8 sm:gap-10 items-start`}>
              {/* Avatar + submitted by + name */}
              <div className="flex flex-col items-center gap-3 sm:w-56 flex-shrink-0 w-full">
                <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-stone-100 border-4 border-stone-200 shadow-sm flex items-center justify-center overflow-hidden">
                  {recipe.contributorPhoto ? (
                    <img
                      src={recipe.contributorPhoto}
                      alt={recipe.contributor}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-20 h-20 sm:w-28 sm:h-28 text-stone-400" fill="currentColor">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  )}
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <p className={`text-stone-400 ${isAr ? "text-[15px]" : "text-[13px]"}`}>
                    {labels.submittedBy}
                  </p>
                  <p className={`font-inter font-bold text-center text-black text-[16px]`}>
                    {recipe.contributor}
                  </p>
                </div>
              </div>
              {/* Story label + text */}
              <div className="flex-1">
                <p className={`font-bold text-stone-400 uppercase tracking-wide mb-3 ${isAr ? "text-[14px] text-right" : "text-[12px] text-left"}`}>
                  {labels.storyLabel}
                </p>
                <div className={`text-stone-700 leading-relaxed text-[14px] space-y-4 ${isAr ? "text-right" : "text-left"}`}>
                  {recipe.story.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Other Recipes tab */}
      {activeTab === "other" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 animate-fade-in">
          {otherRecipes.map((r) => (
            <a
              key={r.id}
              href={`/${lang}/recipes/${r.id}`}
              className="bg-[#ddac9b] border-3 border-[#b93f15] rounded-[16px] sm:rounded-[30px] overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform block"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={r.photo}
                  alt={r.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="p-3 sm:p-4 text-center font-mansalva text-[14px] sm:text-[18px] text-black">
                {r.title}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
