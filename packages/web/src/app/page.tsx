import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import AboutClient from "./about/AboutClient";
import Footer from "@/components/Footer";
import CoursesSection from "@/components/CoursesSection";
import styles from "./Home.module.css";

export const metadata: Metadata = {
  title: "Hydra-Scuba Diving School | London & Kent | Polish Diving School",
  description:
    "Polska szkoła nurkowania w Anglii. PADI-certified scuba diving courses in London, Kent and England. Courses in English and Polish. Kursy nurkowania po polsku i angielsku.",
  alternates: {
    canonical: "https://hydra-scubadiving.com",
    languages: {
      en: "https://hydra-scubadiving.com",
      pl: "https://hydra-scubadiving.com/pl",
    },
  },
};

const Home=()=>{
    return (
        <div className={styles["home-container"]}>
            <Header />
            <main>
                <section id="hero" className={styles['animate-slide-in-left'] ?? ''}>
                    <HeroSection />
                </section> 
                <section id="courses" className={styles['animate-slide-in-left'] ?? ''}>
                    <CoursesSection titleClassName={styles['section-title']} showSwipeHint />
                </section>
                <section id="about" className={styles['animate-slide-in-left'] ?? ''}>
                  <AboutClient showSectionHeader />
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Home;
