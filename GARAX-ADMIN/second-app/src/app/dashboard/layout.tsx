"use client";

import { Suspense, useState } from "react";
// import { Sidebar } from "../../components/layouts";
import { SidebarCustom } from "../../components/layouts";
import { Navbar } from "../../components/layouts";
import { Footer } from "../../components/layouts";

import Loading from './loading'

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="p-4">
            <div className="flex mb-4">
                <SidebarCustom collapsed={collapsed}/>
                <div className="sm:w-full">
                    <div className="bg-white ml-4 rounded-2xl min-h-[100vh] shadow">
                        <div className="p-4 max-w-full text-black">
                            <Navbar collapsed={collapsed} setCollapsed={setCollapsed}/>
                            <Suspense fallback={<Loading />}>
                                {children}
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
