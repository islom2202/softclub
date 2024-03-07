// hooks & utils
import { useRef } from "react"
import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { getIconUrl } from "../utils/icons-utils";
// components
import { Hero } from "../components/Hero";
import Form from "../components/Form";
import Certificate from "../components/Certificate";
import { Companies } from "../components/Companies";
// images
import background from "../assets/images/form-background-vertical.png";

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
    },
    forForm:{
      cost:{heading:string, content:string},
      duration:{heading:string, content:string},
      places:{heading:string, content:string},
      format:{heading:string, content:string},
      marks:string[]
    }
  }[] = t("all-courses.body", { returnObjects: true })  
  const marks:{icon:string, content:string}[] = t("all-courses.course-marks", { returnObjects: true })
  const methods:[] = t("all-courses.methods.list", { returnObjects: true });


  
  // Handle Slider
  const sliderRef = useRef<HTMLOListElement | null>(null)
  const slideRef = useRef<HTMLLIElement| null>(null)
  const hadnleSlider = (e:string) => {
    if(sliderRef.current && slideRef.current){
      const slide =
        slideRef.current.clientWidth +
        Number(getComputedStyle(slideRef.current).getPropertyValue("margin-inline").slice(0, -2))*2 // we sliced two last values (px) to make it of type number and multiplied by two to get margin from both sides of an element
      e == "increment" && (sliderRef.current.scrollLeft -= slide)
      e == "decrement" && (sliderRef.current.scrollLeft += slide)
    }
    
  
    
  }
 
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
                        (item, index) => (
                          <li key={index}>
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
      {/*How the training works*/}
      <article className="methods">
        <div className="methods__heading">
          <h4>{t("all-courses.methods.heading")}</h4>
          <div className="methods__heading__arrows">
            <span className="material-symbols-rounded" onClick={()=>hadnleSlider("increment")}>chevron_left</span>
            <span className="material-symbols-rounded" onClick={()=>hadnleSlider("decrement")}>chevron_right</span>
          </div>
        </div>
        <ol className="methods__list" ref={sliderRef}>
          {methods.map((e, index) => (
            <li key={index} ref={slideRef}>
              <mark>{index + 1}</mark>
              {e}
            </li>
          ))}
        </ol>
      </article>
      {/*Info-Form*/}
      <article className="info-form">
        {courses.map(
          (e) =>
            e.id == Number(course) && (
              <div className="info-form__info" key={e.id}>
                <h3>
                  {e.forForm.cost.heading} <span>{e.forForm.cost.content}</span>
                </h3>
                <ul className="info-form__info__infosmarks">
                  <li>
                    {e.forForm.duration.heading}{" "}
                    <span>{e.forForm.duration.content}</span>
                  </li>
                  <li>
                    {e.forForm.places.heading}{" "}
                    <span>{e.forForm.places.content}</span>
                  </li>
                  <li>
                    {e.forForm.format.heading}{" "}
                    <span>{e.forForm.format.content}</span>
                  </li>
                </ul>
                <ul className="info-form__info__formsmarks">
                  {e.forForm.marks.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </div>
            )
        )}
        <Form background={background} isCourse={true} />
      </article>
      {/*Certificate*/}
      <Certificate />
      {/*Companies*/}
      <Companies />
    </div>
  )
}

export default Course