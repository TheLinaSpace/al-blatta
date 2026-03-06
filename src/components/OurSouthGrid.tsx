import { OurSouthCard } from "./OurSouthCard";
import type { OurSouthArticle } from "../data/translations";

interface OurSouthGridProps {
  articles: OurSouthArticle[];
  lang: string;
}

export function OurSouthGrid({ articles, lang }: OurSouthGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 max-w-3xl mx-auto">
      {articles.map((article, index) => (
        <OurSouthCard key={article.id} article={article} index={index} lang={lang} />
      ))}
    </div>
  );
}
