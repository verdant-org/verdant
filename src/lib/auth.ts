import { betterAuth } from 'better-auth';
import {
	bearer,
	admin,
	multiSession,
	organization,
	twoFactor,
	oneTap, // eslint-disable-line
	oAuthProxy,
	openAPI,
	oidcProvider, // eslint-disable-line,
  emailOTP
} from "better-auth/plugins";
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from "@/db/drizzle";
import { nextCookies } from 'better-auth/next-js';
import * as schema from "@/db/schemas"
import { passkey } from "better-auth/plugins/passkey"
import { resend } from "./email/resend";
import { reactInvitationEmail } from './email/invitation';
import { reactVerifyEmail } from './email/verify-email'
import { reactResetPasswordEmail } from './email/reset-password';

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
								? `${process.env.BASE_URL}/accept-invitation/${data.id}`
								: `${
										process.env.BETTER_AUTH_URL ||
										"https://demo.better-auth.com"
									}/accept-invitation/${data.id}`,
					}),
				});
			},
		}),
    emailOTP({
      async sendVerificationOTP(data, request) {
          
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
    enabled: true,
  },
  emailVerification: {
    sendVerificationEmail: async (data, request) => {
      await resend.emails.send({
        from: "asd",
        to: data.user.email,
        subject: "Verify your email address",
        react: reactVerifyEmail(data)
      })
    }
  },
  socialProviders: {
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    },

    github: {
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    },
    discord: {
        clientId: process.env.DISCORD_CLIENT_ID as string,
        clientSecret: process.env.DISCORD_CLIENT_SECRET as string
    },
  }
});
