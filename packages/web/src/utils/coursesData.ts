export interface CourseTranslations {
  en: {
    title: string;
    description: string;
    price: string;
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
  image: string;
  translations: CourseTranslations;
}

// Public image paths (served from packages/web/public/images)
const img = {
  image1: "/images/AdobeStock_578852486.jpeg",
  image2: "/images/pexels-pia-3046637.jpg",
  image3: "/images/Catalina_0416_011.jpg",
  image4: "/images/francisco-jesus-navarro-hernandez-dtCTfjTEOgg-unsplash.jpg",
  image5: "/images/_MG_1176.jpg",
  image6: "/images/pexels-leonardo-lamas-32247393-7001702.jpg",
};

export const courses: Course[] = [
  {
    id: 0,
    image: img.image6,
    translations: {
      en: {
        title: "PADI Discover Scuba Diving",
        price: "Price: £50",
        description:
          "Experience scuba diving for the first time! Discover what it's like to breathe underwater and explore a whole new world — no certification required.",
        fullDescription: {
          overview:
            "Have you always wanted to try scuba diving but were not ready to commit to a full course? The PADI Discover Scuba Diving program is the perfect first step. Led by our experienced PADI instructors at a safe and scenic dive site, this beginner-friendly session gives you a real taste of underwater exploration.",
          prerequisites: [
            "You must be at least 10 years old",
            "Basic swimming skills recommended",
            "In good physical health",
            "No prior experience with scuba diving is required",
          ],
          whatYouWillLearn: [
            "How to use scuba diving equipment",
            "What it's like to breathe underwater",
            "Key safety and communication skills",
            "Basic diving techniques like clearing your mask and equalizing pressure",
            "How to move and control buoyancy underwater",
            "How to take the next step toward full PADI certification",
          ],
          howItWorks:
            "The session includes a safety briefing, shallow-water practice, and a guided open water experience with an instructor.",
        },
      },
      pl: {
        title: "PADI Discover Scuba Diving",
        price: "Cena: £50",
        description:
          "Zanurkuj po raz pierwszy! Odkryj, jak to jest oddychać pod wodą i poznaj fascynujący świat nurkowania — bez certyfikatu.",
        fullDescription: {
          overview:
            "Zawsze marzyłeś o nurkowaniu, ale nie byłeś gotów na pełny kurs? Program PADI Discover Scuba Diving to idealny sposób na rozpoczęcie przygody.",
          prerequisites: [
            "Minimalny wiek: 10 lat",
            "Podstawowe umiejętności pływania zalecane",
            "Dobra kondycja fizyczna",
            "Brak wcześniejszego doświadczenia nie jest wymagany",
          ],
          whatYouWillLearn: [
            "Obsługę podstawowego sprzętu nurkowego",
            "Jak oddychać pod wodą",
            "Podstawowe zasady bezpieczeństwa i komunikacji",
            "Techniki, takie jak oczyszczanie maski i wyrównywanie ciśnienia",
            "Kontrolę pływalności pod wodą",
            "Pierwszy krok w kierunku pełnego certyfikatu PADI",
          ],
          howItWorks:
            "Instruktaż, praktyka w płytkiej wodzie oraz nurkowanie w otwartych wodach pod okiem instruktora.",
        },
      },
    },
  },
  {
    id: 1,
    image: img.image1,
    translations: {
      en: {
        title: "PADI Open Water Diver",
        price: "Price: £525",
        description:
          "The world's most popular scuba diving certification course for beginners.",
        fullDescription: {
          overview:
            "The PADI Open Water Diver course is your gateway to exploring the underwater world. This comprehensive course teaches essential dive theory, safety procedures, and underwater skills.",
          prerequisites: [
            "You must be at least 10 years old",
            "Able to swim",
            "In good physical health",
          ],
          whatYouWillLearn: [
            "Basic scuba skills and safety",
            "Equipment setup and use",
            "Buoyancy control and underwater navigation",
          ],
          howItWorks:
            "Includes knowledge development, confined water sessions, and open water dives.",
        },
      },
      pl: {
        title: "PADI Open Water Diver",
        price: "Cena: £525",
        description:
          "Najpopularniejszy na świecie kurs certyfikacyjny dla początkujących nurków.",
        fullDescription: {
          overview:
            "PADI Open Water Diver to Twój wstęp do podwodnego świata. Kurs obejmuje teorię, zasady bezpieczeństwa i umiejętności podwodne.",
          prerequisites: [
            "Minimalny wiek: 10 lat",
            "Umiejętność pływania",
            "Dobra kondycja fizyczna",
          ],
          whatYouWillLearn: [
            "Podstawowe umiejętności nurkowe i bezpieczeństwo",
            "Konfiguracja i korzystanie ze sprzętu",
            "Kontrola pływalności i nawigacja pod wodą",
          ],
          howItWorks:
            "Zawiera teorię, zajęcia w wodzie basenowej oraz nurkowania na wodach otwartych.",
        },
      },
    },
  },
  {
    id: 2,
    image: img.image2,
    translations: {
      en: {
        title: "PADI Advanced Open Water Diver",
        price: "Price: £350",
        description:
          "Build on your skills and dive deeper with five adventure dives including deep and navigation.",
        fullDescription: {
          overview:
            "The Advanced Open Water Diver course helps you gain more confidence and enhance your scuba skills through different Adventure Dives.",
          prerequisites: [
            "Certified Open Water Diver",
            "Minimum age: 12 years",
          ],
          whatYouWillLearn: [
            "Five adventure dives including deep and underwater navigation",
            "Options such as night, wreck, or peak performance buoyancy",
          ],
          howItWorks:
            "Plan your learning path with your instructor and complete five adventure dives with practical, hands-on training.",
        },
      },
      pl: {
        title: "PADI Advanced Open Water Diver",
        price: "Cena: £350",
        description:
          "Rozwiń umiejętności i nurkuj głębiej. Pięć nurkowań przygodowych, w tym głębokie i nawigacyjne.",
        fullDescription: {
          overview:
            "Kurs Advanced Open Water Diver pomaga zdobyć większą pewność siebie i rozwinąć umiejętności nurkowe poprzez różne nurkowania przygodowe.",
          prerequisites: [
            "Certyfikat Open Water Diver",
            "Minimalny wiek: 12 lat",
          ],
          whatYouWillLearn: [
            "Pięć nurkowań przygodowych, w tym głębokie i nawigacyjne",
            "Opcje: nocne, wrakowe lub doskonała pływalność",
          ],
          howItWorks:
            "Wspólnie z instruktorem zaplanujesz ścieżkę nauki i zrealizujesz pięć nurkowań przygodowych w praktycznej formie.",
        },
      },
    },
  },
  {
    id: 3,
    image: img.image3,
    translations: {
      en: {
        title: "PADI Rescue Diver",
        price: "Price: £380",
        description:
          "Prevent and manage problems in the water and build confidence in your skills.",
        fullDescription: {
          overview:
            "The PADI Rescue Diver course is challenging and rewarding, expanding your awareness of diver safety.",
          prerequisites: [
            "Minimum age: 12 years",
            "Advanced Open Water Diver",
            "Emergency First Response within the past 24 months",
          ],
          whatYouWillLearn: [
            "Self‑rescue and recognizing stress in other divers",
            "Emergency management and equipment",
            "Rescuing panicked and unresponsive divers",
          ],
          howItWorks:
            "Classroom learning, confined‑water practice, and open‑water rescue scenarios to build confidence and preparedness.",
        },
      },
      pl: {
        title: "PADI Rescue Diver",
        price: "Cena: £380",
        description:
          "Zapobiegaj i zarządzaj problemami w wodzie, zwiększając pewność siebie.",
        fullDescription: {
          overview:
            "Kurs PADI Rescue Diver jest wymagający i satysfakcjonujący, poszerza świadomość bezpieczeństwa nurków.",
          prerequisites: [
            "Minimalny wiek: 12 lat",
            "Advanced Open Water Diver",
            "Emergency First Response w ciągu ostatnich 24 miesięcy",
          ],
          whatYouWillLearn: [
            "Samoratowanie i rozpoznawanie stresu u innych nurków",
            "Zarządzanie sytuacjami awaryjnymi i sprzętem",
            "Ratowanie panikujących i nieprzytomnych nurków",
          ],
          howItWorks:
            "Zajęcia teoretyczne, praktyka w kontrolowanych warunkach oraz scenariusze ratunkowe na wodach otwartych.",
        },
      },
    },
  },
  {
    id: 4,
    image: img.image4,
    translations: {
      en: {
        title: "PADI Divemaster",
        price: "Price: £700",
        description:
          "Start your professional diving journey and develop leadership-level skills.",
        fullDescription: {
          overview:
            "The PADI Divemaster is the first professional level, preparing you for leadership roles.",
          prerequisites: [
            "At least 18 years old",
            "Rescue Diver certification",
            "40 logged dives to begin, 60 to certify",
          ],
          whatYouWillLearn: [
            "Leadership, supervision, and advanced diving skills",
          ],
          howItWorks:
            "Workshops, practical assessments, and student assistance under instructor supervision.",
        },
      },
      pl: {
        title: "PADI Divemaster",
        price: "Cena: £700",
        description:
          "Rozpocznij profesjonalną ścieżkę nurkową i rozwijaj umiejętności przywódcze.",
        fullDescription: {
          overview:
            "PADI Divemaster to pierwszy poziom profesjonalnego szkolenia przygotowujący do ról przywódczych.",
          prerequisites: [
            "Wiek co najmniej 18 lat",
            "Certyfikat Rescue Diver",
            "40 zalogowanych nurkowań na start, 60 do certyfikacji",
          ],
          whatYouWillLearn: [
            "Umiejętności przywódcze i zaawansowane umiejętności nurkowe",
          ],
          howItWorks:
            "Warsztaty, oceny praktyczne i asysta instruktorom podczas zajęć.",
        },
      },
    },
  },
  {
    id: 5,
    image: img.image5,
    translations: {
      en: {
        title: "PADI Specialty Courses",
        price: "From £180",
        description:
          "Enhance your skills with specialties like Night, Wreck, and Nitrox.",
        fullDescription: {
          overview:
            "Specialty Diver courses let you explore diving in different conditions and develop specific skills.",
          prerequisites: [
            "Most specialties require Open Water Diver certification.",
          ],
          whatYouWillLearn: [
            "Techniques for night, deep, wreck, and enriched air (Nitrox) diving",
          ],
          howItWorks:
            "Mix of theory, practical skills, and dives focused on the chosen specialty.",
        },
      },
      pl: {
        title: "Kursy Specjalistyczne PADI",
        price: "Od £180",
        description:
          "Rozwijaj umiejętności w specjalizacjach takich jak nocne, wrakowe i Nitrox.",
        fullDescription: {
          overview:
            "Kursy specjalistyczne pozwalają poznać różne warunki nurkowe i rozwijać konkretne umiejętności.",
          prerequisites: [
            "Większość specjalizacji wymaga certyfikatu Open Water Diver.",
          ],
          whatYouWillLearn: [
            "Techniki dla nurkowań nocnych, głębokich, wrakowych i Nitrox",
          ],
          howItWorks:
            "Połączenie teorii, praktyki i nurkowań z instruktorem dla wybranej specjalizacji.",
        },
      },
    },
  },
];
