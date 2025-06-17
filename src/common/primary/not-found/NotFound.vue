<template>
  <TemplateStandardVue>
    <template v-slot:body>
      <section class="px-4 py-24 mx-auto max-w-7xl">
        <div class="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
          <div>
            <p class="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">Error 404</p>
            <h1
              class="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl"
              v-text="$t('not-found.title')"
            ></h1>
            <p class="mb-5 text-base text-left text-gray-800 md:text-xl" v-text="$t('not-found.message')"></p>
            <button
              @click="$router.push({ name: 'main' })"
              class="inline-flex items-center gap-2 text-white bg-main hover:bg-red-600 transition-colors duration-300 pt-1 pb-1.5 px-4 rounded-lg"
            >
              <i class="fa-regular fa-arrow-left-to-bracket text-xl mt-1"></i>
              <span class="leading-8 font-semibold" v-text="$t('not-found.go-to-home')"></span>
            </button>
          </div>
          <div>
            <div class="flex flex-col gap-5 items-center justify-center">
              <i class="fa-light fa-file-magnifying-glass text-main text-9xl"></i>
            </div>
          </div>
        </div>
      </section>
    </template>
  </TemplateStandardVue>
</template>
<script lang="ts" src="./NotFound.component.ts"></script>
