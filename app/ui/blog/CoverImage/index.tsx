import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/sanity/lib/image';
import { ImageAsset, Slug } from 'sanity';

export default function CoverImage({
    title,
    slug,
    mainImage: source,
    priority,
}: {
    title: string;
    slug: Slug | null;
    mainImage: ImageAsset;
    priority: boolean;
}) {
    const mainImage = source ? (
        <div
            className={cn('shadow-small', {
                'hover:shadow-medium transition-shadow duration-200': slug,
            })}
        >
            <Image
                className="w-full h-auto rounded-xl border border-zinc-800"
                width={200}
                height={100}
                alt={`Cover Image for ${title}`}
                src={urlForImage(source)}
                sizes="100vw"
                quality={50}
                priority={priority}
            />
        </div>
    ) : (
        <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
    );

    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link href={`/blog/${slug.current}`} aria-label={title}>
                    {mainImage}
                </Link>
            ) : (
                mainImage
            )}
        </div>
    );
}
