import { useTranslation } from "react-i18next"
import image from "../assets/images/news-hero.png";
import { Hero } from "../components/Hero"
const News = () => {
  const {t} = useTranslation();
  return (
    <div className="news">
      {/*Hero*/}
      <Hero
        name={t("news.hero.name")}
        routename={t("news.hero.route-name")}
        image={image}
        contentClass="contentClass"
      />
    </div>
  )
}
export default News