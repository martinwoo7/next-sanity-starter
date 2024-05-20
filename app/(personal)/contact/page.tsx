import { Metadata } from "next";
import Image from "next/image";
import DefaultForm from "@/app/ui/about/Form";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Contact Us",
};
export default function Page() {
	return (
		<main className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
			<section className="mx-auto max-w-2xl lg:max-w-none">
				<h1>
					<span className="block font-display text-base font-semibold">
						Contact us
					</span>
					<span className="sr-only">-</span>
					<span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl">
						Let&apos;s work together
					</span>
				</h1>
				<div className="mt-6 max-w-3xl text-xl">
					We can&apos;t wait to hear from you.
				</div>
			</section>

			<section className="mx-auto max-w-2xl lg:max-w-none mt-24 sm:mt-32 lg:mt-40">
				<div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
					<div className="lg:order-last">
						<form action="">
							<h2 className="font-display text-base font-semibold">
								Work inquiries
							</h2>
							<div className="isolate mt-6 -space-y-px rounded-2xl ">
								<div className="group relative z-0 transition-all focus-within:z-10">
									<input
										type="text"
										name="name"
										autoComplete="name"
										placeholder=" "
										id=":S1:"
										className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-white ring-4 ring-transparent transition focus:border-indigo-500 focus:outline-none focus:ring-indigo-500/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
									/>
									<label
										htmlFor=":S1:"
										className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-indigo-500 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-indigo-500"
									>
										Name
									</label>
								</div>
								<div className="group relative z-0 transition-all focus-within:z-10">
									<input
										type="email"
										name="email"
										autoComplete="email"
										placeholder=" "
										id=":S2:"
										className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-white ring-4 ring-transparent transition focus:border-indigo-500 focus:outline-none focus:ring-indigo-500/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
									/>
									<label
										htmlFor=":S2:"
										className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-indigo-500 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-indigo-500"
									>
										Email
									</label>
								</div>
								<div className="group relative z-0 transition-all focus-within:z-10">
									<input
										type="text"
										name="company"
										autoComplete="organization"
										placeholder=" "
										id=":S3"
										className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-white ring-4 ring-transparent transition focus:border-indigo-500 focus:outline-none focus:ring-indigo-500/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
									/>
									<label
										htmlFor=":S3:"
										className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-indigo-500 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-indigo-500"
									>
										Company
									</label>
								</div>
								<div className="group relative z-0 transition-all focus-within:z-10">
									<input
										type="tel"
										name="phone"
										autoComplete="tel"
										placeholder=" "
										id=":S4:"
										className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-white ring-4 ring-transparent transition focus:border-indigo-500 focus:outline-none focus:ring-indigo-500/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
									/>
									<label
										htmlFor=":S4:"
										className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-indigo-500 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-indigo-500"
									>
										Phone
									</label>
								</div>
								<div className="group relative z-0 transition-all focus-within:z-10">
									<input
										type="text"
										name="message"
										placeholder=" "
										id=":S5:"
										className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-white ring-4 ring-transparent transition focus:border-indigo-500 focus:outline-none focus:ring-indigo-500/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
									/>
									<label
										htmlFor=":S5:"
										className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-indigo-500 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-indigo-500"
									>
										Message
									</label>
								</div>
							</div>
							<button className="mt-10 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-black">
								let&apos;s work together
							</button>
						</form>
					</div>

					<div>
						<h2 className="font-display text-base font-semibold">
							Our offices
						</h2>
						<p className="mt-6 text-base text-gray-300">
							Prefer doing things in person? We don&apos;t but we
							have to list our addresses here for legal reasons.
						</p>
						<ul
							role="list"
							className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2"
						>
							<li>
								<address className="text-sm not-italic text-gray-300">
									<strong className="text-white">
										Copenhagen
									</strong>
									<br />
									1 Carlsberg Gate
									<br />
									1260, København, Denmark
								</address>
							</li>
							<li>
								<address className="text-sm not-italic text-gray-300">
									<strong className="text-white">
										Billund
									</strong>
									<br />
									24 Lego Allé
									<br />
									7190, Billund, Denmark
								</address>
							</li>
						</ul>

						<div className="mt-16 pt-16 relative before:absolute after:absolute before:bg-white after:bg-white/20 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
							<h2 className="font-display text-base font-semibold">
								Email us
							</h2>
							<dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
								<div>
									<dt className="font-semibold">Careers</dt>
									<dd>
										<Link href="/#">
											careers@studioagency.com
										</Link>
									</dd>
								</div>
								<div>
									<dt className="font-semibold">Press</dt>
									<dd>
										<Link href="/#">
											press@studioagency.com
										</Link>
									</dd>
								</div>
							</dl>
						</div>
						{/* <div className="mt-16 pt-16 relative before:absolute after:absolute before:bg-white after:bg-white/20 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                            <h2>Follow us</h2>
                            <ul role="list" className="flex gap-x-10 mt-6">
                                <li></li>
                            </ul>
                        </div> */}
					</div>
				</div>
			</section>
		</main>
	);
}
