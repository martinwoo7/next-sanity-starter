import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { urlForImage } from "@/sanity/lib/image";
import { getAllProjects } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

import moment from "moment";

export const metadata: Metadata = {
	title: "Projects",
};
export default async function Page() {
	const projects = await getAllProjects(client);
	return (
		<main className="max-w-7xl px-6 md:px-16 lg:px-32 mx-auto">
			<section className="mx-auto max-w-2xl lg:max-w-none gap-6 mt-24 sm:mt-32 lg:mt-40">
				<h1 className="">
					<span className="block font-display text-base font-semibold ">
						Our work
					</span>
					<span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl">
						Proven solutions for real-world problems.
					</span>
				</h1>
				<div className="text-zinc-400 mt-6 max-w-3xl text-xl">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nam molestie justo sit amet sapien mollis semper. Nulla
						venenatis quam a.
					</p>
				</div>
			</section>

			<section className="mt-40">
				<div className="mx-auto max-w-2xl lg:max-w-none">
					<h2 className="font-display text-2xl font-semibold">
						Case studies
					</h2>
					<div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
						{projects ? (
							projects.map((project) => {
								return (
									<article key={project._id}>
										<div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-white after:bg-white/20 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
											<div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
												<div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
													<Image
														src="/vercel.svg"
														alt="logo"
														width={36}
														height={36}
														className="h-16 w-16 flex-none dark:invert"
													/>
													<h3 className="mt-6 text-sm font-semibold sm:mt-0 lg:mt-8">
														{project.title}
													</h3>
												</div>
												<div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
													<p className="text-sm tracking-tight after:text-white/40 after:ml-4 after:font-semibold after:content-['/'] lg:mt-2 lg:after:hidden">
														{project.services.map(
															(item, index) => (
																<span
																	key={`item_${index}`}
																>
																	{index
																		? ", "
																		: ""}
																	{item}
																</span>
															)
														)}
													</p>
													<p className="text-sm lg:mt-2">
														<time
															dateTime={
																project._createdAt
															}
														>
															{moment(
																project._createdAt
															).format(
																"MMMM YYYY"
															)}
														</time>
													</p>
												</div>
											</div>
											<div className="col-span-full lg:col-span-2 lg:max-w-2xl">
												<p className="font-display text-4xl font-medium">
													<Link href="/#">
														{project.tagline}
													</Link>
												</p>
												<div className="mt-6 space-y-6 text-base">
													<p>
														{project.blurb.summary}
													</p>
													<p>{project.blurb.work}</p>
												</div>
												<div className="mt-8 flex">
													<Link
														href="/#"
														className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-200 text-black hover:bg-neutral-300"
													>
														<span className="relative top-px">
															Read case study
														</span>
													</Link>
												</div>
												<div className="pl-8 mt-12 relative before:absolute after:absolute before:bg-white after:bg-neutral-200/20 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
													<figure className="text-sm">
														<blockquote className="text-neutral-400 [&>*]:relative [&>:first-child]:before:absolute [&>:first-child]:before:right-full [&>:first-child]:before:content-['“'] [&>:last-child]:after:content-['”']">
															<p>
																{
																	project
																		.quote
																		.message
																}
															</p>
														</blockquote>
														<figcaption className="mt-6 font-semibold">
															{
																project.quote
																	.person
															}
														</figcaption>
													</figure>
												</div>
											</div>
										</div>
									</article>
								);
							})
						) : (
							<p className="">No projects created yet!</p>
						)}
					</div>
				</div>
			</section>

			<section className="relative isolate py-16 sm:py-28 md:py-32 mt-24 sm:mt-32 lg:mt-40">
				<div className="mx-auto max-w-2xl lg:max-w-none">
					<figure className="mx-auto max-w-4xl">
						<blockquote className="relative font-display text-3xl font-medium tracking-tight sm:text-4xl">
							<p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
								We approached <em>Studio</em> because we loved
								their past work. They delivered something
								remarkably similar in record time.
							</p>
						</blockquote>
						<figcaption className="mt-10">
							<Image
								src="/vercel.svg"
								alt="vercel"
								height={36}
								width={184}
								className="dark:invert"
							/>
						</figcaption>
					</figure>
				</div>
			</section>

			<section className="mx-auto max-w-2xl lg:max-w-none mt-24 md:mt-32 lg:mt-40">
				<h2 className="font-display text-2xl font-semibold">
					You&apos;re in good company
				</h2>
				<div className="mt-10">
					<div className="relative before:absolute after:absolute before:bg-white after:bg-white/20 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"></div>
					<ul
						role="list"
						className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
					>
						{[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
							<li className="group" key={item}>
								<div className="overflow-hidden">
									<div className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-white after:bg-white/20 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
										<Image
											src="/vercel.svg"
											alt="vercel logo"
											height={36}
											width={184}
											className="dark:invert"
										/>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="max-w-2xl mx-auto lg:max-w-none mt-24 sm:mt-32 lg:mt-40">
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
			</section>
		</main>
	);
}
