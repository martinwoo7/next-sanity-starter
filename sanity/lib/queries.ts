import type { Slug, PortableTextBlock, ImageAsset, Image } from "sanity";
import { groq } from "next-sanity";
import type { SanityClient } from "next-sanity";
import { unstable_noStore as noStore } from "next/cache";

// retrieve all posts
export const postsQuery = groq`*[_type == "post" && publishedAt < now()] | order(_createdAt desc)`;
export async function getAllPosts(client: SanityClient): Promise<Post[]> {
	return await client.fetch(postsQuery);
}

// retrieve post from current slug
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author,
    mainImage,
    slug,
    body
  }`;
export async function getSinglePost(
	client: SanityClient,
	slug: string
): Promise<Post> {
	return await client.fetch(postBySlugQuery, { slug });
}

// retrieve all other posts that is not current slug
export const otherPostsQuery = groq`
*[_type == "post" && defined(slug.current) && slug.current != $slug]
| order(_createdAt desc)
`;
export async function getOtherPosts(
	client: SanityClient,
	slug: string
): Promise<Post[]> {
	return await client.fetch(otherPostsQuery, { slug });
}

// retrieve all authors
export const allAuthorsQuery = groq`*[_type == "author" ]`;
export async function getAllAuthors(client: SanityClient): Promise<Author[]> {
	return await client.fetch(allAuthorsQuery);
}

// retrieve all projects
export const allProjectsQuery = groq`*[_type == "project" && _createdAt < now()]`;
export async function getAllProjects(client: SanityClient): Promise<Project[]> {
	noStore();
	return await client.fetch(allProjectsQuery);
}

// retrieve single project from slug
export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]`;
export async function getSingleProject(
	client: SanityClient,
	slug: string
): Promise<Project> {
	return await client.fetch(projectBySlugQuery, { slug });
}

// retrieve all other posts that is not current slug
export const otherProjectsQuery = groq`
*[_type == "project" && defined(slug.current) && slug.current != $slug]
| order(_createdAt desc)
`;
export async function getOtherProjects(
	client: SanityClient,
	slug: string
): Promise<Project[]> {
	return await client.fetch(otherProjectsQuery, { slug });
}

export interface Post {
	_type: "post";
	_id: string;
	_createdAt: string;
	author: string;
	title: string;
	mainImage: ImageAsset;
	slug: Slug;
	body: PortableTextBlock[];
}

export interface Author {
	_type: "author";
	_id: string;
	name: string;
	slug: Slug;
	image: ImageAsset;
	bio: PortableTextBlock[];
}

export interface Project {
	_type: "project";
	_id: string;
	_createdAt: string;
	title: string;
	tagline: string;
	slug: Slug;
	logo: ImageAsset;
	mainImage: ImageAsset
	services: string[];
	solutions: string[];
	blurb: { summary: string; work: string };
	quote: { message: string; person: string; place: string };
}
