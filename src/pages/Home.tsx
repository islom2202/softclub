// router
import { Link } from "react-router-dom";
// 18next
import { useTranslation } from "react-i18next"
// image and icon utils
import {getIconUrl} from "../utils/icons-utils.ts";
// images and icons
import homeHero from "../assets/images/home-hero.svg"
// components
import { Hero } from "../components/Hero"
import { Achievements } from "../components/Achievements.tsx";
import Reviews from "../components/Reviews.tsx";
const Home = () => {
  const { t } = useTranslation()
  // advantages t-data
  const advatages: { name: string, icon: string, description: string }[] = t("home.advantages.advantages-blocks", {returnObjects: true})
  // courses t-data
  const courses:any = t("all-courses.body", {returnObjects: true})
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
      <article className="all-courses">
        <h4 className="all-courses__heading">{t("all-courses.heading")}</h4>
        <nav className="all-courses__body">
          {courses.map((el: any) => (
            <Link
              to={`/courses/${el.name}`}
              className="all-courses__body__course"
            >
              <div>
                <p
                  className="all-courses__body__course__duration"
                  style={{ color: el.duration.color }}
                >
                  {el.duration.number} <small>{el.duration.indicator}</small>
                </p>
                <h4>{el.name}</h4>
                <p className="all-courses__body__course__start">
                  <span>{el.start.heading}</span>
                  {el.start.body}
                </p>
              </div>
              <img src={getIconUrl(el.image)} alt="" />
            </Link>
          ))}
        </nav>
        <button className="button button--outlined">
          {t("all-courses.heading")}{" "}
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </article>
    </div>
  )
}

export default Home