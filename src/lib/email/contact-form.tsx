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

interface BetterAuthContactFormProps {
	name?: string;
	message?: string;
    subject?: string;
    email?: string;
}

export const ContactForm = ({
    name,
    message,
    subject,
    email,
  }: BetterAuthContactFormProps) => {
    const previewText = `${name} has sent you a message: ${message}`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans px-2">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
              <Heading className="text-black text-[24px] font-semibold text-center p-0 my-[30px] mx-0">
                New Contact Form Submission
              </Heading>
  
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Name:</strong> {name}
              </Text>
  
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Email:</strong> {email}
              </Text>
  
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Subject:</strong> {subject}
              </Text>
  
              <Hr className="border border-solid border-[#eaeaea] my-[20px] mx-0 w-full" />
  
              <Text className="text-black text-[14px] leading-[24px] whitespace-pre-wrap">
                <strong>Message:</strong>
                <br />
                {message}
              </Text>
  
              <Hr className="border border-solid border-[#eaeaea] my-[20px] mx-0 w-full" />
  
              <Text className="text-[#666666] text-[12px] leading-[24px]">
                This message was sent through the Verdant Assistant contact form.
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };

export function reactContactForm(
	props: BetterAuthContactFormProps,
) {
	console.log(props);
	return <ContactForm {...props} />;
}