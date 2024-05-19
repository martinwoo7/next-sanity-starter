import Link from "next/link";
import Image from "next/image";

import type { ImageAsset, Slug } from "sanity";

import { urlForImage } from "@/sanity/lib/image";

import CoverImage from "../CoverImage";
import Date from "../../date";

const HeroPost = ({
	title,
	mainImage,
	date,
	author,
	slug,
}: {
	title: string;
	mainImage: ImageAsset;
	date: string;
	author: string;
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
			<div className="mb-4">
				<h3>
					<Link
						href={`/blog/${slug.current}`}
						className="hover:underline"
					>
						{title}
					</Link>
				</h3>
				<div className="text-lg md:mb-0">
					<Date date={date} />
				</div>
			</div>
		</section>
	);
};

export default HeroPost;
