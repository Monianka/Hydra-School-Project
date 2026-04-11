import type { Metadata } from "next";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = {
  title: "Scuba Diving Courses",
  description:
    "Browse PADI-certified scuba diving courses offered by Hydra-Scuba Diving School in London, Kent and across England. Courses in English and Polish.",
  alternates: {
    canonical: "https://hydra-scubadiving.com/courses",
    languages: {
      en: "https://hydra-scubadiving.com/courses",
      pl: "https://hydra-scubadiving.com/pl/courses",
    },
  },
  openGraph: {
    title: "Scuba Diving Courses | Hydra-Scuba Diving School",
    description:
      "PADI-certified scuba diving courses in London, Kent and England. Beginner to professional levels. Polish and English instruction.",
    url: "https://hydra-scubadiving.com/courses",
  },
};

export default function CoursesPage() {
  return <CoursesClient />;
}
