interface NavbarProps {
  nav: {
    recipes: string;
    ourSouth: string;
    ourStory: string;
    contactUs: string;
  };
  lang: string;
  altLang: string;
}

export function Navbar({ nav, lang, altLang }: NavbarProps) {
  return (
    <nav className="w-full py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-8 sm:gap-12">
        <a
          href="#recipes"
          className="text-sm font-extrabold text-amber-800 hover:text-amber-600 transition-colors"
        >
          {nav.recipes}
        </a>
        <a
          href="#"
          className="text-sm font-medium text-amber-800 hover:text-amber-600 transition-colors"
        >
          {nav.ourSouth}
        </a>

        <a href={`/${lang}/`} className="flex-shrink-0" aria-label="Home">
          <img
            src="/al-blatta.png"
            alt="Al Blatta"
            className="w-12 h-12 object-contain"
          />
        </a>

        <a
          href="#"
          className="text-sm font-medium text-amber-800 hover:text-amber-600 transition-colors"
        >
          {nav.ourStory}
        </a>
        <a
          href="#"
          className="text-sm font-medium text-amber-800 hover:text-amber-600 transition-colors"
        >
          {nav.contactUs}
        </a>
      </div>

      <div className="absolute top-4 end-4">
        <a
          href={`/${altLang}/`}
          className="text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full hover:bg-amber-100 transition-colors"
        >
          {altLang === "ar" ? "العربية" : "English"}
        </a>
      </div>
    </nav>
  );
}
