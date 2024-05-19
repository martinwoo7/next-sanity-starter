import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import moment from "moment";
import Image from "next/image";

import { urlForImage } from "@/sanity/lib/image";
import {
	getSingleProject,
	getOtherProjects,
	type Project,
} from "@/sanity/lib/queries";

const Post = async ({ params }: { params: { slug: string } }) => {
	// console.log(params.slug);
	const projects = await Promise.all([
		getSingleProject(client, params.slug),
		getOtherProjects(client, params.slug),
	]);

	const [project, otherProjects] = projects;
	// console.log(post);
	if (!project) {
		notFound();
	}

	const stats = [
		{ name: "less traffic", value: "25%" },
		{ name: "page load times", value: "10x" },
		{ name: "higher infra costs", value: "15%" },
		{ name: "legal fees", value: "$1.2M" },
	];

	return (
		<main className="mx-auto">
			<article className="mt-24 sm:mt-32 lg:mt-40">
				<header>
					<div className="mx-auto text-center">
						<div className="mx-auto max-w-2xl lg:max-w-none">
							<div>
								<h1>
									<span className="block font-display text-base font-semibold">
										Case Study
									</span>
									<span className="sr-only">-</span>
									<span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl mx-auto">
										{project.tagline}
									</span>
								</h1>
								<div className="mt-6 max-w-3xl text-xl text-gray-300 mx-auto">
									<p>{project.blurb.summary}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-24 border-t border-neutral-200 sm:mt-32 lg:mt-40">
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<div className="mx-auto max-w-5xl">
								<dl className="-mx-6 grid grid-cols-1 text-sm sm:mx-0 sm:grid-cols-3">
									<div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
										<dt className="font-semibold">
											Client
										</dt>
										<dd>{project.title}</dd>
									</div>
									<div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
										<dt className="font-semibold">Year</dt>
										<dd>
											<time dateTime={project._createdAt}>
												{moment(
													project._createdAt
												).format("YYYY")}
											</time>
										</dd>
									</div>
									<div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
										<dt className="font-semibold">
											Service
										</dt>
										<dd>
											{project.services.map(
												(item, index) => (
													<span key={`item_${index}`}>
														{index ? ", " : ""}
														{item}
													</span>
												)
											)}
										</dd>
									</div>
								</dl>
							</div>
						</div>
					</div>
					<div className="border-y border-neutral-200 bg-neutral-100">
						<div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
							<Image
								src={urlForImage(project.mainImage)}
								alt="project image"
								height={1080}
								width={1920}
								sizes="100vw"
							/>
						</div>
					</div>
				</header>

				<div className="max-w-7xl px-6 md:px-16 lg:px-32 mx-auto mt-24 sm:mt-32 lg:mt-40">
					<div className="mx-auto max-w-2xl lg:max-w-none">
						<div className="[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0">
							<div className="typography space-y-6">
								<h2 className="font-semibold text-2xl leading-9">
									Overview
								</h2>
								<p className="leading-7">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Vestibulum gravida, nulla
									vitae sodales lobortis, dui metus finibus
									elit, et efficitur nibh lacus condimentum
									erat. Cras ipsum nisl, euismod vestibulum
									semper ac, posuere quis odio. Pellentesque
									finibus tempor pharetra. Suspendisse
									potenti. Nullam dictum ullamcorper massa,
									nec condimentum mi rutrum sed. Phasellus
									dolor odio, facilisis vel odio ac, convallis
									placerat augue. Proin.
								</p>
							</div>
							<h2 className="font-semibold text-2xl leading-9 mt-12">
								What we did
							</h2>
							<ul
								role="list"
								className="my-6 flex flex-wrap gap-4"
							>
								{project.solutions.map((solution) => (
									<li
										key={solution}
										className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-gray-800"
									>
										{solution}
									</li>
								))}
							</ul>

							<figure className="grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-8 sm:grid-cols-12 sm:grid-rows-[1fr,auto,auto,1fr] sm:gap-x-10 lg:gap-x-16 my-32">
								<blockquote className="col-span-2 text-xl/7 text-gray-300 sm:col-span-7 sm:col-start-6 sm:row-start-2">
									<p>{project.quote.message}</p>
								</blockquote>
								<div className="col-start-1 row-start-2 overflow-hidden rounded-xl bg-neutral-100 sm:col-span-5 sm:row-span-full sm:rounded-3xl">
									<Image
										src="/portrait.jpg"
										alt="portrait"
										height={1800}
										width={1800}
										className="h-12 w-12 object-cover grayscale sm:aspect-[7/9] sm:h-auto sm:w-full"
									/>
								</div>
								<figcaption className="text-sm text-gray-200 sm:col-span-7 sm:row-start-3 sm:text-base">
									<span className="font-semibold">
										{project.quote.person}
									</span>
									<span className="hidden font-semibold sm:inline">
										,{" "}
									</span>
									<br className="sm:hidden" />
									<span className="sm:font-semibold">
										{project.quote.place}
									</span>
								</figcaption>
							</figure>
							<div className="my-32 !max-w-none">
								<dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
									{stats.map((stat) => (
										<div
											key={stat.name}
											className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/20 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
										>
											<dt className="mt-2 text-base">
												{stat.name}
											</dt>
											<dd className="font-display text-3xl font-semibold sm:text-4xl">
												{stat.value}
											</dd>
										</div>
									))}
								</dl>
							</div>
						</div>
					</div>
				</div>
			</article>

			<div className="max-w-7xl px-6 md:px-16 lg:px-32 mx-auto relative pt-24 sm:pt-32 lg:pt-40 mt-24 sm:mt-32 lg:mt-40">
				<div className="mx-auto">
					<div className="mx-auto max-w-2xl lg:max-w-none">
						<h2>
							<span className="block font-display tracking-tight [text-wrap:balance] text-2xl font-semibold">
								More case studies
							</span>
						</h2>
					</div>
				</div>

				<div className="mx-auto mt-16">
					<div className="mx-auto max-w-2xl lg:max-w-none">
						<div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
							{otherProjects.map((proj) => (
								<article key={proj._id}>
									<div className="relative flex flex-col items-start pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/20 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
										<h3 className="mt-6 text-base font-semibold">
											{proj.tagline}
										</h3>
										<time
											dateTime={proj._createdAt}
											className="order-first text-sm text-gray-300"
										>
											{moment(proj._createdAt).format(
												"MMMM YYYY"
											)}
										</time>
										<p className="mt-2.5 text-base text-gray-300">
											{proj.blurb.summary}
										</p>
										<Link
											href={`/project/${proj.slug.current}`}
											className="mt-6 flex gap-x-3 text-base font-semibold"
										>
											Read More
										</Link>
									</div>
								</article>
							))}
						</div>
					</div>
				</div>
			</div>

			<section className="max-w-7xl px-6 md:px-16 lg:px-32 mx-auto">
				<div className="max-w-2xl mx-auto lg:max-w-none mt-24 sm:mt-32 lg:mt-40">
					<div className="-mx-6 rounded-[2.5rem] bg-white px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
						<div className="mx-auto max-w-4xl">
							<div className="max-w-xl">
								<h2 className="font-display text-3xl font-medium text-black [text-wrap:balance] sm:text-4xl">
									Tell us about your project
								</h2>
								<div className="mt-6 flex">
									<Link
										href="/#"
										className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-black hover:bg-black/80"
									>
										<span className="relative top-px">
											Say Hej
										</span>
									</Link>
								</div>
								<div className="mt-10 border-t border-black/10 pt-10">
									<h3 className="font-display text-base font-semibold text-black">
										Our offices
									</h3>
									<ul
										role="list"
										className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
									>
										<li>
											<address className="text-sm not-italic text-black">
												<strong className="text-black">
													Copenhaden
												</strong>
												<br />
												1 Carlsberg Gate
												<br />
												1260, København, Denmark
											</address>
										</li>
										<li>
											<address className="text-sm not-italic text-black">
												<strong className="text-black">
													Billund
												</strong>
												<br />
												24 Lego Allé
												<br />
												7190, Billund, Denmark
											</address>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Post;
