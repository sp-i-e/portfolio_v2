import FolderCloseIcon from "@/icons/FolderCloseIcon";
import FolderOpenIcon from "@/icons/FolderOpenIcon";
import MarkdownFileIcon from "@/icons/MarkdownFileIcon";
import PdfFileIcon from "@/icons/PdfFileIcon";

export default function RenderNavIcon({ icon, className }) {
  switch (icon) {
    case "folder-open":
      return <FolderOpenIcon className={className} />;
    case "folder-close":
      return <FolderCloseIcon className={className} />;
    case "pdf-file":
      return <PdfFileIcon className={className} />;
    case "markdown-file":
      return <MarkdownFileIcon className={className} />;
    default:
      return null;
  }
}
