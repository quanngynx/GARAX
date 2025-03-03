"use client";

import { Suspense, useState } from "react";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

import { SidebarCustom } from "../../components/layouts";
import { Navbar } from "../../components/layouts";
import { Footer } from "../../components/layouts";

import Loading from './loading'
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { useServerInsertedHTML } from "next/navigation";

const queryClient = new QueryClient();

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [collapsed, setCollapsed] = useState(false);
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
 
    useServerInsertedHTML(() => {
      const styles = styledComponentsStyleSheet.getStyleElement()
      styledComponentsStyleSheet.instance.clearTag()
      return <>{styles}</>
    })

    return (
        <QueryClientProvider client={queryClient}>
            <AntdRegistry>
                <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
                <div className="p-4">
                    <div className="flex mb-4">
                        <SidebarCustom collapsed={collapsed} />
                        <div className="sm:w-full">
                            <div className="bg-white ml-4 rounded-2xl min-h-[100vh] shadow">
                                <div className="p-4 max-w-full text-black">
                                    <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
                                    <Suspense fallback={<Loading />}>
                                        {children}
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
                </StyleSheetManager>
            </AntdRegistry>
        </QueryClientProvider>
    );
}
