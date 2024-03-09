*- please note that my clone is not 100% exact as original website, for reusability and simplicity purposes.*
## In this project I expect to use:
1. <a href="#1">React-router-dom</a> - for client-side routing and SPA
2. <a href="#2">Vite</a> - React new generation bundler
3. <a href="#3">i18next</a> - for localization
4. <a href="#4">Google materials</a> - for icons (check CDN links in html root file)
5. <a href="#5">React Hooks I have used</a>

### <h3 id="1">1. React-router-dom</h3>
I have used following router's hooks:
 1. useNavigate(): - App component
 

### <h3 id="2">2. Vite</h3> 
For me it seems somewhat like a Gulp <br>
This is what I have understand for now:
 - It reads scss

### <h3 id="3">3. i18next</h3>:
   1. install it: <mark>npm install react-i18next i18next --save</mark>
   2. create languages folder
   3. create i18n file (for config) and write following:
      
   
~~~
   // Languages import
      import global_en from "./english/english.json"
      import global_ru from "./russian/russian.json"
      import global_tj from "./tajik/tajik.jso
   // i18next
      import { initReactI18next } from "react-i18next"
      import i18n from "i18nex
   // i18n initalization
      i18n.use(initReactI18next).init({
         lng: localStorage.getItem("language") || "english"
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
~~~
    

   4. wrap main.tsx with ``I18nextProvider`` (and ``i18n`` config file as its prop).
   5. in header.tsx or app.tsx, where language-switcher lies add these:
   ```
      // i18next hook
      import { useTranslation } from "react-i18next";
      ...
      // handle languages
         const { i18n } = useTranslation()
         const locLang = localStorage.getItem("language") || i18n.language
         const [lang, setlang] = useState(locLang)

         const changeLang = (language: string) => {
            setlang(language)
            localStorage.setItem("language", language)
            i18n.changeLanguage(language)
         }
      ...
      // switcher
      <select
          className="header__switchers__languages"
          value={lang}
          onChange={(e) => changeLang(e.target.value)}
        >
          <option value="english">EN</option>
          <option value="russian">RU</option>
          <option value="tajik">TJ</option>
        </select>
      ...
      <NavLink to="/news">{t("header.news")}</NavLink>
      ...
   ```

### <h3 id="4">4. Google materials</h3>:
1. Add CDN in HTML head tag (here I have for outlined, sharp and rounded icons):
~~~
<!--Google icons CDN outlined-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <!--Google icons CDN sharp-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <!--Google icons CDN rounded-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <title>softclub</title>
~~~
3. Search for desired icon on <a href="https://fonts.google.com/icons">official website</a> and paste icon in your html. Google material icons are usually as **span** html tags.

### <h3 id="5">5. React Hooks I have used</h3>:
1. useState - used to store values (instead of variables, for it won't work in React DOM)
2. useEffect - 
      1. used to add and remove classes (just like ``element.classList.add`` or ``element.classList.remove`` in vanilla) in Header.tsx. 
      2. to run a function based on dependecy change in App.tsx
3. useLocation - is like **window.location** that we have in vanilla (for now I do not see any difference, although it is recommended to use useLocation)
4. useRef - used to select rendered html elements