import {
  Body,
  Column,
  Container,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const EmailSentPdfToUser = () => {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Container className="rounded-3xl ">
            <Section>
              <Img
                src="https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_stavieb%2Flogo_strop.png?alt=media&token=d209cde3-bee0-456e-bfb1-471268cdc411"
                width="120"
                height="36"
                alt="Slack"
                className="mt-4 mb-4 object-contain"
              />
            </Section>

            <Img
              src="https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_stavieb%2FRectangle%20160.jpg?alt=media&token=7cb30f82-1f0c-48f4-aa20-e7b0ee012d38"
              alt="Popis"
              className="object-cover rounded-t-3xl w-full max-h-[300px]"
            />
            <Container className="bg-white rounded-b-3xl p-[25px]">
              <Section className="text-center">
                <Text style={paragraph} key={1} className="font-bold text-xl">
                  Ďakujeme, že máte záujem o naše PDF súbory.
                </Text>
              </Section>

              <Text style={paragraph} key={5}>
                Vaše súbory sa nachádzajú v prílohe. V prípade akýchkoľvek
                otázok, neváhajte sa na nás obratiť.
              </Text>

              <Text style={paragraph} key={5}>
                S pozdravom
              </Text>
              <Text style={paragraph} key={5}>
                Tím Strop
              </Text>
            </Container>
          </Container>

          <Container className="text-center">
            <Row style={categories.container}>
              <Column align="center">
                <Link href="https://www.facebook.com/STROPSK">
                  <Img
                    src="https://firebasestorage.googleapis.com/v0/b/website-4d9ed.appspot.com/o/logo%2Ffacebook_logo.png?alt=media&token=02dc67cf-c527-4355-8c72-7013319b6e65"
                    className="w-6 h-6 object-contain rounded-lg"
                  />
                </Link>
              </Column>
              <Column align="center">
                <Link href="https://www.instagram.com/strop.sk/">
                  <Img
                    src="https://firebasestorage.googleapis.com/v0/b/website-4d9ed.appspot.com/o/logo%2Finstagram_logo.png?alt=media&token=51954141-8c2b-4f24-b286-ce45a898093a"
                    className="w-6 h-6 object-contain"
                  />
                </Link>
              </Column>
              <Column align="center">
                <a href="tel:+421905033030">
                  <Img
                    src="https://firebasestorage.googleapis.com/v0/b/website-4d9ed.appspot.com/o/logo%2Ftelephone.png?alt=media&token=bf11ac8d-99ee-4536-a62b-a98d3c1dace8"
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </Column>
            </Row>
            <Text className="text-center text-gray-400 mb-45">
              © 2024 | Strop, SLOVENSKO |{" "}
              <Link
                href="https://www.energysportrent.sk"
                className=" text-gray-400"
              >
                www.strop.sk
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const paragraph = {
  fontSize: 16,
};

const adresss = {
  fontSize: 14,
  margin: 0,
};

const container = {
  padding: 0,
};

const containerStyle = {
  backgroundColor: "white",
  borderRadius: "20px",
  padding: "20px", // Default padding for all screen sizes
};

const categories = {
  container: {
    width: "370px",
    // margin: "auto",
    paddingTop: "12px",
  },
  text: {
    fontWeight: "500",
    color: "#000",
  },
};

export default EmailSentPdfToUser;
