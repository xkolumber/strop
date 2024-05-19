import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import EmailSentPdfToUser from "../../../../emails/EmailSentPdfToUser";
import { DownloadPdf } from "@/app/firebase/interface";

const resend = new Resend(process.env.RESEND_API_KEY!); //zmenit api key..

export async function POST(req: NextRequest) {
  const { email, links } = await req.json();

  const attachments = links.map((object: DownloadPdf, index: number) => ({
    filename: `${object.nazov}.pdf`,
    path: object.pdf_link,
  }));

  try {
    const data = await resend.emails.send({
      from: "info@energysportrent.sk",
      to: email,
      subject: links.length === 1 ? `Strop | Pdf súbor` : "Strop | Pdf súbory",
      react: EmailSentPdfToUser(),
      attachments: attachments,
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error });
  }
}
