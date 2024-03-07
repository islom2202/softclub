import checkbox from "../assets/icons/checkbox.png";
const WhySoftclub = ({header, list}:{header:string, list:[]}) => {
  return (
    <article className="whySoftclub">
      <h4>{header}</h4>
      <ul>
        {list.map((e, index) =>
          <li key={index}>
            <img src={checkbox} alt="checkbox-icon" />
            {e}
          </li>
        )}
      </ul>
    </article>
  )
}

export default WhySoftclub