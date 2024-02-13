import { useTranslation } from "react-i18next"
import { Hero } from "../components/Hero"
import homeHero from "../assets/images/home-hero.svg"

export const Home = () => {
  const { t } = useTranslation()
  return (
    <div className="home">
      {/*Hero*/}
      <Hero name={t("home.hero.name")} button={t("home.hero.button")} image={homeHero}/>
    </div>
  )
}
