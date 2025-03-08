CREATE TABLE "county" (
	"state_county_code" text PRIMARY KEY NOT NULL,
	"state_code" integer NOT NULL,
	"county_code" integer NOT NULL,
	"state" text NOT NULL,
	"county_name" text NOT NULL,
	"city" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pollution_data" (
	"id" text PRIMARY KEY NOT NULL,
	"state_county_code" text NOT NULL,
	"date_local" timestamp NOT NULL,
	"no2_units" text NOT NULL,
	"no2_mean" real NOT NULL,
	"no2_1st_max_value" real NOT NULL,
	"no2_1st_max_hour" integer NOT NULL,
	"no2_aqi" integer,
	"o3_units" text NOT NULL,
	"o3_mean" real NOT NULL,
	"o3_1st_max_value" real NOT NULL,
	"o3_1st_max_hour" integer NOT NULL,
	"o3_aqi" integer,
	"so2_units" text NOT NULL,
	"so2_mean" real NOT NULL,
	"so2_1st_max_value" real NOT NULL,
	"so2_1st_max_hour" integer,
	"so2_aqi" integer,
	"co_units" text NOT NULL,
	"co_mean" real NOT NULL,
	"co_1st_max_value" real NOT NULL,
	"co_1st_max_hour" integer,
	"co_aqi" integer
);
--> statement-breakpoint
CREATE TABLE "subscribers" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"subscribed" boolean DEFAULT true NOT NULL,
	CONSTRAINT "subscribers_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "pollution_data" ADD CONSTRAINT "pollution_data_state_county_code_county_state_county_code_fk" FOREIGN KEY ("state_county_code") REFERENCES "public"."county"("state_county_code") ON DELETE cascade ON UPDATE no action;