import softwarePersonaCertificatePdf from "../assets/documents/software-persona-certificate.pdf";
import softwarePersonaReferencePdf from "../assets/documents/software-persona-reference.pdf";

export type DocumentType = "Sertifika" | "Referans";

export interface CertificateItem {
  id: string;
  type: DocumentType;
  title: string;
  org: string;
  dateLabel?: string;
  pdfSrc: string;
  verificationUrl?: string;
}

export interface CertificatesSectionData {
  title: string;
  payload: CertificateItem[];
}

export const CERTIFICATES: CertificatesSectionData = {
  title: "Sertifikalar & Referanslar",
  payload: [
    {
      id: "software-persona-certificate",
      type: "Sertifika",
      title: "Yazılım Mesleki Gelişim Programı",
      org: "Software Persona",
      dateLabel: "Ağustos / 2026",
      pdfSrc: softwarePersonaCertificatePdf,
      verificationUrl:
        "https://credsverse.com/credentials/8b379065-04ef-43b4-b9d5-3514c7c0f322",
    },
    {
      id: "software-persona-reference",
      type: "Referans",
      title: "Mesleki Referans",
      org: "Software Persona",
      dateLabel: "Ağustos / 2026",
      pdfSrc: softwarePersonaReferencePdf,
    },
  ],
};
