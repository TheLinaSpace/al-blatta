import { OurSouthCard } from "./OurSouthCard";
import type { OurSouthArticle } from "../data/translations";

interface OurSouthGridProps {
  articles: OurSouthArticle[];
}

export function OurSouthGrid({ articles }: OurSouthGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
      {articles.map((article, index) => (
        <OurSouthCard key={article.id} article={article} index={index} />
      ))}
    </div>
  );
}
