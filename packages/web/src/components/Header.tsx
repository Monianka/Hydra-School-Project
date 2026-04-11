"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
const menuIcon = "/icons/134216_menu_lines_hamburger_icon(2).png";
const closeBtn = "/icons/4115230_cancel_close_delete_icon.png";
const logoHydra = "/logos/hydra_logo_transparent.png";

const Header: React.FC<{}> = () => {
  const { language } = useLanguage();
  const t = translations[language].nav;
  const blogLabel: string = (t as any).blog ?? 'Blog';
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const scrollToSections = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    closeSidebar();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeSidebar();
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <header className={styles.header}>
      <div
        className={styles["logo-container"]}
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
      >
        <img src={logoHydra} alt="Hydra logo" className={styles.logo} />
      </div>

      <LanguageSwitcher />
      <nav className={styles["nav-links"]}>
        <button className={styles["nav-button"]} onClick={() => router.push("/")}>
          {t.home}
        </button>
        <button
          className={styles["nav-button"]}
          onClick={() => handleNavigation("/courses")}
        >
          {t.courses}
        </button>
        <button
          className={styles["nav-button"]}
          onClick={() => handleNavigation("/blog")}
        >
          {blogLabel}
        </button>
        <button
          className={styles["nav-button"]}
          onClick={() => handleNavigation("/about")}
        >
          {t.about}
        </button>
        <button className={styles["nav-button"]} onClick ={()=>handleNavigation("/aboutus")}>
{t.about}
        </button>
      </nav>

      <div className={styles.hamburger} onClick={toggleSidebar}>
        <img src={menuIcon} alt="Menu" />
      </div>

      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <div onClick={toggleSidebar}>
          <img src={closeBtn} className={styles["close-btn"]} alt="Close" />
        </div>
        <ul className={styles["sidebar-nav"]}>
          <li>
            <button
              className={styles["nav-button-sidebar"]}
              onClick={() => {
                router.push("/");
                closeSidebar();
              }}
            >
              {t.home}
            </button>
          </li>
          <li>
            <button
              className={styles["nav-button-sidebar"]}
              onClick={() => {
                router.push("/courses");
                closeSidebar();
              }}
            >
              {t.courses}
            </button>
          </li>
          <li>
            <button
              className={styles["nav-button-sidebar"]}
              onClick={() => {
                router.push("/blog");
                closeSidebar();
              }}
            >
              {blogLabel}
            </button>
          </li>
          <li>
            <button
              className={styles["nav-button-sidebar"]}
              onClick={() => {
                router.push("/about");
                closeSidebar();
              }}
            >
              {t.about}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
