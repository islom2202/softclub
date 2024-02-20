import { useTranslation } from "react-i18next";
import hero from "../assets/images/about-hero.png";
const About = () => {
  const {t} = useTranslation()
  return (
    <div className="about">
      {/*Hero*/}
      <article className="hero">
        <div className="hero__img-wrapper">
          <img src={hero} alt="hero" className="hero__img-wrapper__img" />
          <i className="hero__img-wrapper__icon-wrapper">
                <span className="material-symbols-rounded">play_circle</span>
          </i>
          <h2 className="hero__img-wrapper__name">{t("about.hero.name")}</h2>
        </div>
      </article>
    </div>
  )
}
export default About;