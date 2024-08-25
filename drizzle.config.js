import { defineConfig } from "drizzle-kit";
export default defineConfig({
	dialect: "postgresql",
	schema: "./src/db/schema/*",
	out: "./drizzle",
	dbCredentials: {
		url: "postgresql://sih1654_owner:4oGlfam9jXIW@ep-billowing-firefly-a1s7cnmm.ap-southeast-1.aws.neon.tech/sih1654?sslmode=require",
	},
});
