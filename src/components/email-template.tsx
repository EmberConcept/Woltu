import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind"

interface EmailTemplateProps {
  firstname: string,
  message: string,
  topic: string,
  email: string,
  location: string,
  village: string,
  region: string,
  postal: string,
  phone: string,
  picture?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstname,
  message,
  topic,
  email,
  location,
  village,
  region,
  postal,
  phone,
}) => (

  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans px-2 font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
        <Container className="border border-solid border-[#eaeaea] rounded-lg my-[40px] mx-auto p-[20px] max-w-xl">
          <Section className="mt-[32px]">
            <div className="flex w-full justify-center items-center">
              <Img
                src={`https://i.ibb.co/zm9r99j/Frame-8.png`}
                width="256"
                height="256"
                alt="Woltu_Logo"
                className="my-0 mx-auto w-32 h-auto rounded-full border border-solid border-gray-100"
              />
            </div>
          </Section>
          <Text className="mt-10">Eine Neue Nachricht von: <strong>{firstname}</strong></Text>
          <Text className="text-black text-[14px] leading-[24px]">
            <strong>{topic}</strong>
          </Text>
          <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          <Text className="text-black text-[14px] leading-[24px]">
            <strong>Kundeninformationen</strong>
            <div className="w-full grid grid-cols-3 gap-5">
              <p className="col-span-1">E-mail:</p>
              <p className="col-span-2">{email}</p>
            </div>
            <div className="w-full grid grid-cols-3 gap-5">
              <p className="col-span-1">Straße:</p>
              <p className="col-span-2">{location}</p>
            </div>
            <div className="w-full grid grid-cols-3 gap-5">
              <p className="col-span-1">Ort:</p>
              <p className="col-span-2">{village}</p>
            </div>
            <div className="w-full grid grid-cols-3 gap-5">
              <p className="col-span-1">Bundesland:</p>
              <p className="col-span-2">{region}</p>
            </div>
            <div className="w-full grid grid-cols-3 gap-5">
              <p className="col-span-1">Postleitzahl:</p>
              <p className="col-span-2">{postal}</p>
            </div>
            <div className="w-full grid grid-cols-3 gap-5">
              <p className="col-span-1">Tel.:</p>
              <p className="col-span-2">{phone}</p>
            </div>
          </Text>
          <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          <Text>
            <strong>Kundennachricht</strong>
          </Text>
          <Text className="text-black text-[14px] leading-[24px]">
            <p>{message}</p>
          </Text>

          <Text>
            <strong>Kundenfotos</strong>
          </Text>

          <Text>
             <p>*Keine Kundenfotos vorhanden</p>
          </Text>

        </Container>
      </Body>
    </Tailwind>
  </Html>

  // <div>
  //   <h1 className="text-primary text-3xl">Welcome, {firstname}!</h1>
  //   <p>Von: {email}</p>
  //   <p>{location}</p>
  //   <p>{village}</p>
  //   <p>{region}</p>
  //   <p>{postal}</p>
  //   <p>{phone}</p>
  //   <p>{topic}</p>
  //   <p>{message}</p>
  // </div>
);

export default EmailTemplate;