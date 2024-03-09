import { useTranslation } from "react-i18next"
import image from "../assets/images/news-hero.png";
// components
import { Hero } from "../components/Hero";
import { NewsDetails } from "../components/NewsDetails";
import { Comments } from "../components/Comments";
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
      {/*News Details*/}
      <NewsDetails />
      {/*Comments*/}
      <Comments />
    </div>
  )
}
export default News