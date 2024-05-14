import type { Slug, PortableTextBlock, ImageAsset } from "sanity";
import { groq } from "next-sanity";
import type { SanityClient } from "next-sanity";

// get all posts
export const postsQuery = groq`*[_type == "post" && publishedAt < now()] | order(_createdAt desc)`;
export async function getAllPosts(client: SanityClient): Promise<Post[]> {
	return await client.fetch(postsQuery);
}

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

export interface Project {
	_id: string;
	name: string;
	services: string[];
	slug: Slug;
	images: string[];
	description: PortableTextBlock[];
	features: string[];
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
