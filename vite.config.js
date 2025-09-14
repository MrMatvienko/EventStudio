import { defineConfig } from "vite";
import { sync as globSync } from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  base: "/EventStudio/",
  root: "src",
  build: {
    rollupOptions: {
      input: globSync("./src/*.html"),
    },
    outDir: "../dist",
  },
  plugins: [injectHTML(), FullReload(["./src/**/**.html"])],
});
// import { defineConfig } from "vite";
// import { sync as globSync } from "glob";
// import injectHTML from "vite-plugin-html-inject";
// import FullReload from "vite-plugin-full-reload";

// export default defineConfig({
//   base: "/EventStudio/",
//   root: "src",
//   build: {
//     rollupOptions: {
//       input: globSync("./src/**/index.html"),
//     },
//     outDir: "../dist",
//   },
//   plugins: [injectHTML(), FullReload(["./src/**/*.html"])],
// });
