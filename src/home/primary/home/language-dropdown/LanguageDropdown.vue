<template>
  <div class="relative inline-block text-left" @mouseleave="closeDropdown">
    <button
      type="button"
      class="inline-flex w-full min-w-40 justify-between items-center gap-x-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      id="menu-button"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      @click="toggleDropdown"
    >
      <img :src="currentLanguage.flag" alt="Flag" class="h-5 w-5 rounded-full object-cover" />
      <span>{{ currentLanguage.label }}</span>
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 z-10 pt-2 w-40 origin-top-right focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div class="rounded-md bg-white shadow-lg ring-1 ring-gray-500">
          <div class="py-1" role="none">
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="selectLanguage(lang.code)"
              class="flex w-full items-center gap-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabindex="-1"
            >
              <img :src="lang.flag" alt="" class="h-5 w-5 rounded-full object-cover" />
              {{ lang.label }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" src="./LanguageDropdown.component.ts"></script>
