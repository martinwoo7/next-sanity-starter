import Link from "next/link";
import Image from "next/image";

import {
	FaInstagram,
	FaFacebook,
	FaXTwitter,
	FaGithub,
	FaYoutube,
} from "react-icons/fa6";

export const Footer = () => {
	const solutions = ["Marketing", "Analytics", "Commerce", "Insights"];
	const company = ["About", "Blog", "Jobs", "Press", "Partners"];
	const support = ["Pricing", "Documentation", "Guides", "API Status"];
	const legal = ["Claim", "Privacy", "Terms"];
	return (
		<footer aria-labelledby="footer-heading" className="mt-32 sm:mt-40 relative">
			<h2
				id="footer-heading"
				className="absolute w-1 h-1 p-0 -m-1 overflow-hidden"
			>
				Footer
			</h2>
			<div className="pb-8 px-6 max-w-7xl md:px-8">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div>
						<Image
							src="/vercel.svg"
							height={24}
							width={100}
							alt="company logo"
							className="dark:invert"
						/>
						<p className="mt-8 text-gray-300">
							Est error fuga modi error. Laborum eum nobis porro
							cupiditate et quo.
						</p>
						<div className="flex mt-8 gap-x-6">
							<Link className="" href="/#">
								<span className="absolute w-1 h-1 p-0 -m-1 overflow-hidden">
									Facebook
								</span>
								<FaFacebook className="w-6 h-6 text-gray-400" />
							</Link>
							<Link className="" href="/#">
								<span className="absolute w-1 h-1 p-0 -m-1 overflow-hidden">
									Instagram
								</span>
								<FaInstagram className="w-6 h-6 text-gray-400" />
							</Link>
							<Link className="" href="/#">
								<span className="absolute w-1 h-1 p-0 -m-1 overflow-hidden">
									Twitter
								</span>
								<FaXTwitter className="w-6 h-6 text-gray-400" />
							</Link>
							<Link className="" href="/#">
								<span className="absolute w-1 h-1 p-0 -m-1 overflow-hidden">
									Github
								</span>
								<FaGithub className="w-6 h-6 text-gray-400" />
							</Link>
							<Link className="" href="/#">
								<span className="absolute w-1 h-1 p-0 -m-1 overflow-hidden">
									YouTube
								</span>
								<FaYoutube className="w-6 h-6 text-gray-400" />
							</Link>
						</div>
					</div>
					<div className="grid grid-cols-2 mt-16 gap-8 lg:mt-0 lg:col-span-2">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="leading-6 font-semibold text-sm">
									Solutions
								</h3>
								<ul role="list" className="mt-6">
									{solutions.map((item) => (
										<li
											key={item}
											className="[&:not(:first-child)]:my-4"
										>
											<Link
												href="/#"
												className="leading-6 text-sm text-gray-300"
											>
												{item}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="leading-6 font-semibold text-sm">
									Support
								</h3>
								<ul className="mt-6" role="list">
									{support.map((item) => (
										<li
											key={item}
											className="[&:not(:first-child)]:my-4"
										>
											<Link
												href="/#"
												className="leading-6 text-sm text-gray-300"
											>
												{item}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="leading-6 font-semibold text-sm">
									Company
								</h3>
								<ul role="list" className="mt-6">
									{company.map((item) => (
										<li
											key={item}
											className="[&:not(:first-child)]:my-4"
										>
											<Link
												href="/#"
												className="leading-6 text-sm text-gray-300"
											>
												{item}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="leading-6 font-semibold text-sm">
									Legal
								</h3>
								<ul className="mt-6" role="list">
									{legal.map((item) => (
										<li
											key={item}
											className="[&:not(:first-child)]:my-4"
										>
											<Link
												href="/#"
												className="leading-6 text-sm text-gray-300 "
											>
												{item}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="pt-8 border-t border-white/10 mt-16 lg:mt-24">
					<p className="leading-tight text-sm text-gray-400">
						© 2024 Your Company, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
