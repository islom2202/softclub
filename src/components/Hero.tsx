export const Hero = ({routename, name, description, button, image}:{name:string,routename?:string, description?:string, button:string, image:string}) => {
  return (
    <article className="hero">
      <div className="hero__content">
        <p className="route-heading">{routename}</p>
        <h2>{name}</h2>
        <p>{description}</p>
        <button className="button">{button}</button>
      </div>
      <img src={image} alt="hero-img" className="hero__img" />
    </article>
  )
}
