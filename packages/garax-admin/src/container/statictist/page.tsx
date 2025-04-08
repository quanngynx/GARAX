import Image from "next/image";
import FilterImg from '@/assets/img/153446.png';
import ScoreCardsImg from '@/assets/img/153840.png';
import TimeChartsImg from '@/assets/img/153909.png';
import ChartsDetail from '@/assets/img/153923.png';

function StatictisticsPages() {
    return ( 
        <div className="w-full min-h-[81vh] pt-6">
        <div className="flex flex-col mb-4 gap-6">
            <div className="flex justify-between items-center">
                <div className="font-semibold">
                    Filfter
                </div>

                <div className="font-semibold border-[1px] border-slate-200">
                    <Image src={FilterImg} alt="Filfter" className="w-[705px]"/>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="font-semibold">
                    ScoreCards
                </div>

                <div className="font-semibold border-[1px] border-slate-200">
                    <Image src={ScoreCardsImg} alt="ScoreCards" className="w-[705px]"/>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="font-semibold">
                    Change over time charts & Ranking Charts
                </div>

                <div className="font-semibold border-[1px] border-slate-200">
                    <Image src={TimeChartsImg} alt="TimeCharts" className="w-[705px]"/>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="font-semibold">
                    Charts displaying detail data
                </div>

                <div className="font-semibold border-[1px] border-slate-200">
                    <Image src={ChartsDetail} alt="ChartsDetail" className="w-[705px]"/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default StatictisticsPages;