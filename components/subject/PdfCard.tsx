import { FileText, Eye, Download } from "lucide-react";
import type { FileLink } from "@/lib/types";

interface PdfCardProps {
  file: FileLink;
}

function getDownloadUrl(url: string): string {
  if (url.includes("drive.google.com")) {
    return url.includes("?") ? `${url}&export=download` : `${url}?export=download`;
  }
  return url;
}

export function PdfCard({ file }: PdfCardProps) {
  const downloadUrl = getDownloadUrl(file.url);

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-muted p-3 text-muted-foreground shrink-0">
          <FileText className="h-6 w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-medium text-foreground truncate">{file.title}</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            <a
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary-hover transition-colors"
            >
              <Eye className="h-4 w-4" />
              View
            </a>
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <Download className="h-4 w-4" />
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
