import axios from 'axios';
import * as countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';
import fr from 'i18n-iso-countries/langs/fr.json';
import Lenis from 'lenis';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import i18n from './i18n';
import { routes } from './routes';

import { AppVue } from '@/common/primary/app';
import { BackendCaller } from '@/common/secondary/backend/BackendCaller';
import { ConsoleLogger } from '@/common/secondary/ConsoleLogger';
import { useI18nStore } from '@/stores/I18nStore';

countries.registerLocale(en);
countries.registerLocale(fr);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const logger = new ConsoleLogger(console); // eslint-disable-line no-console

const app = createApp(AppVue);

/*
const apiBackendCaller = new BackendCaller(
  axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  })
);
*/

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// const myRepository = new RestMyRepository(apiBackendCaller);

const lenis = new Lenis();

app.provide('logger', () => logger);
app.provide('lenis', () => lenis);
app.provide('globalWindow', () => window);
app.provide('environment', () => import.meta.env);
app.provide('now', () => new Date());

// app.provide('myRepository', () => myRepository);

app.use(router);
app.use(i18n);
app.use(pinia);

const languageStore = useI18nStore();
if (languageStore.locale !== undefined) {
  i18n.global.locale = languageStore.locale;
}

app.mount('#app');
