export const Hero = ({routename, name, description, button, image, contentClass, map}:{name:string,routename?:string, description?:string, button?:string, image?:string, contentClass?:string, map?:any}) => {
  return (
    <article className="hero">
      <div className={`hero__content hero__${contentClass}`}>
        <p className="hero__content__route-name">{routename}</p>
        <h3>{name}</h3>
        <p className="hero__content__description">{description}</p>
        {button && <button className="button">{button}</button>}
      </div>
      {image && <img src={image} alt="hero-img" className="hero__img" />}
      {map && <div className="hero__map">{map}</div>}
    </article>
  )
}
