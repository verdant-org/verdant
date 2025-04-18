import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const contact = pgTable("contact", {
    id: serial("id").primaryKey(),
    email: text("email").unique().notNull(),
    message: text("message").notNull(),
});