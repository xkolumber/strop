import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import EmailSentPdfToUser from "../../../../emails/EmailSentPdfToUser";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const { email, link } = await req.json();

  console.log(email);
  console.log(link);

  try {
    const data = await resend.emails.send({
      from: "info@energysportrent.sk",
      to: email,
      subject: `Strop | Pdf súbor`,
      react: EmailSentPdfToUser(),
      attachments: [
        {
          filename: "example.pdf",
          path: `${link}`,
        },
      ],
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error });
  }
}
