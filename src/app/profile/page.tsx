import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import UserCard from "./user-card";
import { OrganizationCard } from "./organization-card";
import AccountSwitcher from "@/components/account-switch"

export default async function DashboardPage() {
	const [session, activeSessions, deviceSessions, organization] =
		await Promise.all([
			auth.api.getSession({
				headers: await headers(),
			}),
			auth.api.listSessions({
				headers: await headers(),
			}),
			auth.api.listDeviceSessions({
				headers: await headers(),
			}),
			auth.api.getFullOrganization({
				headers: await headers(),
			}),
		]).catch((e) => {
			console.error(e);
			throw redirect("/sign-in");
		});
	return (
		<div className="w-full my-16 flex justify-center">

			<div className="bg-stone-100 dark:bg-stone-900 shadow-none sm:shadow-lg shadow-stone-300 dark:shadow-stone-700 p-6 rounded-lg">
				<div className="flex gap-4 flex-col">
					<AccountSwitcher
						sessions={JSON.parse(JSON.stringify(deviceSessions))}
					/>
					<UserCard
						session={JSON.parse(JSON.stringify(session))}
						activeSessions={JSON.parse(JSON.stringify(activeSessions))}
					/>
					<OrganizationCard
						session={JSON.parse(JSON.stringify(session))}
						activeOrganization={JSON.parse(JSON.stringify(organization))}
					/>
				</div>
			</div>
		</div>
	);
}