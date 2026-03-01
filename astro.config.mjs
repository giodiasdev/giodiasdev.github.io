// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// eslint-disable-next-line no-undef
const env = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
    output: "static",
    server: {
        host: "0.0.0.0",
        port: 4321,
    },
    site: env.SITE_URL,
    base: env.BASE_PATH,
    integrations: [react(), mdx()],
    vite: { plugins: [tailwindcss()] },
});
