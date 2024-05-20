import type { Post } from "@/sanity/lib/queries";

import PostPlug from "../PostPlug";

const MoreStories = ({ posts }: { posts: Post[] }) => {
	return (
		<section>
			<h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
				More Stories
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
				{posts.map((post: Post) => (
					<PostPlug
						key={post._id}
						title={post.title}
						mainImage={post.mainImage}
						date={post._createdAt}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</section>
	);
};
export default MoreStories;
