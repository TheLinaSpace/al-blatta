import type { Recipe } from "./recipes";

export type Lang = "ar" | "en";

export interface OurSouthArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  coverImageAlt: string;
}

export interface OurSouthContent {
  pageTitle: string;
  pageSubtitle: string;
  articles: OurSouthArticle[];
}

export interface Translations {
  siteTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  searchPlaceholder: string;
  noResults: string;
  prep: string;
  cook: string;
  serves: string;
  people: string;
  ingredients: string;
  instructions: string;
  footer: string;
  nav: {
    recipes: string;
    ourSouth: string;
    ourStory: string;
    contactUs: string;
  };
  categories: string[];
  recipes: Recipe[];
  ourSouth: OurSouthContent;
}

export const translations: Record<Lang, Translations> = {
  ar: {
    siteTitle: "كبّة",
    heroTitle: "اكتشف تراث جنوب لبنان من خلال الطهي",
    heroSubtitle:
      "مجموعة من ألذّ الوصفات الشرقية واللبنانية — من الكبّة المقرمشة إلى الحمّص الناعم وكل ما بينهما.",
    searchPlaceholder: "تعرف ماذا تريد؟ ابحث عنه!",
    noResults: "لا توجد وصفات. جرّب بحثاً أو تصنيفاً آخر.",
    prep: "تحضير",
    cook: "طهي",
    serves: "يكفي",
    people: "أشخاص",
    ingredients: "المكوّنات",
    instructions: "طريقة التحضير",
    footer: "Al'Blatta 2026",
    nav: {
      recipes: "الوصفات",
      ourSouth: "جنوبنا",
      ourStory: "قصتنا",
      contactUs: "تواصل معنا",
    },
    categories: ["الكل", "مقبلات", "أطباق رئيسية", "سلطات", "أطباق جانبية"],
    recipes: [
      {
        id: "kibbeh",
        title: "كبّة",
        description:
          "أصداف برغل مقلية ومقرمشة محشوة بلحم الغنم المتبّل والصنوبر والبصل. من أشهر الأطباق اللبنانية.",
        category: "أطباق رئيسية",
        image: "🧆",
        photo: "/dishes/kibbeh.png",
        prepTime: "٤٥ د",
        cookTime: "٢٠ د",
        servings: 6,
        ingredients: [
          "٢ كوب برغل ناعم",
          "٥٠٠ غ لحم غنم مفروم (للقشرة)",
          "٥٠٠ غ لحم غنم مفروم (للحشوة)",
          "بصلة كبيرة مبروشة (للقشرة)",
          "بصلة كبيرة مقطعة مكعبات (للحشوة)",
          "¼ كوب صنوبر",
          "١ ملعقة صغيرة بهار حلو",
          "١ ملعقة صغيرة كمون",
          "½ ملعقة صغيرة قرفة",
          "ملح وفلفل حسب الرغبة",
          "زيت للقلي",
        ],
        instructions: [
          "انقعي البرغل في الماء لمدة ٣٠ دقيقة، ثم صفّيه واعصريه جيداً.",
          "اخلطي البرغل مع اللحم المفروم والبصل المبروش والبهار والملح لتشكيل عجينة القشرة.",
          "للحشوة، حمّري البصل المقطع حتى يذهّب، ثم أضيفي اللحم المفروم والصنوبر والكمون والقرفة والملح والفلفل.",
          "شكّلي عجينة القشرة على شكل بيضاوي، اصنعي تجويفاً في الوسط واحشيها بالحشوة.",
          "أغلقي الكبّة على شكل طوربيد.",
          "اقلي في زيت عميق على حرارة ١٧٥ درجة حتى تصبح ذهبية اللون، حوالي ٥-٧ دقائق.",
          "صفّيها على مناديل ورقية وقدّميها ساخنة مع اللبن أو الطحينة.",
        ],
      },
      {
        id: "kibbet-banadoora",
        title: "كبّة بندورة",
        description:
          "كبّة مطبوخة في صلصة البندورة الغنية بالتوابل، تُقدّم مع البصل الأخضر. طبق جنوبي أصيل.",
        category: "أطباق رئيسية",
        image: "🍅",
        photo: "/dishes/kibbet-banadoora.png",
        prepTime: "٣٠ د",
        cookTime: "٤٠ د",
        servings: 6,
        ingredients: [
          "٥٠٠ غ لحم غنم مفروم",
          "١ كوب برغل ناعم",
          "بصلة كبيرة مبروشة",
          "٤ حبات بندورة مقشرة ومفرومة",
          "٢ ملعقة كبيرة معجون بندورة",
          "١ ملعقة صغيرة بهار حلو",
          "½ ملعقة صغيرة قرفة",
          "ملح وفلفل حسب الرغبة",
          "بصل أخضر للتزيين",
        ],
        instructions: [
          "انقعي البرغل في الماء لمدة ٣٠ دقيقة، ثم صفّيه واعصريه.",
          "اخلطي البرغل مع اللحم المفروم والبصل المبروش والبهارات لتشكيل عجينة الكبّة.",
          "شكّلي أقراصاً صغيرة من عجينة الكبّة.",
          "حضّري صلصة البندورة بطهي البندورة مع معجون البندورة والتوابل.",
          "ضعي أقراص الكبّة في الصلصة واطبخيها على نار هادئة لمدة ٣٠ دقيقة.",
          "زيّني بالبصل الأخضر وقدّمي ساخنة مع الأرز.",
        ],
      },
      {
        id: "mujaddara",
        title: "مجدّرة",
        description:
          "طبق متواضع لكنه شهي — عدس وأرز يعلوهما البصل المقلي المكرمل. طعام البيت بأفضل حالاته.",
        category: "أطباق جانبية",
        image: "🍚",
        photo: "/dishes/mjadara.png",
        prepTime: "١٠ د",
        cookTime: "٤٥ د",
        servings: 6,
        ingredients: [
          "١ كوب عدس أخضر أو بني",
          "١ كوب أرز طويل الحبة",
          "٣ حبات بصل كبيرة مقطعة شرائح رفيعة",
          "¼ كوب زيت زيتون",
          "١ ملعقة صغيرة كمون",
          "½ ملعقة صغيرة بهار حلو",
          "ملح وفلفل حسب الرغبة",
          "لبن للتقديم",
        ],
        instructions: [
          "اطبخي العدس في ماء مملّح حتى يصبح شبه طري، حوالي ٢٠ دقيقة. صفّيه.",
          "في هذه الأثناء، سخّني زيت الزيتون وقلّبي شرائح البصل على نار متوسطة-هادئة حتى تصبح بنية داكنة، حوالي ٢٥ دقيقة. احتفظي بنصفها للتزيين.",
          "أضيفي الأرز والبصل المتبقي والكمون والبهار وكوبين ماء إلى العدس.",
          "اغلي المزيج، ثم خففي النار وغطّي واطبخي لمدة ١٨ دقيقة حتى ينضج الأرز.",
          "انفشي بالشوكة وزيّني بالبصل المقلي المحتفظ به.",
          "قدّمي مع اللبن.",
        ],
      },
      {
        id: "falafel",
        title: "فلافل",
        description:
          "أقراص حمّص مقلية غنية بالأعشاب، مقرمشة من الخارج وطرية من الداخل. مثالية في الخبز أو لوحدها.",
        category: "مقبلات",
        image: "🧆",
        photo: "https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d?w=400&h=400&fit=crop",
        prepTime: "٣٠ د",
        cookTime: "١٥ د",
        servings: 4,
        ingredients: [
          "٢ كوب حمّص مجفف (منقوع ليلة كاملة)",
          "١ كوب بقدونس طازج",
          "½ كوب كزبرة طازجة",
          "بصلة صغيرة مقطعة أرباع",
          "٤ فصوص ثوم",
          "١ ملعقة صغيرة كمون",
          "١ ملعقة صغيرة كزبرة مطحونة",
          "¼ ملعقة صغيرة فلفل حار",
          "١ ملعقة صغيرة ملح",
          "١ ملعقة صغيرة بيكنغ باودر",
          "زيت للقلي",
        ],
        instructions: [
          "صفّي الحمّص المنقوع وجفّفيه.",
          "اطحني الحمّص والبقدونس والكزبرة والبصل والثوم في محضرة الطعام حتى يصبح خشناً (ليس عجينة).",
          "أضيفي الكمون والكزبرة المطحونة والفلفل الحار والملح والبيكنغ باودر.",
          "ضعي الخليط في الثلاجة لمدة ساعة.",
          "شكّلي أقراصاً أو كرات صغيرة.",
          "اقلي في زيت عميق على حرارة ١٧٥ درجة لمدة ٣-٤ دقائق حتى تصبح ذهبية داكنة.",
          "قدّمي في الخبز العربي مع صلصة الطحينة والمخللات والخضار.",
        ],
      },
      {
        id: "tabbouleh",
        title: "تبّولة",
        description:
          "سلطة بقدونس نابضة بالحياة مع البرغل والبندورة والنعناع وتتبيلة الليمون وزيت الزيتون.",
        category: "سلطات",
        image: "🥗",
        photo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
        prepTime: "٢٠ د",
        cookTime: "٠ د",
        servings: 6,
        ingredients: [
          "٣ أكواب بقدونس طازج مفروم ناعم",
          "¼ كوب برغل ناعم",
          "٣ حبات بندورة متوسطة مقطعة مكعبات صغيرة",
          "½ كوب نعناع طازج مفروم ناعم",
          "٤ أعواد بصل أخضر مقطعة شرائح رفيعة",
          "¼ كوب زيت زيتون",
          "¼ كوب عصير ليمون",
          "ملح وفلفل حسب الرغبة",
        ],
        instructions: [
          "انقعي البرغل في ماء ساخن لمدة ١٥ دقيقة، ثم صفّيه واعصريه.",
          "اخلطي البقدونس والنعناع والبندورة والبصل الأخضر في وعاء كبير.",
          "أضيفي البرغل وقلّبي.",
          "تبّلي بزيت الزيتون وعصير الليمون.",
          "أضيفي الملح والفلفل. قدّمي على أوراق الخس.",
        ],
      },
      {
        id: "fattoush",
        title: "فتّوش",
        description:
          "سلطة خبز طازجة ومنعشة مع رقائق الخبز المحمّص والخضار المشكلة وتتبيلة السمّاق والليمون.",
        category: "سلطات",
        image: "🥙",
        photo: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop",
        prepTime: "١٥ د",
        cookTime: "١٠ د",
        servings: 4,
        ingredients: [
          "٢ رغيف خبز عربي مقطع قطع",
          "رأس خس مقطع",
          "٢ حبة بندورة مقطعة مكعبات",
          "حبة خيار مقطعة مكعبات",
          "٥ حبات فجل مقطعة شرائح رفيعة",
          "½ كوب نعناع طازج",
          "½ كوب بقدونس طازج",
          "٣ ملاعق كبيرة زيت زيتون",
          "٢ ملعقة كبيرة عصير ليمون",
          "١ ملعقة كبيرة سمّاق",
          "فص ثوم مهروس",
          "ملح حسب الرغبة",
        ],
        instructions: [
          "حمّصي أو اقلي قطع الخبز حتى تصبح ذهبية ومقرمشة.",
          "اخلطي الخس والبندورة والخيار والفجل والنعناع والبقدونس في وعاء.",
          "اخفقي زيت الزيتون مع عصير الليمون والسمّاق والثوم والملح لتحضير التتبيلة.",
          "قلّبي السلطة مع التتبيلة.",
          "أضيفي رقائق الخبز المحمّص قبل التقديم مباشرة.",
        ],
      },
      {
        id: "shawarma",
        title: "شاورما دجاج",
        description:
          "دجاج متبّل بالبهارات الدافئة ومشوي حتى الكمال. يُقدّم مع صلصة الثوم واللفت المخلل.",
        category: "أطباق رئيسية",
        image: "🍗",
        photo: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=400&fit=crop",
        prepTime: "٢٠ د",
        cookTime: "٢٥ د",
        servings: 4,
        ingredients: [
          "١ كغ أفخاذ دجاج بدون عظم",
          "٣ ملاعق كبيرة زيت زيتون",
          "٢ ملعقة كبيرة عصير ليمون",
          "٣ فصوص ثوم مهروسة",
          "١ ملعقة صغيرة كمون",
          "١ ملعقة صغيرة بابريكا",
          "½ ملعقة صغيرة كركم",
          "½ ملعقة صغيرة قرفة",
          "¼ ملعقة صغيرة بهار حلو",
          "ملح وفلفل حسب الرغبة",
          "خبز عربي، لفت مخلل، صلصة ثوم للتقديم",
        ],
        instructions: [
          "اخلطي زيت الزيتون وعصير الليمون والثوم وجميع البهارات لتحضير التتبيلة.",
          "غلّفي أفخاذ الدجاج بالتتبيلة وضعيها في الثلاجة لمدة ساعتين على الأقل (الأفضل ليلة كاملة).",
          "سخّني الفرن على حرارة ٢٢٠ درجة مئوية.",
          "رتّبي الدجاج على صينية فرن واشوي لمدة ٢٥ دقيقة حتى تتحمّر الأطراف.",
          "اتركيه يرتاح ٥ دقائق، ثم قطّعيه شرائح رفيعة.",
          "قدّمي في الخبز العربي الدافئ مع صلصة الثوم واللفت المخلل والخضار الطازجة.",
        ],
      },
      {
        id: "baba-ghanoush",
        title: "بابا غنوج",
        description:
          "غموس باذنجان مشوي مدخّن ممزوج بالطحينة والثوم والليمون. غني وكريمي ولا يُقاوم.",
        category: "مقبلات",
        image: "🍆",
        photo: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=400&fit=crop",
        prepTime: "١٠ د",
        cookTime: "٤٠ د",
        servings: 6,
        ingredients: [
          "٢ حبة باذنجان كبيرة",
          "٣ ملاعق كبيرة طحينة",
          "٢ ملعقة كبيرة عصير ليمون",
          "٢ فص ثوم مهروس",
          "٢ ملعقة كبيرة زيت زيتون",
          "½ ملعقة صغيرة كمون",
          "ملح حسب الرغبة",
          "حب رمّان للتزيين",
        ],
        instructions: [
          "اثقبي الباذنجان بالشوكة واشويه في الفرن على حرارة ٢٠٠ درجة لمدة ٤٠ دقيقة حتى يصبح طرياً تماماً.",
          "اتركيه يبرد، ثم استخرجي اللب وتخلّصي من القشرة.",
          "اهرسي لب الباذنجان (اتركي بعض القطع للقوام).",
          "اخلطي مع الطحينة وعصير الليمون والثوم وزيت الزيتون والكمون والملح.",
          "افرديه على طبق، رشّي زيت الزيتون وحب الرمّان فوقه.",
        ],
      },
    ],
    ourSouth: {
      pageTitle: "جنوبنا",
      pageSubtitle:
        "حكايا من تراب الجنوب — قرى، تقاليد، ومناظر طبيعية تروي قصة أرضنا وناسها",
      articles: [
        {
          id: "villages",
          title: "قرى الجنوب: حجارة تحكي التاريخ",
          excerpt:
            "من بنت جبيل إلى مرجعيون، كل قرية في جنوب لبنان تحمل قصة عمرها قرون. بيوت حجرية تطل على وديان خضراء، وأزقة ضيقة تعبق برائحة الزعتر والتراب.",
          category: "قرى",
          coverImage:
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
          coverImageAlt: "قرية جنوبية لبنانية تقليدية ببيوت حجرية",
        },
        {
          id: "traditions",
          title: "تقاليد لا تموت: من الدبكة إلى المونة",
          excerpt:
            "في كل موسم، تنبض قرى الجنوب بطقوس توارثتها الأجيال. من تحضير المونة في الصيف إلى حلقات الدبكة في الأعراس، هذه التقاليد ليست مجرد عادات — إنها هوية شعب بأكمله.",
          category: "تقاليد",
          coverImage:
            "https://images.unsplash.com/photo-1606820854416-439b3305ff39?w=800&h=500&fit=crop",
          coverImageAlt: "نساء يحضّرن المونة الموسمية في قرية جنوبية",
        },
        {
          id: "landscapes",
          title: "مناظر الجنوب: حيث تعانق الجبال البحر",
          excerpt:
            "تلال خضراء مكسوة بأشجار الزيتون، وديان عميقة يشقها نهر الليطاني، وشواطئ صخرية تمتد من صور إلى الناقورة. طبيعة الجنوب ليست مجرد مشهد — إنها روح المكان.",
          category: "طبيعة",
          coverImage:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop",
          coverImageAlt: "مناظر طبيعية خلابة في جنوب لبنان مع أشجار الزيتون",
        },
        {
          id: "heritage",
          title: "تراث الأرض: زيتون وزعتر وحكايات أجداد",
          excerpt:
            "زيت الزيتون ليس مجرد مكوّن في المطبخ الجنوبي — إنه رمز للصمود والارتباط بالأرض. من موسم القطاف إلى معاصر الزيت التقليدية، اكتشف كيف يحافظ أهل الجنوب على تراثهم الزراعي.",
          category: "تراث",
          coverImage:
            "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=800&h=500&fit=crop",
          coverImageAlt: "أشجار زيتون معمّرة في جنوب لبنان",
        },
      ],
    },
  },
  en: {
    siteTitle: "Kibbeh",
    heroTitle: "Discover South Lebanese Heritage Through Culinary",
    heroSubtitle:
      "A collection of beloved Middle Eastern & Levantine recipes \u2014 from crispy kibbeh to silky hummus and everything in between.",
    searchPlaceholder: "Know what you want? Search it!",
    noResults: "No recipes found. Try a different search or category.",
    prep: "Prep",
    cook: "Cook",
    serves: "Serves",
    people: "",
    ingredients: "Ingredients",
    instructions: "Instructions",
    footer: "Al'Blatta 2026",
    nav: {
      recipes: "Recipes",
      ourSouth: "Our South",
      ourStory: "Our Story",
      contactUs: "Contact Us",
    },
    categories: ["All", "Appetizers", "Main Dishes", "Salads", "Sides"],
    recipes: [
      {
        id: "kibbeh",
        title: "Kibbeh",
        description:
          "Crispy fried bulgur shells stuffed with spiced ground lamb, pine nuts, and onions. A beloved Levantine classic.",
        category: "Main Dishes",
        image: "🧆",
        photo: "/dishes/kibbeh.png",
        prepTime: "45 min",
        cookTime: "20 min",
        servings: 6,
        ingredients: [
          "2 cups fine bulgur wheat",
          "1 lb ground lamb (for shell)",
          "1 lb ground lamb (for filling)",
          "1 large onion, grated (for shell)",
          "1 large onion, diced (for filling)",
          "1/4 cup pine nuts",
          "1 tsp allspice",
          "1 tsp cumin",
          "1/2 tsp cinnamon",
          "Salt and pepper to taste",
          "Oil for frying",
        ],
        instructions: [
          "Soak bulgur in water for 30 minutes, then drain and squeeze dry.",
          "Mix bulgur with ground lamb, grated onion, allspice, and salt to form the shell dough.",
          "For the filling, saut\u00e9 diced onion until golden, add ground lamb, pine nuts, cumin, cinnamon, salt, and pepper.",
          "Shape the shell dough into oval forms, create a hollow center, and stuff with the filling.",
          "Seal the kibbeh into torpedo shapes.",
          "Deep fry in oil at 350\u00b0F until golden brown, about 5-7 minutes.",
          "Drain on paper towels and serve hot with yogurt or tahini.",
        ],
      },
      {
        id: "kibbet-banadoora",
        title: "Kibbet Banadoora",
        description:
          "Kibbeh cooked in a rich spiced tomato sauce, topped with green onions. An authentic Southern Lebanese dish.",
        category: "Main Dishes",
        image: "🍅",
        photo: "/dishes/kibbet-banadoora.png",
        prepTime: "30 min",
        cookTime: "40 min",
        servings: 6,
        ingredients: [
          "1 lb ground lamb",
          "1 cup fine bulgur wheat",
          "1 large onion, grated",
          "4 tomatoes, peeled and chopped",
          "2 tbsp tomato paste",
          "1 tsp allspice",
          "1/2 tsp cinnamon",
          "Salt and pepper to taste",
          "Green onions for garnish",
        ],
        instructions: [
          "Soak bulgur in water for 30 minutes, then drain and squeeze dry.",
          "Mix bulgur with ground lamb, grated onion, and spices to form the kibbeh dough.",
          "Shape into small patties.",
          "Prepare the tomato sauce by cooking tomatoes with tomato paste and spices.",
          "Place kibbeh patties in the sauce and simmer on low heat for 30 minutes.",
          "Garnish with green onions and serve hot with rice.",
        ],
      },
      {
        id: "mujaddara",
        title: "Mujaddara",
        description:
          "Humble yet hearty \u2014 lentils and rice topped with deeply caramelized onions. Comfort food at its finest.",
        category: "Sides",
        image: "🍚",
        photo: "/dishes/mjadara.png",
        prepTime: "10 min",
        cookTime: "45 min",
        servings: 6,
        ingredients: [
          "1 cup green or brown lentils",
          "1 cup long-grain rice",
          "3 large onions, thinly sliced",
          "1/4 cup olive oil",
          "1 tsp cumin",
          "1/2 tsp allspice",
          "Salt and pepper to taste",
          "Plain yogurt for serving",
        ],
        instructions: [
          "Cook lentils in salted water until almost tender, about 20 minutes. Drain.",
          "Meanwhile, heat olive oil and caramelize onion slices over medium-low heat until deep brown, about 25 minutes. Set aside half for garnish.",
          "Add rice, remaining onions, cumin, allspice, and 2 cups water to the lentils.",
          "Bring to a boil, reduce heat, cover, and cook for 18 minutes until rice is tender.",
          "Fluff with a fork and top with the reserved crispy caramelized onions.",
          "Serve with a dollop of plain yogurt.",
        ],
      },
      {
        id: "falafel",
        title: "Falafel",
        description:
          "Herb-packed chickpea fritters, crispy on the outside and fluffy within. Perfect in pita or on their own.",
        category: "Appetizers",
        image: "🧆",
        photo: "https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d?w=400&h=400&fit=crop",
        prepTime: "30 min",
        cookTime: "15 min",
        servings: 4,
        ingredients: [
          "2 cups dried chickpeas (soaked overnight)",
          "1 cup fresh parsley",
          "1/2 cup fresh cilantro",
          "1 small onion, quartered",
          "4 cloves garlic",
          "1 tsp cumin",
          "1 tsp coriander",
          "1/4 tsp cayenne pepper",
          "1 tsp salt",
          "1 tsp baking powder",
          "Oil for frying",
        ],
        instructions: [
          "Drain soaked chickpeas and pat dry.",
          "Pulse chickpeas, parsley, cilantro, onion, and garlic in a food processor until coarsely ground (not a paste).",
          "Mix in cumin, coriander, cayenne, salt, and baking powder.",
          "Refrigerate the mixture for 1 hour.",
          "Shape into small patties or balls.",
          "Deep fry at 350\u00b0F for 3-4 minutes until deep golden brown.",
          "Serve in pita with tahini sauce, pickles, and vegetables.",
        ],
      },
      {
        id: "tabbouleh",
        title: "Tabbouleh",
        description:
          "A vibrant parsley salad with bulgur, tomatoes, mint, and a bright lemon-olive oil dressing.",
        category: "Salads",
        image: "🥗",
        photo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
        prepTime: "20 min",
        cookTime: "0 min",
        servings: 6,
        ingredients: [
          "3 cups fresh parsley, finely chopped",
          "1/4 cup fine bulgur wheat",
          "3 medium tomatoes, finely diced",
          "1/2 cup fresh mint, finely chopped",
          "4 green onions, thinly sliced",
          "1/4 cup olive oil",
          "1/4 cup lemon juice",
          "Salt and pepper to taste",
        ],
        instructions: [
          "Soak bulgur in hot water for 15 minutes, drain and squeeze dry.",
          "Combine parsley, mint, tomatoes, and green onions in a large bowl.",
          "Add the bulgur and toss to combine.",
          "Dress with olive oil and lemon juice.",
          "Season with salt and pepper. Serve on romaine lettuce leaves.",
        ],
      },
      {
        id: "fattoush",
        title: "Fattoush",
        description:
          "A fresh and tangy bread salad with crispy pita chips, mixed greens, and a sumac-lemon dressing.",
        category: "Salads",
        image: "🥙",
        photo: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop",
        prepTime: "15 min",
        cookTime: "10 min",
        servings: 4,
        ingredients: [
          "2 pita breads, torn into pieces",
          "1 head romaine lettuce, chopped",
          "2 tomatoes, diced",
          "1 cucumber, diced",
          "5 radishes, thinly sliced",
          "1/2 cup fresh mint",
          "1/2 cup fresh parsley",
          "3 tbsp olive oil",
          "2 tbsp lemon juice",
          "1 tbsp sumac",
          "1 clove garlic, minced",
          "Salt to taste",
        ],
        instructions: [
          "Toast or fry pita pieces until golden and crispy.",
          "Combine lettuce, tomatoes, cucumber, radishes, mint, and parsley in a bowl.",
          "Whisk together olive oil, lemon juice, sumac, garlic, and salt for the dressing.",
          "Toss the salad with the dressing.",
          "Top with crispy pita chips just before serving.",
        ],
      },
      {
        id: "shawarma",
        title: "Chicken Shawarma",
        description:
          "Tender marinated chicken with warm spices, roasted to perfection. Served with garlic sauce and pickled turnips.",
        category: "Main Dishes",
        image: "🍗",
        photo: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=400&fit=crop",
        prepTime: "20 min",
        cookTime: "25 min",
        servings: 4,
        ingredients: [
          "2 lbs boneless chicken thighs",
          "3 tbsp olive oil",
          "2 tbsp lemon juice",
          "3 cloves garlic, minced",
          "1 tsp cumin",
          "1 tsp paprika",
          "1/2 tsp turmeric",
          "1/2 tsp cinnamon",
          "1/4 tsp allspice",
          "Salt and pepper to taste",
          "Pita bread, pickled turnips, garlic sauce for serving",
        ],
        instructions: [
          "Combine olive oil, lemon juice, garlic, and all spices to make the marinade.",
          "Coat chicken thighs in the marinade and refrigerate for at least 2 hours (overnight is best).",
          "Preheat oven to 425\u00b0F.",
          "Arrange chicken on a baking sheet and roast for 25 minutes until charred at edges.",
          "Let rest 5 minutes, then slice thinly.",
          "Serve in warm pita with garlic sauce, pickled turnips, and fresh vegetables.",
        ],
      },
      {
        id: "baba-ghanoush",
        title: "Baba Ghanoush",
        description:
          "Smoky roasted eggplant dip blended with tahini, garlic, and lemon. Rich, creamy, and irresistible.",
        category: "Appetizers",
        image: "🍆",
        photo: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=400&fit=crop",
        prepTime: "10 min",
        cookTime: "40 min",
        servings: 6,
        ingredients: [
          "2 large eggplants",
          "3 tbsp tahini",
          "2 tbsp lemon juice",
          "2 cloves garlic, minced",
          "2 tbsp olive oil",
          "1/2 tsp cumin",
          "Salt to taste",
          "Pomegranate seeds for garnish",
        ],
        instructions: [
          "Pierce eggplants with a fork and roast at 400\u00b0F for 40 minutes until completely soft.",
          "Let cool, then scoop out the flesh and discard the skin.",
          "Mash the eggplant flesh (leave some texture).",
          "Mix in tahini, lemon juice, garlic, olive oil, cumin, and salt.",
          "Spread on a plate, drizzle with olive oil, and top with pomegranate seeds.",
        ],
      },
    ],
    ourSouth: {
      pageTitle: "Our South",
      pageSubtitle:
        "Stories from the soil of the South \u2014 villages, traditions, and landscapes that tell the story of our land and its people",
      articles: [
        {
          id: "villages",
          title: "Southern Villages: Stones That Tell History",
          excerpt:
            "From Bint Jbeil to Marjayoun, every village in South Lebanon carries a story centuries old. Stone houses overlooking green valleys, narrow alleys filled with the scent of thyme and earth.",
          category: "Villages",
          coverImage:
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
          coverImageAlt: "Traditional South Lebanese village with stone houses",
        },
        {
          id: "traditions",
          title: "Living Traditions: From Dabke to Mouneh",
          excerpt:
            "With every season, the villages of the South come alive with rituals passed down through generations. From preparing mouneh in summer to dabke circles at weddings, these traditions are the identity of an entire people.",
          category: "Traditions",
          coverImage:
            "https://images.unsplash.com/photo-1606820854416-439b3305ff39?w=800&h=500&fit=crop",
          coverImageAlt: "Women preparing seasonal mouneh in a southern village",
        },
        {
          id: "landscapes",
          title: "Southern Landscapes: Where Mountains Meet the Sea",
          excerpt:
            "Green hills draped in olive trees, deep valleys carved by the Litani River, and rocky shores stretching from Tyre to Naqoura. The nature of the South is not just a view \u2014 it is the spirit of the place.",
          category: "Landscapes",
          coverImage:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop",
          coverImageAlt: "Scenic South Lebanon landscape with olive trees",
        },
        {
          id: "heritage",
          title: "Heritage of the Land: Olives, Thyme & Ancestral Tales",
          excerpt:
            "Olive oil is not just an ingredient in southern cooking \u2014 it is a symbol of resilience and connection to the land. From harvest season to traditional oil presses, discover how the people of the South preserve their heritage.",
          category: "Heritage",
          coverImage:
            "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=800&h=500&fit=crop",
          coverImageAlt: "Ancient olive trees in South Lebanon",
        },
      ],
    },
  },
};
