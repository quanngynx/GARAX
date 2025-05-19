import i18next, { TFunction } from 'i18next';
import I18nextLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
import enLocales from './config/en';
import viLocales from './config/vi';

export const i18n: Promise<TFunction<'translation', undefined>> = i18next
    .use(I18NextHttpBackend)
    .use(I18nextLanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: 'vi',
        fallbackLng: 'vi',
        resources: {
            en: enLocales,
            vi: viLocales,
        },
    });
