import type { Recipe } from "./recipes";

export type Lang = "ar" | "en";

export interface OurSouthArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  date: string;
  coverImage: string;
  coverImageAlt: string;
}

export interface OurSouthContent {
  pageTitle: string;
  pageSubtitle: string;
  articles: OurSouthArticle[];
}

export interface OurStoryContent {
  pageTitle: string;
  statArea: string;
  statTotal: string;
  statOutOf: string;
  statMessage: string;
  storyText: string;
  regions: {
    nabatieh: string;
    jezzine: string;
    zahrani: string;
    sidon: string;
    bintJbeil: string;
    tyre: string;
    hasbayaMarjeyoun: string;
  };
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
  portionSize: string;
  recipeTab: string;
  storyTimeTab: string;
  otherRecipesTab: string;
  expand: string;
  backToRecipes: string;
  submittedBy: string;
  storyLabel: string;
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
  ourStory: OurStoryContent;
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
    portionSize: "الحصة",
    recipeTab: "الوصفة",
    storyTimeTab: "قصة الطبق",
    otherRecipesTab: "وصفات أخرى",
    expand: "توسيع",
    backToRecipes: "العودة للوصفات",
    submittedBy: "بقلم",
    storyLabel: "حكاية",
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
        id: "mujaddara",
        title: "مجدّرة حمرا",
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
        contributor: "ليلى حطيط",
        story:
          "كنت صغيرة حين علّمتني جدتي أن المجدّرة ليست مجرد طعام — إنها صبر. كانت تجلس على البلاطة وتقلّب البصل ببطء وهي تقول: 'اللي بدو يعمل مجدرة لازم يعرف يصبر على البصل.' كان بيتها في النبطية يعبق برائحة البصل المكرمل كل جمعة، والجيران يعرفون أن هذا اليوم يوم مجدرة. حين عدنا إلى القرية بعد الحرب، أول شيء فعلته هو أن طبختُ المجدّرة — لأشعر أنني عدتُ فعلاً.",
      },
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
        contributor: "تيتا فاطمة — بنت جبيل",
        story:
          "كانت تيتا فاطمة تبدأ التحضير للكبّة من الصباح الباكر. في كل عيد، كنا نجتمع حولها على المنضدة الكبيرة في المطبخ — كل واحد منا له مهمة. أنا أعجن، وأختي تحشو، وأخي يرتّب على الصينية. لم تكن كبّة تيتا مجرد أكل، كانت طقساً. أتذكر يديها تشكّل الكبّة كالطوربيد بخفة لا تصدّق. وحين أشمّ رائحة القلي اليوم، تعود بي الذاكرة فوراً إلى ذلك المطبخ في بنت جبيل.",
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
        contributor: "أم رامي — تول، النبطية",
        story:
          "في بيتنا في تول، كانت الجمعة تعني كبّة بندورة. كانت أمي تطبخها في الطنجرة الكبيرة، ورائحتها تملأ الحارة. الجيران كانوا يعرفون أن أم رامي تطبخ — وأحياناً كانوا يقرعون الباب ويطلبون منها أن تشاركهم. بعد سنوات من السفر والغربة، اكتشفتُ أن هذه الرائحة هي ما أشتاق إليه أكثر من أي شيء آخر. ليس الرائحة وحدها، بل كل ما ورائها — بيتنا والحارة والجيران وصوت أمي.",
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
        contributor: "خالة سمية — صور",
        story:
          "كانت خالة سمية تنقع الحمّص من ليلة الخميس. نحن الأولاد كنا نعرف ذلك فنصحو يوم الجمعة مبكرين، ننتظر رائحة الفلافل تصل إلى الغرفة. كانت تحشو الخبز العربي بالفلافل والطماطم والنعناع وتسكب الطحينة ببساطة لا تُقاوم. كانت صور آنذاك هادئة في الصباح الباكر، وصوت المقلاة وضحكاتنا كانا الموسيقى الوحيدة. تلك الفلافل لم أجد لها مثيلاً حتى اليوم.",
      },
      {
        id: "tabbouleh",
        title: "تبّولة",
        description:
          "سلطة بقدونس نابضة بالحياة مع البرغل والبندورة والنعناع وتتبيلة الليمون وزيت الزيتون.",
        category: "سلطات",
        image: "🥗",
        photo: "/tabouleh.jpg",
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
        contributor: "نور — يارون، بنت جبيل",
        story:
          "في يارون، كانت بقعة بقدونس جزءاً من كل بيت. أتذكر كيف كنت أساعد أمي في قطفه صباحاً، والندى لا يزال على أوراقه. كانت التبّولة في الجنوب فناً — البقدونس يُفرم بالسكين وليس في المحضرة، والليمون يُعصر لحظة التقديم لا قبلها. كانت أمي ترفض أن تضع الملح إلا في آخر لحظة، وتقول: 'التبّولة زي العمر، كل ما تأخّرت كانت أحلى.'",
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
        contributor: "ريا — قانا",
        story:
          "لم نكن في قانا نرمي الخبز أبداً. الرغيف القديم يصبح فتّوش، وهذا كان درساً نتعلّمه قبل أي شيء آخر. كنت أنتظر أن يتصلّب الخبز لأقطّعه وأقلّيه. وكانت الحديقة تعطينا كل شيء — الخيار والبندورة والنعناع والبقدونس. كنا نجلس تحت العريشة بعد الظهر، والهواء دافئ والسماء زرقاء، ونأكل الفتّوش مع اللبن البارد. كانت تلك البساطة كل شيء.",
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
        contributor: "أبو علي — صيدا",
        story:
          "كانت محلّة الشاورما عند مدخل الحارة المكان الذي يجمعنا بعد المدرسة كل يوم. صاحبها كان يعرف كل واحد منا بالاسم، ويعرف من يحب الثوم كثيراً ومن يتجنّبه. رائحة الدجاج المتبّل على النار كانت تصلنا قبل أن نصل إلى الحارة. كانت أيام بسيطة. الآن حين أطبخ الشاورما بعيداً عن صيدا، أضع نفس البهارات وأغمض عيني لحظة — وأعود.",
      },
      {
        id: "baba-ghanoush",
        title: "بابا غنوج",
        description:
          "غموس باذنجان مشوي مدخّن ممزوج بالطحينة والثوم والليمون. غني وكريمي ولا يُقاوم.",
        category: "مقبلات",
        image: "🍆",
        photo: "/baba-ghanoush.jpg",
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
        contributor: "جدتي منى — مرجعيون",
        story:
          "كانت جدتي منى تشوي الباذنجان على نار الحطب في الفرن الطيني خلف البيت في مرجعيون. كانت ترفض الفرن الكهربائي — 'ما بيجي طعمة' كما كانت تقول دائماً. أتذكر الدخان الأبيض يرتفع من الفرن، ورائحة الباذنجان المتفحّم تمتزج برائحة الزعتر البري من التلال المحيطة. حين تهرسه مع الطحينة والثوم، كان الطعم مختلفاً تماماً — فيه شيء من الأرض والنار والذاكرة. لا أجد ذلك الطعم في أي مكان آخر.",
      },
    ],
    ourSouth: {
      pageTitle: "جنوبنا",
      pageSubtitle:
        "حكايا من تراب الجنوب — قرى، تقاليد، ومناظر طبيعية تروي قصة أرضنا وناسها",
      articles: [
        {
          id: "villages",
          title: "الشجرة السرية",
          excerpt:
            "ذكريات طفولة في قرية تول بجنوب لبنان — عن سنديانة ضخمة كانت ملعبنا وملاذنا، وعن أيام الصيف التي لا تُنسى في أحضان وادي الدوير.",
          content: [
            "أردتُ أن تكون أولى قصصي عن مقطعٍ إيجابي من حياتي قضيتُه في الجنوب، وأنا أحمله في القلب قبل أن أحمله على الورق.",
            "لا أزال أذكر أيام طفولتي في قرية تول، قضاء النبطية. عشتُ فيها من سابعة عمري حتى الثالثة عشرة. لم تكن تول جميلةً على الدوام، غير أن عطلة الصيف كانت استثناءً مضيئاً في كل مرة. عائلتي من خمسة أفراد سواي، أما عائلة أمي فكانت كبيرة، تضمّ آنذاك سبعةً وعشرين نفساً، ثم زاد العدد حين تزوّج خالي للمرة الثانية.",
            "في صيف عام ٢٠٠٧، في منزل تيتا المتوارَى في أحضان وادي الدوير، كنّا نلعب، أنا وأولاد خالتي، قرابة كل يوم. بينما كان الأهل يُعيدون رأب صدوع الحياة في أعقاب حرب ٢٠٠٦، كنّا نحن نمرح ونلهو كأن الدنيا لنا وحدنا.",
            "كنتُ محظوظة؛ خمسة أطفال من عمري، والوادي خالٍ من المقيمين. كانت تيتا تضجر من أصواتنا العالية، لكنّنا لم نكن نلتفت، إذ كانت لنا مهمة لا تحتمل التأجيل. نستيقظ باكراً، نحتسي الشاي مع لقمة اللبنة، ثم نركض نحو نهاية الوادي. ننظر يميناً ثم يساراً. لا أحد. فنواصل مهمتنا: تسلّق الجبل \"الكبير\"، هكذا أسميناه نحن. لم يكن التسلق سهلاً ولا قصيراً، لكنّنا كنّا قد رسمنا خريطة، وخبّأنا طعاماً في أماكن سرية على امتداد الطريق. والهدف كان واحداً لا يتبدّل: الوصول إلى الشجرة السرية.",
            "كانت الطريق طويلة، تتخلّلها الأشواك وتعترضها السلاحف الصغيرة، وعلى جانبيها نبتات الحميض تُرافق خطانا. في منتصف الظهيرة، كنّا نصل. تلك الشجرة. سنديانة ضخمة شامخة، لم تطأها أقدام كثيرة ولم تلوّثها أيدٍ غريبة. ربما كانت في عيون غيرنا شجرةً عادية، لكنّها كانت لنا بيتاً ومِلعباً وظلاً من شمس الجنوب الحارقة. لم تكن اكتشافنا وحدنا، بل إرثٌ عائلي تناقله جيلٌ عن جيل.",
            "تحت تلك الشجرة، لعبنا البيت والغميضة، وبكينا وتشاجرنا وتصالحنا وضحكنا وتحدّثنا بما لا يُقال في مكان آخر. كانت الشجرة السرية، عبر كل تلك السنين، حارسةً صامتة لأسرار طفولتنا وراعيةً لذكرياتنا. وحين يميل النهار نحو الغروب، كان يصلنا عبر الوادي صوت زوجة خالي يناديننا: حان وقت الشاي والصفوف.",
            "كانت أياماً جميلة. آخر مرة زرتُ فيها الشجرة السرية كانت منذ ثماني سنوات. لم تعد سريةً؛ أحاطت بها البيوت من كل جانب، وصارت مجرد شجرة في حيٍّ جديد، ربما تُقطع يوماً ما. لكنّها ستظل راسخةً في ذاكرتي، جزءاً لا يُنتزع من طفولتي في الجنوب.",
          ],
          category: "لبنة, صفوف",
          author: "بقلم لينا ش.",
          date: "٦ آذار ٢٠٢٦",
          coverImage: "/oak-tree.jpeg",
          coverImageAlt: "شجرة سنديانة في جنوب لبنان",
        },
      ],
    },
    ourStory: {
      pageTitle: "قصتنا",
      statArea: "٢,١٠٠ متر مربع",
      statTotal: "١٠,٤٥٢ متر مربع",
      statOutOf: "من أصل",
      statMessage: "كانت وستظل دائماً جنوب لبنان",
      storyText: "مرحباً، اسمي لينا. أنا لبنانية من بنت جبيل. بدأت مشروع \"عالبلاطة\" بسبب قصة صغيرة. كنت أتناول فنجان قهوة مع أمي وصديقاتها أثناء حرب 2024. كنا نشاهد الأخبار، نشاهد إ*رائيل تقصف منازلنا وبلداتنا وشعبنا. في خضم هذه الأجواء المضطربة والحزينة، سألت أمي عن طبقها المفضل من قريتها في الجنوب. بدأت تبتسم وتتحدث عن المجدرة الحمرا، مع الحديث المعتاد عن كيفية طبخ المجدرة. كانت صديقتها تتحدث عن الكبة النية على البلاطة (بلاط الرخام). بدأت كلتاهما تتحدثان عن اكلات الجنوب بشغف كبير. جعلني هذا أدرك كيف أن الطعام جعلني أكثر دراية بتراث الجنوب، وكيف أن الطعام يجمنا دائماً.\n\nعالبلاطة هي مجتمع الكتروني حيث يمكن لأهالي جنوب لبنان مشاركة وصفات الطعام وقصص عن الجنوب. دعونا نشارك وصفات عماتنا وخالاتنا وقصصهن مع العالم. في الجنوب، على البلاطة، نطبخ ونمشي ونتحدث ونأكل. دعونا نحافظ على تراثنا من خلال المشاركة البلاطة مع العالم!",
      regions: {
        nabatieh: "النبطية",
        jezzine: "جزين",
        zahrani: "الزهراني",
        sidon: "صيدا",
        bintJbeil: "بنت جبيل",
        tyre: "صور",
        hasbayaMarjeyoun: "حاصبيا ومرجعيون",
      },
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
    portionSize: "Portion Size:",
    recipeTab: "Recipe",
    storyTimeTab: "Story Time",
    otherRecipesTab: "Other Recipes",
    expand: "Expand",
    backToRecipes: "Back to Recipes",
    submittedBy: "Submitted by",
    storyLabel: "Their Story",
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
        id: "mujaddara",
        title: "Mujaddara Hamra",
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
        contributor: "Leila Hoteit",
        story:
          "I was 9 years old, and it was the year 1970. We lived in Beirut, in the Burj Al Barajneh area. In summer, however, I would spend it with my grandparents at their house in Dweir, Nabatiyeh. My grandparents, from my mother's side, were simple people who spent their whole lives working in farming. They had a modest stone house with only three rooms and a very old wood-fired water boiler. Back then, it was just me, my sister Lina, and my brother Ali — Ali was the eldest, and I came after him. In the years that followed, five more siblings joined us. We are a big family. My mother would stay in Beirut to support my father, while we children stayed in the village to help out with the farming, alongside our unmarried aunt Zahiye.\n\nZahiye was my favourite aunt. She never complained about not getting married, even though it was pointed out to her every single day by my grandmother. She didn't bother. She only cared about feeding her chickens and taking an afternoon stroll with her father. Zahiye had a speech disability, which unfortunately made her less appealing to male suitors back then. Yet she devoted her life to caring for both her parents until they passed away, and was one of the kindest, most loving people I have ever met. Zahiye, as her name suggests, was beautiful with a contagious smile. I am glad she lived long enough to meet my children — I considered her my other mother.\n\nSince Ali and I were the eldest, we helped out with the farming. My grandparents had olive trees and vineyards, but they mainly depended on growing tobacco — Al Nabti al Murrah. Tobacco cultivation was very common in the south back then; it was a widespread trade in both South Lebanon and the Beqaa region. Due to the better growing conditions in the south, it fetched higher prices there. It still exists today, though not as widespread as before.\n\nWe used to wake up at 3:00 AM sharp. My grandmother would pull me out of bed, and we'd take our gloves and baskets and head out. Harvesting takes place before sunrise to ensure the leaves are moist enough and don't stick together. We would pick only three to four leaves from the bottom of each plant, as those are the ones that have ripened. Once all the ripened leaves were picked, we'd return home. Khalto Zahiye would then prepare breakfast — typically Kaak (sesame breadsticks) with fresh cow's milk, or Labneh with tea. There is always tea, anyway.\n\nOnce we'd had breakfast, we'd begin the post-harvest process: stitching the leaves onto long thread strings with needles, each stretching up to two meters. We'd then hang them on wooden rods in dark rooms for three to six days, until the leaves turned from green to yellow. After that came lunch. I would help Zahiye check on the lentils while she chopped the onions. We ate Mujadara Hamra very often — it was Zahiye's favourite meal, usually served with a simple salad or fattoush and fresh laban (yogurt). Mujadara Hamra tastes different after a long day of work, especially when made with locally grown ingredients. Once the leaves turned yellow, we'd move them to the roof to dry under the sun until they turned brown — a process that took about a month. We'd then stack the leaves in wooden boxes supplied by Regie, the state-owned tobacco monopoly, and my grandfather would deliver them to the warehouse to be paid. Tobacco harvesting is a summer-specific business, carried out only around July and August, with a full lifecycle of 80 to 100 days.\n\nThose were some of my favourite days of my life. Life was simple, and things were simple. Unfortunately, the tobacco industry in the south has been deeply affected by the continuous conflict with Israel since the 1980s to this day. But those memories will never be touched by any conflict. Our houses and land existed long before all of this, and we have a story and a history worth telling.",
      },
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
        contributor: "Teta Fatima — Bint Jbeil",
        story:
          "Teta Fatima would start preparing kibbeh from early in the morning. On every holiday, we gathered around the big kitchen table — each of us with a task. I would knead, my sister would stuff, and my brother would arrange them on the tray. Teta's kibbeh was not just food, it was a ritual. I remember her hands shaping each piece into a torpedo with effortless grace. Now whenever I smell deep frying, my mind travels straight back to that kitchen in Bint Jbeil.",
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
        contributor: "Umm Rami — Toul, Nabatieh",
        story:
          "In our home in Toul, Friday meant kibbet banadoora. My mother would cook it in the large pot and the aroma would fill the whole neighbourhood. The neighbours always knew when Umm Rami was cooking — and sometimes they would knock on the door asking to share. Years of travel and living abroad taught me that this smell is what I miss most of all. Not just the smell, but everything behind it — our home, the lane, the neighbours, and my mother's voice.",
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
        contributor: "Khala Samia — Tyre",
        story:
          "Khala Samia would soak the chickpeas every Thursday night. We children knew this, so we would wake up early on Friday mornings, waiting for the smell of falafel to reach our room. She would stuff warm pita with falafel, tomatoes, mint, and a generous drizzle of tahini with irresistible simplicity. Tyre was quiet in those early mornings, and the sound of the frying pan and our laughter was the only music. I have never found falafel that comes close to hers.",
      },
      {
        id: "tabbouleh",
        title: "Tabbouleh",
        description:
          "A vibrant parsley salad with bulgur, tomatoes, mint, and a bright lemon-olive oil dressing.",
        category: "Salads",
        image: "🥗",
        photo: "/tabouleh.jpg",
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
        contributor: "Nour — Yaroun, Bint Jbeil",
        story:
          "In Yaroun, every home had a patch of parsley in the garden. I remember helping my mother pick it in the mornings, the leaves still damp with dew. Tabbouleh in the south was an art — the parsley had to be chopped by hand, never in a food processor, and the lemon squeezed at the very last moment. My mother always added salt only at the end. She used to say: 'Tabbouleh is like life — the longer you wait, the better it gets.'",
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
        contributor: "Raya — Qana",
        story:
          "In Qana, we never threw away bread. Old pita becomes fattoush — that was one of the first lessons we learned. I would wait for the bread to go stale so I could cut it and fry it. The garden gave us everything else — cucumbers, tomatoes, mint, and parsley. We would sit under the grapevine trellis in the afternoon, the air warm and the sky endlessly blue, eating fattoush with cold yogurt. That simplicity was everything.",
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
        contributor: "Abu Ali — Sidon",
        story:
          "The shawarma shop at the entrance of our neighbourhood was where we all gathered after school. The owner knew each of us by name, and he knew who liked extra garlic and who didn't. The smell of the spiced chicken on the spit would reach us before we even turned the corner. Those were simple days. Now when I make shawarma at home, far from Sidon, I use the same spices and close my eyes for a moment — and I'm back.",
      },
      {
        id: "baba-ghanoush",
        title: "Baba Ghanoush",
        description:
          "Smoky roasted eggplant dip blended with tahini, garlic, and lemon. Rich, creamy, and irresistible.",
        category: "Appetizers",
        image: "🍆",
        photo: "/baba-ghanoush.jpg",
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
        contributor: "Grandma Mona — Marjeyoun",
        story:
          "My grandmother Mona would roast eggplant over a wood fire in the clay oven behind our home in Marjeyoun. She refused to use the electric oven for it — 'it loses its flavour,' she always said. I remember white smoke rising from the fire, and the smell of charring eggplant mixing with wild thyme from the surrounding hills. When she mashed it with tahini and garlic, the taste was completely different — there was something of the earth, the fire, and memory in it. I have never found that taste anywhere else.",
      },
    ],
    ourSouth: {
      pageTitle: "Our South",
      pageSubtitle:
        "Stories from the soil of the South \u2014 villages, traditions, and landscapes that tell the story of our land and its people",
      articles: [
        {
          id: "villages",
          title: "The Secret Tree",
          excerpt:
            "Childhood memories from the village of Tule in South Lebanon — a towering oak tree that was our playground and refuge, and unforgettable summer days in the embrace of Wadi al-Duwair.",
          content: [
            "I wanted my first story to be about a positive part of my life that I spent in the south, which I carry in my heart before I put it on paper.",
            "I still remember my childhood days in the village of Tule, in the district of Nabatieh. I lived there from the age of seven to thirteen. Tule was not always beautiful, but the summer holidays were always a bright exception. My family consisted of five members besides myself, while my mother's family was large, comprising twenty-seven people at the time, and then increasing when my uncle married for the second time.",
            "In the summer of 2007, at Teta's house tucked away in the embrace of Wadi al-Duwair, my cousins and I played together almost every day. While our parents were rebuilding their lives in the aftermath of the 2006 war, we played and had fun as if the world belonged to us alone.",
            "I was lucky: five children my age and no other residents in the valley. Teta was annoyed by our loud voices, but we paid no attention, as we had a mission that could not be delayed. We would wake up early, drink tea with a bite of labneh, and then run to the end of the valley. We looked right and left. No one was there. So we continued our mission: to climb the \"big\" mountain, as we called it. The climb was neither easy nor short, but we had drawn a map and hidden food in secret places along the way. We had one unchanging goal: to reach the secret tree.",
            "The road was long, strewn with thorns and small turtles, and lined with sorrel plants. At midday, we arrived. That tree. A huge, towering oak tree, untouched by many feet and unpolluted by foreign hands. To others, it may have been just an ordinary tree, but to us it was a home, a playground, and shade from the scorching southern sun. It was not our discovery alone, but a family legacy passed down from generation to generation.",
            "Under that tree, we played house and hide-and-seek, we cried and fought and made up, we laughed and talked about things we wouldn't talk about anywhere else. Throughout all those years, the secret tree was the silent guardian of our childhood secrets and the keeper of our memories. As the day drew to a close, my uncle's wife would call out to us across the valley: it was time for tea and homework.",
            "Those were beautiful days. The last time I visited the secret tree was eight years ago. It was no longer secret; houses surrounded it on all sides, and it became just another tree in a new neighborhood, perhaps to be cut down one day. But it will remain etched in my memory, an inseparable part of my childhood in the south.",
          ],
          category: "Labneh, Sfouf",
          author: "by Lina C.",
          date: "March 6, 2026",
          coverImage: "/oak-tree.jpeg",
          coverImageAlt: "Oak tree in South Lebanon",
        },
      ],
    },
    ourStory: {
      pageTitle: "Our Story",
      statArea: "2,100 sqm",
      statTotal: "10,452 sqm",
      statOutOf: "out of",
      statMessage: "is and will always be the South of Lebanon",
      storyText: "Hi, my name is Lina. I am Lebanese, from Bint Jbeil. I started Al Blatta because of a heartwarming story. I was having a normal coffee chat with my mom and her friends amidst the 2024 war. We were watching the news, watching Israel bombing our homes, our towns, and our people. Amidst this stressful situation, I asked my mom about her favorite dish from her village in the south. She started smiling and talking about Mujadara, along with the usual discussion of how Mujadara is made. Her friend was talking about Kibbeh Nayyeh on the Blatta (marble tile). They both started talking about food from the south with a lot of passion. This made me aware of how food made me more knowledgeable about the heritage of the south, and how food brought us together.\n\nAl Blatta is a community where south Lebanese people can share food recipes and stories about the south. Let's share our aunties' recipes and stories with the world. In the south, on Al Blatta, we cook, walk, talk, and eat. Let's preserve our heritage through sharing!",
      regions: {
        nabatieh: "Nabatieh",
        jezzine: "Jezzine",
        zahrani: "Zahrani",
        sidon: "Sidon",
        bintJbeil: "Bint Jbeil",
        tyre: "Tyre",
        hasbayaMarjeyoun: "Hasbaya & Marjeyoun",
      },
    },
  },
};
