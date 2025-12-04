export type ShortenLink = {
  id: string | number;
  shortCode: string;
  shortLink: string;
  originalLink: string;
  clicks?: number;
  createdAt?: string;
  updatedAt?: string;
}