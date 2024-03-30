import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// icons
import menu from "../assets/icons/menu.svg"
// i18next hook
import { useTranslation } from "react-i18next";
export const Header = ({logo, children}:{logo:string, children:any}) => {
  //states
  const [hide, sethide] = useState("header--hide")
  // handle menu
  const handleMenu = () => {
    sethide(hide == "header--hide" ? "" : "header--hide")
  }
  // handle theme
  const locTheme = localStorage.getItem("theme")
  const [theme, settheme] = useState(locTheme == "dark" ? false : true)
  const handleTheme = (value: boolean) => {
    settheme(value)
    localStorage.setItem("theme", !value ? "dark" : "")
  }
  useEffect(() => {
    let app = document.querySelector(".app")
    if (!theme) {
      app?.classList.add("dark")
    } else {
      app?.classList.remove("dark")
    }
  }, [theme])
  
  
  // i18n languages
  const { t } = useTranslation()
  return (
    <header className="header">
      <aside className="header__aside">
        <img
          src={logo}
          alt="logo"
          className="header__aside__logo"
          draggable="false"
        />
        {/* <span
          className="material-symbols-outlined header__aside__menu"
          onClick={() => handleMenu()}
        >
          {burger == "menu" ? "menu" : "close"}
        </span> */}
        <img
          src={menu}
          alt="burger-icon"
          className="header__aside__menu"
          onClick={() => handleMenu()}
        />
      </aside>
      <section className="header__right-desktop">
        <nav className={`${hide} header__nav`}>
          <NavLink to="/">{t("header.home")}</NavLink>
          <NavLink to="/courses">{t("header.courses")}</NavLink>
          <NavLink to="/news">{t("header.news")}</NavLink>
          <NavLink to="/about">{t("header.about")}</NavLink>
          <NavLink to="/contacts">{t("header.contacts")}</NavLink>
        </nav>
        <div className={`${hide} header__switchers`}>
          {/*Language changing*/}
          {children}
          {/*Themes*/}
          <div className="header__switchers__themes">
            <button
              className={theme ? "themes--active" : ""}
              onClick={() => handleTheme(true)}
            >
              <span className="material-symbols-sharp">sunny</span>
            </button>
            <button
              className={!theme ? "themes--active" : ""}
              onClick={() => handleTheme(false)}
            >
              <span className="material-symbols-sharp">dark_mode</span>
            </button>
          </div>
        </div>
      </section>
    </header>
  )
};
 

  

