
// import { Navbar } from '../../components/layouts'
// import { Sidebar } from "../../components/layouts";

import Image from "next/image";
import FilterImg from '@/assets/img/153446.png';
function DashboardPage() {
    return (
        <div className="w-full min-h-[81vh] pt-6">
            <div className="flex flex-col mb-4">
                <div className="flex justify-between items-center">
                    <div className="font-semibold">
                        Filfter
                    </div>

                    <div className="font-semibold border-[1px] border-slate-200">
                        <Image src={FilterImg} alt="Filfter"/>
                    </div>
                </div>

                <div className="font-semibold">
                    ScoreCards
                </div>
                <div className="font-semibold">
                    Change over time charts & Ranking Charts
                </div>
                <div className="font-semibold">
                    Charts displaying detail data
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default DashboardPage;
