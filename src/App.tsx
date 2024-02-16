// header icons
import logo from "./assets/icons/logo.svg";


// Routes 
import { Route, Routes } from "react-router-dom"
// Pages
import { Home } from "./pages/Home"
import { Courses } from "./pages/Courses"
import { News } from "./pages/News"
import { About } from "./pages/About"
import { Contacts } from "./pages/Contacts"
import { Header } from "./layouts/Header"
import { Footer } from "./layouts/Footer"
import { NoMatch } from "./pages/NoMatch"
// i18next
import { useTranslation } from "react-i18next";
// Hooks
import { useState } from "react";
function App() {
  //states
  const [lang, setlang] = useState("english")
  // handle languages
  const { i18n } = useTranslation()
  const changeLang = (language: string) => {
    i18n.changeLanguage(language)
    setlang(language)
  }
  return (
    <div className="app">
      <Header logo={logo}>
        <select
          className="header__switchers__languages"
          value={lang}
          onChange={(e) => changeLang(e.target.value)}
        >
          <option value="english">EN</option>
          <option value="russian">RU</option>
          <option value="tajik">TJ</option>
        </select>
      </Header>
      <main>
        <Routes>
          <Route index Component={Home} />
          <Route path="courses" Component={Courses} />
          <Route path="news" Component={News} />
          <Route path="about" Component={About} />
          <Route path="contacts" Component={Contacts} />
          <Route path="*" Component={NoMatch} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
