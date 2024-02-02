// header icons
import logo from "./assets/icons/logo.svg";
import menu from "./assets/icons/menu.svg";
import cancel from "./assets/icons/cancel.svg";
import moon from "./assets/icons/moon.svg";
import sun from "./assets/icons/sun.svg";
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
function App() {
  return (
    <div className="app">
      <Header logo={logo} menu={menu} cancel={cancel} sun={sun} moon={moon}/>
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
      <Footer />
    </div>
  )
}

export default App
