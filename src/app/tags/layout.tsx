export default function TagsLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <section className="w-full h-full flex flex-column justify-center items-center">
            <div>
                {children}
            </div>
        </section>
    )
}
