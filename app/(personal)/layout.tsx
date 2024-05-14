import { Suspense } from "react";
import Navbar from "@/app/ui/topnav";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

export default async function IndexRoute({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{draftMode().isEnabled && (
				<div>
					<a
						className="p-4 bg-blue-300 block"
						href="/api/disable-draft"
					>
						Disable preview mode
					</a>
				</div>
			)}
			<div className="flex min-h-screen flex-col">
				<Suspense>
					<Navbar />
				</Suspense>
				<div className="mt-20 flex-grow px-4 md:px-16 lg:px-32">
					<Suspense>{children}</Suspense>
				</div>
			</div>
			{draftMode().isEnabled && <VisualEditing />}
		</>
	);
}
