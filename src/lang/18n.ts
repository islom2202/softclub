// Languages import
import global_en from "./english/english.json"
import global_ru from "./russian/russian.json"
import global_tj from "./tajik/tajik.json"

// i18next
import { initReactI18next } from "react-i18next"
import i18n from "i18next"
// i18n initalization
i18n.use(initReactI18next).init({
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