export type LightboxMedia = {
  type: "image" | "video";
  src: string;
};

export type LightboxItem = {
  id: string;
  media: LightboxMedia[];
  title?: string;
} | null;
