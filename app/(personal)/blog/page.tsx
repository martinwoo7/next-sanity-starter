import { Metadata } from "next";

import { getAllPosts, type Post } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

import HeroPost from "@/app/ui/blog/HeroPost";
import MoreStories from "@/app/ui/blog/MoreStories";

export const metadata: Metadata = {
	title: "Blog",
};
export default async function Page() {
	const posts = await getAllPosts(client);
	const [heroPost, ...otherPosts] = posts;

	return (
		<div className="max-w-7xl mx-auto mx-6 md:mx-12">
			<section className="flex flex-col md:flex-row items-center md:justify-between mt-16 mb-16 md:mb-12">
				<h1 className="text-6xl md:text-8xl font-bold tacking-tighter leading-tight md:pr-8">
					Blog.
				</h1>
				<h2 className="text-center md:text-left text-lg mt-5 md:pl-8">
					Thoughts on paper from John Doe.
				</h2>
			</section>
			{heroPost && (
				<HeroPost
					title={heroPost.title}
					mainImage={heroPost.mainImage}
					author={heroPost.author}
					date={heroPost._createdAt}
					slug={heroPost.slug}
				/>
			)}
			{otherPosts.length > 0 && <MoreStories posts={otherPosts} />}
		</div>
	);
}
