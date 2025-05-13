import { PageHeaderCustom } from "@/components/pageHeader";
import MainFeat from "./components/mainFeat";
import CategoryProductsFilter from "./components/categoryProducts";
import { LineFullWidth } from "@/components/line";
import Calendar from "@/container/bookingManagement/components/calendar";
function BookingManagementPage() {
    return ( 
    <div className="">
        <PageHeaderCustom namePage="Quản lý đặt lịch"/>

        <MainFeat />

        <CategoryProductsFilter />

        <LineFullWidth />

        <Calendar />
    </div> 
    );
}

export default BookingManagementPage;