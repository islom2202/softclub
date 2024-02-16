import { useTranslation } from "react-i18next"
import { Hero } from "../components/Hero"
import homeHero from "../assets/images/home-hero.svg"
import {getIconUrl} from "../utils/icons-utils.ts";
export const Home = () => {
  const { t } = useTranslation()
  const advatages:{icon:string, name:string, description:string}[] = t("home.advantages.advantages-blocks", {returnObjects: true})
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
              <img src="../assets/icons/tutors.png" alt="" />
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}
