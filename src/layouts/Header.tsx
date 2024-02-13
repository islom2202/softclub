import { useState } from "react";
import { NavLink } from "react-router-dom";
// i18next hook
import { useTranslation } from "react-i18next";
// header icons
export const Header = ({logo, children}:{logo:string, children:string}) => {
  //states
  const [burger, setburger] = useState('menu')
  const [hide, sethide] = useState("header--hide")
  const [theme, settheme] = useState(true)
  // handle menu
  const handleMenu = () => {
    setburger(burger == 'menu' ? 'cancel' : 'menu')
    sethide(burger == 'cancel' ? "header--hide": "")
  }
  // handle theme
  const handleTheme = (value:boolean) => {
    let app = document.querySelector(".app")
    settheme(value)
    !value ? app?.classList.add('dark'): app?.classList.remove('dark') 
  };
  // i18n languages
  const {t} = useTranslation()

  return (
    <header className="header header--light">
      <aside className="header__aside">
        <img src={logo} alt="logo" className="header__aside__logo" />
        <span
          className="material-symbols-outlined header__aside__menu"
          onClick={() => handleMenu()}
        >
          {burger == "menu" ? "menu" : "close"}
        </span>
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
}
