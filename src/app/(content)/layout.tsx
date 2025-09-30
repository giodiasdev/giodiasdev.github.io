export default function ContentLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="mx-auto mb-10 p-8 max-w-3xl sm:max-2-5xl md:max-w-7xl lg:max-w-9xl">
            {children}
        </main>
    );
}
