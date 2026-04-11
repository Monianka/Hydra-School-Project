import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hydra-Scuba Diving School — a professional Polish-owned PADI diving school in London and Kent, England. Founded in 2019 by certified instructor Damian Rembiszewski.",
  alternates: {
    canonical: "https://hydra-scubadiving.com/about",
    languages: {
      en: "https://hydra-scubadiving.com/about",
      pl: "https://hydra-scubadiving.com/pl/about",
    },
  },
  openGraph: {
    title: "About Hydra-Scuba Diving School | London & Kent",
    description:
      "Professional Polish PADI diving school in England. Founded in 2019 by Damian Rembiszewski. Courses in English and Polish.",
    url: "https://hydra-scubadiving.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
