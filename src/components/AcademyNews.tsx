import { useTranslation } from "react-i18next";
import { getImageUrl } from "../utils/image-util";
import { Link } from "react-router-dom";
const AcademyNews = ({likes, messagesList}:{likes?:number, messagesList?:number}) => {
  const {t} = useTranslation();
  const news:{image1:string, name:string, startDate:string, publishDate:string, more:string}[] = t("academy-news.body", {returnObjects: true}) 
  return (
    <article className="academy-news">
      <h4 className="academy-news__heading">{t("academy-news.heading")}</h4>
      <ul className="academy-news__list">
        {news.map((e) => (
          <li className="academy-news__list__item" key={e.image1}>
            <div className="academy-news__list__item__imgWrapper">
              <div className="academy-news__list__item__imgWrapper__iconsWrapper">
                <span className="material-symbols-rounded">
                  thumb_up <span>{likes}</span>
                </span>
                <span className="material-symbols-rounded">
                  chat <span>{messagesList}</span>
                </span>
              </div>
              <img src={getImageUrl(e.image1)} alt={e.name} />
            </div>
            <h5 className="academy-news__list__item__name">{e.name}</h5>
            <p>{e.startDate}</p>
            <p className="academy-news__list__item__publish-date">
              {e.publishDate} <a href="#">{e.more}</a>
            </p>
          </li>
        ))}
      </ul>
      <Link to="" className="button button--outlined">
        <span className="material-symbols-rounded">arrow_forward</span>
        <span>{t("academy-news.viewAll")}</span>
        <span className="material-symbols-rounded">arrow_forward</span>
      </Link>
    </article>
  )
}

export default AcademyNews