import type { BlogLanguage, BlogPost } from '../types/blog';
import wreckImage from '../assets/images/AdobeStock_578852486.jpeg';
import diverImage from '../assets/images/PADI-UTILA-8-2019-01320_r1.jpg';
import reefImage from '../assets/images/pexels-pia-3046637.jpg';
import wreckThumb from '../assets/images/blog/adobestock-578852486-thumb.webp';
import diverThumb from '../assets/images/blog/padi-utila-thumb.webp';
import reefThumb from '../assets/images/blog/pexels-pia-3046637-thumb.webp';

type BlogDictionary = Record<BlogLanguage, BlogPost[]>;

export const blogPosts: BlogDictionary = {
  en: [
    {
      id: '1',
      slug: 'how-to-start-scuba-diving',
      title: 'How to Start Scuba Diving With Confidence',
      excerpt:
        'A practical beginner guide to your first scuba diving course, equipment expectations, and the mindset that makes learning enjoyable.',
      intro:
        'Starting scuba diving can feel like a major step, but with the right instructor and a calm approach, it quickly becomes one of the most rewarding adventures you can begin.',
      content:
        'Starting scuba diving is less about bravery and more about structure. Good training turns a new environment into a controlled, exciting, and deeply enjoyable experience. At Hydra-Scuba Diving School, we help beginners build confidence step by step so they can focus on learning, safety, and the pure pleasure of breathing underwater for the first time.',
      coverImage: diverImage,
      cardImage: diverThumb,
      category: 'Beginner Guide',
      author: 'Hydra-Scuba Diving School',
      readingTime: 6,
      publishedAt: '2026-04-01',
      seoDescription:
        'Learn how to start scuba diving with confidence. Discover what to expect from your first course, how training works, and how to prepare for your first underwater adventure.',
      tags: ['scuba diving for beginners', 'PADI beginner course', 'learn to dive'],
      sections: [
        {
          heading: 'What Your First Course Actually Feels Like',
          body: [
            'Most new divers imagine the first lesson as something highly technical, but the experience is usually much more supportive and progressive. You begin by understanding the equipment, learning how pressure affects your body, and practicing the key skills that keep you relaxed underwater.',
            'A quality course does not rush you. It introduces buoyancy, mask clearing, regulator recovery, and communication signals in a sequence that makes sense. The goal is not speed. The goal is comfort and repeatable control.'
          ]
        },
        {
          heading: 'The Equipment Is Easier Than It Looks',
          body: [
            'Scuba gear can look intimidating on land because there are several parts working together: cylinder, regulator, BCD, weights, exposure suit, and mask. Once each item is explained in context, the system becomes straightforward.',
            'Beginners often feel relieved when they realise they do not need to memorise everything instantly. Your instructor will show you how each part works, how it is checked, and how to assemble it correctly. Repetition turns unfamiliar gear into a routine.'
          ]
        },
        {
          heading: 'Confidence Comes From Process, Not Guesswork',
          body: [
            'The fastest way to enjoy scuba diving is to trust the process of training. Ask questions, repeat skills until they feel natural, and focus on breathing slowly. Good divers are not reckless or overly bold. They are methodical, self-aware, and calm.',
            'If you want your first experience to be enjoyable, choose instruction that adapts to your pace. That is where real confidence comes from.'
          ]
        }
      ]
    },
    {
      id: '2',
      slug: 'uk-scuba-diving-conditions-explained',
      title: 'UK Scuba Diving Conditions Explained',
      excerpt:
        'Visibility, temperature, tides, and exposure protection all matter in UK waters. Here is how to understand local conditions before you dive.',
      intro:
        'Diving in the UK offers dramatic wrecks, marine life, and strong training value, but local conditions reward preparation and realistic expectations.',
      content:
        'The UK is one of the most underrated places to develop as a diver. Conditions can vary quickly, and that is exactly why local diving builds excellent awareness, discipline, and adaptability. With the right briefings and equipment, UK scuba diving is both accessible and deeply rewarding.',
      coverImage: wreckImage,
      cardImage: wreckThumb,
      category: 'Dive Planning',
      author: 'Hydra-Scuba Diving School',
      readingTime: 7,
      publishedAt: '2026-04-04',
      seoDescription:
        'Understand UK scuba diving conditions, including visibility, temperature, tides, and site planning. A practical guide for safer and more enjoyable diving in British waters.',
      tags: ['UK diving', 'scuba conditions', 'dive planning'],
      sections: [
        {
          heading: 'Visibility Changes More Than Beginners Expect',
          body: [
            'In the UK, visibility can be excellent one week and significantly reduced the next. Rainfall, plankton blooms, recent storms, and local seabed disturbance all affect how much you can see underwater.',
            'This does not make the dive bad. It simply changes the plan. In lower visibility, divers stay tighter together, descend more deliberately, and rely more on torch communication and clear briefing discipline.'
          ]
        },
        {
          heading: 'Temperature Drives Comfort and Performance',
          body: [
            'Cold water is not only a comfort issue. It affects concentration, dexterity, and air consumption. That is why exposure protection matters so much. A properly fitted drysuit or thicker wetsuit can transform your experience from distracting to enjoyable.',
            'When divers are warm enough, they think more clearly, move more efficiently, and enjoy the dive longer. Comfort is part of safety, not a luxury.'
          ]
        },
        {
          heading: 'Tides and Timing Are Part of the Dive Plan',
          body: [
            'Many UK sites are best dived around slack water. Understanding entry timing, current strength, and exit options is essential. This is where local knowledge becomes invaluable.',
            'A well-planned dive starts long before anyone enters the water. It includes site selection, weather interpretation, fallback options, and honest decisions about whether conditions suit the team that day.'
          ]
        }
      ]
    },
    {
      id: '3',
      slug: 'buoyancy-control-for-relaxed-diving',
      title: 'Buoyancy Control for Relaxed, Efficient Diving',
      excerpt:
        'Good buoyancy is the skill that makes every dive smoother. Learn how breath control, weighting, and trim work together underwater.',
      intro:
        'Divers who look calm underwater are usually not stronger or faster. They are simply better at buoyancy, and that changes everything.',
      content:
        'Buoyancy control is the difference between fighting the water and moving naturally through it. When divers improve this one skill, they use less energy, protect the underwater environment better, and enjoy a more relaxed experience from start to finish.',
      coverImage: reefImage,
      cardImage: reefThumb,
      category: 'Skills',
      author: 'Hydra-Scuba Diving School',
      readingTime: 5,
      publishedAt: '2026-04-08',
      seoDescription:
        'Improve your scuba buoyancy with practical advice on weighting, trim, and breathing. A must-read guide for safer and more relaxed diving.',
      tags: ['buoyancy control', 'diving skills', 'trim and weighting'],
      sections: [
        {
          heading: 'Start With Correct Weighting',
          body: [
            'Many buoyancy problems begin before the dive starts. If you carry too much weight, you need more gas in the BCD, which makes your position less stable. Small depth changes then produce larger buoyancy swings.',
            'A proper weight check creates a better foundation. Once the amount of lead is right, every other control input becomes smaller and easier to manage.'
          ]
        },
        {
          heading: 'Your Breathing Is a Fine-Tuning Tool',
          body: [
            'New divers often move their inflator too often and too aggressively. In reality, your breathing should handle many of the small adjustments. A slow, full breath can gently lift you. A slow exhale can help you settle.',
            'The key is not to hold your breath or overreact. Calm breathing creates calm movement, and calm movement improves awareness.'
          ]
        },
        {
          heading: 'Trim Makes Everything Easier',
          body: [
            'When your body position is balanced and horizontal, you kick more efficiently and disturb less water. Good trim also reduces silting and helps you stay steady during skills, photography, or navigation.',
            'Buoyancy and trim should be trained together. Once they start working as a single system, diving becomes noticeably more comfortable.'
          ]
        }
      ]
    }
  ],
  pl: [
    {
      id: '1',
      slug: 'how-to-start-scuba-diving',
      title: 'Jak Zacząć Nurkowanie z Pewnością Siebie',
      excerpt:
        'Praktyczny przewodnik dla początkujących: pierwszy kurs nurkowania, sprzęt i nastawienie, które pomaga czerpać przyjemność z nauki.',
      intro:
        'Rozpoczęcie nurkowania może wydawać się dużym krokiem, ale z odpowiednim instruktorem i spokojnym podejściem szybko staje się jedną z najbardziej satysfakcjonujących przygód.',
      content:
        'Początek nurkowania nie wymaga odwagi ponad miarę, lecz dobrego procesu szkoleniowego. Właściwy kurs zamienia nowe środowisko w kontrolowane, ekscytujące i bardzo przyjemne doświadczenie. W Hydra-Scuba Diving School pomagamy początkującym budować pewność siebie krok po kroku, aby mogli skupić się na nauce, bezpieczeństwie i wyjątkowym uczuciu pierwszego oddechu pod wodą.',
      coverImage: diverImage,
      cardImage: diverThumb,
      category: 'Dla Początkujących',
      author: 'Hydra-Scuba Diving School',
      readingTime: 6,
      publishedAt: '2026-04-01',
      seoDescription:
        'Dowiedz się, jak zacząć nurkowanie z pewnością siebie. Sprawdź, czego oczekiwać od pierwszego kursu, jak wygląda szkolenie i jak przygotować się do pierwszej podwodnej przygody.',
      tags: ['nurkowanie dla początkujących', 'kurs PADI', 'jak zacząć nurkować'],
      sections: [
        {
          heading: 'Jak Naprawdę Wygląda Pierwszy Kurs',
          body: [
            'Wielu nowych nurków wyobraża sobie pierwszy kurs jako coś bardzo technicznego, ale w praktyce jest to doświadczenie stopniowe i dobrze prowadzone. Zaczynasz od poznania sprzętu, zrozumienia wpływu ciśnienia na organizm oraz ćwiczenia podstawowych umiejętności, które pomagają zachować spokój pod wodą.',
            'Dobry kurs nikogo nie pogania. Wprowadza pływalność, oczyszczanie maski, odzyskiwanie automatu i komunikację pod wodą w logicznej kolejności. Celem nie jest tempo, lecz komfort i powtarzalna kontrola.'
          ]
        },
        {
          heading: 'Sprzęt Jest Łatwiejszy, Niż Się Wydaje',
          body: [
            'Sprzęt nurkowy może wyglądać skomplikowanie na lądzie, bo składa się z kilku elementów współpracujących ze sobą: butli, automatu, jacketu, balastu, pianki lub suchego skafandra i maski. Gdy każdy element zostanie wyjaśniony w praktyce, cały system staje się prosty.',
            'Początkujący często odczuwają ulgę, gdy rozumieją, że nie muszą zapamiętać wszystkiego natychmiast. Instruktor pokaże, jak działa każdy element, jak go sprawdzić i jak prawidłowo przygotować sprzęt. Powtórzenia zamieniają niepewność w rutynę.'
          ]
        },
        {
          heading: 'Pewność Siebie Wynika z Procesu',
          body: [
            'Najszybsza droga do czerpania przyjemności z nurkowania to zaufanie procesowi szkolenia. Zadawaj pytania, powtarzaj ćwiczenia, aż staną się naturalne, i skup się na spokojnym oddechu. Dobrzy nurkowie nie są lekkomyślni ani brawurowi. Są metodyczni, świadomi i opanowani.',
            'Jeśli chcesz, aby pierwszy kontakt z nurkowaniem był przyjemny, wybierz szkolenie dopasowane do Twojego tempa. Właśnie z tego rodzi się prawdziwa pewność siebie.'
          ]
        }
      ]
    },
    {
      id: '2',
      slug: 'uk-scuba-diving-conditions-explained',
      title: 'Warunki Nurkowe w Wielkiej Brytanii Wyjaśnione',
      excerpt:
        'Widoczność, temperatura, pływy i odpowiednia ochrona termiczna mają ogromne znaczenie w wodach UK. Oto jak rozumieć lokalne warunki przed nurkowaniem.',
      intro:
        'Nurkowanie w Wielkiej Brytanii daje dostęp do wraków, życia morskiego i bardzo wartościowego treningu, ale lokalne warunki nagradzają dobre przygotowanie.',
      content:
        'Wielka Brytania to jedno z najbardziej niedocenianych miejsc do rozwoju nurkowego. Warunki potrafią zmieniać się szybko i właśnie dlatego lokalne nurkowanie rozwija świadomość, dyscyplinę i elastyczność. Przy odpowiednim planie i sprzęcie nurkowanie w UK jest zarówno dostępne, jak i bardzo satysfakcjonujące.',
      coverImage: wreckImage,
      cardImage: wreckThumb,
      category: 'Planowanie Nurkowania',
      author: 'Hydra-Scuba Diving School',
      readingTime: 7,
      publishedAt: '2026-04-04',
      seoDescription:
        'Poznaj warunki nurkowe w Wielkiej Brytanii: widoczność, temperaturę, pływy i planowanie miejsc nurkowych. Praktyczny przewodnik dla bezpieczniejszego i przyjemniejszego nurkowania.',
      tags: ['nurkowanie UK', 'warunki nurkowe', 'planowanie nurkowania'],
      sections: [
        {
          heading: 'Widoczność Zmienia Się Częściej, Niż Wydaje Się Początkującym',
          body: [
            'W Wielkiej Brytanii widoczność może być bardzo dobra w jednym tygodniu, a znacznie gorsza w kolejnym. Opady deszczu, zakwit planktonu, sztormy i wzruszenie dna wpływają na to, ile widać pod wodą.',
            'To nie oznacza, że nurkowanie jest słabe. Oznacza jedynie zmianę planu. Przy mniejszej widoczności zespół trzyma się bliżej, schodzi bardziej świadomie i polega na jasnym briefingu oraz komunikacji światłem.'
          ]
        },
        {
          heading: 'Temperatura Wpływa na Komfort i Skuteczność',
          body: [
            'Zimna woda to nie tylko kwestia wygody. Wpływa na koncentrację, sprawność dłoni i zużycie powietrza. Dlatego odpowiednia ochrona termiczna jest tak ważna. Dobrze dopasowany suchy skafander lub grubsza pianka potrafią całkowicie odmienić doświadczenie nurka.',
            'Gdy nurek jest wystarczająco ciepło ubrany, myśli wyraźniej, porusza się efektywniej i dłużej cieszy się nurkowaniem. Komfort jest częścią bezpieczeństwa, a nie luksusem.'
          ]
        },
        {
          heading: 'Pływy i Timing Są Częścią Planu',
          body: [
            'Wiele miejsc nurkowych w UK najlepiej odwiedzać podczas slack water. Zrozumienie czasu wejścia, siły prądu i możliwości wyjścia z wody jest kluczowe. Tutaj lokalna wiedza ma ogromną wartość.',
            'Dobre nurkowanie zaczyna się na długo przed wejściem do wody. Obejmuje wybór miejsca, interpretację pogody, plan awaryjny i uczciwą ocenę, czy warunki pasują do zespołu w danym dniu.'
          ]
        }
      ]
    },
    {
      id: '3',
      slug: 'buoyancy-control-for-relaxed-diving',
      title: 'Kontrola Pływalności dla Spokojnego Nurkowania',
      excerpt:
        'Dobra pływalność to umiejętność, która poprawia każde nurkowanie. Zobacz, jak oddech, wyważenie i trym współpracują pod wodą.',
      intro:
        'Nurkowie, którzy pod wodą wyglądają na spokojnych, zwykle nie są silniejsi ani szybsi. Po prostu lepiej kontrolują pływalność.',
      content:
        'Kontrola pływalności to różnica między walką z wodą a naturalnym poruszaniem się w niej. Gdy nurek poprawia tę jedną umiejętność, zużywa mniej energii, lepiej chroni środowisko podwodne i czerpie więcej przyjemności z całego nurkowania.',
      coverImage: reefImage,
      cardImage: reefThumb,
      category: 'Umiejętności',
      author: 'Hydra-Scuba Diving School',
      readingTime: 5,
      publishedAt: '2026-04-08',
      seoDescription:
        'Popraw swoją pływalność w nurkowaniu dzięki praktycznym wskazówkom dotyczącym wyważenia, trymu i oddechu. Ważny przewodnik dla bezpieczniejszego i spokojniejszego nurkowania.',
      tags: ['kontrola pływalności', 'umiejętności nurkowe', 'trym i wyważenie'],
      sections: [
        {
          heading: 'Zacznij od Prawidłowego Wyważenia',
          body: [
            'Wiele problemów z pływalnością zaczyna się jeszcze przed nurkowaniem. Jeśli masz zbyt dużo balastu, potrzebujesz więcej gazu w jacketcie, a to sprawia, że pozycja staje się mniej stabilna. Niewielkie zmiany głębokości powodują wtedy większe wahania pływalności.',
            'Prawidłowe sprawdzenie wyważenia daje lepszy fundament. Gdy ilość ołowiu jest właściwa, wszystkie kolejne korekty stają się mniejsze i łatwiejsze do opanowania.'
          ]
        },
        {
          heading: 'Oddech Jest Narzędziem do Drobnych Korekt',
          body: [
            'Nowi nurkowie często używają inflatora zbyt często i zbyt gwałtownie. W praktyce wiele małych korekt powinna wykonywać właśnie praca oddechem. Powolny, pełny wdech może delikatnie Cię unieść. Powolny wydech pomoże opaść.',
            'Kluczem nie jest wstrzymywanie oddechu ani przesadne reagowanie. Spokojny oddech tworzy spokojny ruch, a spokojny ruch poprawia świadomość sytuacji.'
          ]
        },
        {
          heading: 'Trym Ułatwia Wszystko',
          body: [
            'Gdy Twoja pozycja w wodzie jest zrównoważona i pozioma, poruszasz się wydajniej i wzruszasz mniej osadów. Dobry trym pomaga też podczas ćwiczeń, fotografii czy nawigacji.',
            'Pływalność i trym warto trenować razem. Gdy zaczynają działać jako jeden system, nurkowanie staje się wyraźnie bardziej komfortowe.'
          ]
        }
      ]
    }
  ]
};

export function getBlogPosts(language: BlogLanguage): BlogPost[] {
  return blogPosts[language];
}

export function getBlogPostBySlug(slug: string, language: BlogLanguage): BlogPost | null {
  return blogPosts[language].find((post) => post.slug === slug) ?? null;
}
