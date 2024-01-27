import { Home } from "./pages/Home"
import { Courses } from "./pages/Courses"
import { News } from "./pages/News"
import { About } from "./pages/About"
import { Contacts } from "./pages/Contacts"
import { Route, Routes } from "react-router-dom";
import { Header } from "./layouts/Header"
import { Footer } from "./layouts/Footer"
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="courses" Component={Courses}/>
      <Route path="news" Component={News}/>
      <Route path="about" Component={About}/>
      <Route path="contacts" Component={Contacts}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
