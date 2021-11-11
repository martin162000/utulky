
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import skTranslation from './locales/sk.json'

const resources = {
    sk: {
        translation: skTranslation
    }
}

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "sk",
    fallbackLng: "sk",
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n