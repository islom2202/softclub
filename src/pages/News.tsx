import { useTranslation } from "react-i18next"
import image from "../assets/images/news-hero.png";
// components
import { Hero } from "../components/Hero";
import AcademyNews from "../components/AcademyNews";
//
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
      {/*Academy News*/}
      <AcademyNews />
    </div>
  )
}
export default News