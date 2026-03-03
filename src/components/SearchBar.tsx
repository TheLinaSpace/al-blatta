interface SearchBarProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, placeholder, onChange }: SearchBarProps) {
  return (
    <div className="relative flex items-center bg-[#f5f5f0] border border-[#d1d5dc] rounded-full shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.1)] px-6 py-1">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent text-[16px] font-normal text-stone-800 placeholder:text-[#99a1af] focus:outline-none py-3"
      />
      <button
        type="button"
        className="flex-shrink-0 w-12 h-12 rounded-full bg-[#6d92c7] flex items-center justify-center hover:bg-[#5a7fb4] transition-colors cursor-pointer"
        aria-label="Search"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 17.5L13.9167 13.9167"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
