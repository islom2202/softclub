import { useTranslation } from "react-i18next";
import { getIconUrl } from "../utils/icons-utils";
export const Footer = () => {
  const {t} = useTranslation();
  const icons:string[] = t("footer.softclub.icons", { returnObjects: true })
  const informationList:string[] = t("footer.information.list", { returnObjects: true}) 
  const contactList:{icon:string, name:string}[] = t("footer.contact.list", { returnObjects: true })
  return (
    <>
      <footer className="footer">
        <div className="footer__softclub">
          <img src={getIconUrl(t("footer.softclub.image"))} alt="logo" />
          <p>{t("footer.softclub.description")}</p>
          <ul>
            {icons.map((e) => (
              <li key={e}>
                <img src={getIconUrl(e)} alt={e} />
              </li>
            ))}
          </ul>
        </div>
        <section className="footer__information">
          <h2>{t("footer.information.heading")}</h2>
          <ul>
            {informationList.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </section>
        <section className="footer__contact">
          <h2>{t("footer.contact.heading")}</h2>
          <ul>
            {contactList.map((e) => (
              <li>
                <figure>
                  <img src={getIconUrl(e.icon)} alt={e.icon} />
                  <figcaption>{e.name}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      </footer>
      <footer className="copyright"></footer>
    </>
  )
}
