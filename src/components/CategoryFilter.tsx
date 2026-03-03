interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
            selected === cat
              ? "bg-amber-700 text-white shadow-sm"
              : "bg-white text-stone-600 border border-stone-200 hover:border-amber-300 hover:text-amber-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
