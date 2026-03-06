import type { OurSouthArticle } from "../data/translations";

interface OurSouthArticleDetailProps {
  article: OurSouthArticle;
  lang: string;
  backLabel: string;
}

export function OurSouthArticleDetail({
  article,
  lang,
  backLabel,
}: OurSouthArticleDetailProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      {/* Back link */}
      <a
        href={`/${lang}/our-south`}
        className="inline-flex items-center gap-2 text-stone-600 hover:text-black font-heebo text-sm mb-6 transition-colors"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={lang === "ar" ? "rotate-180" : ""}
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        {backLabel}
      </a>

      {/* Title */}
      <h1
        className={`${
          lang === "ar"
            ? "font-aref-ruqaa text-[28px] sm:text-[36px]"
            : "font-inter text-[26px] sm:text-[34px]"
        } font-bold text-black leading-snug mb-4`}
      >
        {article.title}
      </h1>

      {/* Author / Category / Date */}
      <div className="flex items-center flex-wrap gap-3 mb-6 font-heebo text-sm text-stone-500">
        <span className="text-black font-medium">{article.author}</span>
        <span className="text-stone-300">·</span>
        {article.category.split(",").map((cat, i) => (
          <span
            key={i}
            className="bg-[#6d92c7]/15 text-[#6d92c7] text-xs font-medium px-3 py-1 rounded-full"
          >
            {cat.trim()}
          </span>
        ))}
        <span className="text-stone-300">·</span>
        <span>{article.date}</span>
      </div>

      {/* Cover image */}
      <div className="rounded-2xl overflow-hidden mb-8">
        <img
          src={article.coverImage}
          alt={article.coverImageAlt}
          className="w-full aspect-[16/9] object-cover"
        />
      </div>

      {/* Article body */}
      <div className="space-y-5">
        {article.content.map((paragraph, i) => (
          <p
            key={i}
            className="text-stone-700 font-heebo text-[15px] sm:text-base leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
