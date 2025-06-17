import { defineStore } from 'pinia';

export const useI18nStore = defineStore('I18nStore', {
  state: () => ({
    locale: manageLocale(localStorage.getItem('locale') || undefined),
  }),
  actions: {
    setLocale(locale: 'en' | 'fr' | undefined) {
      this.locale = locale;
      localStorage.setItem('locale', locale ?? '');
    },
  },
});

const manageLocale = (local?: string): 'en' | 'fr' | undefined => {
  switch (local) {
    case undefined:
      return undefined;
    case 'fr':
      return local;
    default:
      return 'en';
  }
};
