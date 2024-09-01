import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	return {
		define: {
			"process.env.SOME_KEY": JSON.stringify(env.SOME_KEY),
		},
		plugins: [react()],
		css: {
			postcss: {
				plugins: [tailwindcss()],
			},
		},
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
	};
});
