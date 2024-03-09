import { useTranslation } from "react-i18next";
import { getIconUrl } from "../utils/icons-utils";
export const Companies = ({aboutUs}:{aboutUs?:boolean}) => {
  const {t} = useTranslation();
  const companies:string[] = t("companies.body", {returnObjects: true});
  return (
    <article className="companies">
      <h4 className="companies__heading">
        {aboutUs ? t("about.director.cooporates") : t("companies.heading")}
      </h4>
      <div className="companies__list-wrapper">
        {/*Doubled list just for css only slider*/}
        <ul className="companies__list-wrapper__list">
          {companies.map((e) => (
            <li className="companies__list-wrapper__list__item" key={e}>
              <img src={getIconUrl(e)} alt="e" />
            </li>
          ))}
        </ul>
        <ul className="companies__list-wrapper__list">
          {companies.map((e) => (
            <li className="companies__list-wrapper__list__item" key={e}>
              <img src={getIconUrl(e)} alt="e" />
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
