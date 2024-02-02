import { useState } from "react";
import { NavLink } from "react-router-dom";
export const Header = ({logo, menu, cancel, moon, sun}:{logo:string, menu:string, cancel:string, moon:string, sun:string}) => {
  //states
  const [burger, setburger] = useState(menu)
  const [hide, sethide] = useState("header--hide")
  const [theme, settheme] = useState("light")
  // handle menu
  const handleMenu = () => {
    setburger(burger == menu ? cancel : menu)
    sethide(burger == cancel ? "header--hide": "")
  }
  // handle theme
  const handleTheme = (value:string) => {
    settheme(value)
  };
  
  return (
    <header className="header">
      <aside className="header__aside">
        <img src={logo} alt="logo" className="header__aside__logo" />
        <img
          src={burger}
          alt={burger}
          className="header__aside__menu"
          onClick={() => handleMenu()}
          tabIndex={0}
        />
      </aside>
      <section className="header__right-desktop">
        <nav className={`${hide} header__nav`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
        <div className={`${hide} header__switchers`}>
          <select className="header__switchers__languages">
            <option value="english">EN</option>
            <option value="russian">RU</option>
            <option value="tajik">TJ</option>
          </select>
          <div className="header__switchers__themes">
            <button
              className={theme == "light" ? "themes--active" : ""}
              onClick={() => handleTheme("light")}
            >
              <img src={sun} alt="sun-icon" />
            </button>
            <button
              className={theme == "dark" ? "themes--active" : ""}
              onClick={() => handleTheme("dark")}
            >
              <img src={moon} alt="moon-icon" />
            </button>
          </div>
        </div>
      </section>
    </header>
  )
}
