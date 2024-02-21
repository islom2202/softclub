import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
const Course = () => {
  const {t} = useTranslation()
  const {courseName} = useParams()
  const courses:any = t("all-courses.body", {returnObjects: true})
  return (
    courses.map((el:any) => el.name == courseName && <article className="course"><h2>{el.name}</h2></article>)
  )
}

export default Course