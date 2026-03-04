import { useState } from "react";
import type { OurSouthArticle } from "../data/translations";

interface OurSouthCardProps {
  article: OurSouthArticle;
  index: number;
}

const cardBgColors = [
  "rgba(189,204,233,0.4)",
  "rgba(185,63,21,0.4)",
];

const tagStyles = [
  { bg: "bg-[#6d92c7]", text: "text-white" },
  { bg: "bg-[#b93f15]", text: "text-white" },
];

export function OurSouthCard({ article, index }: OurSouthCardProps) {
  const [hovered, setHovered] = useState(false);
  const colorIndex = index % 2;
  const bgColor = cardBgColors[colorIndex];
  const tag = tagStyles[colorIndex];

  return (
    <article
      className="group relative rounded-[16px] sm:rounded-[22px] overflow-hidden transition-all duration-300"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={article.coverImage}
          alt={article.coverImageAlt}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span
          className={`absolute top-4 start-4 ${tag.bg} ${tag.text} text-xs font-heebo font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}
        >
          {article.category}
        </span>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-[18px] sm:text-[22px] font-mansalva text-black leading-snug mb-2 sm:mb-3">
          {article.title}
        </h3>
        <p className="text-xs sm:text-sm text-stone-700 font-heebo leading-relaxed">
          {article.excerpt}
        </p>
      </div>
    </article>
  );
}
