# 🚀 Ready-Vue-TS Project

![Vue js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Ce projet est un **starter kit avancé** conçu pour initier rapidement des applications Front-End robustes et maintenables. Il implémente une **Architecture Hexagonale (Clean Architecture)** stricte et intègre une suite d'outils de qualité industrielle.

## 🎯 Objectifs

- **Démarrage Rapide** : Une stack pré-configurée (Vue 3 + TS + Vite) pour se concentrer immédiatement sur la valeur métier.
- **Maintenabilité** : Isolation forte entre la logique métier (Domain) et l'interface utilisateur (UI) pour faciliter les évolutions et les tests.
- **Qualité Industrielle** : Outillage complet pour le linting, le formatage, et les tests (Unitaires & E2E).
- **Pattern Class-Component** : Utilisation de classes pour les composants Vue (via `vue-facing-decorator`), offrant une structure familière pour les développeurs OOP.

---

## 🏗 Architecture Logicielle

Le projet suit les principes de l'**Architecture Hexagonale** (Ports & Adapters). Le code est organisé pour que le domaine métier ne dépende jamais du framework.

### Structure des dossiers (`src/`)

L'application est découpée en modules fonctionnels (ex: `common`, `home`), suivant chacun cette structure :

```
src/
├── common/                 # Code partagé et modules transverses
│   ├── domain/             # LE CŒUR (Business Logic)
│   │                       # - Indépendant du Framework
│   │                       # - Règles métier, Entités, Interfaces d'erreurs
│   │
│   ├── primary/            # ADAPTERS PRIMAIRES (User Side)
│   │                       # - Composants Vue, Stores Pinia, Router
│   │                       # - Tout ce qui interagit avec l'utilisateur
│   │
│   └── secondary/          # ADAPTERS SECONDAIRES (Server Side / Infra)
│                           # - Appels API (Axios), Loggers, LocalStorage
│                           # - Implémentation des interfaces définies dans le domain
│
├── home/                   # Module "Home" (exemple de feature)
│   ├── primary/            # Composants de la page d'accueil
│   └── ...
└── ...
```

---

## 🛠 Stack Technique & Outils

### Cœur

- **[Vue 3](https://vuejs.org/)** : Framework progressif.
- **[TypeScript](https://www.typescriptlang.org/)** : Typage statique pour la fiabilité.
- **[vue-facing-decorator](https://github.com/facing-dev/vue-facing-decorator)** : Décorateurs pour écrire des composants sous forme de **Classes**.

### Build & Style

- **[Vite](https://vitejs.dev/)** : Build tool ultra-rapide.
- **[Tailwind CSS v4](https://tailwindcss.com/)** : Framework CSS utilitaire.
- **PostCSS & Autoprefixer**.

### Gestion d'État & Navigation

- **[Pinia](https://pinia.vuejs.org/)** : State management officiel.
- **pinia-plugin-persistedstate** : Persistance automatique du store.
- **Vue Router** : Routing SPA.

### UX & UI

- **[GSAP](https://greensock.com/gsap/)** : Animations complexes.
- **[Lenis](https://github.com/studio-freight/lenis)** : Smooth scrolling.
- **[Sweetalert2](https://sweetalert2.github.io/)** : Smart Modal integration.
- **[Vue I18n](https://kazupon.github.io/vue-i18n/)** : Internationalisation (FR/EN configuré).

### Qualité & Tests

- **[Vitest](https://vitest.dev/)** : Tests unitaires rapides.
- **[Cypress](https://www.cypress.io/)** : Tests End-to-End.
- **ESLint & Prettier** : Standardisation du code.

---

## 🚀 Guide de Démarrage

### Prérequis

- Node.js (version LTS recommandée, >=20.9.0)

### Installation

```bash
npm install
```

### Développement

Lancer le serveur local avec rechargement à chaud (HMR) :

```bash
npm run dev
```

### Production

Compiler et minifier pour la production :

```bash
npm run build
```

### Tests

```bash
# Tests Unitaires (Vitest)
npm run test:unit

# Tests E2E (Cypress avec interface graphique)
npm run test:e2e:dev

# Vérification des types (TypeScript)
npm run type-check
```

---

## 💡 Guide de Développement : Créer un Composant

Dans ce projet, nous séparons le template (.vue) de la logique (.ts) pour une meilleure lisibilité et séparation des responsabilités.

**1. Le Template (`MyComponent.vue`)**
Contient uniquement le HTML et le CSS (via Tailwind). Il pointe vers le fichier de script.

```html
<template>
  <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="onClick">{{ label }}</button>
</template>

<!-- Lien vers la classe du composant -->
<script lang="ts" src="./MyComponent.component.ts"></script>
```

**2. La Logique (`MyComponent.component.ts`)**
Classe TypeScript utilisant les décorateurs.

```typescript
import { Component, Vue, Prop } from 'vue-facing-decorator';

@Component
export default class MyComponent extends Vue {
  // Props typées
  @Prop({ required: true })
  readonly label!: string;

  // Méthodes
  onClick() {
    console.log('Button clicked:', this.label);
  }
}
```
