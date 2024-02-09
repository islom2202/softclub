## In this project I expect to use:
1. `React-router-dom` - for client-side routing and SPA
2. `Vite` - React new generation bundler
3. `i18next` - for localization
4. `Google materials` - for icons (check CDN links in html root file)

### i18next
   1. install it: **npm install react-i18next i18next --save**
   2. create languages folder
   3. create i18n file (for config) and write following:
      ```
      // Languages import
         import global_en from "./english/english.json"
         import global_ru from "./russian/russian.json"
         import global_tj from "./tajik/tajik.json"

      // i18next
         import { initReactI18next } from "react-i18next"
         import i18n from "i18next"

      // i18n initalization
         i18n.use(initReactI18next).init({
         interpolation: { escapeValue: false },
         lng: "english",
         debug: true,
         resources: {
            english: {
               translation: global_en,

            },
            russian: {
               translation: global_ru,
            },
            tajik: {
               translation: global_tj,
            },
         },
         })
         export default i18n;
      ```

   4. wrap main.tsx with ``I18nextProvider`` (and ``i18n`` config file as its prop).
   5. in header.tsx or app.tsx, where language-switcher lies add these:
   ```
   // i18next hook
   import { useTranslation } from "react-i18next";
   ...
   // states
   const [lang, setlang] = useState("english")
   ...
   // handle languages
   const {t, i18n} = useTranslation()
   const changeLang = (language:string) =>{
      i18n.changeLanguage(language);
      setlang(language)
   } 
   ...
   // switcher
   <select value={lang} onChange={e => changeLang(e.target.value)}>
      <option value="english">EN</option>
      <option value="russian">RU</option>
      <option value="tajik">TJ</option>
   </select>
   ...
   <NavLink to="/news">{t("header.news")}</NavLink>
   ...
   ```

