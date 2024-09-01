import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(
	"postgresql://sih1654_owner:4oGlfam9jXIW@ep-billowing-firefly-a1s7cnmm.ap-southeast-1.aws.neon.tech/sih1654?sslmode=require"
);
export const db = drizzle(sql);
