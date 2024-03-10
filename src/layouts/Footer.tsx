import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getIconUrl } from "../utils/icons-utils";
export const Footer = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const icons:string[] = t("footer.softclub.icons", { returnObjects: true })
  const informationList:{name:string, route:string}[] = t("footer.information.list", { returnObjects: true}) 
  const contactList:{icon:string, name:string}[] = t("footer.contact.list", { returnObjects: true })
  const copyright:[] = t("footer.copyright", { returnObjects: true})
  return (
    <>
      <footer className="footer">
        <div className="footer__softclub">
          <img
            src={getIconUrl(t("footer.softclub.image"))}
            alt="logo"
            className="footer__softclub__logo"
          />
          <p>{t("footer.softclub.description")}</p>
          <ul className="footer__softclub__icons">
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
            {informationList.map((e, i) => (
              <li key={i} onClick={()=> navigate(e.route)}>{e.name}</li>
            ))}
          </ul>
        </section>
        <section className="footer__contact">
          <h2>{t("footer.contact.heading")}</h2>
          <ul>
            {contactList.map((e) => (
              <li key={e.name}>
                <figure>
                  <img src={getIconUrl(e.icon)} alt={e.icon} />
                  <figcaption>{e.name}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      </footer>
      <footer className="copyright">
        <div>
          {copyright.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </div>
      </footer>
    </>
  )
}
