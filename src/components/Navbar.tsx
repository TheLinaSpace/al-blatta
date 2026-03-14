import { useState } from "react";

interface NavbarProps {
  nav: {
    recipes: string;
    ourSouth: string;
    ourStory: string;
    contactUs: string;
  };
  lang: string;
  altLang: string;
  activePage?: string;
}

export function Navbar({ nav, lang, altLang, activePage = "recipes" }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (page: string) =>
    `${lang === "ar" ? "md:text-[20px] text-[16px]" : "text-[16px]"} transition-colors ${
      activePage === page
        ? "font-bold text-black"
        : "font-normal text-black hover:text-black/70"
    }`;

  return (
    <nav className="w-full py-4 md:py-5 px-4 md:px-6 font-heebo relative">
      {/* Mobile: logo + hamburger */}
      <div className="flex items-center justify-between md:hidden">
        <a href={`/${lang}/`} className="flex-shrink-0" aria-label="Home">
          <img src="/al-blatta.png" alt="Al Blatta" className="w-12 h-10 object-contain" />
        </a>
        <div className="flex items-center gap-3">
          {/* Language switcher - mobile inline */}
          <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm border border-stone-200 rounded-full px-1 py-1 shadow-sm antialiased">
            <a
              href="/ar/"
              className={`text-xs px-3 py-1 rounded-full transition-all ${
                lang === "ar"
                  ? "bg-[#b93f15] text-white shadow-sm font-bold"
                  : "text-stone-600 font-normal"
              }`}
            >
              ع
            </a>
            <a
              href="/en/"
              className={`text-xs px-3 py-1 rounded-full transition-all ${
                lang === "en"
                  ? "bg-[#b93f15] text-white shadow-sm font-bold"
                  : "text-stone-600 font-normal"
              }`}
            >
              EN
            </a>
          </div>
          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 cursor-pointer"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-5 pt-6 pb-4 animate-fade-in border-t border-stone-200 mt-4">
          <a href={`/${lang}/`} className={linkClass("recipes")} onClick={() => setMenuOpen(false)}>
            {nav.recipes}
          </a>
          <a href={`/${lang}/our-south`} className={linkClass("our-south")} onClick={() => setMenuOpen(false)}>
            {nav.ourSouth}
          </a>
          <a href={`/${lang}/our-story`} className={linkClass("our-story")} onClick={() => setMenuOpen(false)}>
            {nav.ourStory}
          </a>
          <a href={`/${lang}/contact`} className={linkClass("contact")} onClick={() => setMenuOpen(false)}>
            {nav.contactUs}
          </a>
        </div>
      )}

      {/* Desktop nav */}
      <div className="hidden md:flex max-w-6xl mx-auto items-center justify-center gap-10 lg:gap-14">
        <a href={`/${lang}/`} className={linkClass("recipes")}>
          {nav.recipes}
        </a>
        <a href={`/${lang}/our-south`} className={linkClass("our-south")}>
          {nav.ourSouth}
        </a>

        <a href={`/${lang}/`} className="flex-shrink-0" aria-label="Home">
          <img
            src="/al-blatta.png"
            alt="Al Blatta"
            className="w-16 h-13 object-contain"
          />
        </a>

        <a href={`/${lang}/our-story`} className={linkClass("our-story")}>
          {nav.ourStory}
        </a>
        <a href={`/${lang}/contact`} className={linkClass("contact")}>
          {nav.contactUs}
        </a>
      </div>

      {/* Language switcher - desktop only */}
      <div className="hidden md:flex absolute top-4 end-6 items-center gap-1 bg-white/80 backdrop-blur-sm border border-stone-200 rounded-full px-1 py-1 shadow-sm antialiased">
        <a
          href="/ar/"
          className={`text-sm px-4 py-1.5 rounded-full transition-all ${
            lang === "ar"
              ? "bg-[#b93f15] text-white shadow-sm font-bold"
              : "text-stone-600 font-normal hover:text-stone-900 hover:bg-stone-100"
          }`}
        >
          العربية
        </a>
        <a
          href="/en/"
          className={`text-sm px-4 py-1.5 rounded-full transition-all ${
            lang === "en"
              ? "bg-[#b93f15] text-white shadow-sm font-bold"
              : "text-stone-600 font-normal hover:text-stone-900 hover:bg-stone-100"
          }`}
        >
          English
        </a>
      </div>
    </nav>
  );
}
