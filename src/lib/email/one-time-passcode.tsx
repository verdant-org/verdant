import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Link,
	Preview,
	Text,
	Tailwind,
	Section,
} from "@react-email/components";

interface BetterAuthVerifyEmailProps {
	email?: string;
	otp?: string
}

export const VerifyEmail = ({
	email,
	otp
}: BetterAuthVerifyEmailProps) => {
	const previewText = `Verdant Assistant: One Time Passcode`;
	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans px-2">
					<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
						<Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
							Your passcode
						</Heading>
						<Text className="text-black text-[14px] leading-[24px]">
							Please use the verification code below to sign in to your account.
						</Text>
						<Text className="text-black text-2xl leading-[24px] font-bold">
							{otp}
						</Text>
						<Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
						<Text className="text-[#666666] text-[12px] leading-[24px]">
							If you didn't request a password reset, please ignore this email
							or contact support if you have concerns.
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export function reactOTPVerification(
	props: BetterAuthVerifyEmailProps,
) {
	console.log(props);
	return <VerifyEmail {...props} />;
}