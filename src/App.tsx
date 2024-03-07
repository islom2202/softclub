import React, { Suspense, useEffect } from "react"
// header icons
import logo from "./assets/icons/logo.svg"
// Routes
import { Route, Routes, useLocation} from "react-router-dom"
// Pages, Layouts & Components
const Home = React.lazy(() => import("./pages/Home"))
const Courses = React.lazy(() => import("./pages/Courses"))
const News = React.lazy(() => import("./pages/News"))
const About = React.lazy(() => import("./pages/About"))
const Contacts = React.lazy(() => import("./pages/Contacts"))
import { Loader } from "./components/Loader"
import { Header } from "./layouts/Header"
import { Footer } from "./layouts/Footer"
import { NoMatch } from "./pages/NoMatch"
import Course from "./pages/Course"
// i18next
import { useTranslation } from "react-i18next"
// Hooks
import { useState } from "react"

function App() {
  // handle languages
  const { i18n } = useTranslation()
  const locLang = localStorage.getItem("language") || i18n.language
  const [lang, setlang] = useState(locLang)
  
  const changeLang = (language: string) => {
    setlang(language)
    localStorage.setItem("language", language)
    i18n.changeLanguage(language)
  }
  
  
  // Location scroll handle
  const {pathname} = useLocation();
  useEffect(() => {window.scrollTo(0, 0)}, [pathname])
  return (
    <div className="app">
      {/*Header*/}
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
          {/*Home*/}
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          {/*Courses*/}
          <Route
            path="courses"
            element={
              <Suspense fallback={<Loader />}>
                <Courses />
              </Suspense>
            }
          />
          {/*Course*/}
          <Route path="courses/:course" Component={Course} />
          {/*Newss*/}
          <Route
            path="news"
            element={
              <Suspense fallback={<Loader />}>
                <News />
              </Suspense>
            }
          />
          {/*About*/}
          <Route
            path="about"
            element={
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            }
          />
          {/*Contacts*/}
          <Route
            path="contacts"
            element={
              <Suspense fallback={<Loader />}>
                <Contacts />
              </Suspense>
            }
          />
          {/*No Match*/}
          <Route path="*" Component={NoMatch} />
        </Routes>
      </main>
      {/*Footer*/}
      <Footer />
    </div>
  )
}

export default App
