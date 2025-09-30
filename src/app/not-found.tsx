import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Not Found"
};

export default function NotFound() {
    return (
        <main className="h-screen flex items-center justify-center">
            <div className="m-auto text-center">
                <h1 className="text-6xl font-bold">404</h1>
                <h2 className="text-2xl">Page not found</h2>
                <div className="mt-8">
                    <p>Sorry, the page that you are looking for could not be found.</p>
                    <p>Please check the URL or return to the <Link className="transition-colors text-[#4a4a4a] hover:text-[#1a1a1a] dark:text-[#b3b3b3] dark:hover:text-[#f0f0f0]" href="/">homepage</Link>.</p>
                </div>
            </div>
        </main>
    );
}
