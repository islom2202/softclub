import React, {Suspense} from "react";
// header icons
import logo from "./assets/icons/logo.svg";
// Routes 
import { Route, Routes } from "react-router-dom";
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
          <Route index element={<Suspense fallback={<Loader/>}><Home /></Suspense>} />
          <Route path="courses" element={<Suspense fallback={<Loader/>}><Courses/></Suspense>}/>
          <Route path="courses/:courseName" Component={Course}/>
          <Route path="news" element={<Suspense fallback={<Loader/>}><News /></Suspense>} />
          <Route path="about" element={<Suspense fallback={<Loader/>}><About /></Suspense>} />
          <Route path="contacts" element={<Suspense fallback={<Loader/>}><Contacts /></Suspense>}/>
          <Route path="*" Component={NoMatch} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
