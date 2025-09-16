import { integer, pgTable, varchar, text } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
hashedPassword: text('hashed_password').notNull(),
});

