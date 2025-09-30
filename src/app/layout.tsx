import type { Metadata } from "next";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./globals.css";

config.autoAddCss = false;

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
