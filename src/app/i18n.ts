import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Загружает переводы из /public/locales
  .use(LanguageDetector) // Определяет язык пользователя
  .use(initReactI18next) // Передает i18n в react-i18next
  .init({
    fallbackLng: 'en', // Язык по умолчанию, если перевод не найден
    debug: true, // Включить для отладки в консоли
    interpolation: {
      escapeValue: false, // React уже экранирует строки
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Путь к файлам переводов
    },
  });

export default i18n;
