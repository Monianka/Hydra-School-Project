import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import About from "./about/page";
import Footer from "@/components/Footer";
import CoursesSection from "@/components/CoursesSection";
import styles from "./Home.module.css";

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
                    <About />
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Home;
