import { Metadata } from 'next';
import Image from 'next/image';
import DefaultForm from '@/app/ui/about/Form';

export const metadata: Metadata = {
    title: 'Contact Us',
};
export default function Page() {
    return (
        <main className="m-0">
            <section className="">
                <div className="relative flex mx-auto w-full h-[45vh]">
                    <Image
                        src="/kitchen.jpg"
                        alt="about us banner"
                        fill
                        quality={50}
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-[#111111]/30 " />

                    <div className="absolute inset-x-0 inset-y-auto self-center text-center">
                        <div className="text-white tracking-wider px-5">
                            <h1 className="text-6xl mb-6 text-thin">
                                Contact Us
                            </h1>
                            <p className="text-center">
                                We would love to hear from you!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-wrapper flex flex-col flex-wrap items-center max-w-7xl mx-auto">
                <div className="contact-form mx-12 my-12">
                    <DefaultForm />
                </div>
            </section>
        </main>
    );
}
