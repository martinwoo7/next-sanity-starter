import { Suspense } from 'react';
import Navbar from '@/app/ui/topnav';
import { Footer } from '@/app/ui/footer';
import { VisualEditing } from 'next-sanity';
import { draftMode } from 'next/headers';

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

                <Suspense>{children}</Suspense>

                <Suspense>
                    <Footer />
                </Suspense>
            </div>
            {draftMode().isEnabled && <VisualEditing />}
        </>
    );
}
