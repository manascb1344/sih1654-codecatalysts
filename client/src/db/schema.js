import {
	pgTable,
	serial,
	varchar,
	integer,
	text,
	timestamp,
	real,
	uniqueIndex,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const experts = pgTable(
	"experts",
	{
		id: serial("id").primaryKey(),
		firstName: varchar("first_name", { length: 255 }).notNull(),
		lastName: varchar("last_name", { length: 255 }).notNull(),
		email: varchar("email", { length: 255 }).notNull(),
		phoneNumber: varchar("phone_number", { length: 20 }),
		organization: varchar("organization", { length: 255 }),
		designation: varchar("designation", { length: 255 }),
		domain: varchar("domain", { length: 255 }),
		experienceYears: integer("experience_years"),
		profileScore: real("profile_score"),
		createdAt: timestamp("created_at").defaultNow(),
		updatedAt: timestamp("updated_at").defaultNow(),
	},
	(table) => {
		return {
			expertEmailIdx: uniqueIndex("expert_email_idx").on(table.email),
		};
	}
);

export const candidates = pgTable(
	"candidates",
	{
		id: serial("id").primaryKey(),
		firstName: varchar("first_name", { length: 255 }).notNull(),
		lastName: varchar("last_name", { length: 255 }).notNull(),
		email: varchar("email", { length: 255 }).notNull(),
		phoneNumber: varchar("phone_number", { length: 20 }),
		degree: varchar("degree", { length: 255 }),
		specialization: varchar("specialization", { length: 255 }),
		experienceYears: integer("experience_years"),
		createdAt: timestamp("created_at").defaultNow(),
		updatedAt: timestamp("updated_at").defaultNow(),
	},
	(table) => {
		return {
			candidateEmailIdx: uniqueIndex("candidate_email_idx").on(table.email),
		};
	}
);

export const interviewSubjects = pgTable("interview_subjects", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	description: text("description"),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const expertSkills = pgTable("expert_skills", {
	id: serial("id").primaryKey(),
	expertId: integer("expert_id").references(() => experts.id),
	skillName: varchar("skill_name", { length: 255 }).notNull(),
	proficiencyLevel: varchar("proficiency_level", { length: 50 }),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const candidateSkills = pgTable("candidate_skills", {
	id: serial("id").primaryKey(),
	candidateId: integer("candidate_id").references(() => candidates.id),
	skillName: varchar("skill_name", { length: 255 }).notNull(),
	proficiencyLevel: varchar("proficiency_level", { length: 50 }),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const interviewBoards = pgTable("interview_boards", {
	id: serial("id").primaryKey(),
	subjectId: integer("subject_id").references(() => interviewSubjects.id),
	interviewDate: timestamp("interview_date"),
	location: varchar("location", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const boardMembers = pgTable("board_members", {
	id: serial("id").primaryKey(),
	boardId: integer("board_id").references(() => interviewBoards.id),
	expertId: integer("expert_id").references(() => experts.id),
	relevancyScore: real("relevancy_score"),
	assignedRole: varchar("assigned_role", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const interviewRecords = pgTable("interview_records", {
	id: serial("id").primaryKey(),
	boardId: integer("board_id").references(() => interviewBoards.id),
	candidateId: integer("candidate_id").references(() => candidates.id),
	outcome: varchar("outcome", { length: 50 }),
	feedback: text("feedback"),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const users = pgTable(
	"users",
	{
		id: serial("id").primaryKey(),
		username: varchar("username", { length: 255 }).notNull(),
		passwordHash: varchar("password_hash", { length: 255 }).notNull(),
		role: varchar("role", { length: 50 }).notNull(),
		createdAt: timestamp("created_at").defaultNow(),
		updatedAt: timestamp("updated_at").defaultNow(),
	},
	(table) => {
		return {
			userUsernameIdx: uniqueIndex("user_username_idx").on(table.username),
		};
	}
);
