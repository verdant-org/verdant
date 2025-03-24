import { pgTable, text, integer, timestamp, real, boolean, doublePrecision, geometry } from "drizzle-orm/pg-core";

export const county = pgTable("county", {
  // Not sure how we want to handle or do the id, we could do a composite key of state code + county code, or maybe just county code if it is truly unique
  stateCountyCode: text("state_county_code").primaryKey(),
  // Datasets might share this info
  stateCode: integer("state_code").notNull(),
  countyCode: integer("county_code").notNull(),
  stateName: text("state").notNull(),
  countyName: text("county_name").notNull(),
  // Pollution dataset has city listed, but other sets might not have this
  city: text("city").notNull()
});

export const pollutionData = pgTable("pollution_data", {
  id: text("id").primaryKey(),
  // I'm assuming that we connect the data to the county with the county id
  stateCountyCode: text("state_county_code").notNull().references(() => county.stateCountyCode, { onDelete: 'cascade' }),
  dateLocal: timestamp("date_local").notNull(),

  // NO2 Data, most relevant seem to be units, mean, or AQI (Air Quality Index)
  no2Units: text("no2_units").notNull(),
  no2Mean: real("no2_mean").notNull(),
  no2FirstMaxValue: real("no2_1st_max_value").notNull(),
  no2FirstMaxHour: integer("no2_1st_max_hour").notNull(),
  no2AQI: integer("no2_aqi"),

  // O3 info
  o3Units: text("o3_units").notNull(),
  o3Mean: real("o3_mean").notNull(),
  o3FirstMaxValue: real("o3_1st_max_value").notNull(),
  o3FirstMaxHour: integer("o3_1st_max_hour").notNull(),
  o3AQI: integer("o3_aqi"),

  // SO2 info
  so2Units: text("so2_units").notNull(),
  so2Mean: real("so2_mean").notNull(),
  so2FirstMaxValue: real("so2_1st_max_value").notNull(),
  so2FirstMaxHour: integer("so2_1st_max_hour"),
  so2AQI: integer("so2_aqi"),

  // CO info
  coUnits: text("co_units").notNull(),
  coMean: real("co_mean").notNull(),
  coFirstMaxValue: real("co_1st_max_value").notNull(),
  coFirstMaxHour: integer("co_1st_max_hour"),
  coAQI: integer("co_aqi"),
});

