import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  liveUrl: string;
  playstoreUrl: string;
  appstoreUrl: string;
  githubUrl: string;
   techStack: {
    _id: string;
    technology: string;
    logoUrl: string;
  }[];
    images: {
    url: string;
    alt: string;
  }[];
  content: PortableTextBlock[];
};