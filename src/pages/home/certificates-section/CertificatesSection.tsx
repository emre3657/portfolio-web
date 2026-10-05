import { useState } from "react";
import { CERTIFICATES } from "../../../data/certificates";
import { PdfViewerModal } from "../../../components/common/PdfViewerModal/PdfViewerModal";
import "./CertificatesSection.css";

export function CertificatesSection() {
  const { title, payload } = CERTIFICATES;

  const [selectedPdf, setSelectedPdf] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const openPdf = (src: string, title: string) => {
    setSelectedPdf({
      src,
      title,
    });
  };

  const closePdf = () => {
    setSelectedPdf(null);
  };

  return (
    <section id="certificates">
      <div className="container">
        <h2 className="section-title">{title}</h2>

        <div className="certificates-grid">
          {payload.map((item) => (
            <article key={item.id} className="certificate-card">
              <div className="certificate-card-header">
                <span className="certificate-type">{item.type}</span>

                {item.dateLabel && (
                  <span className="certificate-date">{item.dateLabel}</span>
                )}
              </div>

              <div className="certificate-info">
                <h3>{item.title}</h3>
                <p>{item.org}</p>
              </div>

              <div className="certificate-actions">
                <button
                  type="button"
                  className="certificate-action"
                  onClick={() => openPdf(item.pdfSrc, item.title)}
                >
                  <i className="fa-solid fa-file-pdf"></i>
                  Görüntüle
                </button>

                {item.verificationUrl && (
                  <a
                    href={item.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-action"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Doğrula
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <PdfViewerModal
          src={selectedPdf?.src ?? null}
          title={selectedPdf?.title}
          onClose={closePdf}
        />
      </div>
    </section>
  );
}
