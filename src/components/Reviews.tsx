// 18next
import { useTranslation } from "react-i18next";
// utils
import { getImageUrl } from "../utils/image-util.ts";

const Reviews = () => {
  const {t} = useTranslation();
  const reviews:{image:string, name:string, review:string}[] = t("home.reviews.body", {returnObjects: true});
  return (
    <article className="reviews">
      <h4 className="reviews__heading">{t("home.reviews.heading")}</h4>
      <ul className="reviews__list">
        {reviews.map((el) => (
          <li className="reviews__list__item" key={el.name}>
            <img src={getImageUrl(el.image)} alt={el.name} />
            <h5>{el.name}</h5>
            <p>{el.review}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Reviews