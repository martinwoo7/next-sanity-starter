import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/sanity/lib/image';
import {
    allAuthorsQuery,
    getAllAuthors,
    type Author,
} from '@/sanity/lib/queries';

import {
    RocketLaunchIcon,
    HandRaisedIcon,
    UserGroupIcon,
    AcademicCapIcon,
    SparklesIcon,
    SunIcon,
    CheckCircleIcon,
} from '@heroicons/react/20/solid';
import { client } from '@/sanity/lib/client';

export const metadata: Metadata = {
    title: 'About Us',
};

export default async function Page() {
    const authors = await getAllAuthors(client);
    // console.log(authors);
    return (
        <main className="max-w-7xl mx-auto">
            <div className="px-4 md:px-16 lg:px-32">
                <section className="flex flex-col pt-40 text-center max-w-2xl mx-auto">
                    <h1 className="text-6xl font-bold">We love creators</h1>
                    <h2 className="text-gray-300 leading-loose text-lg mt-6 text-center">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                        veniam occaecat fugiat aliqua.
                    </h2>
                </section>

                <section className="text-gray-300 mt-20 mx-auto max-w-7xl">
                    <div className="flex flex-col gap-8 leading-relaxed xl:grid xl:grid-cols-2">
                        <div>
                            <p>
                                Faucibus commodo massa rhoncus, volutpat.
                                Dignissim sed eget risus enim. Mattis mauris
                                semper sed amet vitae sed turpis id. Id dolor
                                praesent donec est. Odio penatibus risus viverra
                                tellus varius sit neque erat velit. Faucibus
                                commodo massa rhoncus, volutpat. Dignissim sed
                                eget risus enim. Mattis mauris semper sed amet
                                vitae sed turpis id.
                            </p>
                            <p className="mt-8">
                                Et vitae blandit facilisi magna lacus commodo.
                                Vitae sapien duis odio id et. Id blandit
                                molestie auctor fermentum dignissim. Lacus diam
                                tincidunt ac cursus in vel. Mauris varius
                                vulputate et ultrices hac adipiscing egestas.
                            </p>
                        </div>
                        <div>
                            <p>
                                Erat pellentesque dictumst ligula porttitor
                                risus eget et eget. Ultricies tellus felis id
                                dignissim eget. Est augue maecenas risus nulla
                                ultrices congue nunc tortor. Enim et nesciunt
                                doloremque nesciunt voluptate.
                            </p>
                            <p className="mt-8">
                                Et vitae blandit facilisi magna lacus commodo.
                                Vitae sapien duis odio id et. Id blandit
                                molestie auctor fermentum dignissim. Lacus diam
                                tincidunt ac cursus in vel. Mauris varius
                                vulputate et ultrices hac adipiscing egestas.
                                Iaculis convallis ac tempor et ut. Ac lorem vel
                                integer orci.
                            </p>
                        </div>
                    </div>

                    <dl className="grid grid-cols-2 lg:grid-cols-4 mt-20 lg:mt-28 gap-x-8 gap-y-16">
                        <div className="flex pl-6 flex-col-reverse border-l border-solid border-white/20 gap-y-3">
                            <dt className="leading-7">Business was founded</dt>
                            <dd className="text-3xl font-semibold text-white">
                                2012
                            </dd>
                        </div>
                        <div className="flex pl-6 flex-col-reverse border-l border-solid border-white/20 gap-y-3">
                            <dt className="leading-7">People on the team</dt>
                            <dd className="text-3xl font-semibold text-white">
                                120+
                            </dd>
                        </div>
                        <div className="flex pl-6 flex-col-reverse border-l border-solid border-white/20 gap-y-3">
                            <dt className="leading-7">Users on the platform</dt>
                            <dd className="text-3xl font-semibold text-white">
                                250k
                            </dd>
                        </div>
                        <div className="flex pl-6 flex-col-reverse border-l border-solid border-white/20 gap-y-3">
                            <dt className="leading-7">Paid out to creators</dt>
                            <dd className="text-3xl font-semibold text-white">
                                $70M
                            </dd>
                        </div>
                    </dl>
                </section>
            </div>

            <section className="mt-40">
                <Image
                    src="/team.jpg"
                    alt="about us team"
                    height={1080}
                    width={1920}
                    className="object-cover aspect-[9/4] xl:rounded-3xl"
                />
            </section>

            <div className="px-4 md:px-16 xl:px-32 text-gray-300">
                <section className="mt-40">
                    <div className="lg:mx-0 max-w-2xl mx-auto">
                        <h2 className="font-bold text-4xl text-white">
                            Our values
                        </h2>
                        <p className="leading-loose mt-6 text-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Maiores impedit perferendis suscipit eaque,
                            iste dolor cupiditate blanditiis.
                        </p>
                    </div>

                    <dl className="grid grid-cols-2 leading-6 gap-8 mt-16 lg:gap-x-16 lg:max-w-none lg:mx-auto max-w-2xl">
                        <div className="pl-9 relative">
                            <dt className="inline font-semibold text-white">
                                <RocketLaunchIcon className="w-5 h-5 absolute top-1 left-1 text-indigo-500" />{' '}
                                Be world-class.{' '}
                            </dt>
                            <dd className="inline">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit aute id magna.
                            </dd>
                        </div>

                        <div className="pl-9 relative">
                            <dt className="inline font-semibold text-white">
                                <HandRaisedIcon className="w-5 h-5 absolute top-1 left-1 text-indigo-500" />{' '}
                                Take responsibility.{' '}
                            </dt>
                            <dd className="inline">
                                Anim aute id magna aliqua ad ad non deserunt
                                sunt. Qui irure qui lorem cupidatat commodo.
                            </dd>
                        </div>

                        <div className="pl-9 relative">
                            <dt className="inline font-semibold text-white">
                                <UserGroupIcon className="w-5 h-5 absolute top-1 left-1 text-indigo-500" />{' '}
                                Be supportive.{' '}
                            </dt>
                            <dd className="inline">
                                Ac tincidunt sapien vehicula erat auctor
                                pellentesque rhoncus voluptas blanditiis et.
                            </dd>
                        </div>

                        <div className="pl-9 relative">
                            <dt className="inline font-semibold text-white">
                                <AcademicCapIcon className="w-5 h-5 absolute top-1 left-1 text-indigo-500" />{' '}
                                Always learning.{' '}
                            </dt>
                            <dd className="inline">
                                Iure sed ab. Aperiam optio placeat dolor facere.
                                Officiis pariatur eveniet atque et dolor.
                            </dd>
                        </div>

                        <div className="pl-9 relative">
                            <dt className="inline font-semibold text-white">
                                <SparklesIcon className="w-5 h-5 absolute top-1 left-1 text-indigo-500" />{' '}
                                Share everything you know.{' '}
                            </dt>
                            <dd className="inline">
                                Laudantium tempora sint ut consectetur ratione.
                                Ut illum ut rem numquam fuga delectus.
                            </dd>
                        </div>

                        <div className="pl-9 relative">
                            <dt className="inline font-semibold text-white">
                                <SunIcon className="w-5 h-5 absolute top-1 left-1 text-indigo-500" />{' '}
                                Enjoy downtime.{' '}
                            </dt>
                            <dd className="inline">
                                Culpa dolorem voluptatem velit autem rerum qui
                                et corrupti. Quibusdam quo placeat.
                            </dd>
                        </div>
                    </dl>
                </section>

                <section className="mt-40">
                    <div className="lg:mx-0 mx-auto max-w-2xl">
                        <h2 className="md:text-4xl font-bold text-white">
                            Our team
                        </h2>
                        <p className="leading-loose mt-6 text-lg">
                            Excepturi repudiandae alias ut. Totam aut facilis.
                            Praesentium in neque vel omnis. Eos error odio. Qui
                            fugit voluptatibus eum culpa.
                        </p>
                    </div>

                    <ul
                        role="list"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-14 gap-x-8 mt-16 lg:max-w-none max-w-2xl lg:mx-0 mx-auto"
                    >
                        {authors ? (
                            authors.map((item, i) => (
                                <li key={i}>
                                    <Image
                                        src={urlForImage(item.image)}
                                        alt={'alt image'}
                                        height={1024}
                                        width={1024}
                                        className="aspect-[14/13] object-cover rounded-2xl"
                                    />
                                    <h3 className="tracking-tight font-semibold leading-loose text-lg text-white mt-6">
                                        {item.name}
                                    </h3>
                                    <p className="leading-7 text-gray-300">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {item.name}
                                    </p>
                                </li>
                            ))
                        ) : (
                            <p>No team members. Add them in Sanity Studio</p>
                        )}
                    </ul>
                </section>

                <section className="mt-40">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col xl:flex-row max-w-2xl xl:max-w-none mx-auto xl:mx-0 p-8 lg:py-20 rounded-3xl bg-white/5 gap-16">
                            <Image
                                src="/people.avif"
                                alt="people"
                                height={1080}
                                width={1920}
                                className="object-cover rounded-2xl xl:max-w-sm xl:aspect-square h-96"
                            />
                            <div className="flex-auto w-full">
                                <h2 className="md:text-4xl text-white tracking-tight font-bold">
                                    Join our team
                                </h2>
                                <p className="leading-loose text-gray-300 text-lg mt-6">
                                    Lorem ipsum dolor sit amet consect
                                    adipisicing elit. Possimus magnam voluptatum
                                    cupiditate veritatis in accusamus quisquam.
                                </p>
                                <ul
                                    role="list"
                                    className="grid grid-cols-1 md:grid-cols-2 mt-10 text-white leading-7 gap-y-2 gap-x-8"
                                >
                                    <li className="flex gap-3">
                                        <CheckCircleIcon className="w-5 h-7" />
                                        Competitive Salaries
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircleIcon className="w-5 h-7" />
                                        Flexible work hours
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircleIcon className="w-5 h-7" />
                                        30 days of paid vacation
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircleIcon className="w-5 h-7" />
                                        Annual team rewards
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircleIcon className="w-5 h-7" />
                                        Benefits for you and your family
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircleIcon className="w-5 h-7" />A
                                        great work environment
                                    </li>
                                </ul>
                                <div className="flex mt-10">
                                    <Link
                                        href="/#"
                                        className="text-indigo-300 leading-6 font-semibold text-sm"
                                    >
                                        See our job postings{' '}
                                        <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
