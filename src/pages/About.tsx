import { getImageUrl } from "../utils/image-util";
import { useTranslation } from "react-i18next";
import hero from "../assets/images/about-hero.png";
import { Achievements } from "../components/Achievements";
import { Companies } from "../components/Companies";
const About = () => {
  const {t} = useTranslation()
  const directorInfo:{type:string, content:string}[] = t("about.director.info", {returnObjects:true});
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
      {/*Achievements*/}
      <Achievements />
      {/*Director*/}
      <article className="director">
        <div className="director__wrapper">
          <figure>
            <img
              src={getImageUrl(t("about.director.image"))}
              alt={t("about.director.fullname")}
            />
            <h4>{t("about.director.fullname")}</h4>
            <small>{t("about.director.status")}</small>
          </figure>
          <figcaption>
            {directorInfo.map((e, i) => (
              <p key={i} style={{ fontWeight: `${e.type && "600"}` }}>{e.content}</p>
            ))}
          </figcaption>
        </div>
      </article>
      {/*Companies*/}
      <Companies aboutUs={true}/>
    </div>
  )
}
export default About;