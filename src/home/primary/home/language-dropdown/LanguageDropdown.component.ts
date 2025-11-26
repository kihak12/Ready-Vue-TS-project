import { Component, Vue } from 'vue-facing-decorator';

import enFlag from '@/assets/en.svg';
import frFlag from '@/assets/fr.svg';
import i18n from '@/i18n';
import { useI18nStore } from '@/stores/I18nStore';

interface LanguageOption {
  code: 'en' | 'fr';
  label: string;
  flag: string;
}

@Component({})
export default class LanguageDropdownComponent extends Vue {
  private languageStore = useI18nStore();
  public isOpen = false;

  public languages: LanguageOption[] = [
    { code: 'en', label: 'English', flag: enFlag },
    { code: 'fr', label: 'Français', flag: frFlag },
  ];

  public get currentLanguage(): LanguageOption {
    const currentCode = this.languageStore.locale ?? i18n.global.locale;
    return this.languages.find(l => l.code === currentCode) || this.languages[0];
  }

  public toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  public selectLanguage(code: 'en' | 'fr'): void {
    this.languageStore.setLocale(code);
    i18n.global.locale = code; // Assure la mise à jour immédiate si le store n'est pas réactif partout
    this.isOpen = false;
  }

  public closeDropdown(): void {
    this.isOpen = false;
  }
}
