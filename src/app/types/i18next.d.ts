import 'i18next';
// Импортируем только основной язык (например, русский) для базы типов
import ns1 from '../public/locales/ru/translation.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    // Указываем тип ресурсов по умолчанию
    defaultNS: 'translation';
    resources: {
      translation: typeof ns1;
    };
  }
}
