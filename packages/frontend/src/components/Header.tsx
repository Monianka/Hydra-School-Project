import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuIcon from "../assets/icons/134216_menu_lines_hamburger_icon(2).png";
import closeBtn from "../assets/icons/4115230_cancel_close_delete_icon.png";
import logoHydra from "../assets/logos/hydra_logo.jpg";
import React from "react";
import "./Header.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Header: React.FC<{}> = () => {
  const { language } = useLanguage();
  const t = translations[language].nav;
  const blogLabel: string = (t as any).blog ?? 'Blog';
  const navigate = useNavigate();

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
    navigate(path);
  };

  return (
    <header className="header">
      <div
        className="logo-container"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <img src={logoHydra} alt="Hydra logo" className="logo" />
      </div>

      <LanguageSwitcher />
      <nav className="nav-links">
        <button className="nav-button" onClick={() => navigate("/")}>
          {t.home}
        </button>
        <button
          className="nav-button"
          onClick={() => handleNavigation("/courses")}
        >
          {t.courses}
        </button>
        {/* <button
          className="nav-button"
          onClick={() => handleNavigation("/blog")}
        >
          {blogLabel}
        </button> */}
        <button
          className="nav-button"
          onClick={() => handleNavigation("/about")}
        >
          {t.about}
        </button>
      </nav>

      <div className="hamburger" onClick={toggleSidebar}>
        <img src={menuIcon} alt="Menu" />
      </div>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div onClick={toggleSidebar}>
          <img src={closeBtn} className="close-btn" alt="Close" />
        </div>
        <ul className="sidebar-nav">
          <li>
            <button
              className="nav-button-sidebar"
              onClick={() => {
                navigate("/");
                closeSidebar();
              }}
            >
              {t.home}
            </button>
          </li>
          <li>
            <button
              className="nav-button-sidebar"
              onClick={() => {
                navigate("/courses");
                closeSidebar();
              }}
            >
              {t.courses}
            </button>
          </li>
          <li>
            <button
              className="nav-button-sidebar"
              onClick={() => {
                navigate("/blog");
                closeSidebar();
              }}
            >
              {blogLabel}
            </button>
          </li>
          <li>
            <button
              className="nav-button-sidebar"
              onClick={() => {
                navigate("/about");
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
