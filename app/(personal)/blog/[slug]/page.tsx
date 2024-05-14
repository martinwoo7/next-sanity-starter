import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";

import { getSinglePost, getOtherPosts } from "@/sanity/lib/queries";
import type { Post } from "@/sanity/lib/queries";

import { PortableText } from "@portabletext/react";
import CoverImage from "@/app/ui/blog/CoverImage";
import MoreStories from "@/app/ui/blog/MoreStories";
import Date from "@/app/ui/date";

const Post = async ({ params }: { params: { slug: string } }) => {
	// console.log(params.slug);
	const posts = await Promise.all([
		getSinglePost(client, params.slug),
		getOtherPosts(client, params.slug),
	]);

	const [post, otherPosts] = posts;

	// console.log(post);
	if (!post) {
		notFound();
	}

	return (
		<div className="mx-auto px-6">
			<article className="">
				<h1 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 my-8">
					<Link href={"/"} className="hover:underline">
						Blog
					</Link>
					.
				</h1>
				<h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
					{post.title}
				</h2>
				<div className="mb-8 md:mb-16 sm:mx-0">
					<CoverImage
						slug={null}
						title={post.title}
						mainImage={post.mainImage}
						priority
					/>
				</div>

				<div className="max-w-2xl mx-auto">
					{/* <div className="block mb-6 md:hidden">{post.author}</div> */}
					<div className="mb-6 text-lg">
						<Date date={post._createdAt} />
						{/* {post._createdAt} */}
					</div>
				</div>
				<div className="max-w-2xl mx-auto">
					<PortableText value={post.body} />
				</div>
			</article>
			<hr className="border-accent-2 mt-28 mb-24" />
			{otherPosts.length > 0 && <MoreStories posts={otherPosts} />}
		</div>
	);
};

export default Post;
