import { db } from "../db";
import { users } from "../db/schema/users";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

export const registerUser = async (
	email,
	password,
	name = "",
	role = "user"
) => {
	console.log("Registering user:", { email, name, role });

	const existingUser = await db
		.select()
		.from(users)
		.where(eq(users.email, email))
		.limit(1);
	if (existingUser.length > 0) {
		throw new Error("User with this email already exists");
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const createdAt = new Date();
	const updatedAt = createdAt;
	try {
		const [newUser] = await db
			.insert(users)
			.values({
				email,
				password: hashedPassword,
				name,
				role,
				createdAt,
				updatedAt,
			})
			.returning();

		const { ...userWithoutPassword } = newUser;
		return userWithoutPassword;
	} catch (error) {
		console.error("Error during user registration:", error);
		throw error;
	}
};

export const loginUser = async (email, password) => {
	const [user] = await db
		.select()
		.from(users)
		.where(eq(users.email, email))
		.limit(1);

	if (!user) {
		throw new Error("User not found");
	}

	if (await bcrypt.compare(password, user.password)) {
		const { ...userWithoutPassword } = user;
		return userWithoutPassword;
	} else {
		throw new Error("Invalid credentials");
	}
};
