import { createAuthClient } from "better-auth/react" // make sure to import from better-auth/react
import {
	organizationClient,
	passkeyClient,
	twoFactorClient,
	adminClient,
	multiSessionClient,
	oneTapClient,
	oidcClient,
	genericOAuthClient,
	usernameClient,
	emailOTPClient
} from "better-auth/client/plugins";
import { toast } from "sonner";

export const authClient =  createAuthClient({
    baseURL: process.env.BASE_URL,
    plugins: [
		usernameClient(),
		organizationClient(),
		twoFactorClient({
			onTwoFactorRedirect() {
				window.location.href = "/two-factor";
			},
		}),
		passkeyClient(),
		adminClient(),
		multiSessionClient(),
		oneTapClient({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
		}),
		oidcClient(),
		genericOAuthClient(),
		emailOTPClient()
	],
    fetchOptions: {
		onError(e) {
			if (e.error.status === 429) {
				toast.error("Too many requests. Please try again later.");
			}
		},
	},
})

export const {
    signIn,
    signOut,
    signUp,
    useSession,
    organization,
    useListOrganizations,
    useActiveOrganization
} = authClient;