import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import type { ImageAsset } from "sanity";

export default function Avatar({
	name,
	picture,
}: {
	name: string;
	picture?: ImageAsset | undefined;
}) {
	return (
		<div className="flex items-center">
			<div className="relative w-12 h-12 mr-4">
				<Image
					src={
						picture
							? urlForImage(picture)
							: "https://source.unsplash.com/96x96/?face"
					}
					className="rounded-full aspect-[14/13] object-cover"
					height={96}
					width={96}
					alt={name}
				/>
			</div>
			<div className="text-xl font-bold">{name}</div>
		</div>
	);
}
