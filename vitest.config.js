import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Enables global test APIs (e.g., describe, it, expect)
    environment: 'jsdom', // Simulates a browser environment for React testing
    coverage: {
      provider: 'c8', // Coverage provider (e.g., c8 or v8)
      reporter: ['text', 'lcov'], // Output formats for coverage
      reportsDirectory: './coverage', // Directory to save coverage reports
    },
  },
});
