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
  const linkClass = (page: string) =>
    `text-[16px] transition-colors ${
      activePage === page
        ? "font-bold text-black"
        : "font-normal text-black hover:text-black/70"
    }`;

  return (
    <nav className="w-full py-5 px-6 font-heebo">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-10 sm:gap-14">
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

        <a href="#" className={linkClass("our-story")}>
          {nav.ourStory}
        </a>
        <a href="#" className={linkClass("contact")}>
          {nav.contactUs}
        </a>
      </div>

      <div className="absolute top-4 end-6 flex items-center gap-1 bg-white/80 backdrop-blur-sm border border-stone-200 rounded-full px-1 py-1 shadow-sm antialiased">
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
