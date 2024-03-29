import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { getImageUrl } from "../utils/image-util"
// // typescript objects - states
// import { comments } from "../Comments.ts"

const AcademyNews = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const news: {
    image1: string
    name: string
    startDate: string
    publishDate: string
    more: string
  }[] = t("academy-news.body", { returnObjects: true })
  return (
    <article className="academy-news">
      <h4 className="academy-news__heading">{t("academy-news.heading")}</h4>
      <ul className="academy-news__list">
        {news.map((e) => (
          <li className="academy-news__list__item" key={e.image1}>
            <div className="academy-news__list__item__imgWrapper">
              <div className="academy-news__list__item__imgWrapper__iconsWrapper">
                <span className="material-symbols-rounded">
                  thumb_up <span>{0}</span>
                </span>
                <span className="material-symbols-rounded">
                  chat <span>{0}</span>
                </span>
              </div>
              <img src={getImageUrl(e.image1)} alt={e.name} />
            </div>
            <h5 className="academy-news__list__item__name">{e.name}</h5>
            <p>{e.startDate}</p>
            <p className="academy-news__list__item__publish-date">
              {e.publishDate} <a onClick={() => navigate("/news")}>{e.more}</a>
            </p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default AcademyNews
