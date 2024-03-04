import { Link, useNavigate} from "react-router-dom"
import { useTranslation } from "react-i18next"
import { getIconUrl } from "../utils/icons-utils";
const AllCourses = ({button, description}:{button?:boolean, description:boolean}) => {
  const {t} = useTranslation();
  // courses t-data
  const courses: any = t("all-courses.body", { returnObjects: true })
  // navigate , useLocation
  const navigate = useNavigate();
  return (
    <article className="all-courses">
      <h4 className="all-courses__heading">{t("all-courses.heading")}</h4>
      <nav className="all-courses__body">
        {courses.map((el: any) => (
          <Link
            to={`/courses/${el.id}`}
            className="all-courses__body__course"
            key={el.name}
            style={{ backgroundColor: `${el.duration.color}1A` }}
          >
            <div>
              {/*Duration heading only without description*/}
              {!description && (
                <p
                  className="all-courses__body__course__duration"
                  style={{ color: el.duration.color }}
                >
                  {el.duration.number} <small>{el.duration.indicator}</small>
                </p>
              )}
              <h4>{el.name}</h4>
              {/*Description only if exists in props (courses page)*/}
              {description && (
                <p className="all-courses__body__course__description">
                  {el.description.slice(0, 100)} . . .
                </p>
              )}
              {/*Start Date only without description*/}
              {!description && (
                <small className="all-courses__body__course__start">
                  <span>{el.start.heading}</span>
                  {el.start.body}
                </small>
              )}
              {/*Duratiorn and Start date only with description*/}
              {description && (
                <div className="all-courses__body__course__footer">
                  <p className="all-courses__body__course__footer__duration">
                    {el.duration.number} <small>{el.duration.indicator}</small>
                  </p>
                  <p className="all-courses__body__course__footer__start">
                    <span>{el.start.heading}</span> {el.start.body}
                  </p>
                </div>
              )}
            </div>
            <img src={getIconUrl(el.image)} alt="" />
          </Link>
        ))}
      </nav>
      {button && (
        <button
          className="button button--outlined"
          onClick={() => navigate("/courses")}
        >
          <span className="material-symbols-outlined">arrow_right_alt</span>
          <span>{t("all-courses.heading")}</span>
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </button>
      )}
    </article>
  )
}

export default AllCourses