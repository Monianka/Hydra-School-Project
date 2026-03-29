// src/utils/coursesData.ts
import image1 from "../assets/images/AdobeStock_578852486.jpeg";
import image2 from "../assets/images/pexels-pia-3046637.jpg";
import image3 from "../assets/images/Catalina_0416_011.jpg";
import image4 from "../assets/images/francisco-jesus-navarro-hernandez-dtCTfjTEOgg-unsplash.jpg";
import image5 from "../assets/images/_MG_1176.jpg";
import image6 from "../assets/images/pexels-leonardo-lamas-32247393-7001702.jpg";
import image7 from "../assets/images/AdobeStock_217866579.jpeg";
import image8 from "../assets/images/pexels-ayman-zaki-6858230(2).jpg";
import image9 from "../assets/images/PADI-UTILA-8-2019-01320_r1.jpg";

export interface CourseTranslations {
  en: {
    title: string;
    description: string;
    price: string;
    duration?: string;
    fullDescription?: {
      overview: string;
      prerequisites: string[];
      whatYouWillLearn: string[];
      howItWorks: string;
    };
  };
  pl: {
    title: string;
    description: string;
    price: string;
    duration?: string;
    fullDescription?: {
      overview: string;
      prerequisites: string[];
      whatYouWillLearn: string[];
      howItWorks: string;
    };
  };
}

export interface Course {
  id: number;
  slug?: string;
  image: string;
  translations: CourseTranslations;
}

export const courses: Course[] = [
  {
    id: 0,
    slug: "padi-discover-scuba-diving",
    image: image6,
    translations: {
      en: {
        title: "PADI Discover Scuba Diving",
        price: "Price: £50",
        description:
          "Experience scuba diving for the first time! Discover what it’s like to breathe underwater and explore a whole new world — no certification required.",
        fullDescription: {
          overview:
            "Have you always wanted to try scuba diving but were not ready to commit to a full course?The PADI Discover Scuba Diving program is the perfect first step. Led by our experienced PADI instructors at a safe and scenic dive site in Portstewart, this beginner-friendly session gives you a real taste of underwater exploration.Although it’s not a certification course, it’s a thrilling introduction to scuba diving that can count toward your PADI Open Water certification if you continue.",
          prerequisites:["You must be at least 10 years old", "Basic swimming skills recommended", "In good physical health", "No prior experience with scuba diving is required"],
          whatYouWillLearn:["How to use scuba diving equipment", "What it’s like to breathe underwater", "Key safety and communication skills", "Basic diving techniques like clearing your mask and equalizing pressure", "How to move and control buoyancy underwater", "How to take the next step toward full PADI certification"],
          howItWorks:
            "The course includes five confined water sessions and four open water dives at a local dive site. Training is flexible and performance-based.",
        },
      },
      pl: {
        title: "PADI Discover Scuba Diving",
        price: "Cena: £50",
        description:
          "Zanurkuj po raz pierwszy! Odkryj, jak to jest oddychać pod wodą i poznaj fascynujący świat nurkowania — bez certyfikatu i bez stresu.",
        fullDescription: {
          overview:
            "Zawsze marzyłeś o nurkowaniu, ale nie byłeś gotów na pełny kurs? Program PADI Discover Scuba Diving to idealny sposób na rozpoczęcie przygody.Pod opieką doświadczonego instruktora PADI, na bezpiecznym i malowniczym miejscu nurkowym w Portstewart, spróbujesz prawdziwego nurkowania – nawet jeśli nigdy wcześniej nie miałeś na sobie sprzętu." +
"To nie jest kurs certyfikacyjny, ale może być pierwszym krokiem do zdobycia uprawnień nurkowych PADI.",
          prerequisites:["Minimalny wiek: 10 lat", "Podstawowe umiejętności pływania zalecane", "Dobra kondycja fizyczna", "Brak wcześniejszego doświadczenia w nurkowaniu nie jest wymagany"],
          whatYouWillLearn:["Obsługę podstawowego sprzętu nurkowego", "Jak oddychać pod wodą", "Podstawowe zasady bezpieczeństwa i komunikacji", "Techniki nurkowania, takie jak oczyszczanie maski i wyrównywanie ciśnienia", "Poruszanie się i kontrola pływalności pod wodą", "Jak zrobić pierwszy krok w kierunku pełnego certyfikatu PADI"],
          howItWorks:
            "Instruktaż i omówienie sprzętu, praktyka w płytkiej wodzie, nurkowanie pod okiem instruktora w otwartych wodach. Wszystko w bezpiecznym i przyjaznym środowisku.",
        },
      },
    },
  },
  {
    id: 1,
    slug: "padi-open-water-diver",
    image: image1,
    translations: {
      en: {
        title: "PADI Open Water Diver",
        price: "Price: £525",
        description:
          "The world's most popular scuba diving certification course for beginners.",
        fullDescription: {
          overview:
            "The PADI Open Water Diver course is your gateway to exploring the underwater world. This comprehensive course teaches you essential dive theory, safety procedures, and underwater skills.",
          prerequisites:["You must be at least 10 years old", "Able to swim", "In good physical health", "No prior experience with scuba diving is required"],
          whatYouWillLearn:["Basic scuba diving theory, confined water dives to learn basic scuba skills, and open water dives to review your skills and explore."],
          howItWorks:
            "The course includes confined water sessions and four open water dives at a local dive site. Training is flexible and performance-based.",
        },
      },
      pl: {
        title: "PADI Open Water Diver",
        price: "Cena: £525",
        description:
          "Najpopularniejszy na świecie kurs certyfikacji nurkowej dla początkujących.",
        fullDescription: {
          overview:
            "Kurs PADI Open Water Diver to Twoja brama do odkrywania podwodnego świata.",
          prerequisites:["Musisz mieć co najmniej 10 lat", "Umieć pływać", "Być w dobrej kondycji fizycznej", "Brak wcześniejszego doświadczenia w nurkowaniu nie jest wymagany"],
          whatYouWillLearn:["Podstawy teorii nurkowania, nurkowania w kontrolowanych warunkach, aby nauczyć się podstawowych umiejętności nurkowych, oraz nurkowania na wodach otwartych, aby przećwiczyć swoje umiejętności i odkrywać."],
          howItWorks:
            "Kurs obejmuje sesje w wodach basenopodobnych i cztery nurkowania na wodach otwartych.",
        },
      },
    },
  },
  {
    id: 2,
    slug: "padi-advanced-open-water-diver",
    image: image2,
    translations: {
      en: {
        title: "PADI Advanced Open Water Diver",
        price: "Price: £350",
        description:
          "Build on your skills and dive deeper. This course includes five adventure dives such as deep and navigation dives.",
        fullDescription: {
          overview:
            "The Advanced Open Water Diver course helps you gain more confidence and enhance your scuba skills through different Adventure Dives.",
          prerequisites:["You must be a certified Open Water Diver", "Minimum age: 12 years old"],
          whatYouWillLearn:["Five adventure dives including a deep dive, an underwater navigation dive, and three others such as night, wreck, or peak performance buoyancy dives."],
          howItWorks:
            "You'll plan your learning path with your instructor by choosing from a long list of Adventure Dives. Training is practical and hands-on.",
        },
      },
      pl: {
        title: "PADI Advanced Open Water Diver",
        price: "Cena: £350",
        description:
          "Rozwiń swoje umiejętności i nurkuj głębiej. Ten kurs obejmuje pięć nurkowań przygodowych, w tym nurkowanie głębokie i nawigacyjne.",
        fullDescription: {
          overview:
            "Kurs Advanced Open Water Diver pomaga zdobyć większą pewność siebie i rozwinąć umiejętności nurkowe poprzez różne nurkowania przygodowe.",
          prerequisites:["Musisz być certyfikowanym nurkiem Open Water Diver.", " Minimalny wiek: 12 lat."],
          whatYouWillLearn:["Pięć nurkowań przygodowych, w tym nurkowanie głębokie, nawigacyjne oraz trzy inne, takie jak nurkowanie nocne, wrakowe lub nurkowanie z doskonałą pływalnością."],
          howItWorks:
            "Zaplanujesz swoją ścieżkę nauki z instruktorem, wybierając z obszernej listy nurkowań przygodowych. Szkolenie jest praktyczne i hands-on.",
        },
      },
    },
  },
  {
    id: 3,
    slug: "padi-rescue-diver",
    image: image3,
    translations: {
      en: {
        title: "PADI Rescue Diver",
        price: "Price: £380",
        description:
          "Learn to prevent and manage problems in the water and become more confident in your diving skills.",
        fullDescription: {
          overview:
            "The PADI Rescue Diver course is one of the most challenging, yet rewarding courses you'll take. It expands your awareness of diver safety.",
          prerequisites:["You must be at least 12 years old", "A certified Advanced Open Water Diver", "Emergency First Response training within the past 24 months"],  
          whatYouWillLearn:["Self-rescue, recognizing and managing stress in other divers, emergency management and equipment, rescuing panicked and unresponsive divers."],
          howItWorks:
            "A combination of classroom learning, confined water practice, and open water rescue scenarios designed to build your confidence and preparedness.",
        },
      },
      pl: {
        title: "PADI Rescue Diver",
        price: "Cena: £380",
        description:
          "Naucz się zapobiegać i zarządzać problemami w wodzie oraz zyskaj pewność siebie w swoich umiejętnościach nurkowych.",
        fullDescription: {
          overview:
            "Kurs PADI Rescue Diver jest jednym z najbardziej wymagających, ale i satysfakcjonujących kursów, które możesz odbyć. Poszerza Twoją świadomość bezpieczeństwa nurków.",
          prerequisites:["Musisz mieć co najmniej 12 lat", "Być certyfikowanym nurkiem Advanced Open Water Diver", "Ukończyć szkolenie Emergency First Response w ciągu ostatnich 24 miesięcy"],
         
          whatYouWillLearn:["Samoratowanie, rozpoznawanie i zarządzanie stresem u innych nurków, zarządzanie sytuacjami awaryjnymi i sprzętem, ratowanie panikujących i nieprzytomnych nurków."],
          howItWorks:
            "Kurs łączy w sobie zajęcia teoretyczne, praktykę w kontrolowanych warunkach wodnych oraz scenariusze ratunkowe w otwartych wodach, mające na celu zwiększenie Twojej pewności siebie i przygotowania.",
        },
      },
    },
  },
  {
    id: 4,
    slug: "padi-divemaster",
    image: image4,
    translations: {
      en: {
        title: "PADI Divemaster",
        price: "Price: £800",
        description:
          "Start your professional diving journey. Work closely with a PADI Instructor to expand your dive knowledge and hone your skills.",
        fullDescription: {
          overview:
            "The PADI Divemaster course is your first level of professional training, preparing you for leadership roles in diving.",
          prerequisites:["You must be at least 18 years old", "A certified Rescue Diver", "40 logged dives to begin, and 60 dives to earn certification."],
          whatYouWillLearn:["Leadership skills in diving through theory classes, self-study, water skill exercises, and training exercises."],
          howItWorks:
            "Safety Briefing – Introduction to equipment, dive basics, and safety rules, Shallow Water Practice – Try breathing and moving in a shallow, controlled environment, Guided Sea Dive – Experience a real dive in open water at our local site,All Equipment Included – We provide full gear: wetsuit, mask, fins, regulator, BCD, tank",
        },
      },
      pl: {
        title: "PADI Divemaster",
        price: "Cena: £800",
        description:
          "Rozpocznij swoją profesjonalną podróż nurkową. Ściśle współpracuj z instruktorem PADI, aby poszerzyć swoją wiedzę nurkową i udoskonalić umiejętności.",
        fullDescription: {
          overview:
            "Kurs PADI Divemaster to Twój pierwszy poziom profesjonalnego szkolenia, przygotowujący do ról przywódczych w nurkowaniu.",
          prerequisites:["Musisz mieć ukończone 18 lat", "Być certyfikowanym nurkiem Rescue Diver", "Zalogowane 40 nurkowań na początek oraz 60 nurkowań, aby uzyskać certyfikat."],
           
          whatYouWillLearn:["Umiejętności przywódcze w nurkowaniu poprzez zajęcia teoretyczne i samodzielne, ćwiczenia umiejętności wodnych i wytrzymałościowych oraz ćwiczenia treningowe."],
          howItWorks:
            "Kurs obejmuje warsztaty, oceny praktyczne i planowanie nurkowań w rzeczywistych warunkach. Będziesz asystować instruktorom przy studentach i prowadzić nurkowania.",
        },
      },
    },
  },
  {
    id: 5,
    slug: "padi-deep-diver",
    image: image5,
    translations: {
      en: {
        title: "PADI Deep Diver",
        price: "£250",
        duration: "2–3 days",
        description:
          "Unlock the ocean's greatest mysteries. Venture beyond 18 metres and discover an entirely different world — dramatic walls, eerie wrecks, and profound silence. The deep is calling.",
        fullDescription: {
          overview:
            "Some of the ocean's most breathtaking secrets lie beyond the recreational limit of 18 metres. Haunting shipwrecks, dramatic underwater drop-offs, vivid marine life found only at depth — these are the rewards that await those who dare to go deeper.\n\nThe PADI Deep Diver Specialty course is your key to unlocking this extraordinary world. You'll learn to plan and execute dives down to 40 metres safely and confidently, understanding the unique challenges — and the unparalleled rewards — of deep diving. Under the expert guidance of our PADI instructor, this course transforms curious divers into capable, confident deep-water explorers.\n\nOnce you've tasted the deep, you'll never look at the surface the same way again.",
          prerequisites: [
            "Certified PADI Open Water Diver (or equivalent)",
            "Minimum age: 15 years old",
            "In good physical health",
            "Recommended: at least 10 logged dives before the course",
          ],
          whatYouWillLearn: [
            "How to plan and execute safe deep dives down to 40 metres",
            "The effects of nitrogen narcosis — and how to recognise and manage them",
            "Gas supply monitoring and conservative consumption strategies at depth",
            "Emergency procedures specific to deep diving environments",
            "How to use dive tables and dive computers for deep dive planning",
            "Delayed Surface Marker Buoy (DSMB) deployment for safe, controlled ascents",
          ],
          howItWorks:
            "The course combines knowledge development sessions with four open water training dives. Starting with a theory briefing on dive planning, depth management, and narcosis awareness, you'll then progressively dive deeper alongside your instructor — building confidence dive by dive, all the way to the full 40-metre experience. All dives take place at our local sites along the dramatic Causeway Coast, where stunning underwater topography makes every deep dive an unforgettable adventure.",
        },
      },
      pl: {
        title: "PADI Deep Diver",
        price: "£250",
        duration: "2–3 dni",
        description:
          "Odblokuj największe tajemnice oceanu. Zejdź poniżej 18 metrów i odkryj zupełnie inny świat — dramatyczne ściany skalne, mroczne wraki i głęboka cisza. Głębina czeka.",
        fullDescription: {
          overview:
            "Niektóre z najbardziej zapierających dech w piersiach tajemnic oceanu kryją się poniżej 18 metrów. Widmowe wraki statków, dramatyczne podwodne urwiska, tętniące życiem stworzenia spotykane tylko w głębinach — to nagrody czekające na tych, którzy odważą się zejść głębiej.\n\nKurs specjalistyczny PADI Deep Diver to Twój klucz do odkrycia tego niezwykłego świata. Nauczysz się planować i realizować nurkowania do głębokości 40 metrów w sposób bezpieczny i pewny, rozumiejąc wyjątkowe wyzwania — i niezrównane piękno — jakie niesie ze sobą głębokie nurkowanie. Pod okiem doświadczonego instruktora PADI, ten kurs przekształci Cię w zdolnego, pewnego siebie eksploratora głębin.\n\nGdy raz zasmakujesz głębi, nigdy już nie spojrzysz na powierzchnię tak samo.",
          prerequisites: [
            "Certyfikat PADI Open Water Diver (lub równoważny)",
            "Minimalny wiek: 15 lat",
            "Dobra kondycja fizyczna",
            "Zalecane: co najmniej 10 zalogowanych nurkowań przed kursem",
          ],
          whatYouWillLearn: [
            "Jak planować i bezpiecznie realizować nurkowania do głębokości 40 metrów",
            "Efekty narkozy azotowej — jak je rozpoznawać i jak sobie z nimi radzić",
            "Monitorowanie zapasu gazu i strategie jego oszczędzania na głębokości",
            "Procedury awaryjne specyficzne dla głębokich nurkowań",
            "Obsługa tablic dekompresyjnych i komputerów nurkowych przy planowaniu głębokich nurkowań",
            "Wypuszczanie boi DSMB (Delayed Surface Marker Buoy) dla bezpiecznych wynurzeń",
          ],
          howItWorks:
            "Kurs łączy sesje teoretyczne z czterema nurkowaniami szkoleniowymi w otwartych wodach. Zaczynasz od briefingu z teorii — planowanie nurkowania, zarządzanie głębokością i świadomość narkozy azotowej — a następnie stopniowo schodzisz coraz głębiej u boku instruktora, budując pewność siebie nurkowanie po nurkowaniu, aż do pełnego doświadczenia na 40 metrach. Wszystkie nurkowania odbywają się w naszych lokalnych miejscach, gdzie spektakularna topografia dna sprawia, że każde głębokie nurkowanie staje się niezapomnianą przygodą.",
        },
      },
    },
  },
  {
    id: 6,
    slug: "padi-enriched-air-nitrox-diver",
    image: image7,
    translations: {
      en: {
        title: "PADI Enriched Air (Nitrox) Diver",
        price: "£180",
        duration: "1-2 days",
        description:
          "Dive longer. Surface fresher. Enriched Air Nitrox is the world's most popular dive specialty — and once you try it, you'll wonder how you ever dived without it.",
        fullDescription: {
          overview:
            "More bottom time. Less surface interval. More dives per day.\n\nEnriched Air Nitrox (EANx) is simply air with a higher percentage of oxygen — typically 32% or 36% instead of the standard 21% — and it changes everything about how you dive. Because you're breathing less nitrogen, your body absorbs less of it on every dive, meaning you can stay down longer and get back in the water sooner.\n\nThe PADI Enriched Air Diver course is the most popular PADI specialty certification in the world, and it's easy to see why. Whether you're planning a liveaboard, a week of holiday diving, or simply want to maximise your time underwater, Nitrox is the single best upgrade you can make to your diving.\n\nThis is a knowledge-focused course — no additional dives required — so you can complete it in a single day and be ready to dive Nitrox immediately.",
          prerequisites: [
            "Certified PADI Open Water Diver (or equivalent)",
            "Minimum age: 12 years old",
            "In good physical health",
          ],
          whatYouWillLearn: [
            "What Enriched Air Nitrox is and how it differs from standard air",
            "The physiology of Nitrox and why it extends your no-decompression limits",
            "How to analyse your cylinder to verify the oxygen content before every dive",
            "How to set your dive computer for Nitrox mixtures (32% and 36%)",
            "Oxygen exposure limits — and how to stay safely within them",
            "Equipment considerations and handling procedures for Nitrox cylinders",
            "How to plan dives and surface intervals using Nitrox",
          ],
          howItWorks:
            "The course is almost entirely knowledge-based and can be completed in a single day. You'll work through the PADI Enriched Air Diver manual or eLearning, then complete a practical session on cylinder analysis — learning to use an oxygen analyser to verify your Nitrox mix before every dive. Once you pass the final exam, you're certified. No additional open water dives are required, though you're welcome to complete your first Nitrox dives with us on the Causeway Coast to put your new knowledge straight into practice.",
        },
      },
      pl: {
        title: "PADI Enriched Air (Nitrox) Diver",
        price:  "£180",
        duration: "1-2 dzień",
        description:
          "Nurkuj dłużej. Wynurz się świeższy. Enriched Air Nitrox to najpopularniejsza specjalność nurkowa na świecie — i gdy raz jej spróbujesz, nie wyobrazisz sobie nurkowania bez niej.",
        fullDescription: {
          overview:
            "Więcej czasu na dnie. Krótsze przerwy powierzchniowe. Więcej nurkowań dziennie.\n\nEnriched Air Nitrox (EANx) to po prostu powietrze z wyższą zawartością tlenu — zazwyczaj 32% lub 36% zamiast standardowych 21% — i zmienia to wszystko w sposobie nurkowania. Ponieważ oddychasz mniejszą ilością azotu, Twój organizm pochłania go mniej podczas każdego nurkowania, co oznacza, że możesz przebywać pod wodą dłużej i szybciej wracać do akcji.\n\nKurs PADI Enriched Air Diver to najpopularniejsza certyfikacja specjalistyczna PADI na świecie — i łatwo zrozumieć dlaczego. Niezależnie od tego, czy planujesz tygodniowe nurkowania urlopowe, czy po prostu chcesz maksymalnie wykorzystać czas pod wodą, Nitrox to najlepsze ulepszenie, jakie możesz wprowadzić do swojego nurkowania.\n\nTo kurs oparty na wiedzy — bez dodatkowych nurkowań — więc możesz go ukończyć w jeden dzień i od razu być gotowy do nurkowania na Nitroksie.",
          prerequisites: [
            "Certyfikat PADI Open Water Diver (lub równoważny)",
            "Minimalny wiek: 12 lat",
            "Dobra kondycja fizyczna",
          ],
          whatYouWillLearn: [
            "Czym jest Enriched Air Nitrox i czym różni się od standardowego powietrza",
            "Fizjologia Nitroxu i dlaczego wydłuża limity bezdekompresyjne",
            "Jak analizować butlę, aby sprawdzić zawartość tlenu przed każdym nurkowaniem",
            "Jak ustawić komputer nurkowy na mieszaniny Nitrox (32% i 36%)",
            "Limity ekspozycji na tlen — i jak bezpiecznie się w nich mieścić",
            "Kwestie dotyczące sprzętu i procedury postępowania z butlami Nitrox",
            "Jak planować nurkowania i przerwy powierzchniowe używając Nitroxu",
          ],
          howItWorks:
            "Kurs jest niemal w całości oparty na wiedzy i można go ukończyć w jeden dzień. Przejdziesz przez podręcznik PADI Enriched Air Diver lub eLearning, a następnie odbędziesz praktyczną sesję analizy butli — naucząc się używać analizatora tlenu do weryfikacji mieszaniny Nitrox przed każdym nurkowaniem. Po zdaniu egzaminu końcowego otrzymujesz certyfikat. Dodatkowe nurkowania w otwartych wodach nie są wymagane, choć możesz wykonać pierwsze nurkowania na Nitroksie razem z nami.",
        },
      },
    },
  },
  {
    id: 7,
    slug: "padi-peak-performance-buoyancy",
    image: image8,
    translations: {
      en: {
        title: "PADI Peak Performance Buoyancy",
        price: "£200",
        duration: "1–2 days",
        description:
          "Float effortlessly. Move gracefully. Master the single skill that separates good divers from great ones — and transform every dive you ever take from this moment on.",
        fullDescription: {
          overview:
            "Ask any experienced diver what makes the biggest difference underwater and they'll tell you the same thing: buoyancy. Perfect buoyancy is the hallmark of a skilled, confident diver. It protects the reef, extends your air supply, makes you easier to dive with, and turns every dive into a serene, weightless experience.\n\nThe PADI Peak Performance Buoyancy course takes you beyond the basics and helps you achieve true mastery — hovering motionless in mid-water, gliding through tight spaces without disturbing a grain of sand, and controlling your position so precisely that your air consumption drops significantly.\n\nWhether you're a newly certified Open Water Diver looking to build real confidence, or an experienced diver who wants to fine-tune their trim and technique, this course will change the way you dive permanently.",
          prerequisites: [
            "Certified PADI Open Water Diver (or equivalent)",
            "Minimum age: 10 years old",
            "In good physical health",
          ],
          whatYouWillLearn: [
            "How to achieve and maintain perfect neutral buoyancy at any depth",
            "Proper weighting and weight distribution for your body type and equipment",
            "Streamlined body positioning and trim to minimise drag and air consumption",
            "How to hover effortlessly in mid-water — horizontally and vertically",
            "Breathing techniques that give you precise buoyancy control",
            "How improved buoyancy reduces your air consumption and extends dive time",
            "Techniques to protect fragile underwater environments by avoiding contact with the reef",
          ],
          howItWorks:
            "The course combines a knowledge development session with two open water dives at our local sites. Your PADI instructor will assess your current weighting and trim, then work with you one-on-one in the water — refining your positioning, coaching your breathing, and guiding you through a series of buoyancy exercises designed to build muscle memory. By your second dive, the difference will be immediately obvious.",
        },
      },
      pl: {
        title: "PADI Peak Performance Buoyancy",
        price: "£200",
        duration: "1–2 dni",
        description:
          "Unoś się bez wysiłku. Poruszaj się z gracją. Opanuj tę jedną umiejętność, która odróżnia dobrych nurków od świetnych — i odmień każde swoje nurkowanie od tej chwili na zawsze.",
        fullDescription: {
          overview:
            "Zapytaj doświadczonego nurka, co robi największą różnicę pod wodą, a odpowie Ci to samo: pływalność. Doskonała kontrola pływalności to znak rozpoznawczy sprawnego, pewnego siebie nurka. Chroni rafę, wydłuża czas na powietrzu, sprawia, że jesteś przyjemniejszym partnerem do nurkowania, i zamienia każde nurkowanie w spokojne, nieważkie doświadczenie.\n\nKurs PADI Peak Performance Buoyancy wykracza poza podstawy i pomaga osiągnąć prawdziwe mistrzostwo — zawisanie nieruchomo w toni wodnej, prześlizgiwanie się przez ciasne przestrzenie bez poruszenia ziarenka piasku, i tak precyzyjne kontrolowanie swojej pozycji, że Twoje zużycie powietrza znacząco spada.\n\nNiezależnie od tego, czy jesteś świeżo certyfikowanym nurkiem Open Water, który chce zbudować prawdziwą pewność siebie, czy doświadczonym nurkiem pragnącym dopracować swój trim i technikę — ten kurs na zawsze zmieni sposób, w jaki nurkujesz.",
          prerequisites: [
            "Certyfikat PADI Open Water Diver (lub równoważny)",
            "Minimalny wiek: 10 lat",
            "Dobra kondycja fizyczna",
          ],
          whatYouWillLearn: [
            "Jak osiągnąć i utrzymać doskonałą neutralną pływalność na każdej głębokości",
            "Prawidłowe obciążenie i rozkład balastu dostosowane do Twojej budowy i sprzętu",
            "Opływowa pozycja ciała i trim minimalizujące opór i zużycie powietrza",
            "Jak bez wysiłku zawisać w toni — poziomo i pionowo",
            "Techniki oddychania zapewniające precyzyjną kontrolę pływalności",
            "Jak lepsza pływalność zmniejsza zużycie powietrza i wydłuża czas nurkowania",
            "Techniki ochrony wrażliwych środowisk podwodnych poprzez unikanie kontaktu z rafą",
          ],
          howItWorks:
            "Kurs łączy sesję teoretyczną z dwoma nurkowaniami w otwartych wodach w naszych lokalnych miejscach. Instruktor PADI oceni Twoje aktualne obciążenie i trim, a następnie będzie pracował z Tobą indywidualnie w wodzie — dopracowując Twoją pozycję, trenując technikę oddychania i prowadząc przez serię ćwiczeń pływalnościowych budujących pamięć mięśniową. Podczas drugiego nurkowania różnica będzie natychmiast widoczna.",
        },
      },
    },
  },
  {
    id: 8,
    slug: "padi-night-diver",
    image: image9,
    translations: {
      en: {
        title: "PADI Night Diver",
        price: "£240",
        duration: "2-3 days",
        description:
          "When the sun goes down, the ocean comes alive. Experience a completely different underwater world — one that most divers never see.",
        fullDescription: {
          overview:
            "Darkness transforms everything. The creatures that hide during the day emerge at night — hunting, glowing, drifting through the water in ways you simply never witness in daylight. Lobsters patrol the rocks. Octopuses stalk the reef. Bioluminescent plankton sparkles in the beam of your torch. Night diving is not just diving in the dark — it is an entirely different experience.\n\nThe PADI Night Diver Specialty course gives you the knowledge, skills, and confidence to explore the underwater world after sunset safely and comfortably. You will learn to navigate by torch and natural light, communicate with dive lights, manage your equipment in low visibility, and handle the unique challenges that come with diving when the world above the surface goes quiet.\n\nThree dives across two evenings at our local sites. By the end, the dark water will feel like home.",
          prerequisites: [
            "Certified PADI Open Water Diver (or equivalent)",
            "Minimum age: 12 years old (divers under 15 must dive at night with a parent or guardian)",
            "In good physical health",
          ],
          whatYouWillLearn: [
            "How to plan and organise safe night dives",
            "Underwater navigation techniques using a torch and compass in low visibility",
            "Dive light signals and communication with your buddy and guide",
            "How to manage your equipment, entries, and exits in the dark",
            "How to identify the nocturnal marine life unique to night dives",
            "Buoyancy and situational awareness techniques specific to night diving",
            "How to handle stress and disorientation in low-visibility conditions",
          ],
          howItWorks:
            "The course consists of a knowledge development session followed by three night dives at our local sites. Your first dive is a guided orientation — getting comfortable with your torch and the environment. The second builds your navigation and communication skills. By the third dive you will be planning and leading your own night dive route. All dives are conducted in small groups with a PADI instructor, so you are never far from a guiding light.",
        },
      },
      pl: {
        title: "PADI Night Diver",
        price: "£240",
        duration: "2 dni",
        description:
          "Gdy słońce zachodzi, ocean ożywa. Doświadcz zupełnie innego podwodnego świata — takiego, którego większość nurków nigdy nie widzi.",
        fullDescription: {
          overview:
            "Ciemność zmienia wszystko. Stworzenia, które w ciągu dnia się ukrywają, nocami wychodzą na żer — polują, świecą, dryfują przez wodę w sposób, którego po prostu nie widzisz przy dzień. Homary patrolują skały. Ośmiornice przemierzają rafę. Bioluminescencyjny plankton iskrzy się w snopie latarki. Nurkowanie nocne to nie jest po prostu nurkowanie w ciemności — to zupełnie inne doświadczenie.\n\nKurs PADI Night Diver daje Ci wiedzę, umiejętności i pewność siebie, aby bezpiecznie i komfortowo eksplorować podwodny świat po zmroku. Nauczysz się nawigować za pomocą latarki i naturalnego światła, komunikować się światłami nurkowymi, obsługiwać sprzęt przy słabej widoczności i radzić sobie z wyjutkowymi wyzwaniami, jakie niesie nurkowanie, gdy świat nad powierzchnią milknie.\n\nTrzy nurkowania przez dwa wieczory na naszych lokalnych akwenach. Po tym czasie ciemna woda będzie czymś w rodzaju drugiego domu.",
          prerequisites: [
            "Certyfikat PADI Open Water Diver (lub równoważny)",
            "Minimalny wiek: 12 lat (nurkowie poniżej 15 lat muszą nurkowan nocnych z rodzicem lub opiekunem)",
            "Dobra kondycja fizyczna",
          ],
          whatYouWillLearn: [
            "Jak planować i organizować bezpieczne nurkowania nocne",
            "Techniki nawigacji podwodnej za pomocą latarki i kompasu przy słabej widoczności",
            "Sygnały świetlne i komunikacja z partnerem i przewodnikiem",
            "Obsługa sprzętu, wejścia i wyjścia z wody w ciemności",
            "Rozpoznawanie nocnej fauny morskiej charakterystycznej dla nurkowania nocnego",
            "Techniki pływalności i świadomości sytuacyjnej specyficzne dla nurkowania nocnego",
            "Jak radzić sobie ze stresem i dezorientacją w warunkach słabej widoczności",
          ],
          howItWorks:
            "Kurs składa się z sesji teoretycznej, a następnie trzech nurkowań nocnych na naszych lokalnych akwenach. Pierwsze nurkowanie to prowadzona orientacja — oswajasz się z latarką i otoczeniem. Drugie rozwija umiejętności nawigacji i komunikacji. Podczas trzeciego nurkowania sam planujesz i prowadzisz trasę. Wszystkie nurkowania odbywają się w małych grupach z instruktorem PADI.",
        },
      },
    },
  },
];
