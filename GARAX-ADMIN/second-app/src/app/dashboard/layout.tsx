import { Sidebar } from "../../components/layouts";
import { Navbar } from "../../components/layouts";
import { Footer } from "../../components/layouts";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="p-4">
            <div className="flex mb-4">
                <Sidebar />
                <div className="sm:w-full">
                    <div className="bg-white ml-4 rounded-2xl min-h-[89vh] shadow">
                        <div className="p-4 max-w-full text-black">
                            <Navbar />
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
