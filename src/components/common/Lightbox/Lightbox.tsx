import { useEffect, useState } from "react";
import type { LightboxItem } from "./Lightbox.types";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import "./Lightbox.css";

interface LightboxProps {
  item: LightboxItem;
  onClose: () => void;
}

export function Lightbox({ item, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaCount = item?.media.length ?? 0;
  const hasMultipleMedia = mediaCount > 1;

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < mediaCount - 1;

  const currentMedia = item?.media[currentIndex];

  useEffect(() => {
    if (!item) return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [item]);

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowLeft" && canGoPrevious) {
        event.preventDefault();
        setCurrentIndex((index) => index - 1);
        return;
      }

      if (event.key === "ArrowRight" && canGoNext) {
        event.preventDefault();
        setCurrentIndex((index) => index + 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose, canGoPrevious, canGoNext]);

  if (!item || !currentMedia) {
    return null;
  }

  const goPrevious = () => {
    if (!canGoPrevious) return;

    setCurrentIndex((index) => index - 1);
  };

  const goNext = () => {
    if (!canGoNext) return;

    setCurrentIndex((index) => index + 1);
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    if (target.closest(".lightbox-content")) {
      return;
    }

    if (target.closest(".lightbox-close")) {
      return;
    }

    onClose();
  };

  return (
    <div
      className="lightbox-backdrop is-open"
      data-project-id={item.id}
      role="dialog"
      aria-modal="true"
      aria-label={item.title || "Görsel önizleme"}
      onClick={handleBackdropClick}
    >
      <FocusTrap>
        <div className="lightbox-wrapper">
          <button
            type="button"
            className="lightbox-close"
            onClick={onClose}
            aria-label="Kapat"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <div className="lightbox-content">
            {currentMedia.type === "video" ? (
              <video
                src={currentMedia.src}
                controls
                autoPlay
                playsInline
                className="lightbox-video"
              />
            ) : (
              <img
                src={currentMedia.src}
                alt={
                  item.title
                    ? `${item.title} - ${currentIndex + 1}. görsel`
                    : ""
                }
                className="lightbox-image"
              />
            )}

            {hasMultipleMedia && (
              <>
                {canGoPrevious && (
                  <button
                    type="button"
                    className="lightbox-nav lightbox-nav-prev"
                    onClick={goPrevious}
                    aria-label="Önceki görsel"
                  >
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                )}

                {canGoNext && (
                  <button
                    type="button"
                    className="lightbox-nav lightbox-nav-next"
                    onClick={goNext}
                    aria-label="Sonraki görsel"
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                )}

                <div className="lightbox-counter" aria-live="polite">
                  {currentIndex + 1} / {mediaCount}
                </div>
              </>
            )}
          </div>
        </div>
      </FocusTrap>
    </div>
  );
}
