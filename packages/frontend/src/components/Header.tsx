import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import menuIcon from "../assets/icons/134216_menu_lines_hamburger_icon(2).png";
import closeBtn from "../assets/icons/4115230_cancel_close_delete_icon.png";
import logoHydra from "../assets/logos/hydra_logo_transparent.png";
import React from "react";
import "./Header.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Header: React.FC<{}> = () => {
  const { language } = useLanguage();
  const t = translations[language].nav;
  const blogLabel: string = (t as any).blog ?? 'Blog';
  const locationsT = translations[language].locations;
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [locationsSidebarOpen, setLocationsSidebarOpen] = useState(false);
  const [desktopLocationsOpen, setDesktopLocationsOpen] = useState(false);

  const locationLinks = [
    { slug: 'leybourne-lakes', label: locationsT.leybourneLakes },
    { slug: 'vobster-quay', label: locationsT.vobsterQuay },
    { slug: 'stoney-cove', label: locationsT.stoneyCove },
    { slug: 'capernwray', label: locationsT.capernwray }
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setDesktopLocationsOpen(false);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setLocationsSidebarOpen(false);
    setDesktopLocationsOpen(false);
  };

  React.useEffect(() => {
    setDesktopLocationsOpen(false);
  }, [location.pathname]);

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
    setDesktopLocationsOpen(false);
    navigate(path);
  };

  const handleHomeNavigation = () => {
    closeSidebar();
    navigate("/");
  };

  return (
    <header className={`header${desktopLocationsOpen ? " header-with-submenu" : ""}`}>
      <div
        className={`logo-container${!isHomePage ? ' logo-with-tooltip' : ''}`}
        onClick={handleHomeNavigation}
        style={{ cursor: "pointer" }}
        title={!isHomePage ? (language === 'pl' ? 'Strona główna' : 'Home Page') : undefined}
      >
        <img src={logoHydra} alt="Hydra logo" className="logo" />
        {!isHomePage && <span className="logo-tooltip">{language === 'pl' ? 'Strona główna' : 'Home Page'}</span>}
      </div>

      <LanguageSwitcher />
      <nav className="nav-links">
        <button className="nav-button" onClick={handleHomeNavigation}>
          {t.home}
        </button>
        <button
          className="nav-button"
          onClick={() => handleNavigation("/courses")}
        >
          {t.courses}
        </button>
        <button
          className="nav-button"
          onClick={() => handleNavigation("/blog")}
        >
          {blogLabel}
        </button>
        <div className="nav-dropdown nav-dropdown-inline">
          <button
            className="nav-button"
            onClick={() => handleNavigation("/dive-locations")}
          >
            {t.locations}
          </button>
          <button
            className={`nav-button nav-dropdown-trigger${desktopLocationsOpen ? " active" : ""}`}
            onClick={() => setDesktopLocationsOpen((open) => !open)}
            aria-expanded={desktopLocationsOpen}
            aria-controls="desktop-locations-submenu"
            aria-label={desktopLocationsOpen ? "Hide dive locations submenu" : "Show dive locations submenu"}
            type="button"
          />
        </div>
        <button
          className="nav-button"
          onClick={() => handleNavigation("/about")}
        >
          {t.about}
        </button>
      </nav>

      {desktopLocationsOpen && (
        <div className="nav-submenu-bar" id="desktop-locations-submenu">
          <button
            className="nav-submenu-button"
            onClick={() => handleNavigation("/dive-locations")}
          >
            {locationsT.navLabel}
          </button>
          {locationLinks.map((item) => (
            <button
              key={item.slug}
              className="nav-submenu-button"
              onClick={() => handleNavigation(`/dive-locations/${item.slug}`)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

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
                handleHomeNavigation();
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
              className="nav-button-sidebar nav-button-sidebar-parent"
              onClick={() => setLocationsSidebarOpen((open) => !open)}
            >
              {t.locations}
            </button>
            <div className={`sidebar-subnav${locationsSidebarOpen ? " open" : ""}`}>
              <button
                className="nav-button-sidebar nav-button-sidebar-sub"
                onClick={() => {
                  navigate("/dive-locations");
                  closeSidebar();
                }}
              >
                {locationsT.navLabel}
              </button>
              {locationLinks.map((item) => (
                <button
                  key={item.slug}
                  className="nav-button-sidebar nav-button-sidebar-sub"
                  onClick={() => {
                    navigate(`/dive-locations/${item.slug}`);
                    closeSidebar();
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
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
