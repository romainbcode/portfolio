import { createI18n } from "vue-i18n";

import frLocale from "../locales/fr.json";
import enLocale from "../locales/en.json";

export default createI18n({
  locale: localStorage.getItem("language") || "fr", // Langue par défaut
  fallbackLocale: "en", // Langue de secours
  messages: {
    fr: frLocale,
    en: enLocale,
  },
  legacy: false,
  globalInjection: true,
});
