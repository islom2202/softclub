import { useTranslation } from "react-i18next";

import background from "../assets/images/form-background.png";
// Components
import { Hero } from "../components/Hero";
import Form from "../components/Form";
const yandexMap = (
  <iframe
    src="https://yandex.com/map-widget/v1/?um=constructor%3Ab5d8ab12b9ecd92264209eaa3419efbf7fc915851affa81b0a923fd61274be99&amp;source=constructor"
  ></iframe>
)

const Contacts = () => {
  const {t} = useTranslation();
  const marks:string[] = t("form.footer", {returnObjects: true})
  const contacts:{icon:string,name:string,info:string}[] = t("contacts.list", {returnObjects: true})
  return (
    <div className="contacts">
      {/*Hero*/}
      <Hero
        map={yandexMap}
        routename={t("contacts.hero.route-name")}
        name={t("contacts.hero.name")}
        contentClass="contentClass"
      />
      {/*Contacts' marks*/}
      <ul className="contacts__marks">
        {contacts.map((e, i) => (
          <li key={i} className="contacts__marks__item">
            <span className="material-symbols-rounded">{e.icon}</span>
            <h5>{e.name}</h5>
            <small>{e.info}</small>
          </li>
        ))}
      </ul>
      {/*Form*/}
      <Form background={background} formfooter={marks} />
    </div>
  )
}

export default Contacts