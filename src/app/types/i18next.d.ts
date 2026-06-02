import 'i18next';
import ns1 from '../public/locales/ru/translation.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof ns1;
    };
  }
}
