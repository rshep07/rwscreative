export type ProjectCategory =
  | "Branding" | "Editorial" | "Motion" | "Web Design" | "Packaging" | "Photography";

export interface Project {
  id:               string;
  slug:             string;
  title:            string;
  category:         ProjectCategory;
  tags:             string[];
  shortDescription: string;
  fullCaseStudy:    string;
  role:             string;
  client:           string;
  year:             number;
  thumbnailImage:   string;
  heroImage:        string;
  galleryImages:    string[];
  externalLinks?:   { label: string; url: string }[];
  downloadLinks?:   { label: string; url: string }[];
  featured?:        boolean;
}
