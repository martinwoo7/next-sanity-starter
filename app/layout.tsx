import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/ui/topnav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "next-sanity-starter",
	description:
		"Starter template for Calicode projects built using next.js with Sanity.io integrations",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
