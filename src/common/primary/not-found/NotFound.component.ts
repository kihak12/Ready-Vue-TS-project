import { Component, Vue } from 'vue-facing-decorator';

import { TemplateStandardVue } from '@/common/primary/template-standard';

@Component({ components: { TemplateStandardVue } })
export default class NotFoundComponent extends Vue {}
