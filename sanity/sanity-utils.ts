import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";
import { clientConfig } from "./config/client-config";
import type { Services } from "../types/Services";
import type { Education, Work } from "../types/Experience";
import type { FAQ } from "../types/FAQ";
import type { Testimonials } from "../types/Testimonials";
import { ArticleProps } from "../types/Articles";
import { Technology } from "../types/Technology";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(_createdAt asc){
       _id,
      _createdAt,
      title,
      "slug": slug.current,
      tagline,
      description,
     liveUrl,
      playstoreUrl,
      appstoreUrl,
      githubUrl,
 "techStack": techStack[]->{
    _id,
    technology,
    "logoUrl": logo.asset->url
  },      "images": images[]{
        "url": asset->url,
        alt
      },
      content
    }`,
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
       _id,
  _createdAt,
  title,
  tagline,
  description,
  liveUrl,
  playstoreUrl,
  appstoreUrl,
  githubUrl,
  "techStack": techStack[]->{
    _id,
    technology,
    "logoUrl": logo.asset->url
  },
  "images": images[]{
    "url": asset->url,
    alt
  },
  content
    }`,
    { slug },
  );}

export async function getNextProject(slug: string): Promise<{
  currentProject: Project;
  nextProject: Project;
}> {
  return createClient(clientConfig).fetch(
    groq`{
      "currentProject": *[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        tagline,
        description,
        liveUrl,
        githubUrl,
        techStack,
        "image": image.asset->url,
        "alt": image.alt,
        content
      },
      "nextProject": *[_type == "project" && _createdAt > *[_type == "project" && slug.current == $slug][0]._createdAt] | order(_createdAt asc)[0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        tagline,
        description,
        liveUrl,
        githubUrl,
        techStack,
        "image": image.asset->url,
        "alt": image.alt,
        content
      }
    }`,
    { slug },
  );
}


export async function getServices(): Promise<Services[]> {
  console.log("faaz clientConfig", clientConfig);
  try {
    return await createClient(clientConfig).fetch(
      groq`*[_type == 'service'] | order(_createdAt asc){
        _id,
        _createdAt,
        title,
        description,
        "icon": icon.asset->url,
        "alt": icon.alt,
        lists
      }`
    );
  } catch (error) {
    console.error("faaz Error fetching services:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to fetch services: ${error.message}`);
    } else {
      throw new Error('Failed to fetch services: Unknown error');
    }
  }
}

export async function getExperiences(): Promise<{
  education: Education[];
  work: Work[];
}> {
  return createClient(clientConfig).fetch(
    groq`{
  "education": *[_type == "experience" && type == "edu"] | order(_createdAt asc) {
    _id,
    _createdAt,
    title,
    description,
    year,
    type
  },
  "work": *[_type == "experience" && type == "work"] | order(_createdAt asc) {
    _id,
    _createdAt,
    title,
    description,
    "icon": icon.asset->url,
    "alt": icon.alt,
    year,
    type
  }
}
`,
  );
}

export async function getFAQ(): Promise<FAQ[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'faq'] | order( _createdAt asc) {
      _id,
      _createdAt,
      question,
      answer,
      }`,
  );
}

export async function getTestimonials(): Promise<Testimonials[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'testimonials'] | order( _createdAt asc) {
        _id,
        _createdAt,
        name,
        about,
        message,
        "image": image.asset->url,
        "alt": image.alt,
      }`,
  );
}

export async function getTechStacks(): Promise<Technology[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'technologies']{
  _id,
  technology,
  "logoUrl": logo.asset->url
}`,
  );
}

export async function getArticles(): Promise<ArticleProps[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'article'] | order(date desc){
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    date,
    "image": image.asset->url,
    "alt": image.alt,
    content,
    "estimatedReadingTime": round(length(pt::text(content)) / 5 / 225 )
    }`,
  );
}

export async function getArticle(slug: string): Promise<ArticleProps> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'article' && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    date,
    "image": image.asset->url,
    "alt": image.alt,
    content,
    "estimatedReadingTime": round(length(pt::text(content)) / 5 / 225 )
    }`,
    { slug },
  );
}
export const client = createClient({
  projectId: "93j6de8m",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});