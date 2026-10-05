import { useEffect } from "react";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import "./PdfViewerModal.css";

interface PdfViewerModalProps {
  src: string | null;
  title?: string;
  onClose: () => void;
}

export function PdfViewerModal({ src, title, onClose }: PdfViewerModalProps) {
  useEffect(() => {
    if (!src) return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [src, onClose]);

  if (!src) return null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    if (target.closest(".pdf-viewer-content")) {
      return;
    }

    if (target.closest(".pdf-viewer-close")) {
      return;
    }

    onClose();
  };

  return (
    <div
      className="pdf-viewer-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={title || "PDF önizleme"}
      onClick={handleBackdropClick}
    >
      <FocusTrap>
        <div className="pdf-viewer-wrapper">
          <button
            type="button"
            className="pdf-viewer-close"
            onClick={onClose}
            aria-label="Kapat"
          >
            <i className="fa-solid fa-x"></i>
          </button>

          <div className="pdf-viewer-content">
            <iframe
              src={src}
              title={title || "PDF önizleme"}
              className="pdf-viewer-frame"
            />
          </div>
        </div>
      </FocusTrap>
    </div>
  );
}
