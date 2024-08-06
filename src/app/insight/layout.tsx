export default function InsightLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <section className="w-full h-full flex flex-column justify-center">
            <div>
                {children}
            </div>
        </section>
    )
}
