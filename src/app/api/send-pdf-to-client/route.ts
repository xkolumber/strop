import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import EmailSentPdfToUser from "../../../../emails/EmailSentPdfToUser";
import { DownloadPdf } from "@/app/firebase/interface";
import { AdminAddNewEmail } from "@/app/lib/actions";
import { formatDate } from "@/app/lib/functions";

const resend = new Resend(process.env.RESEND_API_KEY!); //zmenit api key..

export async function POST(req: NextRequest) {
  const { email, links } = await req.json();

  const referer = req.headers.get("referer");
  if (!referer || !referer.startsWith("https://www.strop.sk")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

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

    await AdminAddNewEmail(email, links, formatDate(new Date()));
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error });
  }
}
