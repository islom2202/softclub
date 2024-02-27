import { useState } from "react";
import { useTranslation } from "react-i18next";
const Form = ({formfooter, background}:{formfooter:string[], background:string}) => {
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
    <div className="form-section">
      <form
        className="form-section__form"
        style={{
          backgroundImage: `url(${background})`,
        }}
        onSubmit={(e) => checkValidity(e)}
      >
        <h4 className="form-section__form__heading">{t("form.heading")}</h4>
        <ul className="form-section__form__inputs">
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
                <input
                  type={e.type}
                  id={e.name}
                  placeholder={e.placeholder}
                  required
                />
                <span>{e.invalid}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="form-section__form__btn-policy">
          <button className="button" typeof="submit">
            {t("form.button")}
            <span className="material-symbols-rounded">arrow_right_alt</span>
          </button>
          <p>{t("form.policy")}</p>
        </div>
        <ul className="form-section__form__marks">
          {formfooter.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default Form