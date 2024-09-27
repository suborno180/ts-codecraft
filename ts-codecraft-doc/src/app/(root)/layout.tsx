import { Sidebar } from '@/components/others/sidebar'
import React from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <main className="flex flex-col lg:flex-row w-full min-h-screen">
                {/* Sidebar */}
                <div className={"sticky top-0 lg:w-64 w-full hidden lg:block"}>
                    <Sidebar />
                </div>

                {/* Content Area */}
                {children}
            </main>
        </>
    )
}

export default layout
