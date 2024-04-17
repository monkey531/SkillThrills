"use client";

interface ExamplesLayoutProps {
    children: React.ReactNode
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {

    return <div>

                            <div>
                                {children}
                            </div>

    </div>
}