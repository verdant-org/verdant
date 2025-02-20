import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from "@/db/drizzle";
import { nextCookies } from 'better-auth/next-js';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg"
  }),
  plugins: [
    nextCookies()
  ],
  emailAndPassword: {
    enabled: true,
    async sendResetPassword(data, request) {
      // Implement reset later
    }
  },
  socialProviders: {
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    },
    facebook: {
        clientId: process.env.FACEBOOK_CLIENT_ID as string,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
    },
    github: {
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    },
    apple: {
        clientId: process.env.APPLE_CLIENT_ID as string,
        clientSecret: process.env.APPLE_CLIENT_SECRET as string
    },
    microsoft: {
        clientId: process.env.MICROSOFT_CLIENT_ID as string,
        clientSecret: process.env.MICROSOFT_CLIENT_SECRET as string
    },
    twitter: {
        clientId: process.env.TWITTER_CLIENT_ID as string,
        clientSecret: process.env.TWITTER_CLIENT_SECRET as string
    },
    discord: {
        clientId: process.env.DISCORD_CLIENT_ID as string,
        clientSecret: process.env.DISCORD_CLIENT_SECRET as string
    },
  }
});