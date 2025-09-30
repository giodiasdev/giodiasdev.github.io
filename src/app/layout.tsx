import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "giodias",
        template: "%s | giodias",
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="bg-white dark:bg-[#0a0a0a] text-[#171717] dark:text-[#ededed]">
                {children}
            </body>
        </html>
    );
}
