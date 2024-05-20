import Link from "next/link";
import Image from "next/image";

import type { ImageAsset, Slug } from "sanity";

import { urlForImage } from "@/sanity/lib/image";
import type { Author } from "@/sanity/lib/queries";

import CoverImage from "../CoverImage";
import Date from "../../date";

const HeroPost = ({
	title,
	mainImage,
	excerpt,
	date,
	author,
	slug,
}: {
	title: string;
	mainImage: ImageAsset;
	date: string;
	excerpt: string;
	author: Author;
	slug: Slug;
}) => {
	return (
		<section>
			<div className="mb-8 md:mb-16">
				<CoverImage
					slug={slug}
					title={title}
					mainImage={mainImage}
					priority
				/>
			</div>
			<div className="mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 md:mb-28">
				<h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
					<Link
						href={`/blog/${slug.current}`}
						className="hover:underline"
					>
						{title}
					</Link>
				</h3>
				<div className="mb-4 text-lg md:mb-0">
					<Date date={date} />
				</div>
			</div>
			<div>
				<p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
			</div>
		</section>
	);
};

export default HeroPost;
