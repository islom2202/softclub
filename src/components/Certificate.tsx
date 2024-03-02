import certificate from "../assets/images/certificate.png";
import { useTranslation } from "react-i18next"
const Certificate = () => {
  const {t} =  useTranslation()
  return (
    <article className="certificate">
      <div className="certificate__content">
        <h2>{t("certificate.name")}</h2>
        <p>{t("certificate.description")}</p>
        <button className="button button--outlined">{t("certificate.button")}</button>
      </div>
      <img src={certificate} alt="certificate" className="certificate__img"/>
    </article>
  )
}

export default Certificate