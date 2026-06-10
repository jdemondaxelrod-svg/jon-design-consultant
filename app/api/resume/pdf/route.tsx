import { renderToBuffer } from "@react-pdf/renderer";
import { ResumePdfDocument } from "../../../lib/resume-pdf-document";
import { siteConfig } from "../../../lib/site";

export const runtime = "nodejs";

export async function GET() {
  const buffer = await renderToBuffer(<ResumePdfDocument />);

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${siteConfig.resumeFilename}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
