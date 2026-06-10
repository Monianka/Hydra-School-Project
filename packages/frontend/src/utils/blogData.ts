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
    },
    {
      id: '4',
      slug: 'why-staying-within-your-diving-limits-and-training-matters',
      title: 'Why Staying Within Your Diving Limits and Training Matters',
      excerpt:
        'A recent cave diving tragedy in the Maldives reminds us that proper training, conservative planning, and respect for limits are the foundation of safe scuba diving.',
      intro:
        'The recent tragedy in the Maldives shows that confidence and experience cannot replace proper training, sound judgement, and established safety procedures. Safe diving depends on careful preparation, discipline, and the wisdom to say, “This is beyond my current level.”',
      content:
        'Recreational scuba diving is very safe when divers stay within their certification and training limits, follow the dive plan, and use conservative judgement. Exceeding limits, ignoring procedures, and chasing depth can quickly turn an enjoyable activity into a dangerous one.',
      coverImage: wreckImage,
      cardImage: wreckThumb,
      category: 'Safety',
      author: 'Hydra-Scuba Diving School',
      readingTime: 8,
      publishedAt: '2026-06-10',
      seoDescription:
        'Learn why staying within your training, dive limits, and safety procedures matters in scuba diving — especially when exploring caves, wrecks, and deep dives.',
      tags: ['diving safety', 'dive training', 'dive limits', 'cave diving'],
      sections: [
        {
          heading: 'Scuba diving is safe when we follow the rules',
          body: [
            'One of the biggest misconceptions about diving is that it is inherently dangerous. In reality, recreational scuba diving has an excellent safety record when divers stay within their training, dive conservatively, and follow accepted procedures.',
            'Most serious incidents happen not because people dive, but because they: - exceed their training or certification limits, - ignore safety procedures, - dive in conditions they are not prepared for, - or become overconfident. The underwater world is incredible, but it demands respect.'
          ]
        },
        {
          heading: 'Certifications exist for a reason',
          body: [
            'Sometimes divers think, “I’ve done plenty of dives—I’ll be fine.” But certifications are not just pieces of plastic. They represent the knowledge, skills, and emergency procedures needed for specific environments.',
            'For example: - An Open Water Diver course teaches the foundations of recreational diving. - A Deep Diver course focuses on planning and managing dives to greater depths. - A Wreck Diver course teaches techniques and hazards associated with wrecks. - Cave diving and technical diving require entirely separate training and specialised procedures.',
            'A wreck certification does not qualify someone to dive in caves. Although both involve overhead environments, the risks, navigation techniques, gas management, equipment configuration, and emergency procedures are fundamentally different.'
          ]
        },
        {
          heading: 'Chasing depth can become a dangerous goal',
          body: [
            'Over the years, the diving community has seen cases where divers pushed beyond their limits simply to reach another milestone. 40 metres. 50 metres. 60 metres. 70 metres. Sometimes it becomes less about the dive itself and more about being able to say, “I’ve been there.”',
            'That mindset can be dangerous. Depth is not an achievement on its own. Every extra metre increases complexity: - breathing gas is consumed more quickly, - nitrogen narcosis becomes more significant, - no-decompression limits shrink, - and there is less room for mistakes.',
            'When significant depth is combined with an overhead environment such as a cave or wreck penetration, the risks increase dramatically. The best divers are not the ones who dive the deepest. They are the ones who make good decisions and always return safely.'
          ]
        },
        {
          heading: 'Cave diving is a completely different discipline',
          body: [
            'Cave diving is widely regarded as one of the most technically demanding forms of scuba diving. Unlike open water, there may be: - no direct ascent to the surface, - complex navigation, - limited visibility, - silt-outs, - psychological stress, - and very little margin for error.',
            'Add depths of 50–60 metres, and additional hazards such as nitrogen narcosis, oxygen toxicity, decompression obligations, and rapid gas consumption become critical considerations. This is why technical and cave diving require dedicated training, specialised equipment, redundant systems, and extensive experience.'
          ]
        },
        {
          heading: 'Overconfidence can be one of the biggest hazards',
          body: [
            'Many accident analyses point to a common pattern. A diver gains experience and starts feeling increasingly comfortable underwater. Then comes the thought: “Just a little deeper.” “Just a little farther.” “I can handle it.”',
            'Sometimes they can. Sometimes they cannot. The most experienced divers I know are often the most conservative. They understand that saying, “I’m not trained for this dive,” is not a sign of weakness—it is a sign of professionalism and maturity.'
          ]
        },
        {
          heading: 'Always dive the plan',
          body: [
            'One of the oldest principles in scuba diving remains one of the most important: Plan the dive. Dive the plan. A proper dive plan should include: - maximum depth, - bottom time, - gas management, - environmental conditions, - emergency procedures, - and the capabilities of every member of the team.',
            'Many incidents begin when divers abandon that plan underwater.'
          ]
        },
        {
          heading: 'Never dive alone',
          body: [
            'For recreational diving, the buddy system remains one of the most effective safety measures. A good buddy provides: - another set of eyes, - assistance during emergencies, - shared awareness, - and support if something unexpected happens.',
            'While specialised solo diving training exists, it requires additional preparation and equipment. For most recreational divers, diving with a competent buddy is an essential layer of safety.'
          ]
        },
        {
          heading: 'We cannot eliminate every risk — but we can reduce it',
          body: [
            'No adventure sport is completely risk-free, and scuba diving is no exception. Equipment can fail. Conditions can change. Unexpected situations can arise.',
            'But we can significantly reduce those risks by: seeking proper training, staying within our certification limits, practising our skills regularly, planning carefully, and making conservative decisions. At the end of the day, diving is not about proving how deep, how far, or how extreme we can go. It is about exploring an extraordinary world safely and coming home with memories—not close calls.',
            'Because the most successful dive is not the deepest one. It is the one where everyone returns safely to the surface.'
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
    },
    {
      id: '4',
      slug: 'dlaczego-trzymac-sie-uprawnien-i-limitow',
      title: 'Dlaczego w nurkowaniu tak ważne jest trzymanie się swoich uprawnień i limitów?',
      excerpt:
        'Tragedia na Malediwach przypomina, że nawet doświadczenie nie zastąpi odpowiedniego szkolenia, procedur i zdrowego rozsądku podczas nurkowania.',
      intro:
        'Ostatnie wydarzenia na Malediwach ponownie pokazują, że nurkowanie jest bezpieczne tylko wtedy, gdy trzymamy się limitów, uprawnień i planu. Bez procedur i wsparcia, najtrudniejsze środowiska potrafią zamienić się w niebezpieczeństwo.',
      content:
        'Nurkowanie rekreacyjne może być bardzo bezpieczne, gdy każdy nurek działa w granicach swojej certyfikacji, doświadczenia i planu nurkowego. Przekraczanie ograniczeń, ignorowanie procedur oraz poszukiwanie głębokości dla samego trofeum to droga do poważnych wypadków.',
      coverImage: wreckImage,
      cardImage: wreckThumb,
      category: 'Bezpieczeństwo',
      author: 'Hydra-Scuba Diving School',
      readingTime: 8,
      publishedAt: '2026-06-10',
      seoDescription:
        'Poznaj zasady bezpiecznego nurkowania i dowiedz się, dlaczego trzymanie się uprawnień, limitów oraz planu jest kluczowe przy nurkowaniu jaskiniowym i głębokim.',
      tags: ['bezpieczeństwo nurkowe', 'uprawnienia nurkowe', 'limity nurkowe', 'nurkowanie jaskiniowe'],
      sections: [
        {
          heading: 'Nurkowanie jest bezpieczne — jeśli przestrzegamy zasad',
          body: [
            'To chyba najważniejsza rzecz, którą chciałbym tutaj podkreślić. Nurkowanie rekreacyjne jest bardzo bezpiecznym sportem, jeśli nurkujemy zgodnie ze swoim poziomem wyszkolenia, planem nurkowym i obowiązującymi procedurami.',
            'Większość poważnych wypadków nie bierze się z „samego nurkowania”. Najczęściej problem zaczyna się wtedy, kiedy: - przekraczamy swoje limity, - ignorujemy procedury, - nurkujemy w warunkach, do których nie jesteśmy przygotowani, - albo zaczynamy wierzyć, że „nas to nie dotyczy”. Pod wodą naprawdę nie ma miejsca na ego.'
          ]
        },
        {
          heading: 'Uprawnienia istnieją po coś',
          body: [
            'Czasami można spotkać się z podejściem: „przecież mam już doświadczenie”, „robiłem trudniejsze nurkowania”, „dam sobie radę”. Tylko że każde szkolenie nurkowe istnieje z bardzo konkretnego powodu.',
            'Kursy nie są po to, żeby „zbierać plastiki”, ale po to, żeby przygotować nurka do konkretnych warunków i potencjalnych problemów. Na przykład: - Open Water Diver daje podstawy bezpiecznego nurkowania rekreacyjnego, - Deep Diver uczy planowania i ryzyk związanych z głębokością, - Wreck Diver przygotowuje do nurkowania wrakowego, - ale cave diving czy technical diving to już zupełnie inny świat.',
            'Uprawnienia wrakowe nie oznaczają automatycznie przygotowania do nurkowania jaskiniowego. To, że oba środowiska są „pod sufitem”, nie znaczy, że są takie same.'
          ]
        },
        {
          heading: 'Głębokość to nie trofeum',
          body: [
            'W nurkowaniu czasami pojawia się coś, co można nazwać „pogonią za głębokością”. 40 metrów. 50 metrów. 60 metrów. 70 metrów. „Bo ktoś już był.” „Bo chcę zobaczyć, jak to jest.” „Bo chcę zaliczyć kolejną głębokość.” I właśnie tutaj bardzo łatwo wpaść w pułapkę ambicji.',
            'Znane są przypadki wypadków, gdzie nurkowie przekraczali swoje limity nie dlatego, że musieli — ale dlatego, że chcieli zejść głębiej, sprawdzić siebie albo „odhaczyć” kolejną liczbę. Tylko że pod wodą głębokość nie jest osiągnięciem sama w sobie.',
            'Im głębiej schodzimy: - tym szybciej zużywamy gaz, - tym większy wpływ ma narkoza, - tym mniej czasu mamy na reakcję, - i tym mniejszy margines błędu. A kiedy do głębokości dochodzi jeszcze jaskinia, wrak lub trudne warunki — ryzyko rośnie bardzo szybko.'
          ]
        },
        {
          heading: 'Jaskinie i głębokie nurkowania to zupełnie inny poziom ryzyka',
          body: [
            'Nurkowanie jaskiniowe jest uznawane za jedną z najbardziej wymagających specjalizacji nurkowych. Nie chodzi tylko o samą głębokość.',
            'W jaskini: - często nie ma bezpośredniej drogi do wynurzenia, - widoczność może spaść do zera w kilka sekund, - łatwo stracić orientację, - a stres i panika potrafią bardzo szybko eskalować sytuację.',
            'Do tego, jeśli dodamy głębokość 50–60 metrów, dochodzą kolejne zagrożenia: - narkoza azotowa, - większe zużycie gazu, - obowiązkowa dekompresja, - toksyczność tlenowa, - dużo mniejszy margines błędu. Dlatego nurkowania techniczne wymagają: dodatkowego szkolenia, odpowiedniej konfiguracji sprzętu, redundancji gazu, doświadczenia i przede wszystkim bardzo dużej dyscypliny.'
          ]
        },
        {
          heading: 'Najbardziej niebezpieczny moment? Kiedy zaczynamy czuć się „zbyt pewnie”',
          body: [
            'To coś, co bardzo często przewija się w analizach wypadków nurkowych. Nurek zdobywa doświadczenie, zaczyna czuć się komfortowo pod wodą i stopniowo przesuwa swoje granice.',
            '„Jeszcze trochę głębiej.” „Jeszcze kawałek dalej.” „Przecież wszystko jest pod kontrolą.” I właśnie wtedy najłatwiej wejść w sytuację, która przekracza nasze realne możliwości albo przygotowanie. Dobry nurek to nie ten, który schodzi najgłębiej. Dobry nurek to ten, który potrafi powiedzieć: „Nie mam jeszcze odpowiedniego szkolenia do tego nurkowania.”'
          ]
        },
        {
          heading: 'Zawsze nurkuj zgodnie z planem',
          body: [
            'Jedna z podstawowych zasad nurkowania brzmi: plan the dive — dive the plan. Plan nurkowania nie jest formalnością „na papierze”. To coś, co ma ograniczać ryzyko i pomagać podejmować spokojne decyzje pod wodą.',
            'Dobry plan powinien uwzględniać: maksymalną głębokość, czas nurkowania, zapas gazu, warunki, procedury awaryjne oraz doświadczenie każdego nurka w zespole. Bardzo wiele problemów zaczyna się właśnie wtedy, kiedy odchodzimy od planu.'
          ]
        },
        {
          heading: 'Nigdy nie nurkuj sam',
          body: [
            'To kolejna zasada, która istnieje nie bez powodu. Partner nurkowy to nie tylko „towarzystwo pod wodą”. To dodatkowa para oczu, wsparcie psychiczne i przede wszystkim pomoc w sytuacji awaryjnej.',
            'Oczywiście istnieją szkolenia do nurkowania solo, ale to zupełnie inny temat i również wymagają one specjalistycznego przygotowania. W standardowym nurkowaniu rekreacyjnym system partnerski pozostaje jedną z podstaw bezpieczeństwa.'
          ]
        },
        {
          heading: 'Nie da się przewidzieć wszystkiego — ale można bardzo ograniczyć ryzyko',
          body: [
            'Nurkowanie zawsze będzie sportem wymagającym odpowiedzialności. Nie jesteśmy w stanie przewidzieć każdej sytuacji pod wodą.',
            'Ale możemy ogromnie zmniejszyć ryzyko poprzez: dobre szkolenie, regularne ćwiczenie umiejętności, nurkowanie zgodnie z limitami, rozsądne decyzje i uczciwe podejście do własnych możliwości. Bo pod wodą naprawdę najważniejsze nie jest to, jak głęboko schodzisz. Najważniejsze jest to, żeby bezpiecznie wrócić na powierzchnię.',
            'Źródła i informacje wykorzystane w artykule opierają się m.in. na publikacjach Associated Press, Divernet, Dive Magazine oraz doniesieniach dotyczących śledztwa po wypadku na Malediwach.'
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

export function getBlogPostById(id: string, language: BlogLanguage): BlogPost | null {
  return blogPosts[language].find((post) => post.id === id) ?? null;
}
