import { useNavigate } from "react-router-dom"
export const Hero = ({
  routename,
  name,
  description,
  button,
  image,
  isCourse,
  contentClass,
  map,
}: {
  name: string | number | undefined
  routename?: string
  description?: string
  button?: string
  image?: string
  isCourse?: boolean
  contentClass?: string
  map?: any
}) => {
  const navigate = useNavigate();
  return (
    <article className="hero">
      <div className={`hero__content hero__${contentClass}`}>
        <p className="hero__content__route-name">{routename}</p>
        <h3>{name}</h3>
        <p className="hero__content__description">{description}</p>
        {button && (
          <button className="button button--filled" onClick={()=> navigate("/contacts")}>
            <span className="material-symbols-rounded">arrow_forward</span>
            <span>{button}</span>
            <span className="material-symbols-rounded">arrow_forward</span>
          </button>
        )}
      </div>
      {image && (
        <img
          src={image}
          alt="hero-img"
          className="hero__img"
          style={{
            maxWidth: `${isCourse ? "23.8rem" : "auto"}`,
            height: `${isCourse ? "23.5rem" : "auto"}`,
            WebkitBoxReflect: `${
              isCourse &&
              "below -10px linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.07))"
            }`,
          }}
        />
      )}
      {map && <div className="hero__map">{map}</div>}
    </article>
  )
}
