import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: '/test/2e2/cypress/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173',
  },
});
