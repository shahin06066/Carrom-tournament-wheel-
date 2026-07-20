import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "carrom-spin-fate-main";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : "/",
  plugins: [tailwindcss(), tanstackStart(), react(), tsconfigPaths()],
});
