import { siteConfig } from "./site";

export async function downloadResumePdf(): Promise<void> {
  const response = await fetch(siteConfig.resumePdfHref);

  if (!response.ok) {
    throw new Error("Failed to generate resume PDF");
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = siteConfig.resumeFilename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
