interface SearchBarProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, placeholder, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <span className="absolute end-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pe-12 ps-5 py-3 rounded-full border border-stone-300 bg-white text-stone-800 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition shadow-sm"
      />
    </div>
  );
}
