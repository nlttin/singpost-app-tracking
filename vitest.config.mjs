import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.{test,spec}.js"],
    exclude: ["node_modules", "coverage"],
    reporters: ["default"],
    coverage: {
      enabled: false,
      provider: "v8",
      reporter: ["text", "html", "json-summary", "json"],
      reportOnFailure: true,
      include: ["src/**/*.js"],
      exclude: [
        "src/test/**",
        "src/**/*.{test,spec}.js",
        "src/index.js",
        "src/tracker.js",
      ],
    },
  },
});
