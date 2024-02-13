import image from "../assets/images/courses-hero.png";
import { Hero } from "../components/Hero";
import { useTranslation } from "react-i18next";
export const Courses = () => {
  const {t} = useTranslation()
  return (
    <div className="courses">
      {/*Hero*/}
      <Hero
        routename={t("courses.hero.route-name")}
        name={t("courses.hero.name")}
        description={t("courses.hero.description")}
        button={t("courses.hero.button")}
        image={image}
        contentClass="contentClass"
      />
    </div>
  )
}
