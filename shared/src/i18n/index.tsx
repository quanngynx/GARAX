import i18next, { TFunction } from 'i18next';
import I18nextLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import enLocales from './config/en';
import viLocales from './config/vi';

export const i18n: Promise<TFunction<'translation', undefined>> = i18next
  .use(I18NextHttpBackend)
  .use(I18nextLanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'vi',
    fallbackLng: 'vi',
    resources: {
      en: enLocales,
      vi: viLocales
    }
  });
