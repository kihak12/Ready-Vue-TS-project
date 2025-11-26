import { Component, Vue } from 'vue-facing-decorator';

import { LanguageDropdownVue } from '@/home/primary/home/language-dropdown';

@Component({ components: { LanguageDropdownVue } })
export default class HomeComponent extends Vue {}
