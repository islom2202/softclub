import { useTranslation } from "react-i18next";
import { getImageUrl } from "../utils/image-util";

const Teachers = () => {
  const {t} = useTranslation();
  const teachers:{name:string, title:string, image:string}[] = t("teachers.body", {returnObjects: true})
  return (
    <article className="teachers">
      <h4>{t("teachers.heading")}</h4>
      <ul className="teachers__list">
        {teachers.map((e) => (
          <li className="teachers__list__item" key={e.name}>
            <img src={getImageUrl(e.image)} alt={e.name} />
            <h4>{e.name}</h4>
            <p>{e.title}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Teachers