import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import type { ImageAsset, Slug } from "sanity";
import CoverImage from "../CoverImage";
import Date from "../../date";

const PostPlug = ({
	title,
	mainImage,
	slug,
	author,
	date,
}: {
	title: string;
	mainImage: ImageAsset;
	slug: Slug;
	author: string;
	date: string;
}) => {
	return (
		<div>
			<div className="mb-5">
				<CoverImage
					slug={slug}
					title={title}
					mainImage={mainImage}
					priority
				/>
			</div>
			<h3 className="mb-3 text-3xl leading-snug">
				<Link
					href={`/blog/${slug.current}`}
					className="hover:underline"
				>
					{title}
				</Link>
			</h3>
			<div className="mb-4 text-lg">
				<Date date={date} />
				{/* {date} */}
			</div>
			{/* <p className="mb-4 text-lg leading-relaxed">{excerpt}</p> */}
			{/* {author && <Avatar name={author.name} picture={author.picture} />} */}
		</div>
	);
};

export default PostPlug;
