CREATE TABLE "contact" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL,
	CONSTRAINT "contact_email_unique" UNIQUE("email")
);
