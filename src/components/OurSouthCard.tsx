import { useState } from "react";
import type { OurSouthArticle } from "../data/translations";

interface OurSouthCardProps {
  article: OurSouthArticle;
  index: number;
  lang: string;
}

const cardBgColor = "rgba(189,204,233,0.4)";

const tagStyle = { bg: "bg-[#6d92c7]/15", text: "text-[#6d92c7]" };

export function OurSouthCard({ article, index, lang }: OurSouthCardProps) {
  const [hovered, setHovered] = useState(false);
  const bgColor = cardBgColor;
  const tag = tagStyle;

  return (
    <a
      href={`/${lang}/our-south/${article.id}`}
      className="group relative rounded-[16px] sm:rounded-[22px] overflow-hidden transition-all duration-300 flex flex-col sm:flex-row no-underline"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full sm:w-48 md:w-56 flex-shrink-0 aspect-[16/10] sm:aspect-auto sm:min-h-[180px] overflow-hidden">
        <img
          src={article.coverImage}
          alt={article.coverImageAlt}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center">
        <h3 className="text-[18px] sm:text-[20px] font-inter font-bold text-black leading-snug mb-2">
          {article.title}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 font-heebo leading-relaxed mb-2 line-clamp-2">
          {article.excerpt}
        </p>
        <p className="text-sm text-black font-heebo mb-3">
          {article.author}
        </p>
        <div className="flex flex-wrap gap-2">
          {article.category.split(",").map((cat, i) => (
            <span
              key={i}
              className={`${tag.bg} ${tag.text} text-xs font-heebo font-medium px-3 py-1 rounded-full`}
            >
              {cat.trim()}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
