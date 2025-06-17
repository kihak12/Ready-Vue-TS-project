import type { RouteRecordRaw } from 'vue-router';

import { NotFoundVue } from '@/common/primary/not-found';
import { HomeVue } from '@/home/primary/HomeAsyncModule';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: HomeVue,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundVue,
  },
];
