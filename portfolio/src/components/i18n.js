import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslation from './fr.json';
import enTranslation from './en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: frTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    lng: 'fr', // Langue par défaut
    fallbackLng: 'en', // Langue de secours
    interpolation: {
      escapeValue: false, // Ne pas échapper les valeurs pour permettre le rendu HTML
    },
    debug: true, // Activer le mode débogage pour voir les logs dans la console
  });

export default i18n;