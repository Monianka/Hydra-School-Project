import type { DiveLocation, DiveLocationLanguage } from '../types/diveLocation';

type DiveLocationDictionary = Record<DiveLocationLanguage, DiveLocation[]>;

export const diveLocations: DiveLocationDictionary = {
  en: [
    {
      slug: 'leybourne-lakes',
      name: 'Leybourne Lakes',
      area: 'Kent',
      websiteUrl: 'https://www.leybournelakewatersports.co.uk',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Leybourne%20Lakes%20Country%20Park%2C%20Kent&t=&z=13&ie=UTF8&iwloc=&output=embed',
      shortDescription: 'A calm Kent training site with easy access for students looking to build confidence in open water closer to London and the South East.',
      intro: 'Leybourne Lakes is a practical inland site for divers who want controlled open-water training without a long expedition drive. It works especially well for skill development, equipment checks, and comfortable progression from pool practice into real open water conditions.',
      description: [
        'For many divers in the South East, Leybourne Lakes is attractive because it keeps logistics simple. Travel time matters when you are scheduling training weekends or repeating skills, and this site is convenient enough to make regular practice realistic.',
        'The environment suits methodical training. Students can focus on buoyancy, trim, communication, descents, and general comfort in open water without the pressure of a more complex expedition-style day. That makes it a strong location for building consistency rather than just collecting dives.'
      ],
      highlights: [
        'Accessible Kent location for South East divers',
        'Useful for entry-level and continuing training',
        'Suitable for repeat practice and skills consolidation'
      ],
      seoDescription: 'Explore Leybourne Lakes as a practical inland dive location in Kent with easy access, open-water training value, and a convenient base for scuba skill development.'
    },
    {
      slug: 'vobster-quay',
      name: 'Vobster Quay',
      area: 'Somerset',
      websiteUrl: 'https://www.vobster.com/',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Vobster%20Quay%2C%20Somerset&t=&z=13&ie=UTF8&iwloc=&output=embed',
      shortDescription: 'A well-known inland quarry in Somerset offering depth, training platforms, and strong value for both recreational development and advanced practice.',
      intro: 'Vobster Quay is one of the UK\'s most recognised inland diving venues. It gives divers the space to train seriously, extend depth experience, and practise in a site that feels purposeful rather than improvised.',
      description: [
        'The site is popular because it supports a wide range of goals. Newer divers can work on structure and discipline, while experienced divers can refine procedures, navigation, buoyancy, and deeper-water comfort in a predictable inland environment.',
        'Vobster is especially useful when you want a full training day with reliable site infrastructure. That combination of operational ease and solid underwater training value is why it remains a regular choice for divers and instructors alike.'
      ],
      highlights: [
        'Established inland quarry with depth progression options',
        'Strong training value for recreational and technical pathways',
        'Well known UK site for structured diving days'
      ],
      seoDescription: 'Discover Vobster Quay in Somerset, a leading UK inland dive quarry with depth, structure, and excellent conditions for scuba training and diver progression.'
    },
    {
      slug: 'stoney-cove',
      name: 'Stoney Cove',
      area: 'Leicestershire',
      websiteUrl: 'https://www.stoneycove.com/',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Stoney%20Cove%2C%20Stoney%20Stanton%2C%20Leicester&t=&z=13&ie=UTF8&iwloc=&output=embed',
      shortDescription: 'A classic UK inland diving destination known for its underwater attractions, site infrastructure, and value for divers progressing from beginner to advanced levels.',
      intro: 'Stoney Cove is one of the most established names in British inland diving. It offers a full-site experience: training, navigation, underwater attractions, and the kind of infrastructure that makes longer dive days smoother and more enjoyable.',
      description: [
        'The site has long been used by divers building confidence beyond basic certification. Its underwater features and recognisable layout make it a strong place to practise navigation, maintain awareness, and get comfortable with more realistic dive planning.',
        'For students and qualified divers alike, Stoney Cove brings together training value and atmosphere. It feels like a destination rather than simply a body of water, which helps turn practice days into genuinely enjoyable diving trips.'
      ],
      highlights: [
        'Well-known inland site with underwater points of interest',
        'Useful for navigation, buoyancy, and continuing education',
        'Strong on-site facilities for full-day dive trips'
      ],
      seoDescription: 'Visit Stoney Cove, one of the UK\'s best-known inland scuba diving sites, with underwater attractions, training value, and strong facilities for divers of all levels.'
    },
    {
      slug: 'capernwray',
      name: 'Capernwray',
      area: 'Lancashire',
      websiteUrl: 'https://www.capernwraydiving.com/',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Capernwray%20Diving%20Centre%2C%20Carnforth&t=&z=13&ie=UTF8&iwloc=&output=embed',
      shortDescription: 'A popular Lancashire inland diving centre with good training value, varied underwater interest, and a welcoming site for developing confidence in open water.',
      intro: 'Capernwray is a favourite for divers who want a site that feels active, training-friendly, and enjoyable to return to. It offers enough structure for deliberate learning while still feeling engaging for qualified divers who simply want a good day underwater.',
      description: [
        'The site is widely appreciated for its balance. It works well for entry-level progression, refresher dives, and continued experience building, while still offering enough interest underwater to keep recreational divers engaged.',
        'For a school or instructor, Capernwray is useful because it supports teaching and comfort at the same time. Students can focus on skills, but the day still feels like real diving rather than a purely clinical exercise.'
      ],
      highlights: [
        'Popular inland diving centre in Lancashire',
        'Strong location for training, refreshers, and guided practice',
        'Appealing mix of structure and enjoyable recreational diving'
      ],
      seoDescription: 'Explore Capernwray Diving Centre in Lancashire, a popular UK inland site for scuba training, confidence building, refresher dives, and enjoyable open-water practice.'
    }
  ],
  pl: [
    {
      slug: 'leybourne-lakes',
      name: 'Leybourne Lakes',
      area: 'Kent',
      websiteUrl: 'https://www.leybournelakewatersports.co.uk',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Leybourne%20Lakes%20Country%20Park%2C%20Kent&t=&z=13&ie=UTF8&iwloc=&output=embed',
      shortDescription: 'Spokojna lokalizacja treningowa w Kent, dobra dla kursantów chcących budować pewność siebie w wodach otwartych blisko Londynu i południowo-wschodniej Anglii.',
      intro: 'Leybourne Lakes to praktyczne miejsce nurkowe dla osób, które chcą trenować w wodach otwartych bez konieczności dalekiego wyjazdu. Sprawdza się szczególnie dobrze przy rozwijaniu umiejętności, sprawdzaniu sprzętu i przechodzeniu z basenu do realnych warunków open water.',
      description: [
        'Dla wielu nurków z południowego wschodu największą zaletą Leybourne Lakes jest wygodna logistyka. Czas dojazdu ma znaczenie przy szkoleniach weekendowych i powtarzaniu ćwiczeń, a ten obiekt pozwala trenować regularnie bez dużego obciążenia organizacyjnego.',
        'Środowisko sprzyja metodycznemu szkoleniu. Kursanci mogą skupić się na pływalności, trymie, komunikacji, zanurzeniach i ogólnym komforcie w wodach otwartych bez presji bardziej złożonego dnia wyjazdowego. To dobre miejsce do budowania powtarzalności i spokojnej pewności siebie.'
      ],
      highlights: [
        'Dogodna lokalizacja w Kent dla nurków z południowego wschodu',
        'Dobre miejsce do szkoleń podstawowych i dalszego rozwoju',
        'Przydatne do regularnego treningu i utrwalania umiejętności'
      ],
      seoDescription: 'Poznaj Leybourne Lakes jako praktyczne śródlądowe miejsce nurkowe w Kent, wygodne do szkoleń, ćwiczeń w wodach otwartych i rozwoju umiejętności nurkowych.'
    },
    {
      slug: 'vobster-quay',
      name: 'Vobster Quay',
      area: 'Somerset',
      websiteUrl: 'https://www.vobster.com/',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Vobster%20Quay%2C%20Somerset&t=&z=13&ie=UTF8&iwloc=&output=embed',
      shortDescription: 'Znany kamieniołom nurkowy w Somerset oferujący głębokość, dobrą wartość szkoleniową i warunki do dalszego rozwoju rekreacyjnego oraz zaawansowanego.',
      intro: 'Vobster Quay to jedno z najbardziej rozpoznawalnych śródlądowych miejsc nurkowych w Wielkiej Brytanii. Daje nurkom przestrzeń do poważnego treningu, pracy nad komfortem na większej głębokości i ćwiczeń w środowisku, które sprzyja świadomemu rozwojowi.',
      description: [
        'To miejsce jest popularne, ponieważ wspiera bardzo różne cele. Mniej doświadczeni nurkowie mogą pracować nad strukturą i dyscypliną nurkowania, a bardziej zaawansowani nad procedurami, nawigacją, pływalnością i komfortem w głębszej wodzie.',
        'Vobster Quay dobrze sprawdza się wtedy, gdy potrzebujesz pełnego dnia szkoleniowego z przewidywalną infrastrukturą na miejscu. Połączenie wygody operacyjnej i realnej wartości treningowej sprawia, że jest to regularny wybór dla instruktorów i nurków.'
      ],
      highlights: [
        'Znany śródlądowy kamieniołom z możliwościami rozwoju głębokościowego',
        'Duża wartość szkoleniowa dla ścieżek rekreacyjnych i bardziej zaawansowanych',
        'Popularne miejsce na uporządkowane dni nurkowe'
      ],
      seoDescription: 'Odkryj Vobster Quay w Somerset, jedno z czołowych brytyjskich śródlądowych miejsc nurkowych z dobrymi warunkami do szkolenia i rozwoju nurków.'
    },
    {
      slug: 'stoney-cove',
      name: 'Stoney Cove',
      area: 'Leicestershire',
      websiteUrl: 'https://www.stoneycove.com/',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Stoney%20Cove%2C%20Stoney%20Stanton%2C%20Leicester&t=&z=13&ie=UTF8&iwloc=&output=embed',
      shortDescription: 'Klasyczne brytyjskie śródlądowe miejsce nurkowe znane z podwodnych atrakcji, infrastruktury i wartości dla nurków od poziomu początkującego po zaawansowany.',
      intro: 'Stoney Cove to jedna z najbardziej rozpoznawalnych nazw w brytyjskim nurkowaniu śródlądowym. Oferuje pełne doświadczenie miejsca nurkowego: szkolenie, nawigację, podwodne atrakcje i zaplecze, które sprawia, że całodniowe nurkowanie jest wygodniejsze i przyjemniejsze.',
      description: [
        'Miejsce od lat wykorzystywane jest przez nurków rozwijających się po podstawowej certyfikacji. Rozpoznawalny układ i charakterystyczne obiekty pod wodą sprawiają, że to dobre środowisko do ćwiczenia nawigacji, świadomości sytuacyjnej i bardziej realistycznego planowania nurkowań.',
        'Dla kursantów i certyfikowanych nurków Stoney Cove łączy wartość szkoleniową z atmosferą prawdziwego celu podróży. Dzięki temu dzień ćwiczeń nie jest tylko technicznym obowiązkiem, ale staje się naprawdę satysfakcjonującą wyprawą nurkową.'
      ],
      highlights: [
        'Znane miejsce śródlądowe z punktami zainteresowania pod wodą',
        'Dobre do ćwiczenia nawigacji, pływalności i dalszej edukacji',
        'Mocne zaplecze na miejscu dla całodniowych wyjazdów nurkowych'
      ],
      seoDescription: 'Odwiedź Stoney Cove, jedno z najbardziej znanych śródlądowych miejsc nurkowych w UK, z atrakcjami podwodnymi, szkoleniem i dobrym zapleczem dla nurków.'
    },
    {
      slug: 'capernwray',
      name: 'Capernwray',
      area: 'Lancashire',
      websiteUrl: 'https://www.capernwraydiving.com/',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Capernwray%20Diving%20Centre%2C%20Carnforth&t=&z=13&ie=UTF8&iwloc=&output=embed',
      shortDescription: 'Popularne centrum nurkowe w Lancashire z dobrą wartością szkoleniową, ciekawym środowiskiem pod wodą i przyjaznym miejscem do budowania pewności siebie.',
      intro: 'Capernwray to ulubione miejsce wielu nurków, którzy chcą połączyć uporządkowane szkolenie z przyjemnym dniem pod wodą. Oferuje wystarczająco dużo struktury do świadomej nauki, a jednocześnie pozostaje angażujące dla certyfikowanych nurków.',
      description: [
        'To miejsce jest cenione za dobry balans. Sprawdza się przy rozwoju początkujących, nurkowaniach odświeżających i budowaniu doświadczenia, a jednocześnie oferuje wystarczająco dużo atrakcji, aby nurkowie rekreacyjni chętnie do niego wracali.',
        'Dla szkoły nurkowania lub instruktora Capernwray jest wartościowe, ponieważ wspiera zarówno proces nauki, jak i komfort kursantów. Uczniowie mogą skupić się na ćwiczeniach, ale cały dzień nadal przypomina prawdziwe nurkowanie, a nie tylko kliniczny trening.'
      ],
      highlights: [
        'Popularne śródlądowe centrum nurkowe w Lancashire',
        'Dobre miejsce do szkoleń, odświeżenia umiejętności i praktyki',
        'Udane połączenie struktury szkoleniowej i przyjemnego nurkowania rekreacyjnego'
      ],
      seoDescription: 'Poznaj Capernwray Diving Centre w Lancashire, popularne miejsce do szkolenia nurkowego, nurkowań odświeżających i budowania pewności siebie w open water.'
    }
  ]
};

export function getDiveLocations(language: DiveLocationLanguage): DiveLocation[] {
  return diveLocations[language];
}

export function getDiveLocationBySlug(slug: string, language: DiveLocationLanguage): DiveLocation | null {
  return diveLocations[language].find((item) => item.slug === slug) ?? null;
}
