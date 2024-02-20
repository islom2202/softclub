import { useTranslation } from "react-i18next"
export const Achievements = () => {
  const { t } = useTranslation()
  // achievements t-data
  const achievements: { head: string; body: string }[] = t(
    "home.achievements.achievements-blocks",
    { returnObjects: true }
  )
  return (
    <article className="achievements">
      <h4 className="achievements__heading">
        {t("home.achievements.achievements-heading")}
      </h4>
      <ul className="achievements__list">
        {achievements.map((el) => (
          <li className="achievements__list__item" key={el.head}>
            <h5>{el.head}</h5>
            <p>{el.body}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}
