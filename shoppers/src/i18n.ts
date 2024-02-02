// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import enTranslation from './assets/locales/en.json';
import frTranslation from './assets/locales/fr.json';
import esTranslation from './assets/locales/es.json';

// the translations
const resources = {
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18n.use(Backend)
.use(LanguageDetector).use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
