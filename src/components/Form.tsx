import { useState } from "react";
import { useTranslation } from "react-i18next";
const Form = ({formfooter, background, isCourse}:{formfooter?:string[], background:string, isCourse?:boolean}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  
  const { t } = useTranslation();
  const inputs:{label:string, placeholder:string, type:string, name:string, invalid:string}[] = t("form.inputs", {returnObjects: true});

  // check inputs validity
  const checkValidity = (e:any) => {
    e.preventDefault();
    e.target.name.value.length < 2 ? setName('error') : setName('');
    !/^[0-9]{9}$/.test(e.target.tel.value) ? setTel('error') : setTel('');
    !/^\w+@\w+\.[\w+]{2,3}$/.test(e.target.email.value) ? setEmail('error') : setEmail('');
    // if all inputs valid then empty inputs
    if(e.target.name.value.length < 2 && 
      /^[0-9]{9}$/.test(e.target.tel.value) &&
      /^\w+@\w+\.[\w+]{2,3}$/.test(e.target.email.value)){
      e.target.name.value = ""
      e.target.tel.value = ""
      e.target.email.value = "";
    }
  }
  return (
    <div
      className="form-section"
      style={{
        backgroundColor: `${isCourse && "#0F172A"}`,
        padding: `${isCourse && 0}`,
      }}
    >
      <form
        className="form-section__form"
        style={{
          backgroundImage: `url(${background})`,
          padding: `${isCourse && "4rem 10%"}`,
          backgroundSize: `${isCourse && "40%"}`,
          backgroundPosition: `${isCourse && "center"}`,
          backgroundColor: `${isCourse && "#142136"}`,
          color: `${isCourse && "white"}`,
        }}
        onSubmit={(e) => checkValidity(e)}
      >
        <h4
          className="form-section__form__heading"
          style={{
            textAlign: `${isCourse ? "left" : "center"}`,
            fontSize: `${isCourse && "clamp(1.6rem, 1.5vw, 1.9rem)"}`
          }}
        >
          {t("form.heading")}
        </h4>
        <ul
          className="form-section__form__inputs"
          style={{ gridTemplateColumns: `${isCourse && "1fr"}` }}
        >
          {inputs.map((e) => (
            <li key={e.name}>
              <label htmlFor={e.name}>{e.label}</label>
              <div
                className={`inputWrapper ${
                  e.name == "name"
                    ? name
                    : e.name == "tel"
                    ? tel
                    : e.name == "email"
                    ? email
                    : ""
                }`}
              >
                {e.name == "tel" && (
                  <span className="inputWrapper__telCode">(+992)</span>
                )}
                <input
                  type={e.type}
                  id={e.name}
                  placeholder={e.placeholder}
                  required
                  className={`input-${e.name}`}
                  style={{ backgroundColor: `${isCourse && "#0F172A"}` }}
                />
                <span className="invalid">{e.invalid}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="form-section__form__btn-policy">
          <button className="button button--filled" typeof="submit">
            <span className="material-symbols-rounded">arrow_right_alt</span>
            <span>{t("form.button")}</span>
            <span className="material-symbols-rounded">arrow_right_alt</span>
          </button>
          <p>{t("form.policy")}</p>
        </div>
        <ul className="form-section__form__marks">
          {formfooter?.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default Form