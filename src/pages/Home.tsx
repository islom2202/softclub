// 18next
import { useTranslation } from "react-i18next"
// image and icon utils
import {getIconUrl} from "../utils/icons-utils.ts";
// images and icons
import homeHero from "../assets/images/home-hero.svg"
import formBackground from "../assets/images/form-background.png"
// components
import { Hero } from "../components/Hero"
import { Achievements } from "../components/Achievements.tsx";
import Reviews from "../components/Reviews.tsx";
import AcademyNews from "../components/AcademyNews.tsx";
import { Companies } from "../components/Companies.tsx";
import Teachers from "../components/Teachers.tsx";
import Form from "../components/Form.tsx";
import AllCourses from "../components/AllCourses.tsx";
// // typescript objects - states
// import { comments } from "../newsComments.ts";
const Home = () => {
  const { t } = useTranslation()
  // advantages t-data
  const advatages: { name: string, icon: string, description: string }[] = t("home.advantages.advantages-blocks", {returnObjects: true})
  // form footer t-data
  const formfooter:string[] = t("form.footer", { returnObjects: true })
  return (
    <div className="home">
      {/*Hero*/}
      <Hero
        name={t("home.hero.name")}
        button={t("home.hero.button")}
        image={homeHero}
      />
      {/*Advantages*/}
      <article className="advantages">
        <h4 className="advantages__heading">
          {t("home.advantages.advantages-heading")}
        </h4>
        <ul className="advantages__list">
          {advatages.map((el) => (
            <li key={el.name} className="advantages__list__item">
              <img src={getIconUrl(el.icon)} alt={el.name} />
              <div>
                <h5>{el.name}</h5>
                <small>{el.description}</small>
              </div>
            </li>
          ))}
        </ul>
      </article>
      {/*Achievements*/}
      <Achievements />
      {/*Reviews*/}
      <Reviews />
      {/*All courses*/}
      <AllCourses button={true} description={false}/>
      {/*Academy news*/}
      <AcademyNews/>
      {/*Companies*/}
      <Companies />
      {/*Teachers*/}
      <Teachers />
      {/*Form*/}
      <Form
        formfooter={formfooter}
        background={formBackground}
      />
    </div>
  )
}

export default Home