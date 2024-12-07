import { PageHeaderCustom } from "@/components/pageHeader";
import MainFeat from "./components/mainFeat";
import CategoryProductsFilter from "./components/categoryProducts";
import TableProducts from "./components/tableProducts";
import { LineFullWidth } from "@/components/line";
function OrdersManagementPage() {
    return ( 
    <div className="">
        <PageHeaderCustom namePage="Quản lý đơn hàng"/>

        <MainFeat />

        <CategoryProductsFilter />

        <LineFullWidth />

        <TableProducts />
    </div> 
    );
}

export default OrdersManagementPage;