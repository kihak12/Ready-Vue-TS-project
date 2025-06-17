import { createI18n } from 'vue-i18n';

import de from '@/locales/de.json';
import en from '@/locales/en.json';
import es from '@/locales/es.json';
import fr from '@/locales/fr.json';
import it from '@/locales/it.json';
import ru from '@/locales/ru.json';

const getFallbackLocale = (): string => 'en';

const getLocale = (): string => {
  if (import.meta.env.VUE_APP_BROWSER_LANGUAGE === 'disabled') {
    return getFallbackLocale();
  }
  if (!navigator.language) {
    return getFallbackLocale();
  }
  return navigator.language;
};

export const getCountryFromLocal = (isoCode: string) => {
  switch (isoCode) {
    case 'fr':
    case 'fr-FR':
      return 'french';
    default:
      return 'english';
  }
};

export const getLocalFromIso2 = (isoCode: string) => {
  switch (isoCode) {
    case 'fr':
    case 'fr-FR':
      return 'fr-FR';
    default:
      return 'en-US';
  }
};

export default createI18n({
  locale: getLocale(),
  fallbackLocale: getFallbackLocale(),
  messages: { en, fr },
  interpolation: {
    escapeValue: false,
  },
});
