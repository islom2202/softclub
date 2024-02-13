import { useTranslation } from "react-i18next";
import { Hero } from "../components/Hero";
const yandexMap = (
  <iframe
    src="https://yandex.com/map-widget/v1/?um=constructor%3Ab5d8ab12b9ecd92264209eaa3419efbf7fc915851affa81b0a923fd61274be99&amp;source=constructor"
  ></iframe>
)
export const Contacts = () => {
  const {t} = useTranslation();
  return (
    <div className="contacts">
      {/*Hero*/}
      <Hero
        map={yandexMap}
        routename={t("contacts.hero.route-name")}
        name={t("contacts.hero.name")}
        contentClass="contentClass"
      />
    </div>
  )
}
