// src/utils/coursesData.ts
import image1 from "../assets/images/AdobeStock_578852486.jpeg";
import image2 from "../assets/images/pexels-pia-3046637.jpg";
import image3 from "../assets/images/Catalina_0416_011.jpg";
import image4 from "../assets/images/francisco-jesus-navarro-hernandez-dtCTfjTEOgg-unsplash.jpg";
import image5 from "../assets/images/_MG_1176.jpg";
import image6 from "../assets/images/pexels-leonardo-lamas-32247393-7001702.jpg"

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

export const courses: Course[] = [
  {
    id: 0,
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
    image: image4,
    translations: {
      en: {
        title: "PADI Divemaster",
        price: "Price: £700",
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
        price: "Cena: £700",
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
    image: image5,
    translations: {
      en: {
        title: "PADI Specialty Courses",
        price: "From £180",
        description:
          "Enhance your skills with specialties like Night Diving, Wreck Diving, Nitrox, and more.",
        fullDescription: {
          overview:
            "PADI Specialty Diver courses help you explore diving in different conditions and develop specific skills tailored to your interests.",
          prerequisites:["Most specialty courses require an Open Water Diver certification. Specific prerequisites vary by specialty."],
            
          whatYouWillLearn:["Techniques and considerations for specialized dives like night, deep, wreck, enriched air (Nitrox), and more."],
          howItWorks:
            "Courses include a mix of theory, practical skills, and dives with your instructor focused on the chosen specialty.",
        },
      },
      pl: {
        title: "Kursy specjalistyczne PADI",
        price: "Od £180",
        description:
          "Udoskonal swoje umiejętności dzięki specjalizacjom takim jak nurkowanie nocne, nurkowanie wrakowe, Nitrox i inne.",
        fullDescription: {
          overview:
            "Kursy PADI Specialty Diver pomagają eksplorować nurkowanie w różnych warunkach i rozwijać konkretne umiejętności dostosowane do Twoich zainteresowań.",
          prerequisites:["Większość kursów specjalistycznych wymaga certyfikatu Open Water Diver. Konkretne wymagania różnią się w zależności od specjalności."],
        
          whatYouWillLearn:["Techniki i uwagi dotyczące specjalistycznych nurkowań, takich jak nurkowanie nocne, głębokie, wrakowe, wzbogacone powietrze (Nitrox) i inne."],
          howItWorks:
            "Kursy obejmują połączenie teorii, umiejętności praktycznych i nurkowań z instruktorem skoncentrowanych na wybranej specjalności.",
        },
      },
    },
  },
];
