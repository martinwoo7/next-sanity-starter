"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const linksVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
	},
	exit: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};

const navLinks = [
	{ title: "Home", url: "/" },
	{ title: "About", url: "/about" },
	{ title: "Projects", url: "/projects" },
	{ title: "Blog", url: "/blog" },
	{ title: "Contact", url: "/contact" },
];

const linkItemVariants = {
	hidden: { opacity: 0, y: "50%" },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
	exit: {
		opacity: 0,
		y: "50%",
		transition: {
			duration: 0.1,
			ease: "easeOut",
		},
	},
};

const modalVariants = {
	hidden: {
		y: "-100vh",
	},
	visible: {
		y: 0,
		transition: {
			type: "tween",
			duration: 0.3,
		},
	},
	exit: {
		y: "-100vh",
		transition: {
			type: "tween",
			duration: 0.3,
			delay: 0.3,
		},
	},
};

const Navbar = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleRouteChange = () => {
			setIsOpen(false);
		};
		const url = `${pathname}?${searchParams}`;

		if (url !== pathname) {
			handleRouteChange();
		}
	}, [pathname, searchParams]);

	return (
		<header className="sticky top-0 text-white z-20 bg-black">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<Image
							src={"/vercel.svg"}
							alt="company logo"
							width={100}
							height={24}
							className="dark:invert"
							priority
						/>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
						onClick={() => {
							setIsOpen((prev) => !prev);
						}}
						type="button"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navLinks.map((link) => (
						<Link
							href={link.url}
							className="text-sm font-semibold leading-6"
							key={link.title}
						>
							{link.title}
						</Link>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a href="#" className="text-sm font-semibold leading-6 ">
						Log in <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</nav>

			{/* Mobile menu, show/hide based on menu open state */}
			<AnimatePresence>
				{isOpen && (
					<motion.nav
						initial={"hidden"}
						animate={"visible"}
						exit={"exit"}
						variants={modalVariants}
						className={
							"fixed inset-0 flex justify-center items-center bg-gray-900 z-10"
						}
						role="dialog"
						aria-modal="true"
						key="modal"
					>
						<XMarkIcon
							className="absolute top-6 right-6 cursor-pointer w-6"
							onClick={() => setIsOpen((prev) => !prev)}
						/>
						<motion.div
							className={"relative bg-gray-900 w-full"}
							variants={linksVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
						>
							<div className="flex flex-col gap-8 items-center justify-center h-full">
								{navLinks.map((link, i) => (
									<motion.span
										key={i}
										className="font-light text-2xl cursor-pointer"
										variants={linkItemVariants}
									>
										<Link href={link.url}>
											{link.title}
										</Link>
									</motion.span>
								))}
							</div>
						</motion.div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;
