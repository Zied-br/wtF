import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TRANSLATIONS_EN } from './en/translations';
import { TRANSLATIONS_FR } from './fr/translations';
import { TRANSLATIONS_AR } from './ar/translations';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: TRANSLATIONS_EN,
    },
    fr: {
      translation: TRANSLATIONS_FR,
    },
    ar: {
      translation: TRANSLATIONS_AR,
    },
  },
  lng: 'en', // Set the default language here
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
