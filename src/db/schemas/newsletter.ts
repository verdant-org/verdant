import { pgTable, serial, boolean, text } from "drizzle-orm/pg-core";

export const subscribers = pgTable("subscribers", {
    id: serial("id").primaryKey(),
    email: text("email").unique().notNull(),
    subscribed: boolean("subscribed").default(true).notNull(),
});