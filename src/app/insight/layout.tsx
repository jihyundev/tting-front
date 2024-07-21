export default function InsightLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <section className="w-screen h-screen flex flex-column justify-center items-center">
            <div>
                {children}
            </div>
        </section>
    )
}
