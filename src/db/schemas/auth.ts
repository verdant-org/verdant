import { pgTable, text, integer, timestamp, boolean } from "drizzle-orm/pg-core";
      
export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull(),
  image: text('image'),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
  role: text('role'),
  banned: boolean('banned'),
  banReason: text('ban_reason'),
  banExpires: timestamp('ban_expires'),
  twoFactorEnabled: boolean('two_factor_enabled')
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id').notNull().references(()=> user.id, { onDelete: 'cascade' }),
  impersonatedBy: text('impersonated_by'),
  activeOrganizationId: text('active_organization_id')
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id').notNull().references(()=> user.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at'),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull()
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at')
});

export const passkey = pgTable("passkey", {
  id: text("id").primaryKey(),
  name: text('name'),
  publicKey: text('public_key').notNull(),
  userId: text('user_id').notNull().references(()=> user.id, { onDelete: 'cascade' }),
  credentialID: text('credential_i_d').notNull(),
  counter: integer('counter').notNull(),
  deviceType: text('device_type').notNull(),
  backedUp: boolean('backed_up').notNull(),
  transports: text('transports'),
  createdAt: timestamp('created_at')
});

export const organization = pgTable("organization", {
  id: text("id").primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').unique(),
  logo: text('logo'),
  createdAt: timestamp('created_at').notNull(),
  metadata: text('metadata')
});

export const member = pgTable("member", {
  id: text("id").primaryKey(),
  organizationId: text('organization_id').notNull().references(()=> organization.id, { onDelete: 'cascade' }),
  userId: text('user_id').notNull().references(()=> user.id, { onDelete: 'cascade' }),
  role: text('role').notNull(),
  createdAt: timestamp('created_at').notNull()
});

export const invitation = pgTable("invitation", {
  id: text("id").primaryKey(),
  organizationId: text('organization_id').notNull().references(()=> organization.id, { onDelete: 'cascade' }),
  email: text('email').notNull(),
  role: text('role'),
  status: text('status').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  inviterId: text('inviter_id').notNull().references(()=> user.id, { onDelete: 'cascade' })
});

export const twoFactor = pgTable("two_factor", {
  id: text("id").primaryKey(),
  secret: text('secret').notNull(),
  backupCodes: text('backup_codes').notNull(),
  userId: text('user_id').notNull().references(()=> user.id, { onDelete: 'cascade' })
});

export const county = pgTable("county", {
  // Not sure how we want to handle or do the id, we could do a composite key of state code + county code, or maybe just county code if it is truly unique
  id: text("id").primaryKey(),
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
  countyId: text("county_id").notNull().references(() => county.id, { onDelete: 'cascade' }),
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

