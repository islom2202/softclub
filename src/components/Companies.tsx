import { useTranslation } from "react-i18next";
import { getIconUrl } from "../utils/icons-utils";
export const Companies = () => {
  const {t} = useTranslation();
  const companies:string[] = t("companies.body", {returnObjects: true});
  return (
    <article className="companies">
      <h4 className="companies__heading">{t("companies.heading")}</h4>
      <div className="companies__list-wrapper">
        {/*Doubled list just for css only slider*/}
        <ul className="companies__list-wrapper__list">
          {companies.map((e) => (
            <li className="companies__list-wrapper__list__item">
              <img src={getIconUrl(e)} alt="e" />
            </li>
          ))}
        </ul>
        <ul className="companies__list-wrapper__list">
          {companies.map((e) => (
            <li className="companies__list-wrapper__list__item">
              <img src={getIconUrl(e)} alt="e" />
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
