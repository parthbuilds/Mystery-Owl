import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  root: ".", 
  build: {
    outDir: "build",          
    emptyOutDir: true
  },
  plugins: [
    handlebars({
      partialDirectory: "source/partials",
      context: {
        title: "Mystery Owl",
        tagline: "Unravel the mystery before time runs out!"
      }
    })
  ],
  server: {
    open: true
  }
});
