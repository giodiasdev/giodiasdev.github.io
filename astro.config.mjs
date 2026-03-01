// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    output: "static",
    server: {
        host: "0.0.0.0",
        port: 4321,
    },
    integrations: [react(), mdx()],
    vite: {
        plugins: [tailwindcss()],
    },
});
