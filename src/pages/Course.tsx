import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { getIconUrl } from "../utils/icons-utils";
// components
import { Hero } from "../components/Hero";
const Course = () => {
  const {t} = useTranslation();
  const {course} = useParams();
  const courses: {
    id: number
    name: string
    description: string
    image: string
    details: {
      "details-heading": string
      "details-body": {
        info: { "info-heading": string; "info-body": string[] },
        list: { "list-heading": string; "list-body": {"item-name": string, "item-description":string}[] },
        conclusion:string
      }
    }
  }[] = t("all-courses.body", { returnObjects: true })  
  const marks:{icon:string, content:string}[] = t("all-courses.course-marks", { returnObjects: true })
  console.log(courses.map(e => e.details["details-body"].conclusion));
  
  return (
    <div className="course">
      {/*Hero*/}
      {courses.map(
        (e) =>
          e.id == Number(course) && (
            <Hero
              routename={`${t("courses.hero.route-name")} > ${e.name}`}
              name={e.name}
              description={e.description}
              image={getIconUrl(e.image)}
              isCourse={true}
              button={t("all-courses.button")}
              key={e.id}
            />
          )
      )}
      {/*Marks*/}
      <ul className="marks">
        {marks.map((e) => (
          <li key={e.icon}>
            <span className="material-symbols-rounded">{e.icon}</span>
            <p>{e.content}</p>
          </li>
        ))}
      </ul>
      {/*Details*/}
      <article className="details">
        {courses.map(
          (e) =>
            e.id == Number(course) && (
              <div className="details__box" key={e.id}>
                {/*Details Heading*/}
                <h4 className="details__box__heading">
                  {e.details["details-heading"]}
                </h4>
                {/*Details Info*/}
                <div className="details__box__info">
                  {e.details["details-body"].info["info-heading"] && (
                    <h5>{e.details["details-body"].info["info-heading"]}</h5>
                  )}
                  {e.details["details-body"].info["info-body"].map((e) => (
                    <p key={e}>{e}</p>
                  ))}
                </div>
                {/*Details List*/}
                {e.details["details-body"].list && (
                  <div className="details__box__list">
                    <h5>{e.details["details-body"].list["list-heading"]}</h5>
                    <ul>
                      {e.details["details-body"].list["list-body"].map(
                        (item) => (
                          <li>
                            <mark>{item["item-name"]}</mark>
                            <p>{item["item-description"]}</p>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
                {/*Details Conclusion*/}
                {e.details["details-body"].conclusion && (
                  <p className="details__box__conclusion">
                    {e.details["details-body"].conclusion}
                  </p>
                )}
              </div>
            )
        )}
      </article>
    </div>
  )
}

export default Course