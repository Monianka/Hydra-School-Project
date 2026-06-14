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
      nextStep?: string;

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
      nextStep?: string;
    };
  };
}

export interface Course {
  id: number;
  slug?: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  translations: CourseTranslations;
}

export const courses: Course[] = [
  {
    id: 0,
    slug: "padi-discover-scuba-diving",
    image: image6,
    imageWidth: 4032,
    imageHeight: 3024,
    translations: {
      en: {
        title: "PADI Discover Scuba Diving",
        price: "Price: £80",
        duration: "2 hours session",
        description:
          "Experience scuba diving for the first time! Discover what it’s like to breathe underwater and explore a whole new world — no certification required.",
        fullDescription: {
          overview:
            "Have you ever wondered what it feels like to breathe underwater? Discover Scuba Diving is the perfect way to try scuba diving without committing to a full course.You will learn basic safety rules and how to use scuba equipment, followed by your first underwater experience under direct supervision of a PADI Instructor.",
          prerequisites:["You must be at least 10 years old", "Basic swimming skills recommended", "In good physical health", "No prior experience with scuba diving is required"],
          whatYouWillLearn:["How to use scuba diving equipment", "What it’s like to breathe underwater", "Key safety and communication skills", "Basic diving techniques like clearing your mask and equalizing pressure", "How to move and control buoyancy underwater", "How to take the next step toward full PADI certification"],
          howItWorks:
            "Briefing and equipment orientation, confined water practice, and an open water dive under instructor supervision. All in a safe and supportive environment.",
            nextStep: "If you loved your Discover Scuba Diving experience, the next step is to enroll in the PADI Open Water Diver course — the world’s most popular scuba certification for beginners. It’s your gateway to becoming a certified diver and exploring the underwater world with confidence. Ask us about our special offer for Discover Scuba Diving participants who want to take the plunge into full certification!"
        },
      },
      pl: {
        title: "PADI Discover Scuba Diving",
        price: "Cena: £80",
        duration: "2 godziny sesji",
        description:
          "Zanurkuj po raz pierwszy! Odkryj, jak to jest oddychać pod wodą i poznaj fascynujący świat nurkowania — bez certyfikatu i bez stresu.",
        fullDescription: {
          overview:
            "Zawsze zastanawiałeś się, jak to jest oddychać pod wodą? Discover Scuba Diving to idealny sposób, aby spróbować nurkowania bez zobowiązań do pełnego kursu. Podczas zajęć poznasz podstawy bezpieczeństwa i obsługi sprzętu nurkowego, a następnie wejdziesz do wody pod ścisłym nadzorem instruktora PADI. Pierwsze zanurzenie odbywa się w kontrolowanych warunkach – na basenie lub w spokojnej wodzie.",
          prerequisites:["Minimalny wiek: 10 lat", "Podstawowe umiejętności pływania zalecane", "Dobra kondycja fizyczna", "Brak wcześniejszego doświadczenia w nurkowaniu nie jest wymagany"],
          whatYouWillLearn:["Obsługę podstawowego sprzętu nurkowego", "Jak oddychać pod wodą", "Podstawowe zasady bezpieczeństwa i komunikacji", "Techniki nurkowania, takie jak oczyszczanie maski i wyrównywanie ciśnienia", "Poruszanie się i kontrola pływalności pod wodą", "Jak zrobić pierwszy krok w kierunku pełnego certyfikatu PADI"],
          howItWorks:
            "Instruktaż i omówienie sprzętu, praktyka w płytkiej wodzie, nurkowanie pod okiem instruktora w otwartych wodach. Wszystko w bezpiecznym i przyjaznym środowisku.",
            nextStep: "Jeśli spodobało Ci się doświadczenie Discover Scuba Diving, kolejnym krokiem jest zapisanie się na kurs PADI Open Water Diver — najpopularniejszy kurs certyfikacyjny dla początkujących nurków. To Twoja brama do zostania certyfikowanym nurkiem i odkrywania podwodnego świata z pewnością siebie. Zapytaj nas o specjalną ofertę dla uczestników Discover Scuba Diving, którzy chcą kontynuować naukę i zdobyć pełną certyfikację!"
        },
      },
    },
  },
  {
    id: 1,
    slug: "padi-open-water-diver",
    image: image1,
    imageWidth: 6144,
    imageHeight: 4096,
    translations: {
      en: {
        title: "PADI Open Water Diver",
        price: "Price: £525",
        duration: "2-3 days",
        description:
          "The world's most popular scuba diving certification course for beginners.",
        fullDescription: {
          overview:
            "The PADI Open Water Diver course is your gateway to exploring the underwater world. During the course, you will learn everything you need to dive safely up to 18 meters anywhere in the world. This comprehensive course covers not only dive theory but also practical skills that will allow you to enjoy diving with confidence and safety.",
          prerequisites:["You must be at least 10 years old", "Able to swim", "In good physical health", "No prior experience with scuba diving is required"],
          whatYouWillLearn:["Basic scuba diving theory", "Confined water dives to learn basic scuba skills", "Open water dives to review your skills and explore", "PADI's Safe Diving Principles", "Dive planning and risk management", "Basic scuba skills like mask clearing, equalizing, buoyancy control", "Underwater communication and problem-solving", "How to take the first step toward further PADI certification"],
          howItWorks:
            "The course includes theory (eLearning) – completed online at your own pace, confined water sessions, and four open water dives at a local dive site. Training is flexible and performance-based.",
          nextStep: "The next step is to enroll in the PADI Advanced Open Water Diver course"
        },
      },
      pl: {
        title: "PADI Open Water Diver",
        price: "Cena: £525",
        duration: "2-3 dni",
        description:
          "Najpopularniejszy na świecie kurs certyfikacji nurkowej dla początkujących.",
        fullDescription: {
          overview:
            "Kurs PADI Open Water Diver to Twoja brama do odkrywania podwodnego świata.Podczas kursu nauczysz się wszystkiego, czego potrzebujesz, aby bezpiecznie nurkować do głębokości 18 metrów, w dowolnym miejscu na świecie. Ten kompleksowy kurs obejmuje nie tylko teorię nurkowania, ale także praktyczne umiejętności, które pozwolą Ci cieszyć się nurkowaniem z pewnością siebie i bezpieczeństwem.",
          prerequisites:["Musisz mieć co najmniej 10 lat", "Umieć pływać", "Być w dobrej kondycji fizycznej", "Brak wcześniejszego doświadczenia w nurkowaniu nie jest wymagany"],
          whatYouWillLearn:["Podstawy teorii nurkowania", "Nurkowania w kontrolowanych warunkach, aby nauczyć się podstawowych umiejętności nurkowych", "Nurkowania na wodach otwartych, aby przećwiczyć swoje umiejętności i odkrywać.", "Zasad Bezpiecznego Nurkowania PADI", "Planowania nurkowań i zarządzania ryzykiem", "Podstawowych umiejętności nurkowania, takich jak oczyszczanie maski, wyrównywanie ciśnienia, kontrola pływalności", "Komunikacji pod wodą i rozwiązywania problemów", "Jak zrobić pierwszy krok w kierunku dalszej certyfikacji PADI"],
          howItWorks:
            "Kurs obejmuje teorię (eLearning) – uczysz się online we własnym tempie, sesje w wodach basenopodobnych i cztery nurkowania na wodach otwartych. Trening jest elastyczny i oparty na osiągnięciach.",
          nextStep: "Kolejnym krokiem jest zapisanie się na kurs PADI Advanced Open Water Diver!"
        },
      },
    },
  },
  {
    id: 2,
    slug: "padi-advanced-open-water-diver",
    image: image2,
    imageWidth: 4000,
    imageHeight: 6000,
    translations: {
      en: {
        title: "PADI Advanced Open Water Diver",
        price: "Price: £350",
        duration: "2-3 days",
        description:
          "Build on your skills and dive deeper. This is next step after PADI OWD.",
        fullDescription: {
          overview:
            "The Advanced Open Water Diver course helps you gain more confidence and enhance your scuba skills through different Adventure Dives. This course includes five adventure dives such as deep and navigation dives. ",
          prerequisites:["You must be a certified PADI Open Water Diver", "Minimum age: 12 years old"],
          whatYouWillLearn:["Diving up to 30m", "Improved buoyancy", "Underwater navigation"],
          howItWorks:
            "You'll plan your learning path with your instructor by choosing from a long list of Adventure Dives. Training is practical and hands-on.",
          nextStep: "PADI Deep Diver"
        },
      },
      pl: {
        title: "PADI Advanced Open Water Diver",
        price: "Cena: £350",
        duration: "2-3 dni",
        description:
          "Chcesz nurkować głębiej i zdobyć więcej doświadczenia? Ten kurs jest kolejnym krokiem po PADI OWD.",
        fullDescription: {
          overview:
            "Kurs Advanced Open Water Diver pomaga zdobyć większą pewność siebie i rozwinąć umiejętności nurkowe. Kurs obejmuje pięć nurkowań przygodowych, takich jak nurkowanie głębokie i nawigacyjne...Pozostałe nurkowania możesz wybrać (np. wrakowe, nocne, dry suit).",
          prerequisites:["Musisz być certyfikowanym nurkiem Open Water Diver.", " Minimalny wiek: 12 lat."],
          whatYouWillLearn:["Nurkowanie do 30m", "Lepszej kontroli pływalności", "Orientacji pod wodą"],
          howItWorks:
            "Zaplanujesz swoją ścieżkę nauki z instruktorem, wybierając z obszernej listy nurkowań przygodowych. Szkolenie jest praktyczne i hands-on.",
          nextStep: "PADI Deep Diver"
        },
      },
    },
  },
  {
    id: 3,
    slug: "padi-rescue-diver",
    image: image3,
    imageWidth: 7360,
    imageHeight: 4912,
    translations: {
      en: {
        title: "PADI Rescue Diver",
        price: "Price: £380",
        duration: "2-3 days",
        description:
          "Learn to prevent and manage problems in the water and become more confident in your diving skills.",
        fullDescription: {
          overview:
            "The PADI Rescue Diver course is one of the most challenging, yet rewarding courses you'll take. It expands your awareness of diver safety.",
          prerequisites:["You must be at least 12 years old", "A certified Advanced Open Water Diver", "Emergency First Response training within the past 24 months"],  
          whatYouWillLearn:["Self-rescue", "Recognizing and managing stress in other divers", "Emergency management and equipment", "Rescuing panicked and unresponsive divers"],
          howItWorks:
            "A combination of classroom learning, confined water practice, and open water rescue scenarios designed to build your confidence and preparedness Outcome: become a safer and more confident diver.",
        },
      },
      pl: {
        title: "PADI Rescue Diver",
        price: "Cena: £380",
        duration: "2-3 dni",
        description:
          "Naucz się zapobiegać i zarządzać problemami w wodzie oraz zyskaj pewność siebie w swoich umiejętnościach nurkowych.",
        fullDescription: {
          overview:
            "Kurs PADI Rescue Diver jest jednym z najbardziej wymagających, ale i satysfakcjonujących kursów, które możesz odbyć. Poszerza Twoją świadomość bezpieczeństwa nurków.",
          prerequisites:["Musisz mieć co najmniej 12 lat", "Być certyfikowanym nurkiem PADI Advanced Open Water Diver", "Ukończyć szkolenie Emergency First Response w ciągu ostatnich 24 miesięcy"],
         
          whatYouWillLearn:["Samoratowanie", "Rozpoznawanie i zarządzanie stresem u innych nurków", "Zarządzanie sytuacjami awaryjnymi i sprzętem", "Ratowanie panikujących i nieprzytomnych nurków"],
          howItWorks:
            "Kurs łączy w sobie zajęcia teoretyczne, praktykę w kontrolowanych warunkach wodnych oraz scenariusze ratunkowe w otwartych wodach, mające na celu zwiększenie Twojej pewności siebie i przygotowania. Efekt: stajesz się świadomym i odpowiedzialnym nurkiem.",
          nextStep: "PADI Divemaster",
        },
      },
    },
  },
  {
    id: 4,
    slug: "padi-divemaster",
    image: image4,
    imageWidth: 5304,
    imageHeight: 7380,
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
          whatYouWillLearn:["Leadership skills in diving through theory classes", "Self-study", "Water skill exercises", "Training exercises."],
          howItWorks:
            "Safety Briefing – Introduction to equipment, dive basics, and safety rules. Shallow Water Practice – Try breathing and moving in a shallow, controlled environment. Guided Sea Dive – Experience a real dive in open water at our local site. All Equipment Included – We provide full gear: wetsuit, mask, fins, regulator, BCD, tank.",
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
           
          whatYouWillLearn:["Umiejętności przywódcze w nurkowaniu poprzez zajęcia teoretyczne", "Samodzielne studiowanie", "Ćwiczenia umiejętności wodnych", "Ćwiczenia treningowe"],
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
    imageWidth: 5616,
    imageHeight: 3744,
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
    imageWidth: 5472,
    imageHeight: 3072,
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
    imageWidth: 4500,
    imageHeight: 2982,
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
    imageWidth: 8688,
    imageHeight: 5792,
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
