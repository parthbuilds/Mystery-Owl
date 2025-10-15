import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  root: "source", 
  build: {
    outDir: "../build", 
    base: '/',         
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
