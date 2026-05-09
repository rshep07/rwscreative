export type ProjectCategory =
  | "Branding" | "Editorial" | "Motion" | "Web Design" | "Packaging" | "Photography";

export type FilterCategory = ProjectCategory | "All";

export interface ExternalLink  { label: string; url: string; }
export interface DownloadLink  { label: string; url: string; filename?: string; }

export interface Project {
  id:               string;
  slug:             string;
  title:            string;
  category:         ProjectCategory;
  tags?:            string[];
  shortDescription: string;
  fullCaseStudy:    string;
  role:             string;
  client:           string;
  year:             number;
  thumbnailImage:   string;
  heroImage:        string;
  galleryImages:    string[];
  externalLinks?:   ExternalLink[];
  downloadLinks?:   DownloadLink[];
  featured?:        boolean;
  publishedAt?:     string;
}
