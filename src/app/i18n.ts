import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from '../../locales/en.json'
import heJSON from '../../locales/he.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    he: { ...heJSON },
  },
  lng: "he",
});


export default i18n;