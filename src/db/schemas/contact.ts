import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const subscribers = pgTable("subscribers", {
    id: serial("id").primaryKey(),
    email: text("email").unique().notNull(),
    message: text("message").notNull(),
});