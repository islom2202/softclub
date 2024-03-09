import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { getImageUrl } from "../utils/image-util"

export const NewsDetails = () => {
  const { t } = useTranslation()
  const news: {
    publishDate: string
    watched: string
    image1: string
    image2: string
    name: string
    startDate: string
    "list-heading": string
    "list-items": string[]
    button: string
  }[] = t("academy-news.body", {
    returnObjects: true,
  })
  const navigate = useNavigate()
  return (
    <article className="news-details">
      {/*News Details*/}
      {news.map((e, i) => (
        <div key={i}>
          <div className="news-details__heading">
            <p>{e.publishDate}</p>
            <p>
              <span className="material-symbols-outlined">visibility</span>
              {0} {e.watched}
            </p>
          </div>
          <div className="news-details__body">
            <img src={getImageUrl(e.image1)} alt={e.name} />
            <h4>{e.name}</h4>
            <p>{e.startDate}</p>
            <img src={getImageUrl(e.image2)} alt={e.name} />
            <h4>{e["list-heading"]}</h4>
            <ul>
              {e["list-items"].map((item, index) => (
                <li key={index}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <button
              className="button button--filled"
              onClick={() => navigate("/Contacts")}
            >
              <span className="material-symbols-outlined">arrow_forward</span>
              <span>{e.button}</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      ))}
    </article>
  )
}
