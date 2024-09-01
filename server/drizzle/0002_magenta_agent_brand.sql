ALTER TABLE "users" RENAME COLUMN "username" TO "email";--> statement-breakpoint
DROP INDEX IF EXISTS "user_username_idx";--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "user_email_idx" ON "users" USING btree ("email");