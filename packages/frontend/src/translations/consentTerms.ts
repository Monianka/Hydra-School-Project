export type TermsBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type TermsSection = {
  title: string;
  blocks: TermsBlock[];
};

export const consentTerms: Record<"en" | "pl", TermsSection[]> = {
  en: [
    {
      title: "1. General",
      blocks: [
        { type: "paragraph", text: "These Terms and Conditions apply to all services provided by Hydra-Scuba Diving School, including but not limited to Discover Scuba Diving (DSD), Bubblemaker, Scuba Refresher Programmes, Guided Dives, Open Water Diver, Advanced Open Water Diver, Rescue Diver, Specialty Courses and other diving-related activities." },
        { type: "paragraph", text: "By making a booking, paying a deposit, submitting an online form or accepting these Terms and Conditions electronically, the participant agrees to be bound by these Terms and Conditions." },
      ],
    },
    {
      title: "2. Booking and Payment",
      blocks: [
        { type: "paragraph", text: "A course place is secured only upon receipt of the required deposit." },
        { type: "paragraph", text: "The standard course deposit is £150 unless otherwise stated." },
        { type: "paragraph", text: "The remaining balance must be paid before the start of the course unless agreed otherwise in writing." },
        { type: "paragraph", text: "Hydra reserves the right to refuse participation if payment has not been received." },
      ],
    },
    {
      title: "3. Booking, Cancellation and Rescheduling",
      blocks: [
        { type: "paragraph", text: "Participants may cancel a booking up to 7 days before the scheduled start date." },
        { type: "paragraph", text: "Where cancellation is made more than 7 days before the course start date, payments received may be refunded less any non-recoverable costs already incurred by Hydra." },
        { type: "paragraph", text: "Where cancellation is made less than 7 days before the course start date, the deposit is non-refundable." },
        { type: "paragraph", text: "Course dates may be changed once only." },
        { type: "paragraph", text: "Requests to reschedule must be made at least 7 days before the scheduled course start date." },
        { type: "paragraph", text: "After a booking has been rescheduled once, no further date changes will be permitted." },
        { type: "paragraph", text: "Failure to attend a course without prior notice will result in the loss of all payments made." },
      ],
    },
    {
      title: "4. eLearning and Training Materials",
      blocks: [
        { type: "paragraph", text: "Where eLearning access has been issued, the associated costs are non-refundable." },
        { type: "paragraph", text: "If a participant withdraws from a course after eLearning access has been provided, the eLearning fee will be deducted from any refund that may otherwise be due." },
      ],
    },
    {
      title: "5. Medical Requirements",
      blocks: [
        { type: "paragraph", text: "Participants must complete all required medical questionnaires honestly and accurately." },
        { type: "paragraph", text: "Where required by training standards, participants must obtain medical clearance from a qualified physician prior to participation." },
        { type: "paragraph", text: "Hydra reserves the right to refuse participation where health, fitness or safety concerns exist." },
      ],
    },
    {
      title: "6. Participant Responsibilities",
      blocks: [
        { type: "paragraph", text: "Participants agree to:" },
        { type: "list", items: ["Follow all instructor instructions.", "Comply with all safety procedures.", "Use equipment responsibly.", "Disclose any relevant medical conditions.", "Inform the instructor of any concerns affecting safety."] },
        { type: "paragraph", text: "Participation under the influence of alcohol, drugs or any substance impairing judgement is prohibited." },
      ],
    },
    {
      title: "7. Discover Scuba Diving, Bubblemaker and Introductory Programmes",
      blocks: [
        { type: "paragraph", text: "The instructor is solely responsible for determining whether a participant:" },
        { type: "list", items: ["has demonstrated the necessary skills,", "may continue the programme,", "may progress to deeper water,", "may undertake additional dives,", "may safely continue the activity."] },
        { type: "paragraph", text: "The instructor's decision is final." },
        { type: "paragraph", text: "Payment is for instructor time, equipment use, facilities, supervision and training provided, not for reaching a specific depth or completing a specific dive profile." },
        { type: "paragraph", text: "No refund will be provided if:" },
        { type: "list", items: ["a participant chooses to end the programme early,", "a participant cannot complete the programme due to anxiety, stress, discomfort, equalisation difficulties, lack of confidence, physical fitness, medical reasons or inability to perform required skills,", "additional time is required to complete skills,", "the instructor determines that continuation would be unsafe."] },
        { type: "paragraph", text: "Participants acknowledge that equalisation difficulties are common in diving and do not entitle the participant to a refund." },
      ],
    },
    {
      title: "8. Training Standards and Certification",
      blocks: [
        { type: "paragraph", text: "Payment for a course does not guarantee certification." },
        { type: "paragraph", text: "Certification is awarded only when all required skills, knowledge development, assessments and performance requirements have been successfully completed." },
        { type: "paragraph", text: "If additional training sessions are required, additional charges may apply." },
      ],
    },
    {
      title: "9. Withdrawal from Training",
      blocks: [
        { type: "paragraph", text: "Where a participant voluntarily withdraws from a course after training has commenced, no refund will be provided for completed training days." },
        { type: "paragraph", text: "Hydra may retain payment reflecting:" },
        { type: "list", items: ["instructor time,", "eLearning costs,", "pool fees,", "site entry fees,", "equipment hire,", "certification fees,", "travel expenses,", "administration costs."] },
        { type: "paragraph", text: "For the purpose of calculating training costs, instructor time is valued at £150 per training day." },
      ],
    },
    {
      title: "10. Safety and Instructor Authority",
      blocks: [
        { type: "paragraph", text: "The instructor may suspend, modify or terminate any dive, training session or course where safety concerns exist." },
        { type: "paragraph", text: "No refund will be provided where participation is terminated due to:" },
        { type: "list", items: ["unsafe behaviour,", "failure to follow instructions,", "failure to meet training standards,", "behaviour placing others at risk."] },
      ],
    },
    {
      title: "11. Weather and Operational Changes",
      blocks: [
        { type: "paragraph", text: "Hydra reserves the right to modify, postpone, relocate or cancel activities due to:" },
        { type: "list", items: ["adverse weather,", "unsafe water conditions,", "instructor illness,", "equipment failure,", "insufficient participant numbers,", "circumstances beyond reasonable control."] },
        { type: "paragraph", text: "Alternative dates will be offered where reasonably possible." },
        { type: "paragraph", text: "Hydra is not responsible for travel costs, accommodation expenses, loss of earnings or other indirect costs." },
      ],
    },
    {
      title: "12. Equipment",
      blocks: [
        { type: "paragraph", text: "Participants are responsible for equipment from collection until return." },
        { type: "paragraph", text: "Charges may apply for loss, damage or misuse beyond normal wear and tear." },
      ],
    },
    {
      title: "13. Photography and Media",
      blocks: [
        { type: "paragraph", text: "Hydra may take photographs and videos during activities for training and promotional purposes." },
        { type: "paragraph", text: "Participants may opt out by notifying Hydra before the activity begins." },
      ],
    },
    {
      title: "14. Data Protection",
      blocks: [
        { type: "paragraph", text: "Personal information will be processed in accordance with applicable UK data protection legislation." },
      ],
    },
    {
      title: "15. Liability",
      blocks: [
        { type: "paragraph", text: "Scuba diving is an adventure activity involving inherent risks including serious injury, decompression illness, permanent disability and death." },
        { type: "paragraph", text: "Participants acknowledge and accept these risks." },
        { type: "paragraph", text: "Nothing in these Terms and Conditions limits liability where such limitation is prohibited by law." },
      ],
    },
    {
      title: "16. Governing Law",
      blocks: [
        { type: "paragraph", text: "These Terms and Conditions are governed by the laws of England and Wales." },
        { type: "paragraph", text: "Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales." },
      ],
    },
  ],
  pl: [
    {
      title: "1. Postanowienia ogólne",
      blocks: [
        { type: "paragraph", text: "Niniejszy regulamin dotyczy wszystkich usług świadczonych przez Hydra-Scuba Diving School, w tym programów Discover Scuba Diving (DSD), Bubblemaker, Scuba Refresher, nurkowań rekreacyjnych, kursów PADI oraz innych aktywności nurkowych." },
        { type: "paragraph", text: "Dokonanie rezerwacji, wpłata depozytu, przesłanie formularza zgłoszeniowego lub elektroniczna akceptacja regulaminu oznacza akceptację jego postanowień." },
      ],
    },
    {
      title: "2. Rezerwacja i płatność",
      blocks: [
        { type: "paragraph", text: "Miejsce na kursie zostaje zarezerwowane po wpłacie wymaganego depozytu." },
        { type: "paragraph", text: "Standardowy depozyt wynosi £150, chyba że wskazano inaczej." },
        { type: "paragraph", text: "Pozostała część opłaty musi zostać uregulowana przed rozpoczęciem szkolenia." },
      ],
    },
    {
      title: "3. Rezygnacja i zmiana terminu",
      blocks: [
        { type: "paragraph", text: "Rezygnacja z kursu jest możliwa do 7 dni przed planowaną datą rozpoczęcia." },
        { type: "paragraph", text: "W przypadku rezygnacji zgłoszonej później niż 7 dni przed rozpoczęciem kursu depozyt nie podlega zwrotowi." },
        { type: "paragraph", text: "Termin kursu można przełożyć tylko jeden raz." },
        { type: "paragraph", text: "Prośba o zmianę terminu musi zostać zgłoszona minimum 7 dni przed rozpoczęciem kursu." },
        { type: "paragraph", text: "Po jednorazowej zmianie terminu kolejne zmiany nie będą możliwe." },
        { type: "paragraph", text: "Nieobecność bez wcześniejszego powiadomienia skutkuje utratą wszystkich wpłaconych środków." },
      ],
    },
    {
      title: "4. eLearning i materiały szkoleniowe",
      blocks: [
        { type: "paragraph", text: "Koszt materiałów eLearning nie podlega zwrotowi po przyznaniu dostępu uczestnikowi." },
        { type: "paragraph", text: "W przypadku rezygnacji z kursu koszt materiałów szkoleniowych zostanie potrącony z ewentualnego zwrotu." },
      ],
    },
    {
      title: "5. Wymagania zdrowotne",
      blocks: [
        { type: "paragraph", text: "Uczestnik zobowiązany jest do prawidłowego i zgodnego z prawdą wypełnienia formularzy medycznych." },
        { type: "paragraph", text: "W przypadkach wymaganych standardami szkoleniowymi uczestnik zobowiązany jest dostarczyć zgodę lekarza na nurkowanie." },
        { type: "paragraph", text: "Hydra może odmówić udziału w zajęciach ze względów bezpieczeństwa." },
      ],
    },
    {
      title: "6. Obowiązki uczestnika",
      blocks: [
        { type: "paragraph", text: "Uczestnik zobowiązuje się do:" },
        { type: "list", items: ["przestrzegania poleceń instruktora,", "przestrzegania zasad bezpieczeństwa,", "odpowiedzialnego korzystania ze sprzętu,", "przekazywania prawdziwych informacji zdrowotnych."] },
        { type: "paragraph", text: "Udział pod wpływem alkoholu lub środków odurzających jest zabroniony." },
      ],
    },
    {
      title: "7. Discover Scuba Diving, Bubblemaker i programy próbne",
      blocks: [
        { type: "paragraph", text: "Instruktor samodzielnie ocenia, czy uczestnik:" },
        { type: "list", items: ["opanował wymagane umiejętności,", "może kontynuować program,", "może przejść na większą głębokość,", "może wykonać kolejne nurkowanie,", "może bezpiecznie uczestniczyć w zajęciach."] },
        { type: "paragraph", text: "Decyzja instruktora jest ostateczna." },
        { type: "paragraph", text: "Opłata za program obejmuje czas instruktora, sprzęt, opłaty obiektowe i szkolenie, a nie osiągnięcie określonej głębokości." },
        { type: "paragraph", text: "Zwrot pieniędzy nie przysługuje, jeśli uczestnik:" },
        { type: "list", items: ["sam zrezygnuje z dalszego udziału,", "nie ukończy programu z przyczyn osobistych,", "nie potrafi wyrównać ciśnienia,", "nie opanuje wymaganych umiejętności,", "wymaga dodatkowego czasu na ćwiczenia,", "nie może kontynuować z przyczyn zdrowotnych lub psychologicznych,", "zostanie wycofany z zajęć przez instruktora ze względów bezpieczeństwa."] },
      ],
    },
    {
      title: "8. Certyfikacja",
      blocks: [
        { type: "paragraph", text: "Wniesienie opłaty za kurs nie gwarantuje uzyskania certyfikatu." },
        { type: "paragraph", text: "Certyfikat wydawany jest wyłącznie po spełnieniu wszystkich wymagań szkoleniowych." },
      ],
    },
    {
      title: "9. Rezygnacja po rozpoczęciu kursu",
      blocks: [
        { type: "paragraph", text: "Jeżeli uczestnik zrezygnuje z kursu po rozpoczęciu szkolenia, zwrot za zrealizowane dni szkoleniowe nie przysługuje." },
        { type: "paragraph", text: "Hydra może potrącić koszty:" },
        { type: "list", items: ["czasu instruktora,", "eLearningu,", "opłat basenowych,", "opłat wejściowych,", "wypożyczenia sprzętu,", "kosztów administracyjnych,", "kosztów podróży."] },
        { type: "paragraph", text: "Dla celów rozliczeniowych koszt pracy instruktora wynosi £150 za każdy dzień szkoleniowy." },
      ],
    },
    {
      title: "10. Bezpieczeństwo",
      blocks: [
        { type: "paragraph", text: "Instruktor ma prawo przerwać nurkowanie lub szkolenie, jeśli uzna, że dalsze uczestnictwo mogłoby zagrażać bezpieczeństwu." },
        { type: "paragraph", text: "W takim przypadku zwrot pieniędzy nie przysługuje." },
      ],
    },
    {
      title: "11. Warunki pogodowe i organizacyjne",
      blocks: [
        { type: "paragraph", text: "Hydra może zmienić termin, lokalizację lub harmonogram szkolenia z przyczyn niezależnych od szkoły." },
        { type: "paragraph", text: "W miarę możliwości zostanie zaproponowany nowy termin." },
        { type: "paragraph", text: "Hydra nie ponosi odpowiedzialności za koszty podróży, noclegów ani utracone zarobki." },
      ],
    },
    {
      title: "12. Sprzęt",
      blocks: [
        { type: "paragraph", text: "Uczestnik odpowiada za wypożyczony sprzęt od momentu odbioru do momentu zwrotu." },
      ],
    },
    {
      title: "13. Zdjęcia i materiały promocyjne",
      blocks: [
        { type: "paragraph", text: "Podczas zajęć mogą być wykonywane zdjęcia i nagrania wykorzystywane w celach promocyjnych szkoły." },
        { type: "paragraph", text: "Uczestnik może odmówić zgody przed rozpoczęciem zajęć." },
      ],
    },
    {
      title: "14. Ochrona danych osobowych",
      blocks: [
        { type: "paragraph", text: "Dane osobowe będą przetwarzane zgodnie z obowiązującymi przepisami prawa." },
      ],
    },
    {
      title: "15. Odpowiedzialność",
      blocks: [
        { type: "paragraph", text: "Nurkowanie jest aktywnością wiążącą się z ryzykiem urazu, choroby dekompresyjnej, trwałego uszczerbku na zdrowiu lub śmierci." },
        { type: "paragraph", text: "Uczestnik potwierdza, że rozumie i akceptuje te ryzyka." },
      ],
    },
    {
      title: "16. Prawo właściwe",
      blocks: [
        { type: "paragraph", text: "Regulamin podlega prawu Anglii i Walii." },
      ],
    },
  ],
};
