export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-dvh flex flex-col">
            <header className="p-6">
                <div className="w-12 h-12 flex items-center justify-center">
                    {/* Logo placeholder */}
                </div>
            </header>

            <main className="flex-grow flex">
                <div className="w-full p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}