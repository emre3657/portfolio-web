export type ExperienceType = "Deneyim" | "Eğitim";

export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  startTime: string;
  endTime?: string;
  dateLabel: string;
  title: string;
  org: string;
  description: string;
}

export interface ExperienceSectionData {
  title: string;
  payload: ExperienceItem[];
}

export const EXPERIENCE: ExperienceSectionData = {
  title: "Deneyim & Eğitim",
  payload: [
    {
      id: "edu-software-persona",
      type: "Eğitim",
      startTime: "2026-08-01",
      endTime: "2026-08-31",
      dateLabel: "Ağustos / 2026",
      title: "Yazılım Mesleki Gelişim Programı",
      org: "Software Persona",
      description:
        "40 saatlik proje bazlı yazılım geliştirme programı\nReact, Node.js, SQL, Flutter ve uygulamalı proje geliştirme",
    },
    {
      id: "exp-eroğlu",
      type: "Deneyim",
      startTime: "2024-10-02",
      endTime: "2024-11-06",
      dateLabel: "Ekim–Kasım / 2024",
      title: "Stajyer",
      org: "Eroğlu Global Holding",
      description:
        "Full-Stack Development / E-Ticaret\nUI, sepet, admin & sipariş yönetimi",
    },
    {
      id: "exp-zy-traktor",
      type: "Deneyim",
      startTime: "2024-07-29",
      endTime: "2024-08-23",
      dateLabel: "Temmuz–Ağustos / 2024",
      title: "Stajyer",
      org: "Zy Elektrikli Traktör",
      description: "Gömülü yazılım, Arduino, C\nRS232, I2C, SPI, CAN",
    },
    {
      id: "edu-beykent-lisans",
      type: "Eğitim",
      startTime: "2020-10-07",
      endTime: "2025-03-26",
      dateLabel: "2020 – Mart / 2025",
      title: "Bilgisayar Mühendisliği (Tr)",
      org: "İstanbul Beykent Üniversitesi",
      description: "Lisans derecesi, AGNO: 3,19",
    },
    {
      id: "edu-beykent-prep",
      type: "Eğitim",
      startTime: "2019-10-07",
      endTime: "2020-03-30",
      dateLabel: "2019 – 2020",
      title: "İngilizce Hazırlık (İsteğe Bağlı)",
      org: "İstanbul Beykent Üniversitesi",
      description: "Seviye: B1 (okuma/konuşma: orta)",
    },
  ],
};
