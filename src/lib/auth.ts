import { betterAuth } from 'better-auth';
import {
	bearer,
	admin,
	multiSession,
	organization,
	twoFactor,
	oneTap,
	oAuthProxy,
	openAPI,
	oidcProvider,
} from "better-auth/plugins";
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from "@/db/drizzle";
import { nextCookies } from 'better-auth/next-js';
import * as schema from "@/db/schema"
import { passkey } from "better-auth/plugins/passkey"
import { resend } from "./email/resend";
import { reactInvitationEmail } from './email/invitation';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema
  }),
  plugins: [
    nextCookies(),
    passkey(),
    openAPI(),
    bearer(),
    admin(),
    multiSession(),
    oAuthProxy(),
    organization({
			async sendInvitationEmail(data) {
				await resend.emails.send({
					from: "verdantassistant@gmail.com",
					to: data.email,
					subject: "You've been invited to join an organization",
					react: reactInvitationEmail({
						username: data.email,
						invitedByUsername: data.inviter.user.name,
						invitedByEmail: data.inviter.user.email,
						teamName: data.organization.name,
						inviteLink:
							process.env.NODE_ENV === "development"
								? `http://localhost:3000/accept-invitation/${data.id}`
								: `${
										process.env.BETTER_AUTH_URL ||
										"https://demo.better-auth.com"
									}/accept-invitation/${data.id}`,
					}),
				});
			},
		}),
		twoFactor({
			otpOptions: {
				async sendOTP({ user, otp }) {
					await resend.emails.send({
						from: "verdantassistant@gmail.com",
						to: user.email,
						subject: "Your OTP",
						html: `Your OTP is ${otp}`,
					});
				},
			},
		}),
  ],
  emailAndPassword: {
    enabled: true
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
        clientSecret: process.env.MICROSOFT_CLIENT_SECRET as string,
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
