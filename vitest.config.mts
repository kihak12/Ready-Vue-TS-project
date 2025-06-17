import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/**'],
    root: fileURLToPath(new URL('./', import.meta.url)),
    reporters: ['basic', 'junit', 'vitest-sonar-reporter'],
    outputFile: { junit: './junit.xml', 'vitest-sonar-reporter': 'test-report.xml' },
    coverage: {
      include: ['src/**/*.ts'],
      exclude: ['src/main.ts', 'src/i18n.ts', 'src/routes.ts', '**/*.d.ts', '**/*AsyncModule.ts'],
      provider: 'istanbul',
      reporter: ['html', 'json-summary', 'text-summary', 'lcov', 'clover', 'cobertura'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
