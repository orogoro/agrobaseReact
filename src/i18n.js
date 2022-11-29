import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { en, ru, uk } from './translations/locales';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    // lng: 'en',
    resources: {
      en: {
        translation: en,
      },
      uk: {
        translation: uk,
      },
      ua: {
        translation: uk,
      },
      ru: {
        translation: ru,
      },
    },
    detection: {
      order: ['queryString', 'cookie', 'localStorage'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     supportedLngs: ['en', 'ru'],
//     fallbackLng: 'en',
//     debug: true,
//     detection: {
//       order: ['queryString', 'cookie', 'localStorage'],
//       cache: ['cookie'],
//     },
//     interpolation: {
//       escapeValue: false,
//     },
//     backend: {
//       loadPath: './public/locales/{{lng}}/translation.json',
//     },
//   });
