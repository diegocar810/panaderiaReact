import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// the translations
const resources = {
    en: {
        translation: translationEN
      },
      es: {
        translation: translationES
      }
};
//order: ['path', 'cookie', 'navigator', 'localStorage', 'subdomain', 'queryString', 'htmlTag'],
const detectionOptions = {
    order: [ 'navigator','path', 'cookie', 'localStorage', 'subdomain', 'queryString', 'htmlTag'],
    lookupFromPathIndex: 0

}

i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    //lng: "en",
    fallbackLng: "en", // use en if detected lng is not available
    detection: detectionOptions,
    keySeparator: '.', // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
 // i18n.changeLanguage("es");
export default i18n;