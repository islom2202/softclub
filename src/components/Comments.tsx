import { useState } from "react"
import user from "../assets/icons/user.png"
import { useTranslation } from "react-i18next"

export const Comments = () => {
  const {t} = useTranslation()
  const [comments, setComments] = useState([
    {
      name: "Islomjon Saidaliev",
      comment: "Bravo 👍",
    },
  ])
  // add comments
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")

  const addComment = (e:any) => {
    // prevent page reload
    e.preventDefault()
    // save new inputs into an object
    const newComment = {
      name: name,
      comment: comment,
    }
    // add new comment to existing comment
    const updatedComments = [...comments, newComment]
    setComments(updatedComments)
    // empty input fields
    setName("");
    setComment("");
  }
  
  return (
    <article className="comments">
      <h4 className="comments__heading">
        {t("academy-news.messages.heading")}
      </h4>
      <p className="comments__name">{t("academy-news.messages.name")}</p>
      {/*Form*/}
      <form style={{ display: "contents" }} onSubmit={(e)=>addComment(e)}>
        <div className="comments__nameInputPlaceholder">
          <input
            value={name}
            onChange={(e)=> setName(e.target.value)}
            name="name"
            placeholder={t("academy-news.messages.namePlaceholder")}
          />
          <button className="button button--outlined" type="submit">
            <span className="material-symbols-outlined">arrow_forward</span>
            <span>{t("academy-news.messages.button")}</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <textarea
          value={comment}
          onChange={(e)=> setComment(e.target.value)}
          name="message"
          className="comments__message"
          placeholder={t("academy-news.messages.commentaryPlaceholder")}
        />
      </form>
      {/*Messages*/}
      <ul className="comments__messages">
        {comments?.map((e:any, i) => (
          <li key={i}>
            <img src={user} alt={e.name} />
            <div>
              <h5>
                {e.name} {"  "}
                <small>{e.date && e.date}</small>
              </h5>
              <p>{e.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
